<script lang='ts'>
    import Layout from '$lib/components/complete_components/layout.svelte';
	import Colors from '$lib/components/complete_components/colors.svelte';
	import Font from '$lib/components/complete_components/font.svelte';
    import Container from '$lib/components/complete_components/container.svelte';
	import Tabs from '$lib/components/complete_components/tabs.svelte';
	import type { ContainerData, LayoutData, TabData, ColorData, FontData } from '$lib/types';
	
    let layout_data: LayoutData = {
        display_vertical_layout: true,
        display_collapsed_layout: true,
        gap_layout: 4,
        padding_left_right_layout: 4,
        padding_top_bottom_layout: 4,
    }

    let color_data: ColorData = {
        display_vertical_color: true,
        display_collapsed_color: true,
        gap_color: 4,
        padding_left_right_color: 4,
        padding_top_bottom_color: 4,
    }

    let font_data: FontData = {
        is_bold: false,
        is_italic: false,
        is_underlined: false,
        text_color_is_selected: false,
        text_icon_color: "var(--text-orange)",
    }

    let container_data: ContainerData = {
        radius: 4,
        padding_left_right_container: 4,
        padding_top_bottom_container: 4,
        radius_top_left: 4,
        radius_top_right: 4,
        radius_bottom_left: 4,
        radius_bottom_right: 4,
    }

    let tab_data: TabData = {
        display_selected: true,
    }


</script>

<div class="container">
    <div class="side_bar">
        <div class="text_container">
            <Tabs bind:tab_data={tab_data}/>
        </div>

        <div class="contents_box_container">
            <Layout bind:layout_data={layout_data}/>
        </div>

        <div class="contents_box_container">
            <Colors bind:color_data={color_data}/>
        </div>

        <div class="contents_box_container">
            <Font bind:font_data={font_data}/>
        </div>

        <div class="contents_box_container">
            <Container bind:container_data={container_data}/>
        </div>

        <div class="contents_box_container">
            <Font bind:font_data={font_data}/>
        </div>

        <div class="contents_box_container">
            <Font bind:font_data={font_data}/>
        </div>
    </div>
</div>

<style lang='stylus'>

$color-1 = rgba(33, 37, 45, 0.2)

    .container
        overflow-y scroll
        scrollbar-color var(--brand-purple) rgba(33, 37, 45, 0.2)
        scrollbar-width thin
        background var(--sidebar-color)
        max-width 280px
        width 100%

    .side_bar
        max-width 250px
        display flex
        background var(--sidebar-color)
        justify-content space-between
        flex-direction column
        padding 10px
        width 100%
        gap 8px

    .text_container
        display flex
        align-items center
        justify-content center
        flex-direction column
        width auto

    .contents_box_container
        display flex
        padding 8px
        gap 8px
        flex-direction column
        border-bottom 2px solid $color-1

</style>