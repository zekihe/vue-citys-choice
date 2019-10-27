<template>
    <div id="aaa">
       <div @click="showCity = true">切换城市</div>
       <cityChoice :showCity="showCity"></cityChoice> 
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
        },
    }
</script>
<style scoped>
/* css */
</style>
