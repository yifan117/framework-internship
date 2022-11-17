<script lang='ts'>
    import BorderRadiusBottomLeft from '$lib/icons/BorderRadiusBottomLeft.svelte';
    import BorderRadiusBottomRight from '$lib/icons/BorderRadiusBottomRight.svelte';
    import BorderRadiusTopLeft from '$lib/icons/BorderRadiusTopLeft.svelte';
    import BorderRadiusTopRight from '$lib/icons/BorderRadiusTopRight.svelte';

    export let radius_top_left: number;
    export let radius_top_right: number;
    export let radius_bottom_left: number;
    export let radius_bottom_right: number;
</script>

<div class="top">
    <label for='border_radius_top_left'>
        <div class="padding_icon">
                <BorderRadiusTopLeft size="25px"/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_top_left' bind:value={radius_top_left}/>
        </div>
    </label>

    <label for='border_radius_top_right'>
        <div class="padding_icon">
            <BorderRadiusTopRight size="25px"/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_top_right' bind:value={radius_top_right}/>
        </div>
    </label>
</div>

<div class="bottom">
    <label for='border_radius_bottom_left'>
        <div class="padding_icon">
            <BorderRadiusBottomLeft size="25px"/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_bottom_left' bind:value={radius_bottom_left}/>
        </div>
    </label>

    <label for='border_radius_bottom_right'>
        <div class="padding_icon">
            <BorderRadiusBottomRight size="25px"/>
        </div>
        <div class="padding_text">
            <input type='number' id='border_radius_bottom_right' bind:value={radius_bottom_right}/>
        </div>
    </label>
</div>

<style lang='stylus'>
.top
.bottom
    display flex
    align-items center
    justify-content center
    width 100%
    gap 8px

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
    width: 100%;

input:focus
input:hover
    outline none
    border-radius 3px

.padding_icon
label
.padding_text
    display flex
    align-items center
    justify-content space-between

label
    padding 4px
    gap 8px
    border-radius 4px

    &:hover
        outline 1.5px solid rgba(127, 17, 224, 0.3)

    &:focus-within
        outline 1.5px solid var(--brand-purple)

.padding_text
    font-size 14px
    font-weight 400
</style>