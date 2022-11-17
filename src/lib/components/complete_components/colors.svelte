<script lang='ts'>
    import PaddingSelector from '$lib/components/building_blocks/padding_selector_colors.svelte';
    import AlignContainer from '$lib/components/building_blocks/align_container.svelte';
    import DirectionSelector from '$lib/components/building_blocks/direction_selector.svelte';
</script>

<div class="container">
    <div class="header_container">
        COLORS
    </div>
    <div class="layout_icons_container">
        <div class="container_top">
            <div class="direction_selector">
                <DirectionSelector/>
            </div>
            <div class="align_container">
                <div class="align_container">
                    <AlignContainer/>
                </div>
            </div>
        </div>
        <div class="container_bottom">
            <PaddingSelector/>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .direction_selector {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 4px;
    }

    .header_container {
        display: flex;
        align-items: center;
        opacity: 50%;
        font-weight: 700;
        font-size: 12px;
    }

    .container_top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .layout_icons_container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>