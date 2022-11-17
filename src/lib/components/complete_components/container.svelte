<script lang='ts'>
    import ColorFill from '$lib/icons/FormatColorFill.svelte';
    import BorderRadius from '$lib/components/building_blocks/border_radius.svelte';
    import BorderSelector from '$lib/components/building_blocks/border_selector.svelte';
    
    import type { ContainerData } from '$lib/types';

    export let container_data: ContainerData;
</script>

<div class="header_container">
    CONTAINER
</div>
<div class="container_icons_container">
    <div class="background_color_container">
        <div class="background_color">
            Background
        </div>
        <div class="color_bucket">
            <ColorFill size='20px'/>
        </div>
    </div>

    <div class="radius_selector_container">
        <BorderRadius 
        bind:radius={container_data.radius} 
        bind:padding_left_right_container={container_data.padding_left_right_container} 
        bind:padding_top_bottom_container={container_data.padding_top_bottom_container}
        />
    </div>

    <div class="border_corner_selector_container" style='flex-direction: column'>
        <BorderSelector
        bind:radius_top_left={container_data.radius_top_left}
        bind:radius_top_right={container_data.radius_top_right}
        bind:radius_bottom_left={container_data.radius_bottom_left}
        bind:radius_bottom_right={container_data.radius_bottom_right}
        />
    </div>
</div>

<style lang='stylus'>

    .header_container
        display flex
        align-items center
        opacity 50%
        font-weight 700
        font-size 12px

    .color_bucket
    .background_color_container
    .radius_selector_container
    .border_corner_selector_container
    .background_color
        display flex
        align-items center

    .color_bucket
        padding 4px
        border-radius 4px
        background var(--bucket-purple)
        justify-content center

    .background_color_container
    .radius_selector_container
    .border_corner_selector_container
        justify-content space-between

    .container_icons_container
        display flex
        flex-direction column
        gap 5px

    .background_color
        padding 4px
        display flex
        align-items center
        font-size 14px
        font-weight 500

</style>