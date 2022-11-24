<script lang='ts'>
    export let font_opacity: number;
    
    let mouse_down_on_opacity = false;

    function mouse_move(e: any) {
        if (mouse_down_on_opacity) {
            font_opacity += e.movementX;
            if (font_opacity <= 0) {
                font_opacity = 0;
            }
        }
    }
</script>

<svelte:window 
on:mouseup ={() => mouse_down_on_opacity = false}
on:mousemove={mouse_move}
/>

{#if mouse_down_on_opacity}
    <label for='text_opacity' style='cursor: w-resize'>
        <div class="opacity" on:mousedown={() => mouse_down_on_opacity = true}>
            Opacity
        </div>

        <input type='number' id='text_opacity' bind:value={font_opacity} min="0" class:selected={mouse_down_on_opacity}/>
    </label>
{:else}
    <label for='text_opacity'>
        <div class="opacity" on:mousedown={() => mouse_down_on_opacity = true}>
            Opacity
        </div>

        <input type='number' id='text_opacity' bind:value={font_opacity} min="0" class:selected={mouse_down_on_opacity}/>
    </label>
{/if}

<style lang='stylus'>
    label
        width 100%
        font-size 14px
        font-weight 400
        padding: 8px
        align-items center
        justify-content space-between
        &:hover
            cursor pointer
</style>