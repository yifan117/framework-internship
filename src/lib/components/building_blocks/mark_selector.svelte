<script lang='ts'>
    import FormatBold from 'svelte-material-icons/FormatBold.svelte';
    import FormatUnderline from 'svelte-material-icons/FormatUnderline.svelte';
    import FormatItalic from 'svelte-material-icons/FormatItalic.svelte';
    import TextOne from '$lib/icons/TextOne.svelte';
</script>

<div class="mark_icon">
    <FormatBold/>
</div>
<div class="mark_icon">
    <FormatItalic/>
</div>
<div class="mark_icon">
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
        padding 4px
        font-size: 20px;
</style>