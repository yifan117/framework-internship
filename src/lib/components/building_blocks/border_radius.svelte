<script lang='ts'>
    import PaddingLeftRight from '$lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '$lib/icons/PaddingTopDown.svelte';
    import Radius from '$lib/icons/Radius.svelte'

    export let radius: number;
    export let padding_left_right_container: number;
    export let padding_top_bottom_container: number;
</script>

<div class="padding_icon_container">
    <label for='radius_CONTAINER'>
        <div class="padding_icon">
            <Radius size="20px"/>
        </div>
        <div class="padding_text">
            <input type='number' id='radius_CONTAINER' bind:value={radius}/>
        </div>
    </label>
</div>

<div class="padding_icon_container">
    <label for='padding_left_right_CONTAINER'>
        <div class="padding_icon">
            <PaddingLeftRight size="20px"/>
        </div>
        <div class="padding_text">
            <input type='number' id='padding_left_right_CONTAINER' bind:value={padding_left_right_container}/>
        </div>
    </label>
</div>

<div class="padding_icon_container">
    <label for='padding_top_down_CONTAINER'>
        <div class="padding_icon">
            <PaddingTopDown size="20px"/>
        </div>
        <div class="padding_text">
            <input type='number' id='padding_top_down_CONTAINER' bind:value={padding_top_bottom_container}/>
        </div>
    </label>
</div>

<style lang='stylus'>
    label
    .padding_icon
    .padding_text
        display flex
        align-items center
        justify-content space-between
        gap 8px

    label
        padding 4px
        border-radius 3px

        &:hover
            outline 1.5px solid rgba(127, 17, 224, 0.3)

        &:focus-within
            outline 1.5px solid var(--brand-purple)

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
        border-radius 3px

        &:focus
            outline none

    .padding_text
        font-size 14px
        font-weight 400
</style>