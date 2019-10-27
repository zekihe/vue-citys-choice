<template>
    <div class="city-selector city-wap " v-show="showCity" :class="{'top-in': showCity}">
        <div class="city-title">
            选择城市
            <div class="btn-close" role="button" aria-label="关闭" @click="showCity = !showCity">✕</div>
        </div>
        <div class="search">
            <input type="text" placeholder="搜索条件">
        </div>
        <div class="city-list" ref="cityList">
            <div :ref="'city-' + item.idx" v-for="(item,index) in cityData.cityList" :key="index" class="clearfix">
                <p :id="item.idx">{{item.idx}}</p>
                <ul>
                    <li v-for="cell in item.cities">{{cell.name}}</li>
                </ul>
            </div>
        </div>
        <div class="city-index left-in" ref="filterCity">
            <ul>
                <li class="index-item" :data-index="item" v-for="(item,index) in cityData.alphabet" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="active-key" v-if="activeKey">{{activeKey}}</div>
    </div>
</template>
<script>
    import '../assets/style/index.scss'
    import cityData from './citys.js'
    export default {
       name: 'cityChoice',
       data () {
            return {
                cityData: cityData,
                dataList: [],
                activeKey: '',
                upCityList: '',
                listEle: null,  //城市列表元素
            }
       },
       components: {},
       props: {
           showCity: {
               type: Boolean,
               default: false,
           }
       },
       computed: {
            cityListData(){
                let map = {}; // 处理过后的数据对象
                let temps = []; // 临时变量
                this.dataList.map(item=>{
                    if(item.airportCode){
                        let ekey = item.airportCode.charAt(0).toUpperCase(); // 根据key值的第一个字母分组，并且转换成大写
                        temps = map[ekey] || []; // 如果map里面有这个key了，就取，没有就是空数组
                        temps.push({
                            airportCode: item.airportCode,
                            airportName: item.cityName
                        });
                        map[ekey] = temps;
                    }
                })
                let list = [];
                for(let gkey in map) {
                    list.push({
                        ckey: gkey,
                        cityList: map[gkey]
                    })
                }

                list = list.sort((li1, li2)=> li1.ckey.charCodeAt(0) - li2.ckey.charCodeAt(0));
                return list;
            },
            cityListKey(){
                let cityListKey = [];
                this.cityListData.map(item=>{
                    cityListKey.push(item.ckey);
                })
                return cityListKey;
            }
       },
       created () {
       },
       mounted () {
           console.log(this.$refs)
           this.$refs.filterCity.addEventListener('touchstart', this.scrollToCity);
           this.$refs.filterCity.addEventListener('touchmove', this.scrollToCity);
           this.listEle = this.$refs.cityList;
       },
       methods: {
            scrollToCity(e) {
                let self = this;
                e.preventDefault();
                e.stopPropagation();
                try {
                    let curTouch = e.touches[0]
                    let ele = document.elementFromPoint(curTouch.pageX, curTouch.pageY);
                    // console.log(ele.dataset)
                    let anchor = self.$refs['city-' + ele.dataset.index][0];
                    anchor && (this.listEle.scrollTop = anchor.offsetTop)
                } catch (error) {
                    
                }
            },
       },
   }
</script>
<style scoped>
/* css */
</style>
