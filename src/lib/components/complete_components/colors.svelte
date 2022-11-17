<script lang='ts'>
    import PaddingSelector from '$lib/components/building_blocks/padding_selector_colors.svelte';
    import AlignContainer from '$lib/components/building_blocks/align_container.svelte';
    import DirectionSelectorColors from '$lib/components/building_blocks/DirectionSelectorColors.svelte';

    import type { ColorsData } from '$lib/types';

    export let colors_data: ColorsData
</script>

<div class="header_container">
    COLORS
</div>
<div class="layout_icons_container">
    <div class="container_top">
        <div class="direction_selector">
            <DirectionSelectorColors bind:display_vertical_colors={colors_data.display_vertical_colors} bind:display_collapsed_colors={colors_data.display_collapsed_colors}/>
        </div>
        <div class="align_container">
            <AlignContainer/>
        </div>
    </div>
    <div class="container_bottom">
        <PaddingSelector/>
    </div>
</div>

<style lang='stylus'>

$color-1 = rgba(33, 37, 45, 0.1)

    .direction_selector
        display flex
        align-items center
        justify-content center
        flex-direction column
        gap 4px

    .header_container
        display flex
        align-items center
        opacity 50%
        font-weight 700
        font-size 12px

    .container_top
    .container_bottom
        display flex
        align-items center
        justify-content space-between
        gap 6px

    .layout_icons_container
        display flex
        flex-direction column
        gap 10px

    .align_container
        display grid
        grid-template-rows repeat(3, 1fr)
        grid-template-columns repeat(3, 1fr)
        aspect-ratio 1
        border 2px solid $color-1
        border-radius 2px
</style>