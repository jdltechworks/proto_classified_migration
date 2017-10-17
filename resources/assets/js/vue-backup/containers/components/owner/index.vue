<template>
    <div class="panel pb-10 mb-10">
        <div class="panel-header">
        </div>
        <div class="panel-body">
            <div class="tile">
                <div class="tile-icon">
                <figure class="avatar" data-initial="YZ"></figure>
              </div> 
              <div class="tile-content">
                <p class="tile-title">{{user.name}}</p>
              </div>
            </div>
        </div>
        <div class="panel-footer text-center">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'owner',
        props: ['user'],
        data() {
            console.log(this.user)
            return {

            }
        }
    }
</script>