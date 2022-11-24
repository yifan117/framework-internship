<script lang='ts'>
    import ColorFill from '$lib/icons/FormatColorFill.svelte';
</script>

<div class="container">
    <div class="background_color">
        Background
    </div>
    <div class="color_bucket">
        <ColorFill/>
    </div>
</div>

<style lang='stylus'>

    .container
        display flex
        justify-content space-between
        width 100%
        padding 8px

    .color_bucket
        padding 4px
        border-radius 4px
        background var(--bucket-purple)
        justify-content center
        font-size 20px
        aspect-ratio 1
        display flex
        align-items center
        justify-content center

    .background_color
        padding 4px
        display flex
        align-items center
        font-size 14px
        font-weight 500
</style>