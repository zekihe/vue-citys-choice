<template>
    <div id="aaa">
       <div class="home-main" @click="showCity = true">切换城市</div>
       <cityChoice @stateChange="stateChange" :showCity="showCity" ></cityChoice> 
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
            }
        },
        props: {},
        created () {
        },
        mounted () {
        },
        methods: {
            stateChange (flag) {
                this.showCity = flag;
            }
        },
    }
</script>
<style scoped>
/* css */
</style>
