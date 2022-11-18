<svelte:head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Open+Sans:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet"></svelte:head>

<slot/>

<style global lang='stylus'>
$outline-purple = rgba(127, 17, 224, 0.3);

:root 
    --page-color #1d1d1d
    --sidebar-color #ffffff
    --brand-purple #4e29ca
    --text-orange #F7A43A
    --bucket-purple #bb6bd9


* 
    font-family 'Inter'


input::-webkit-outer-spin-button
input::-webkit-inner-spin-button
    appearance none
    margin 0

input[type=number]
    appearance textfield

input
    text-align center
    max-width 30px
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
</style>