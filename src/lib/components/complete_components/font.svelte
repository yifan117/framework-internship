<script lang='ts'>
    import TriangleDown from 'svelte-material-icons/TriangleSmallDown.svelte';
    import MarkSelector from '$lib/components/building_blocks/mark_selector.svelte';
    import TextColor from '$lib/components/building_blocks/TextColor.svelte';
    
    import type { FontData } from '$lib/types';

    export let font_data: FontData
</script>

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
        <MarkSelector bind:is_bold={font_data.is_bold} bind:is_italic={font_data.is_italic} bind:is_underlined={font_data.is_underlined}/>
    </div>
    <div class="text_color_selector">
        <TextColor bind:text_color_is_selected={font_data.text_color_is_selected} bind:text_icon_color={font_data.text_icon_color}/>
    </div>
    <div class="opacity_selector">
        <div class="opacity">
            Opacity
        </div>
    </div>
</div>


<style lang='stylus'>

    .mark_selector
        display inline-flex
        justify-content space-between

    .header_container
        display flex
        align-items center
        opacity 50%
        font-weight 700
        font-size 12px

    .triangle_down_icon
        display flex
        align-items center
        justify-content space-between
        aspect-ratio 1
        padding 4px

    .font_selector
    .text_color_selector
    .opacity
        font-size 14px
        font-weight 400

    .font_icons_container
        display flex
        flex-direction column
        gap 5px

    .font
    .opacity_selector
    .mark_selector
    .font_selector
    .text_color_selector
    .opacity
        display flex
        align-items center

    .mark_selector
    .font_selector
    .text_color_selector
        justify-content space-between

    .opacity
    .font
        padding 4px

</style>