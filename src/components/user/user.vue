<template>
    <div id="wrap-user">
        <div class="user">
            <Progress :percentage="percentage" :progressShow="progressShow" @getPercentage="getPercentageVal"></Progress>
            <div class="rate" v-for="item in items">
                <span>{{item.city}}</span>
                <Common @getrate='getrateVal' :name="item.city" :num="item.num"></Common>
            </div>
            <p>{{msg}}</p>
            <!-- <Page :from='pagefrom' :current-page="currentPage" @currentPage='pagechange'></Page> -->
            <ul>
                <li v-for="item in items" :key="item.city">{{item.city}}</li>
            </ul>
            <ul>
                <li v-for="(item, index) in items" :key="item.city" @click="getInfo(item, $event)">{{index}}---{{item.city}}</li>
            </ul>
            <el-button @click.once='addCity'>添加</el-button>
            <!-- <ul>
                <li v-for="item in obj">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item, key) in obj">{{key}} --- {{item}}</li>
            </ul>
            <ul>
                <li v-for="(item, key, index) in obj">{{index}}---{{key}}---{{item}}</li>
            </ul> -->
            <Page :current-page="currentPage" :all-num='allNum' @currentPage='pagechange'></Page>
        </div>
    </div>
</template>
<script>
    import Common from '../common/common';
    import Page from '../common/page';
    import Progress from '../common/progress';
    import {unique} from '../../assets/public';
    export default {
        data() {
            return {
                msg: 'User',
                items: [{
                    city: '深圳',
                    num: 5
                }, {
                    city: '上海',
                    num: 4
                }, {
                    city: '北京',
                    num: 3
                }],
                obj: {
                    name: 'maliu',
                    age: '20',
                    sex: 'man'
                },
                currentPage: 1,
                allNum: 0,
                rateArr: [],
                percentage: 0,
                progressShow: true
            }
        },
        mounted() {
            let p = new Promise((resolve, reject) => {
                resolve(this)
            })
            p.then(this.add).then(this.min).catch(err => console.log(err))
            this.requestUserData(1);
        },
        methods: {
           /**
            * @param {Number} val 页码
            * @description 页码变化 将当前页码传入请求数据函数中 
            */
            pagechange(val) {
                //console.log(val);
                this.requestUserData(val);
            },
            /**
             * @param {Number} val 页码
             * @description 模拟请求数据的函数
             */
            requestUserData(val) {
                //this.currentPage = val;
                console.log(`ajax请求 第${val}页数据`);
                setTimeout(() => {
                    this.allNum = 500;
                }, 300)
            },
            add(obj) {
                return new Promise((resolve, reject) => {
                    console.log(obj.obj.name);
                    resolve(obj);
                })
            },
            min(obj) {
                return new Promise((resolve, reject) => {
                    console.log(obj.obj.age);
                })
            },
            /**
             * @param {Object} val 评分数
             * @description 得到当前评分的对象
             */
            getrateVal(obj) {
                //console.log(obj)
                if(this.rateArr.length != 0) {
                    this.rateArr.forEach((i) => {
                        if(i.name == obj.name) {
                            i.val = obj.val;
                        } else {
                            this.rateArr.push(obj);
                        }
                    })
                } else {
                    this.rateArr.push(obj)
                }
                this.rateArr = new unique(this.rateArr).arr;
                //console.log(this.rateArr);
                this.items.some((i) => {
                    this.rateArr.some((j) => {
                        if(i.city == j.name) {
                            i.num = j.val;
                        }
                    })
                })
                console.log(this.items);
            },
            getPercentageVal(num) {
                this.percentage = num + 1;
                if(num >= 99) {
                    this.progressShow = false;
                }
            },
            getInfo(data, event) {
                console.log(data, event)
            },
            addCity() {
                // this.items.unshift({
                //     city: '杭州',
                //     num: 6
                // })
                // 不允许修改
                // this.items[1] = {
                //     city: 'gz',
                //     num: 9
                // }
                // 允许修改
                //this.items[1].city = '广州'
                //this.items.splice(1, 1, {city: 'gz', num: 3})
                this.$set(this.items, 1, {city: 'sy', num: 2});
                //数组增加属性
                this.$set(this.obj, 'num', 200)
                //console.log(this.obj)
                Object.assign(this.obj, {
                    height: 175
                })
                console.log(this.obj)
            }
        },
        components: {
            Common,
            Page,
            Progress
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/common';
    #wrap-user {
        width: 100%;
        margin-top: 40px;
        .user {
            width: 1600px;
            margin: 0 auto;
        }
    }
    ul {
        @extend .miniborder;
        li {
            color: $general-color;
            &:hover {
                color: $white;
                background: $blue;
            }
        }
    }
    .rate {
        height: $li-height;
        @include flexes(row, flex-start, center);
        &>span {
            margin-right: 10px;
        }
    }
</style>