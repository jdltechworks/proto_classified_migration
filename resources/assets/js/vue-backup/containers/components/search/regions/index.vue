<template>
    <div class="regions container">
        <div v-if="regions.length == 0" class="regions-group text-center">
          <div class="loader-container">
            <div class="loader">
              <div class="ball-beat">
                 <div></div>
                 <div></div>
                 <div></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else v-for="regions in regionsGroup" class="regions-group columns">
            <div v-for="region in regions" class="column col-3">
                <p>{{region.name}}</p>
                <div class="form-group" v-for="province in region.provinces">
                    <label class="form-checkbox">
                      <input type="checkbox" :value="province.name" v-model="locationProxy" @change="updateLocation"/>
                      <i class="form-icon"></i> {{province.name}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import isEmpty from 'lodash/isEmpty'
    import chunk from 'lodash/chunk'
    export default {
        name: 'region-selector',
        props: ['location'],
        data() {
            return {
                regions: [],
                locationProxy: []
            }
        },
        computed: {
            regionsGroup() {
                return chunk(this.regions, 4)
            }
        },
        methods: {
            updateLocation(name) {
                this.$emit('input', this.locationProxy)
            }
        },
        created() {
            const host = location.host
            const protocol = location.protocol
            const headers = new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            })

            const url = new URL(`${protocol}/${host}/region`)
            if(isEmpty(this.options)) {
                fetch(url, {
                    method: 'GET',
                    headers,
                }).then(res => {
                    return res.json()
                }).then(({ regions }) => {
                    this.isFetching = false
                    this.regions = [].concat(this.regions, regions)
                }).catch(err => console.log(err))
            }
        }
    }
</script>
