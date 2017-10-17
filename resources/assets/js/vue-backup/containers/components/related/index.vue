<template>
    <div class="product-related">
        <p class="pt-10 mt-10">You might also like</p>
        <div class="divider"></div>
        <div v-for="row in relatedProducts" class="columns mt-10 pt-10">
            <div v-for="product in row" class="column col-6 col-sm-12">
                <div class="card">
                    <a :href="/product/ + product.slug">
                        <div v-if="index === 0" 
                            v-for="(image, index) in product.images" 
                            class="card-image" 
                            :key="index">
                            <img v-if="index === 0" :src="image.filename" class="img-responsive" />
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
    </div>
</template>

<script>
    export default {
        name: 'related',
        props: ['relatedProducts']
    }
</script>