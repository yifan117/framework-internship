<script lang='ts'>
    import FormatBold from 'svelte-material-icons/FormatBold.svelte';
    import FormatUnderline from 'svelte-material-icons/FormatUnderline.svelte';
    import FormatItalic from 'svelte-material-icons/FormatItalic.svelte';
    import TextOne from '$lib/icons/TextOne.svelte';

    export let is_bold: boolean;
    export let is_italic: boolean;
    export let is_underlined: boolean;

    function toggle_bold() {
        if (is_bold) {
            is_bold = false;
        } else {
            is_bold = true;
        }
    }

    function toggle_italic() {
        if (is_italic) {
            is_italic = false;
        } else {
            is_italic = true;
        }
    }

    function toggle_underlined() {
        if (is_underlined) {
            is_underlined = false;
        } else {
            is_underlined = true;
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="mark_icon" class:selected={is_bold} on:click={() => toggle_bold()}>
    <FormatBold/>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="mark_icon" class:selected={is_italic} on:click={() => toggle_italic()}>
    <FormatItalic/>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="mark_icon" class:selected={is_underlined} on:click={() => toggle_underlined()}>
    <FormatUnderline/>
</div>

<div class="mark_icon">
    <TextOne/>
</div>

<style lang='stylus'>
.mark_icon
    display flex
    align-items center
    aspect-ratio 1
    padding 8px
    font-size 20px
    border-radius 4px
    cursor pointer

    &:hover
        background rgba(45, 55, 67, 0.1)

.selected
    background-color rgba(45, 55, 67, 0.28)

    &:hover
        background rgba(45, 55, 67, 0.28)
</style>