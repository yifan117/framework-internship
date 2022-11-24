<script lang='ts'>
    import PaddingLeftRight from '$lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '$lib/icons/PaddingTopDown.svelte';
    import Radius from '$lib/icons/Radius.svelte'

    export let radius: number;
    export let padding_left_right_container: number;
    export let padding_top_bottom_container: number;

    let mouse_down_on_radius = false;
    let mouse_down_on_left_right = false;
    let mouse_down_on_top_bottom = false;

    function mouse_move(e: any) {
        if (mouse_down_on_radius) {
            radius += e.movementX;
            if (radius <= 0) {
                radius = 0;
            }

        } else if (mouse_down_on_left_right) {
            padding_left_right_container += e.movementX;
            if (padding_left_right_container <= 0) {
                padding_left_right_container = 0;
            }

        } else if (mouse_down_on_top_bottom) {
            padding_top_bottom_container += e.movementX;
            if (padding_top_bottom_container <= 0) {
                padding_top_bottom_container = 0;
            }
        }
    }
</script>

<svelte:window 
on:mouseup ={() => mouse_down_on_radius = false}
on:mouseup ={() => mouse_down_on_left_right = false}
on:mouseup ={() => mouse_down_on_top_bottom = false}
on:mousemove={mouse_move}
/>

<div class="padding_icon_container">
    <label for='radius_CONTAINER' class:selected={mouse_down_on_radius}>
        <div class="padding_icon" on:mousedown={() => mouse_down_on_radius = true}>
            <Radius/>
        </div>
        <div class="padding_text">
            <input type='number' id='radius_CONTAINER' bind:value={radius} min="0" class:selected={mouse_down_on_radius}/>
        </div>
    </label>
</div>

<div class="padding_icon_container">
    <label for='padding_left_right_CONTAINER' class:selected={mouse_down_on_left_right}>
        <div class="padding_icon" on:mousedown={() => mouse_down_on_left_right = true}>
            <PaddingLeftRight/>
        </div>
        <div class="padding_text">
            <input type='number' id='padding_left_right_CONTAINER' bind:value={padding_left_right_container} min="0" class:selected={mouse_down_on_left_right}/>
        </div>
    </label>
</div>

<div class="padding_icon_container">
    <label for='padding_top_down_CONTAINER' class:selected={mouse_down_on_top_bottom}>
        <div class="padding_icon" on:mousedown={() => mouse_down_on_top_bottom = true}>
            <PaddingTopDown/>
        </div>
        <div class="padding_text">
            <input type='number' id='padding_top_down_CONTAINER' bind:value={padding_top_bottom_container} min="0" class:selected={mouse_down_on_top_bottom}/>
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

    .padding_icon
        font-size 20px

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
        max-width auto
        border none
        border-radius 3px

        &:focus
            outline none

    .padding_text
        font-size 14px
        font-weight 400

    .selected
        cursor w-resize
</style>