<script lang='ts'>
    import Layout from '$lib/components/complete_components/layout.svelte';
	import Colors from '$lib/components/complete_components/colors.svelte';
	import Font from '$lib/components/complete_components/font.svelte';
    import Container from '$lib/components/complete_components/container.svelte';
	import Tabs from '$lib/components/complete_components/tabs.svelte';
	import type { LayoutData } from '$lib/types';
    import type { ColorsData } from '$lib/types';
	
    let layout_data: LayoutData = {
        display_vertical_layout: true,
        display_collapsed_layout: true,
    }

    let colors_data: ColorsData = {
        display_vertical_colors: true,
        display_collapsed_colors: true,
    }
</script>

<div class="container">
    <div class="side_bar">
        <div class="text_container">
            <Tabs/>
        </div>

        <div class="contents_box_container">
            <Layout bind:layout_data={layout_data}/>
        </div>

        <div class="contents_box_container">
            <Colors bind:colors_data={colors_data}/>
        </div>

        <div class="contents_box_container">
            <Font/>
        </div>

        <div class="contents_box_container">
            <Container/>
        </div>

        <div class="contents_box_container">
            <Font/>
        </div>

        <div class="contents_box_container">
            <Font/>
        </div>
    </div>
</div>

<style lang='stylus'>

$color-1 = rgba(33, 37, 45, 0.2)

    .container
        overflow-y scroll
        overflow-x hidden
        scrollbar-color var(--brand-purple) rgba(33, 37, 45, 0.2)
        scrollbar-width thin
        background var(--sidebar-color)

    .side_bar
        max-width 200px
        display flex
        background var(--sidebar-color)
        justify-content space-between
        flex-direction column
        padding 10px
        width 100%
        gap 8px

    .text_container
        height 36px
        display flex
        align-items center
        justify-content center

    .contents_box_container
        display flex
        padding 8px
        gap 8px
        flex-direction column
        border-bottom 2px solid $color-1

</style>