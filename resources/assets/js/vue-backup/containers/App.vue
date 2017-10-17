<template>
    <div class="page">
        <navbar></navbar>
        <router-view :collection="collection" />
    </div>
</template>
<script>
import Navbar from './components/Navbar'
    export default {
        name: 'app',
        props: ['collection','csrf'],
        components: {
            Navbar
        }
    }
</script>
