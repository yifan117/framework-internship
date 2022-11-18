<script lang='ts'>
    import Padding from '$lib/icons/PaddingIcon.svelte';
    import PaddingLeftRight from '$lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '$lib/icons/PaddingTopDown.svelte';

    export let gap_color: number;
    export let padding_left_right_color: number;
    export let padding_top_bottom_color: number;
</script>

<label for='padding_COLORS'>
    <div class="padding_icon">
        <Padding/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_COLORS' bind:value={gap_color}/>
    </div>
</label>

<label for='padding_left_right_COLORS'>
    <div class="padding_icon">
        <PaddingLeftRight/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_left_right_COLORS' bind:value={padding_left_right_color}/>
    </div>
</label>

<label for='padding_top_down_COLORS'>
    <div class="padding_icon">
        <PaddingTopDown/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_top_down_COLORS' bind:value={padding_top_bottom_color}/>
    </div>
</label>

<style lang='stylus'>
    .padding_icon
        display flex
        align-items center
        justify-content space-between
        font-size 20px

    .padding_text
        font-size 14px
</style>