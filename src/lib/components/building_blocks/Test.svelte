<script lang='ts'>

    export let display_selected: boolean;
    </script>
    
    <div class="container">
        <div class="text">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="display" class:selected={display_selected} on:click={() => display_selected = true}>
                Display
            </div>
    
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="functionality" class:selected={!display_selected} on:click={() => display_selected = false}>
                Functionality
            </div>
        </div>
    
        <div class="underline_div">
            <div class="grey"></div>
            <div class="purple"></div>
        </div>
    </div>
    
    <style lang='stylus'>
    .text
        display flex
    
    .container
        display flex
        align-items center
        max-height 33.5px
        height 100%
        flex-direction column
    
    .display
    .functionality
        display flex
        font-weight 400px
        padding 10px
        font-size 14px
        // border-bottom 2.5px solid rgba(33, 37, 45, 0.2)
        opacity 50%
        cursor pointer
    
    .selected
        opacity 100%
    
    .selected:after .purple
        height 2px
        border-radius 4px
        background var(--brand-purple)
        width 70px
        left -54px
        position relative
    
    .purple
        height 2px
        border-radius 4px
        background var(--brand-purple)
        width 70px
        left -54px
        position relative
    
    // .purple
    //     height 2px
    //     border-radius 4px
    //     background var(--brand-purple)
    //     width 70px
    //     left -54px
    //     // width 100%
    //     position relative
    //     // width 110px
    //     // left 68px
    
    //         // border-bottom 2.5px solid var(--brand-purple)
    
    
    .underline_div
        height 2px
        display flex
        align-items center
        justify-content center
    
    .grey
        height 2px
        background rgba(45, 55, 67, 0.2)
        max-width 177px
        width 100%
        border-radius 4px
        position absolute
    
    
    
    </style>