<script lang='ts'>
    import ArrowDown from 'svelte-material-icons/ArrowDown.svelte';
    import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
    import ArrowCollapse from '$lib/icons/ArrowCollapse.svelte';
    import ArrowExpand from '$lib/icons/ArrowExpand.svelte';
</script>

<div class="arrows top">
    <div class="arrow down">
        <ArrowDown size='20px'/>
    </div>
    <div class="arrow right">
        <ArrowRight size='20px'/>
    </div>
</div>

<div class="arrows bottom">
    <div class="arrow expand">
        <ArrowExpand size='20px'/>
    </div>
    <div class="arrow collapse" >
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
    
    &.right
    &.collapse
        background rgba(33, 37, 45, 0.08)

.arrows
    display inline-flex
    justify-content space-between
    gap 4px

    &.top
    &.bottom
        display inline-flex
</style>