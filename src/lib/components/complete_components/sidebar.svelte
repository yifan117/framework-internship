<script lang='ts'>
    import Layout from '$lib/components/complete_components/layout.svelte';
	import Colors from '$lib/components/complete_components/colors.svelte';
	import Font from '$lib/components/complete_components/font.svelte';
    import Container from '$lib/components/complete_components/container.svelte';
	import Tabs from '$lib/components/complete_components/tabs.svelte';
</script>

<div class="container">
    <div class="side_bar">
        <div class="text_container">
            <Tabs/>
        </div>

        <div class="contents_box_container">
            <Layout/>
        </div>

        <div class="contents_box_container">
            <Colors/>
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

<style>

    .container {
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-color: var(--brand-purple) rgba(33, 37, 45, 0.2);
        scrollbar-width: thin;
        background: var(--sidebar-color);
    }

    .side_bar {
        max-width: 200px;
        display: flex;
        background: var(--sidebar-color);
        justify-content: space-between;
        flex-direction: column;
        padding: 10px;
        width: 100%;

    }

    .text_container {
        height: 36px;
    }

    .contents_box_container {
        display: flex;
        padding: 8px;
        gap: 8px;
        flex-direction: column;
        border-bottom: 2px solid rgba(33, 37, 45, 0.2);
    }

    .text_container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>