<script lang="ts">
	import Sidebar from '$lib/components/complete_components/sidebar.svelte';
</script>

<div class="page">
    <Sidebar/>
</div>

<style>
    .page {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: var(--page-color);
        display: flex;
    }
</style>