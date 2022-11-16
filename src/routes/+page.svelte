<script lang="ts">
    import ArrowDown from 'svelte-material-icons/ArrowDown.svelte';
    import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
    import SquareSmall from 'svelte-material-icons/SquareSmall.svelte';
    import FormatBold from 'svelte-material-icons/FormatBold.svelte';
    import FormatUnderline from 'svelte-material-icons/FormatUnderline.svelte';
    import FormatItalic from 'svelte-material-icons/FormatItalic.svelte';
    import AutoLayoutBars from 'svelte-material-icons/Poll.svelte';
    import FormatText from 'svelte-material-icons/FormatText.svelte';
    import TriangleDown from 'svelte-material-icons/TriangleSmallDown.svelte';
    
    import ColorFill from '../lib/icons/FormatColorFill.svelte';
    import Padding from '../lib/icons/PaddingIcon.svelte';
    import ArrowCollapse from '../lib/icons/ArrowCollapse.svelte';
    import ArrowExpand from '../lib/icons/ArrowExpand.svelte';
    import BorderRadiusBottomLeft from '../lib/icons/BorderRadiusBottomLeft.svelte';
    import BorderRadiusBottomRight from '../lib/icons/BorderRadiusBottomRight.svelte';
    import BorderRadiusTopLeft from '../lib/icons/BorderRadiusTopLeft.svelte';
    import BorderRadiusTopRight from '../lib/icons/BorderRadiusTopRight.svelte';
    import PaddingLeftRight from '../lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '../lib/icons/PaddingTopDown.svelte';
    import Radius from '../lib/icons/Radius.svelte';
    import TextOne from '../lib/icons/TextOne.svelte';
</script>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Open+Sans:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet"> 

<div class="page">
    <div class="side_bar">

        <div class="text_container">
            <div class="display">
                Display
            </div>
            <div class="functionality">
                Functionality
            </div>
        </div>

        <div class="contents_box_container">
            <div class="header_container">
                LAYOUT
            </div>
            <div class="layout_icons_container">
                <div class="container_top">
                    <div class="arrows_container">
                        <div class="arrows_top">
                            <div class="arrow_down">
                                <ArrowDown size='20px'/>
                            </div>
                            <div class="arrow_right">
                                <ArrowRight size='20px'/>
                            </div>
                        </div>
                        <div class="arrows_bottom">
                            <div class="arrow_expand">
                                <ArrowExpand size='25px'/>
                            </div>
                            <div class="arrow_collapse" >
                                <ArrowCollapse size='20px'/>
                            </div>
                        </div>
                    </div>
                    <div class="align_container">
                        {#each Array(3) as _}
                            <div class="grid_box">
                                <SquareSmall/>
                            </div>
                        {/each}

                        <div class="special_grid_box">
                            <AutoLayoutBars size='22px'/>
                        </div>

                        {#each Array(5) as _}
                            <div class="grid_box">
                                <SquareSmall/>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="container_bottom">
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <Padding size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <PaddingLeftRight size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <PaddingTopDown size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contents_box_container">
            <div class="header_container">
                COLORS
            </div>
            <div class="layout_icons_container">
                <div class="container_top">
                    <div class="arrows_container">
                        <div class="arrows_top">
                            <div class="arrow_down">
                                <ArrowDown size='20px'/>
                            </div>
                            <div class="arrow_right">
                                <ArrowRight size='20px'/>
                            </div>
                        </div>
                        <div class="arrows_bottom">
                            <div class="arrow_expand">
                                <ArrowExpand size='25px'/>
                            </div>
                            <div class="arrow_collapse" >
                                <ArrowCollapse size='20px'/>
                            </div>
                        </div>
                    </div>
                    <div class="align_container">
                        {#each Array(3) as _}
                            <div class="grid_box">
                                <SquareSmall/>
                            </div>
                        {/each}

                        <div class="special_grid_box">
                            <AutoLayoutBars size='22px'/>
                        </div>

                        {#each Array(5) as _}
                            <div class="grid_box">
                                <SquareSmall/>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="container_bottom">
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <Padding size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <PaddingLeftRight size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <PaddingTopDown size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contents_box_container">
            <div class="header_container">
                FONT
            </div>
            <div class="font_icons_container">
                <div class="font_selector">
                    <div class="font">
                        Normal Text
                    </div>
                    <div class="triangle_down_icon">
                        <TriangleDown size='20px'/>
                    </div>
                </div>
                <div class="mark_selector">
                    <div class="mark_icon">
                        <FormatBold size='20px'/>
                    </div>
                    <div class="mark_icon">
                        <FormatItalic size='20px'/>
                    </div>
                    <div class="mark_icon">
                        <FormatUnderline size='20px'/>
                    </div>
                    <div class="mark_icon">
                        <TextOne size='20px'/>
                    </div>
                </div>
                <div class="text_color_selector">
                    <div class="text_color">
                        Text Color
                    </div>
                    <div class="text_color_icon">
                        <FormatText size='20px'/>
                    </div>
                </div>
                <div class="opacity_selector">
                    <div class="opacity">
                        Opacity
                    </div>
                </div>
            </div>
        </div>

        <div class="contents_box_container">
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
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <Radius size="20px"/>
                        </div>
                        <div class="padding_text">
                            4
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <PaddingLeftRight size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <PaddingTopDown size="20px"/>
                        </div>
                        <div class="padding_text">
                            5
                        </div>
                    </div>
                </div>

                <div class="border_corner_selector_container">
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <BorderRadiusTopLeft size="20px"/>
                        </div>
                        <div class="padding_text">
                            4
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <BorderRadiusTopRight size="20px"/>
                        </div>
                        <div class="padding_text">
                            4
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <BorderRadiusBottomRight size="20px"/>
                        </div>
                        <div class="padding_text">
                            4
                        </div>
                    </div>
                    <div class="padding_icon_container">
                        <div class="padding_icon">
                            <BorderRadiusBottomRight size="20px"/>
                        </div>
                        <div class="padding_text">
                            4
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>

<style>
    :root {
        --page-color: #1d1d1d;
        --sidebar-color: #ffffff;
        --brand-purple: #4e29ca;
        --text-orange: #F7A43A;
        --bucket-purple: #bb6bd9;
    }

    * {
        font-family: 'Inter';
    }

    .page {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: var(--page-color);
        display: flex;
    }

    .side_bar {
        width: 188px;
        display: flex;
        background: var(--sidebar-color);
        justify-content: space-between;
        flex-direction: column;
        padding: 10px;
    }

    .text_container {
        display: flex;
        height: 36px;
        align-items: center;
        justify-content: center;
    }

    .display, .functionality {
        display: flex;
        font-weight: 400px;
        padding: 10px;
        font-size: 14px;
    }

    .display {
        border-bottom: 2.5px solid var(--brand-purple);
        font-weight: 600;
    }

    .functionality {
        border-bottom: 2.5px solid rgba(33, 37, 45, 0.2);
        opacity: 50%;
        font-weight: 600;
    }

    .contents_box_container {
        display: flex;
        padding: 8px;
        gap: 8px;
        flex-direction: column;
        border-bottom: 2px solid rgba(33, 37, 45, 0.2);
    }

    .header_container {
        display: flex;
        align-items: center;
        opacity: 50%;
        font-weight: 700;
        font-size: 12px;
    }

    .arrows_top, .arrows_bottom {
        display: flex;
        gap: 4px;
    }

    .arrow_right, .arrow_collapse {
        background: rgba(33, 37, 45, 0.08);
    }

    .arrow_right, .arrow_down, .arrow_collapse {
        display: flex;
        padding: 8px 8px;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    .arrow_expand {
        display: flex;
        padding: 5px 5px;
        aspect-ratio: 1;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    .arrows_container {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .align_container {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        width: 70px;
        aspect-ratio: 1;
        border: 2px solid rgba(33, 37, 45, 0.1);
        border-radius: 2px;
    }

    .grid_box {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        opacity: 10%;
    }

    .special_grid_box {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;

        filter: invert(24%) sepia(43%) saturate(5069%) hue-rotate(248deg) brightness(103%) contrast(93%);

        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .container_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .padding_icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .padding_icon_container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
    }

    .padding_text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 400;
    }

    .layout_icons_container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .font_icons_container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .mark_selector, .font_selector, .text_color_selector {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .font_selector, .text_color_selector {
        font-size: 14px;
        font-weight: 400;
    }

    .mark_icon, .triangle_down_icon, .text_color_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        padding: 4px;
    }

    .text_color_icon {
        background: var(--text-orange);
        border-radius: 4px;
    }

    .text_color, .font {
        display: flex;
        align-items: center;
    }

    .opacity_selector {
        display: flex;
        align-items: center;
    }

    .opacity, .background_color {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
    }

    .color_bucket {
        display: flex;
        align-items: center;
    }

    .color_bucket {
        padding: 4px;
        border-radius: 4px;
        background: var(--bucket-purple);
        justify-content: center;
    }

    .background_color_container, .radius_selector_container, .border_corner_selector_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container_icons_container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>