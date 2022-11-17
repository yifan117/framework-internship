<script lang='ts'>
    import SquareSmall from 'svelte-material-icons/SquareSmall.svelte';
    import AutoLayoutBars from 'svelte-material-icons/Poll.svelte';
</script>

{#each Array(3) as _}
    <div class="grid box">
        <SquareSmall/>
    </div>
{/each}

<div class="grid box special">
    <AutoLayoutBars size='22px' color='var(--brand-purple)'/>
</div>

{#each Array(5) as _}
    <div class="grid box">
        <SquareSmall/>
    </div>
{/each}

<style lang='stylus'>
    .grid.box
        aspect-ratio 1
        opacity 10%
        display flex
        align-items center
        justify-content center

        &.special
            transform rotate(90deg)
            opacity 100%
</style>