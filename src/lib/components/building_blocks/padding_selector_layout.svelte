<script lang='ts'>
    import Padding from '$lib/icons/PaddingIcon.svelte';
    import PaddingLeftRight from '$lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '$lib/icons/PaddingTopDown.svelte';

    export let gap_layout: number;
    export let padding_left_right_layout: number;
    export let padding_top_bottom_layout: number;

    let mouse_down_on_gap = false;
    let mouse_down_on_left_right = false;
    let mouse_down_on_top_bottom = false;

    function mouse_move(e: any) {
        if (mouse_down_on_gap) {
            gap_layout += e.movementX;
            if (gap_layout <= 0) {
                gap_layout = 0;
            }

        } else if (mouse_down_on_left_right) {
            padding_left_right_layout += e.movementX;
            if (padding_left_right_layout <= 0) {
                padding_left_right_layout = 0;
            }

        } else if (mouse_down_on_top_bottom) {
            padding_top_bottom_layout += e.movementX;
            if (padding_top_bottom_layout <= 0) {
                padding_top_bottom_layout = 0;
            }
        }
    }
</script>

<svelte:window 
on:mouseup ={() => mouse_down_on_gap = false}
on:mouseup ={() => mouse_down_on_left_right = false}
on:mouseup ={() => mouse_down_on_top_bottom = false}
on:mousemove={mouse_move}
/>

<label for='padding_LAYOUT' class:selected={mouse_down_on_gap}>
    <div class="padding_icon" on:mousedown={() => mouse_down_on_gap = true}>
        <Padding/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_LAYOUT' bind:value={gap_layout} min="0" class:selected={mouse_down_on_gap}/>
    </div>
</label>

<label for='padding_left_right_LAYOUT' class:selected={mouse_down_on_left_right}>
    <div class="padding_icon" on:mousedown={() => mouse_down_on_left_right = true}>
        <PaddingLeftRight/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_left_right_LAYOUT' bind:value={padding_left_right_layout} min="0" class:selected={mouse_down_on_left_right}/>
    </div>
</label>

<label for='padding_top_down_LAYOUT' class:selected={mouse_down_on_top_bottom}>
    <div class="padding_icon" on:mousedown={() => mouse_down_on_top_bottom = true}>
        <PaddingTopDown/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_top_down_LAYOUT' bind:value={padding_top_bottom_layout} min="0" class:selected={mouse_down_on_top_bottom}/>
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
        max-width auto
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

    .selected
        cursor w-resize
</style>