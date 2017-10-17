<template>
    <div class="photo">
        <pre-loader v-if="loading"></pre-loader>
        <img :src="file" class="img-responsive" @load="loader"/>
    </div>
</template>

<script>
    import Loader from './Loader'
    export default {
        name: 'photo',
        props: ['file'],
        data() {
            return {
                loading: true
            }
        },
        components: {
            'pre-loader': Loader
        },
        ready() {

        },
        methods: {
            loader(e) {
                if(e.target.src) {
                    this.loading = false
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .photo {
        position: relative;
        min-height: 138px;
        .loader-container {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
        }
    }
</style>
