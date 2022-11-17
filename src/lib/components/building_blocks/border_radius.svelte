<script lang='ts'>
    import PaddingLeftRight from '$lib/icons/PaddingLeftRight.svelte';
    import PaddingTopDown from '$lib/icons/PaddingTopDown.svelte';
    import Radius from '$lib/icons/Radius.svelte'
</script>

<div class="container">
    <div class="padding_icon_container">
        <label for='radius_CONTAINER'>
            <div class="padding_icon">
                <Radius size="20px"/>
            </div>
            <div class="padding_text">
                <input type='number' id='radius_CONTAINER'/>
            </div>
        </label>
    </div>

    <div class="padding_icon_container">
        <label for='padding_left_right_CONTAINER'>
            <div class="padding_icon">
                <PaddingLeftRight size="20px"/>
            </div>
            <div class="padding_text">
                <input type='number' id='padding_left_right_CONTAINER'/>
            </div>
        </label>
    </div>

    <div class="padding_icon_container">
        <label for='padding_top_down_CONTAINER'>
            <div class="padding_icon">
                <PaddingTopDown size="20px"/>
            </div>
            <div class="padding_text">
                <input type='number' id='padding_top_down_CONTAINER'/>
            </div>
        </label>
    </div>
</div>

<style>

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 6px;
    }

    label {
        display: flex;
        gap: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px;
        border-radius: 3px;
    }

    label:hover {
        outline: 1.5px solid rgba(127, 17, 224, 0.3);
    }

    label:focus-within {
        outline: 1.5px solid var(--brand-purple);
    }

    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    input {
        text-align: center;
        max-width: 20px;
        border: none;
        border-radius: 3px;
    }

    input:focus {
        outline: none;
    }

    .padding_icon, .padding_text {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .padding_text {
        font-size: 14px;
        font-weight: 400;
    }

</style>