<script lang='ts'>
    import BorderRadiusBottomLeft from '$lib/icons/BorderRadiusBottomLeft.svelte';
    import BorderRadiusBottomRight from '$lib/icons/BorderRadiusBottomRight.svelte';
    import BorderRadiusTopLeft from '$lib/icons/BorderRadiusTopLeft.svelte';
    import BorderRadiusTopRight from '$lib/icons/BorderRadiusTopRight.svelte';

    export let radius_top_left: number;
    export let radius_top_right: number;
    export let radius_bottom_left: number;
    export let radius_bottom_right: number;

    let mouse_down_on_top_left = false;
    let mouse_down_on_top_right = false;
    let mouse_down_on_bottom_left = false;
    let mouse_down_on_bottom_right = false;
    
    function mouse_move(e: any) {
        if (mouse_down_on_top_left) {
            radius_top_left += e.movementX;
            if (radius_top_left <= 0) {
                radius_top_left = 0;
            }

        } else if (mouse_down_on_top_right) {
            radius_top_right += e.movementX;
            if (radius_top_right <= 0) {
                radius_top_right = 0;
            }

        } else if (mouse_down_on_bottom_left) {
            radius_bottom_left += e.movementX;
            if (radius_bottom_left <= 0) {
                radius_bottom_left = 0;
            }
        } else if (mouse_down_on_bottom_right) {
            radius_bottom_right += e.movementX;
            if (radius_bottom_right <= 0) {
                radius_bottom_right = 0;
            }
        }
    }
</script>

<svelte:window 
on:mouseup ={() => mouse_down_on_top_left = false}
on:mouseup ={() => mouse_down_on_top_right = false}
on:mouseup ={() => mouse_down_on_bottom_left = false}
on:mouseup ={() => mouse_down_on_bottom_right = false}
on:mousemove={mouse_move}
/>

<div class="top">
    <label for='border_radius_top_left' class:selected={mouse_down_on_top_left}>
        <div class="padding_icon" on:mousedown={() => mouse_down_on_top_left = true}>
                <BorderRadiusTopLeft/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_top_left' bind:value={radius_top_left} min="0" class:selected={mouse_down_on_top_left}/>
        </div>
    </label>

    <label for='border_radius_top_right' class:selected={mouse_down_on_top_right}>
        <div class="padding_icon" on:mousedown={() => mouse_down_on_top_right = true}>
            <BorderRadiusTopRight/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_top_right' bind:value={radius_top_right} min="0" class:selected={mouse_down_on_top_right}/>
        </div>
    </label>
</div>

<div class="bottom">
    <label for='border_radius_bottom_left' class:selected={mouse_down_on_bottom_left}>
        <div class="padding_icon" on:mousedown={() => mouse_down_on_bottom_left = true}>
            <BorderRadiusBottomLeft/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_bottom_left' bind:value={radius_bottom_left} min="0" class:selected={mouse_down_on_bottom_left}/>
        </div>
    </label>

    <label for='border_radius_bottom_right' class:selected={mouse_down_on_bottom_right}>
        <div class="padding_icon" on:mousedown={() => mouse_down_on_bottom_right = true}>
            <BorderRadiusBottomRight/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_bottom_right' bind:value={radius_bottom_right} min="0" class:selected={mouse_down_on_bottom_right}/>
        </div>
    </label>
</div>

<style lang='stylus'>
.top
.bottom
    display flex
    align-items center
    justify-content center
    width 100%
    gap 8px

input::-webkit-outer-spin-button
input::-webkit-inner-spin-button
    appearance none
    margin 0

input[type=number]
    appearance textfield

input
    text-align center
    max-width 40px
    border none
    width: 100%;

input:focus
input:hover
    outline none
    border-radius 3px

.padding_icon
label
.padding_text
    display flex
    align-items center
    justify-content space-between

label
    padding 4px
    gap 8px
    border-radius 4px

    &:hover
        outline 1.5px solid rgba(127, 17, 224, 0.3)

    &:focus-within
        outline 1.5px solid var(--brand-purple)

.padding_text
    font-size 14px
    font-weight 400

.padding_icon
    font-size 25px
    padding 0px 0px 0px 10px

.selected
    cursor w-resize
</style>