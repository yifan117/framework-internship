<script lang='ts'>
    import SquareSmall from 'svelte-material-icons/SquareSmall.svelte';
    import AutoLayoutBars from 'svelte-material-icons/Poll.svelte';
</script>

<div class="align_container">
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
</div>

<style lang='stylus'>
    $color-1 = rgba(33, 37, 45, 0.1)

    .align_container
        display grid
        grid-template-rows repeat(3, 1fr)
        grid-template-columns repeat(3, 1fr)
        aspect-ratio 1
        border 2px solid $color-1
        border-radius 2px

    .grid.box, .grid.box.special
        aspect-ratio 1
        opacity 10%
        display flex
        align-items center
        justify-content center

    .grid.box.special
        transform rotate(90deg)
        opacity 100%
</style>