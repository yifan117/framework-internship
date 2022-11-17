<script lang='ts'>

</script>

<div class="container">
    <div class="text_div">
        <div class="display">
            Display
        </div>
        <div class="functionality">
            Functionality
        </div>
    </div>

    <div class="underline_div">
        <div class="grey"></div>
        <div class="purple"></div>
    </div>
</div>


<style lang='stylus'>
$color-1 = rgba(33, 37, 45, 0.2)

    .text_div
        display flex
        max-height 33.5px
        height 100%
        align-items center

    .display
    .functionality
        display flex
        font-weight 400px
        padding 10px
        font-size 14px

    .display
        // border-bottom 2.5px solid var(--brand-purple)
        font-weight 600

    .functionality
        // border-bottom 2.5px solid $color-1
        // opacity 50%
        font-weight 600

    .underline_div
        height 2px
    
    .container 
        display flex
        flex-direction column

    .grey
        height 2px
        background rgba(45, 55, 67, 0.2)
        width 100%
        border-radius 4px
        position relative

    .purple
        height 2px
        border-radius 4px
        background var(----brand-purple)
        width 30px
        z-index 999
        position absolute

</style>