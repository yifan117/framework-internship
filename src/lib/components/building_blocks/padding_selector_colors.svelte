<script lang='ts'>
    import Padding from '$lib/icons/PaddingIcon.svelte';
    import PaddingLeftRight from '$lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '$lib/icons/PaddingTopDown.svelte';

    export let gap_color: number;
    export let padding_left_right_color: number;
    export let padding_top_bottom_color: number;

    let mouse_down_on_gap = false;
    let mouse_down_on_left_right = false;
    let mouse_down_on_top_bottom = false;

    function mouse_move(e: any) {
        if (mouse_down_on_gap) {
            gap_color += e.movementX;
            if (gap_color <= 0) {
                gap_color = 0;
            }

        } else if (mouse_down_on_left_right) {
            padding_left_right_color += e.movementX;
            if (padding_left_right_color <= 0) {
                padding_left_right_color = 0;
            }

        } else if (mouse_down_on_top_bottom) {
            padding_top_bottom_color += e.movementX;
            if (padding_top_bottom_color <= 0) {
                padding_top_bottom_color = 0;
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

<label for='padding_COLORS' class:selected={mouse_down_on_gap}>
    <div class="padding_icon" on:mousedown={() => mouse_down_on_gap = true}>
        <Padding/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_COLORS' bind:value={gap_color} min="0" class:selected={mouse_down_on_gap}/>
    </div>
</label>

<label for='padding_left_right_COLORS' class:selected={mouse_down_on_left_right}>
    <div class="padding_icon" on:mousedown={() => mouse_down_on_left_right = true}>
        <PaddingLeftRight/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_left_right_COLORS' bind:value={padding_left_right_color} min="0" class:selected={mouse_down_on_left_right}/>
    </div>
</label>

<label for='padding_top_down_COLORS' class:selected={mouse_down_on_top_bottom}>
    <div class="padding_icon" on:mousedown={() => mouse_down_on_top_bottom = true}>
        <PaddingTopDown/>
    </div>
    <div class="padding_text">
        <input type='number' id='padding_top_down_COLORS' bind:value={padding_top_bottom_color} min="0" class:selected={mouse_down_on_top_bottom}/>
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