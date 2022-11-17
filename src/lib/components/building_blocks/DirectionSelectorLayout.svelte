<script lang='ts'>
    import ArrowDown from 'svelte-material-icons/ArrowDown.svelte';
    import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
    import ArrowCollapse from '$lib/icons/ArrowCollapse.svelte';
    import ArrowExpand from '$lib/icons/ArrowExpand.svelte';

    export let display_vertical_layout: boolean;
    export let display_collapsed_layout: boolean;
</script>

<div class="arrows top">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="arrow down" class:selected={display_vertical_layout} on:click={() => display_vertical_layout = true}>
        <ArrowDown size='20px'/>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="arrow right" class:selected={!display_vertical_layout} on:click={() => display_vertical_layout = false}>
        <ArrowRight size='20px'/>
    </div>
</div>

<div class="arrows bottom">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="arrow expand" class:selected={display_collapsed_layout} on:click={() => display_collapsed_layout = true}>
        <ArrowExpand size='20px'/>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="arrow collapse" class:selected={!display_collapsed_layout} on:click={() => display_collapsed_layout = false}>
        <ArrowCollapse size='20px'/>
    </div>
</div>

<style lang='stylus'>
.arrow 
    display inline-flex
    align-items center
    justify-content center
    padding 8px
    border-radius 4px
    cursor pointer
    
    &:hover
        background rgba(45, 55, 67, 0.1)

.arrows
    display inline-flex
    justify-content space-between
    gap 4px

    &.top
    &.bottom
        display inline-flex

.selected
    background-color rgba(45, 55, 67, 0.4)
    
    &:hover
        background rgba(45, 55, 67, 0.4)
</style>