<script lang='ts'>
    import PaddingSelector from '$lib/components/building_blocks/padding_selector_layout.svelte';
    import AlignContainer from '$lib/components/building_blocks/align_container.svelte';
    import DirectionSelector from '$lib/components/building_blocks/DirectionSelectorLayout.svelte';
	import type { LayoutData } from '$lib/types';

    export let layout_data: LayoutData
</script>

<div class="header_container">
    LAYOUT
</div>
<div class="layout_icons_container">
    <div class="container_top">
        <div class="direction_selector">
            <DirectionSelector 
            bind:display_vertical_layout={layout_data.display_vertical_layout} 
            bind:display_collapsed_layout={layout_data.display_collapsed_layout}
            />
        </div>
        <div class="align_container">
            <AlignContainer/>
        </div>
    </div>

    <div class="container_bottom">
        <PaddingSelector 
        bind:gap_layout={layout_data.gap_layout} 
        bind:padding_left_right_layout={layout_data.padding_left_right_layout} 
        bind:padding_top_bottom_layout={layout_data.padding_top_bottom_layout}
        />
    </div>
</div>

<style lang='stylus'>

$color-1 = rgba(33, 37, 45, 0.1)

    .header_container
        display flex
        align-items center
        opacity 50%
        font-weight 700
        font-size 12px

    .container_top
        display flex
        align-items center
        justify-content space-between

    .container_bottom
        display flex
        align-items center
        justify-content space-between

    .layout_icons_container
        display flex
        flex-direction column
        gap 10px

    .direction_selector
        display flex
        align-items center
        justify-content center
        flex-direction column
        gap 4px


    .align_container
        display grid
        grid-template-rows repeat(3, 1fr)
        grid-template-columns repeat(3, 1fr)
        aspect-ratio 1
        border 2px solid $color-1
        max-width 80px
        width 100%
        border-radius 2px
</style>