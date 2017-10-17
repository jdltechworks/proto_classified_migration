<template>
    <div class="panel mt-10 pt-10">
        <div class="panel-header">
            <div class="panel-title">
                Comments
            </div>
        </div>
        <div class="panel-body">
            <div v-for="comment in comments" class="tile">
              <div class="tile-icon">
                <figure class="avatar" data-initial="YZ"></figure>
              </div>
              <div class="tile-content">
                <p class="tile-title">{{comment.title}}</p>
                <p class="tile-subtitle">{{comment.body}}</p>
              </div>
              <div class="tile-action">
              </div>
            </div>
        </div>
        <div class="panel-footer text-center">
            <a href="#">Load more</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'comments',
        props: ['comments']
    }
</script>