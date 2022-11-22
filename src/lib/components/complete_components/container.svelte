<script lang='ts'>
    import BorderRadius from '$lib/components/building_blocks/border_radius.svelte';
    import BorderSelector from '$lib/components/building_blocks/border_selector.svelte';
    
    import type { ContainerData } from '$lib/types';
	import BackgroundColor from '$lib/components/building_blocks/BackgroundColor.svelte';

    export let container_data: ContainerData;
</script>

<div class="header_container">
    CONTAINER
</div>
<div class="container_icons_container">
    <div class="background_color_container">
        <BackgroundColor/>
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

        -webkit-user-select none /* Safari */
        -ms-user-select none /* IE 10 and IE 11 */
        user-select none /* Standard syntax */

    .background_color_container
    .radius_selector_container
    .border_corner_selector_container
        display flex
        align-items center

    .background_color_container
    .radius_selector_container
    .border_corner_selector_container
        justify-content space-between

    .container_icons_container
        display flex
        flex-direction column
        gap 5px

</style>