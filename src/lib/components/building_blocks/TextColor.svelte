<script lang='ts'>
    import FormatText from 'svelte-material-icons/FormatText.svelte';

    let colors = [
        {hex: "#FF9AA2"},
        {hex: "#FFB7B2"},
        {hex: "#FFDAC1"},
        {hex: "#E2F0CB"},
        {hex: "#B5EAD7"},
        {hex: "#C7CEEA"},
        {hex: "#E1C4F5"},
        {hex: "#F7E7DF"},
        {hex: "#FFD1E8"},
        {hex: "#FCB8E1"},
        {hex: "#ad11ff"},
        {hex: "#0a5cff"},
        {hex: "#1af214"},
        {hex: "#ffef0b"},
        {hex: "#ff7e0b"},
        {hex: "#fd0b3b"},
        {hex: "#234e85"},
        {hex: "#6e7c74"},
        {hex: "#c7b763"},
        {hex: "#d09d48"},
        {hex: "#1d1d1d"},
    ]

    function toggle_selected() {
        if (text_color_is_selected) {
            text_color_is_selected = false;
        } else {
            text_color_is_selected = true;
        }
    }

    export let text_color_is_selected: boolean;
    export let text_icon_color: string;
</script>

<div class="container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="text_container" on:click={() => toggle_selected()}>
        <div class="text_color">
            Text Color
        </div>
        <div class="text_color_icon" style='background: {text_icon_color}'>
            <FormatText size='20px'/>
        </div>
    </div>

    <div class="color_picker" class:selected={text_color_is_selected}>
        {#each colors as color}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="color_container" style='background: {color.hex}' on:click={() => text_icon_color = color.hex}></div>
        {/each}
    </div>
</div>

<style lang='stylus'>
$outline-purple = rgba(127, 17, 224, 0.3);


    *
        font-size 14px
    
    .text_color_icon
        display flex
        align-items center
        justify-content space-between
        aspect-ratio 1
        padding 4px

    .text_color
        display flex
        align-items center

    .text_color_icon
        background var(--text-orange)
        border-radius 4px

    .text_color
        padding 4px

    .text_container
        display flex
        align-items center
        justify-content space-between
        width 100%
        padding 4px
        border-radius 4px

    .container
        display flex
        flex-direction column
        align-items center
        width 100%
        gap 8px

    .selected
        display grid
        grid-template-rows repeat(3, 1fr)
        grid-template-columns repeat(7, 1fr)
        width 100%
        gap 6px
    
    .color_container
        display flex
        max-width 28px
        aspect-ratio 1
        border-radius 4px
        align-items center
        justify-content center
        &:hover
            outline 1px solid $outline-purple

    .text_container
    .selected
    .color_container
        &:hover
            cursor pointer

    .text_container:hover
        outline 1px solid $outline-purple
</style>