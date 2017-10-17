<template>
    <div class="product container grid-960">
        <div class="columns">
            <div class="column col-8 col-sm-12">
                <carousel :images="product.images"></carousel>
                <div class="panel">
                    <div class="panel-header">
                    </div>
                    <div class="panel-body">
                        <div class="tile">
                          <div class="tile-content">
                            <p class="tile-title text-capitalize text-bold">{{product.title}}</p>
                            <p class="tile-subtitle">{{product.description}}</p>
                          </div>
                          <div class="tile-action">
                              Php {{product.price}}
                          </div>
                        </div>
                    </div>
                    <div class="panel-footer text-center">
                        <a href="#">Load more</a>
                    </div>
                </div>
                <comments :comments="product.comments"></comments>
            </div>
            <div class="column col-4 col-sm-12">
                <owner :user="product.user"></owner>
                <related :related-products="relatedProducts"></related>
            </div>
        </div>
    </div>
</template>

<script>
    import chunk from 'lodash/chunk'
    import Carousel from './components/carousel'
    import Related from './components/related'
    import Owner from './components/owner'
    import Comments from './components/comments'
    export default {
        name: 'product',
        props: [
            'collection'
        ],
        components: {
            Carousel,
            Comments,
            Owner,
            Related
        },
        data() {
            return {
                relatedProducts: chunk(this.collection.related, 2),
                product: this.collection.product
            }
        }
    }
</script>
