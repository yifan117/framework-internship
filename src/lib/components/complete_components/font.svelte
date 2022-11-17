<script lang='ts'>
    import FormatText from 'svelte-material-icons/FormatText.svelte';
    import TriangleDown from 'svelte-material-icons/TriangleSmallDown.svelte';
    import MarkSelector from '$lib/components/building_blocks/mark_selector.svelte';
</script>

<div class="container">
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
            <MarkSelector/>
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

<style>

    .container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .header_container {
        display: flex;
        align-items: center;
        opacity: 50%;
        font-weight: 700;
        font-size: 12px;
    }

    .triangle_down_icon, .text_color_icon {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .font_selector, .text_color_selector, .opacity {
        font-size: 14px;
        font-weight: 400;
    }

    .font_icons_container {
        display: flex;
        flex-direction: column;
    }

    .font_icons_container {
        gap: 5px;
    }

    .text_color, .font, .opacity_selector, 
    .mark_selector, .font_selector, .text_color_selector, .opacity {
        display: flex;
        align-items: center;
    }

    .mark_selector, .font_selector, .text_color_selector {
        justify-content: space-between;
    }

    .triangle_down_icon, .text_color_icon {
        aspect-ratio: 1;
        padding: 4px;
    }

    .text_color_icon {
        background: var(--text-orange);
        border-radius: 4px;
    }

    .opacity, .text_color, .font {
        padding: 4px;
    }
</style>