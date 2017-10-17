<template>
    <div class="carousel">
        <input type="radio" :id="index" name="carousel-radio"
            v-for="(image, index) in images"
            class="carousel-locator" hidden :checked="index === 0" />
        <div class="carousel-container">
            <figure class="carousel-item" v-for="(image, index) in images">
                <img :src="image.filename" class="img-responsive" />
            </figure>
        </div>
        <div class="carousel-nav">
            <label v-for="(image, index) in images" class="nav-item text-hide hand" :for="index">
            </label>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'carousel',
    props: ['images']
  }
</script>
