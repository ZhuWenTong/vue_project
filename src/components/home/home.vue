<template>
    <div id="wrap-content">
        <div class="content">
            <div v-for="item in items" class="rate">
                <span>{{item.name}}</span>
                <Common @getrate='getrateVal' :name='item.name' :num='item.num'></Common>
            </div>
            <p>{{msg}}</p>
            <ul>
                <li v-for="item in items">{{item.name}}</li>
            </ul>
            <el-button @click="show = !show" type="primary">Click Me</el-button>

            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-fade-in-linear">
                    <div v-show="show" class="transition-box">.el-fade-in-linear
                        <span class="el-icon-info"></span>
                    </div>
                </transition>
                <transition name="el-fade-in">
                    <div v-show="show" class="transition-box">.el-fade-in</div>
                </transition>
            </div>
            
            <router-link :to="{name: 'reg', params: {p: 'reg'}}">注册</router-link>
            <router-link :to="{name: 'login', params: {p: 'login'}}">登录</router-link>
            <router-view></router-view>
            <Page :current-page="currentPage" :all-num="allNum" @currentPage='pagechange'></Page>
        </div>
    </div>
</template>
<script>
    import Common from '../common/common.vue';
    import Page from '../common/page.vue';
    import {unique, delRepeatArr} from '../../assets/public.js';
    export default {
        data() {
            return {
                msg: "Home",
                items: [{
                    name: "zhangsan",
                    num: 4
                }, {
                    name: "lisi",
                    num: 3
                }],
                show: true,
                currentPage: 1,
                allNum: 0,
                rateArr: [],
                percentage: 0,
                progressShow: true
            };
        },
        mounted() {
            this.requestData(1);
            console.log(delRepeatArr([1, 1, 2, 3, 3, 3]));

        },
        methods: {
            pagechange(val) {
            //    console.log(val)
                this.requestData(val);
            },
            requestData(val) {
                setTimeout(() => {
                    console.log(`ajax: 第${val}页数据`)
                    this.allNum = 800;
                }, 1000)
            },
            getrateVal(obj) {
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
                        if(i.name == j.name) {
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
            }
        },
        components: {
            Common,
            Page
        }
    };
</script>
<style lang="scss" scoped>
    @import '../../assets/common';
    
    #wrap-content {
        width: 100%;
        .content {
            width: 1600px;
            margin:0 auto;
        }
    }
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: $blue;
        text-align: center;
        color: $white;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
    .box {
        @include flexes(row, space-between, center);
    }
    .rate {
        @include flexes(row, flex-start, center);
        &>span {
            line-height: $li-height;
            margin-right: 10px;
        }
    }
    
</style>