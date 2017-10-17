<template>
    <div class="loader-container">
        <div class="loading"></div>
    </div>
</template>

<script>
    export default {
        name: 'loader'
    }
</script>

<style lang="less" scoped>
    .loader {
        &-container {
            position: relative;
            .loading {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
        }
    }
</style>
