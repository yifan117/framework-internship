<script lang='ts'>
    import ArrowDown from 'svelte-material-icons/ArrowDown.svelte';
    import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
    import ArrowCollapse from '$lib/icons/ArrowCollapse.svelte';
    import ArrowExpand from '$lib/icons/ArrowExpand.svelte';
</script>

<div class="container">
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
</div>

<style>

    .container {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .arrows_top, .arrows_bottom {
        display: flex;
        gap: 4px;
        justify-content: space-between;
    }

    .arrow_right, .arrow_collapse {
        background: rgba(33, 37, 45, 0.08);
    }

    .arrow_right, .arrow_down, .arrow_collapse {
        padding: 8px;
        border-radius: 4px;
    }

    .arrow_right, .arrow_down, .arrow_collapse, .arrow_expand {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .arrow_expand {
        padding: 5px;
        aspect-ratio: 1;
        border-radius: 4px;
    }

    .arrows_container {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>