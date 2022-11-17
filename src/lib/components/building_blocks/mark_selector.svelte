<script lang='ts'>
    import FormatBold from 'svelte-material-icons/FormatBold.svelte';
    import FormatUnderline from 'svelte-material-icons/FormatUnderline.svelte';
    import FormatItalic from 'svelte-material-icons/FormatItalic.svelte';
    import TextOne from '$lib/icons/TextOne.svelte';
</script>

<div class="container">
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

<style>
    .mark_icon {
        display: flex;
        align-items: center;
        aspect-ratio: 1;
        padding: 4px;
    }

    .container {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
    }
</style>