<svelte:head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Open+Sans:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet"></svelte:head>

<slot/>

<style global lang='stylus'>
$outline-purple = rgba(127, 17, 224, 0.3);

    :root {
        --page-color: #1d1d1d;
        --sidebar-color: #ffffff;
        --brand-purple: #4e29ca;
        --text-orange: #F7A43A;
        --bucket-purple: #bb6bd9;
    }

    * {
        font-family: 'Inter';
    }
</style>