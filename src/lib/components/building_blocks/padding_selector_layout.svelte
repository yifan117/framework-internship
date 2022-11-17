<script lang='ts'>
    import Padding from '$lib/icons/PaddingIcon.svelte';
    import PaddingLeftRight from '$lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '$lib/icons/PaddingTopDown.svelte';

    export let gap_layout: number;
    export let padding_left_right_layout: number;
    export let padding_top_bottom_layout: number;
</script>

<label for='padding_LAYOUT'>
    <div class="padding_icon">
        <Padding/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_LAYOUT' bind:value={gap_layout}/>
    </div>
</label>

<label for='padding_left_right_LAYOUT'>
    <div class="padding_icon">
        <PaddingLeftRight/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_left_right_LAYOUT' bind:value={padding_left_right_layout}/>
    </div>
</label>

<label for='padding_top_down_LAYOUT'>
    <div class="padding_icon">
        <PaddingTopDown/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_top_down_LAYOUT' bind:value={padding_top_bottom_layout}/>
    </div>
</label>

<style lang='stylus'>

    input::-webkit-outer-spin-button
    input::-webkit-inner-spin-button
        appearance none
        margin 0

    input[type=number]
        appearance textfield

    input
        text-align center
        max-width 20px
        border none

        &:focus
            outline none

    label
        display flex
        gap 8px
        align-items center
        justify-content space-between
        padding 4px
        border-radius 3px

        &:hover
            outline 1.5px solid rgba(127, 17, 224, 0.3)

        &:focus-within
            outline 1.5px solid var(--brand-purple)

    .padding_icon
        display flex
        align-items center
        justify-content space-between
        font-size 20px

    .padding_text
        font-size 14px
</style>