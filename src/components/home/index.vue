<template>
    <div id="aaa">
       <div class="home-main">
           <div class="main-head">
               <div class="city-change" @click="openCity">
                   <div class="city-name">{{cityName}}</div>
                   <div class="arrow-down"></div>
               </div>
           </div>
       </div>
       <cityChoice @on-state-change="stateChange" :showCity="showCity" ></cityChoice> 
    </div>
</template>
<script>
    import cityChoice from '../../common/commonCity.vue';
    export default {
        name: 'home',
        components: {
            cityChoice
        },
        data () {
            return {
                showCity: false,
                cityName: '深圳',
            }
        },
        props: {},
        created () {
        },
        mounted () {
        },
        methods: {
            openCity () {
                this.showCity = true;
                console.log(123)
            },
            stateChange (item) {
                this.showCity = false;
                console.log(item)
                this.cityName = item.name;
            }
        },
    }
</script>
<style scoped>
/* css */
</style>
