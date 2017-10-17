<template>
    <div class="search-box">
        <div class="container grid-960">
            <form @submit.prevent="search({ keywords, location })">
                <div class="input-group">
                    <input type="text" class="form-input" @blur="handleBlur" v-model="keywords" placeholder="Search" />
                    <button @click.prevent="toggle" class="btn btn-primary input-group-btn"><i class="icon icon-location"></i></button>
                    <button @click.prevent="toggle" class="btn btn-primary input-group-btn"><i class="icon icon-more-vert"></i></button>
                    <button class="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
                </div>
                <transition name="slide">
                    <region-selector v-if="isOpen" v-model="location"></region-selector>
                </transition>
            </form>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce'
    import RegionSelector from './regions'
    export default {
        name: 'search',
        props: ['clearCollection', 'restoreCollection'],
        data() {
            return {
                isOpen: false,
                keywords: '',
                location: [],
                isFetching: false
            }
        },
        components: {
            RegionSelector
        },
        methods: {
            search: debounce(function({keywords, location}) {
                this.isOpen = true
                console.log(keywords, location)
            }, 1000, { maxWait: 1000 }),
            toggle() {
                this.isOpen = !this.isOpen
                this.isFetching = true

            },
            handleBlur() {
                this.isOpen = false;
                this.restoreCollection()
            },
            scrollObserver() {
                const base = document.querySelector('.navbar-container')
                const baseOffset = base.offsetHeight
                this.$el.classList.remove('scrolled')
                if(window.pageYOffset >= baseOffset) {
                    this.$el.classList.add('scrolled')
                }
            }
        },
        created () {
            window.addEventListener('scroll', this.scrollObserver);
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollObserver);
        }
    }
</script>

<style scoped>
    form {
        position: relative;
    }
</style>
