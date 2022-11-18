<script lang='ts'>

import Text from '$lib/components/building_blocks/Text.svelte';

import type { TabData } from '$lib/types';
export let tab_data: TabData;

</script>

<div class="container">
        <Text bind:display_selected={tab_data.display_selected}/>
</div>


<style lang='stylus'>
$color-1 = rgba(33, 37, 45, 0.2)

    .container
        display flex
        max-height 33.5px
        height 100%
        align-items center

   

</style>