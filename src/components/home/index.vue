<template>
    <div id="aaa">
       <div>切换城市</div>
       <cityChoice></cityChoice> 
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
