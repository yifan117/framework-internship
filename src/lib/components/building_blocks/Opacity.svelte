<script lang='ts'>

export let font_opacity: number;
</script>

<label for='text_opacity'>
    <div class="opacity">
        Opacity
    </div>

    <input type='number' id='text_opacity' bind:value={font_opacity}/>
</label>

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