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
    border-radius 2px
    border-bottom 2.5px solid rgba(33, 37, 45, 0.2)
    opacity 50%
    cursor pointer
    transition 0.1s ease-in-out

.display:hover
.functionality:hover
    background rgba(127, 17, 224, 0.3)

.selected
    opacity 100%
    border-bottom 2.5px solid var(--brand-purple)
</style>