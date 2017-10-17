<template>
    <div class="products container grid-960">
        <search :clearCollection="clearCollection" :restoreCollection="restoreCollection"></search>
        <div v-for="row in productAll" class="columns mt-10 pt-10">
            <div v-for="product in row" class="column col-3 col-sm-12">
                <div class="card">
                    <a :href="/product/ + product.slug">
                        <div v-if="index === 0"
                            v-for="(image, index) in product.images"
                            class="card-image"
                            :key="index">
                            <photo v-if="index === 0" :file="image.filename"></photo>
                        </div>
                        <div class="card-header text-right">
                            <h6 class="card-title" style="font-size: 14px;text-transform:capitalize;">
                                {{product.title}}
                            </h6>
                            <div class="card-subtitle"><span>Php {{product.price}}</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div v-if="isFetching" class="text-center">
            <div class="loading"></div>
        </div>
    </div>
</template>

<script>
    import chunk from 'lodash/chunk'
    import isEmpty from 'lodash/isEmpty'
    import map from 'lodash/map'
    import debounce from 'lodash/debounce'
    import Photo from './components/photo'
    import Search from './components/search'


    export default {
        name: 'products',
        props: ['collection', 'csrf'],
        data() {
            return {
                products: this.collection,
                take: 0,
                isFetching: false
            }
        },
        components: {
            Photo,
            Search
        },
        computed: {
            productAll() {
                return chunk(this.products, 4)
            }
        },
        methods: {
            scrollObserver () {
                const base = this.$el
                const baseOffset = base.offsetHeight
                const windowOffset = window.pageYOffset + window.innerHeight

                this.isFetching = false

                if(windowOffset >= baseOffset) {
                    this.isFetching = true
                    this.updateCollection()               }
            },
            updateCollection: debounce(function() {
                const host = location.host
                const protocol = location.protocol
                const increment = this.take += this.collection.length
                


                const headers = new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                })

                const url = new URL(`${protocol}//${host}/product`)
                const params = { take: increment, skip: increment }

                map(params, (value, key) => {
                    url.searchParams.append(key, value)
                })

                fetch(url, {
                    method: 'GET',
                    headers,
                }).then(res => {
                    return res.json()
                }).then(({ collection }) => {
                    if(isEmpty(collection)) {
                        this.isFetching = false
                    }
                    this.products = [].concat(this.products, collection)
                }).catch(err => console.log(err))
            }, 1000, { maxWait: 2000 }),
            clearCollection() {
                this.products = [];
            },
            restoreCollection() {
                this.products = this.collection
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

<style lang="less" scoped>
    .products {
        padding-top: 3rem;
    }
</style>
