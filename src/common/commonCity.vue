<template>
    <div class="city-selector city-wap " v-show="show" :class="{'top-in': show}">
        <div class="city-title">
            选择城市
            <div class="btn-close" role="button" aria-label="关闭" @click="close">✕</div>
        </div>
        <div class="search">
            <input @input="search" type="text" v-model.trim="searchName" placeholder="搜索条件">
        </div>
        <!-- 城市列表 -->
        <div class="city-list" ref="cityList">
            <!-- 热门城市 -->
            <div :ref="'city-hot'" class="clearfix">
                <p id="hot">热门</p>
                <ul>
                    <li @click="selectCity(item)" v-for="(item, index) in hotCities" :key="index">{{item.name}}</li>
                </ul>
            </div>
            <!-- 所有城市 -->
            <div :ref="'city-' + item.idx" v-for="(item,index) in cityData.cityList" :key="index" class="clearfix">
                <p :id="item.idx">{{item.idx}}</p>
                <ul>
                    <li @click="selectCity(cell)" v-for="(cell, idx) in item.cities" :key="idx">{{cell.name}}</li>
                </ul>
            </div>
        </div>
        <!-- 字母筛选表 -->
        <div class="city-index left-in" ref="filterCity">
            <ul>
                <li class="index-item" :data-index="'hot'" >热门</li>
                <li class="index-item" 
                    :data-index="item.idx" 
                    v-for="(item,index) in cityData.cityList" 
                    :key="index">{{ item.idx }}</li>
            </ul>
        </div>
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
                listEle: null,  //城市列表元素
                currentCity: null,
                searchName: '',  //搜索名称
                searchData: [],  
                //热门城市
                hotCities: [  
                    {name: '北京', pinyin: 'beijing'},
                    {name: '上海', pinyin: 'shanghai'},
                    {name: '广州', pinyin: 'guangzhou'},
                    {name: '西安', pinyin: 'xian'},
                    {name: '杭州', pinyin: 'zhangzhou'},
                    {name: '深圳', pinyin: 'shenzhen'},
                    {name: '苏州', pinyin: 'suzhou'},
                    {name: '苏州', pinyin: 'suzhou'},
                ],
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
           show () {
               return this.showCity
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
            close () {
                this.$emit('on-state-change', this.currentCity)
            },
            scrollToCity(e) {
                let self = this;
                e.preventDefault();
                e.stopPropagation();
                try {
                    let curTouch = e.touches[0]
                    let ele = document.elementFromPoint(curTouch.pageX, curTouch.pageY);
                    // console.log(ele.dataset)
                    let dataIndex = ele.dataset.index;
                    let current = self.$refs['city-' + ele.dataset.index];
                    let anchor = null;
                    if (dataIndex == 'hot') {
                        anchor = current;
                    } else {
                        anchor = current[0];
                    }
                    anchor && (this.listEle.scrollTop = anchor.offsetTop);
                } catch (error) {
                    
                }
            },
            selectCity (item) {
                this.currentCity = item;
                this.close();
            },
            search (e) {     console.log()
                this.searchData = [];
                this.cityData.cityList.forEach(item => {
                    item.cities.forEach(cell => {
                        if (this.searchName && cell.pinyin.includes(this.searchName)) {
                            this.searchData.push(cell)
                        }
                    })
                })
                console.log(this.searchData)
            }
       },
   }
</script>
<style scoped>
/* css */
</style>
