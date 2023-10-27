<template>
    <header>
        <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
            <HeaderBarBrand />
            <HeaderBarLinks />
        </nav>
    </header>
</template>

<script>
import HeaderBarBrand from './header-bar-brand.vue';
import HeaderBarLinks from './header-bar-links.vue';

export default {
    name: "HeaderBar",
    components: { HeaderBarBrand, HeaderBarLinks },
};
</script>
