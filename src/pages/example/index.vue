<template>
    <div class="example">
        <el-row>
            <el-col :span="8">
                <el-card shadow="hover">
                    <sapi-time-line>
                        <sapi-time-line-item v-for="(item, index) in 3" :key="index" :width='60'>
                            <div slot="lineLeft">
                                <p>项目{{item}}</p>
                            </div>
                            <div slot="lineRight">
                                <p>俱往矣</p>
                                <p>数风流人物</p>
                                <p>还看今朝</p>
                            </div>
                        </sapi-time-line-item>
                    </sapi-time-line>
                </el-card>
            </el-col>
            <el-col :span="16">
                <tong-cascader :options="cascaderOptions" :value-map="valueMap" v-model="cascaderValue" :loading="cascaderLoading" />
                <div style="height: 300px;"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import sapiTimeLine from '../../components/sapi-timeline'
import sapiTimeLineItem from '../../components/sapi-timeline-item'
import cascader from '../../components/Cascader/index'
export default {
    data () {
        return {
            cascaderOptions: [],
            valueMap: {
                label: 'label',
                value: 'value',
                children: 'children',
                path: 'path'
            },
            cascaderValue: '',
            cascaderLoading: false
        }
    },
    components: {
        sapiTimeLine,
        sapiTimeLineItem,
        'tong-cascader': cascader
    },
    methods: {
        init () {
            this.cascaderLoading = true
            setTimeout(() => {
                this.loadData()
                this.cascaderLoading = false
            }, 3000)
        },
        loadData () {
            this.cascaderOptions = [{
                label: '大学',
                value: 1,
                path: '.1',
                children: [{
                    label: '辽宁',
                    value: 11,
                    path: '.1.11',
                    children: [{
                        label: '鞍山',
                        value: 111,
                        path: '.1.11.111',
                        children: [{
                            label: '辽宁科技大学',
                            value: 1111,
                            path: '.1.11.111.1111',
                            children: []
                        }]
                    }, {
                        label: '沈阳',
                        value: 112,
                        path: '.1.11.112',
                        children: [{
                            label: '东北大学',
                            value: 1121,
                            path: '.1.11.112.1121',
                            children: []
                        }]
                    }, {
                        label: '大连',
                        value: 113,
                        path: '.1.11.113',
                        children: [{
                            label: '大连理工大学',
                            value: 1131,
                            path: '.1.11.113.1131',
                            children: []
                        }]
                    }]
                }]
            }, {
                label: '高中',
                value: 2,
                path: '.2',
                children: [{
                    label: '江西',
                    value: 21,
                    path: '.2.21',
                    children: [{
                        label: '上饶',
                        value: 211,
                        path: '.2.21.211',
                        children: [{
                            label: '致远高中',
                            value: 2111,
                            path: '.2.21.211.2111',
                            children: []
                        }]
                    }]
                }]
            }]
        }
    },
    created () {
        this.init()
    }
}
</script>
<style lang="scss">
.example {
    width: 1600px;
    margin: 0 auto;
}
</style>
