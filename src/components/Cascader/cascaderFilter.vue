<template>
    <div class="cascader-filter">
        <div v-if="filterData.length" class="filter-list">
            <div v-for="item in filterData" :key="item[valueMap.value]" :class="{'active': item[valueMap.value] === activeId}" @click="handleClick(item)">
                <p>
                    <i class="el-icon-check" v-show="item[valueMap.value] === activeId"></i>
                </p>
                <span>{{item[valueMap.label]}}</span>
            </div>
        </div>
        <div v-else class="no-data">暂无匹配数据</div>
    </div>
</template>
<script>
export default {
    props: {
        data: Array,
        filterKey: [String, Number],
        valueMap: Object
    },
    data () {
        return {
            filterData: [],
            activeId: '',
            activeName: null
        }
    },
    methods: {
        init () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.handlerFilterData()
            }, 300)
        },
        handlerFilterData () {
            let { label } = this.valueMap
            let list = []
            if (this.filterKey) {
                this.data.forEach(i => {
                    if (i[label].includes(this.filterKey)) {
                        list.push(i)
                    }
                })
            }
            this.filterData = list
        },
        handleClick (item) {
            let { label, value } = this.valueMap
            this.activeId = item[value]
            this.activeName = item[label]
            this.$emit('change', item)
        }
    },
    watch: {
        filterKey () {
            this.init()
        }
    }
}
</script>
<style lang="scss">
@mixin flex($direction: row, $justifyContent: center, $alignItems: center) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justifyContent;
    align-items: $alignItems;
}
@mixin scrollbar {
    &::-webkit-scrollbar-track-piece {
        background-color:#f8f8f8;
        border-radius: 4px;
    }
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color:#dddddd;
        background-clip: padding-box;
        min-height: 28px;
        border-radius: 4px;
    }
}
.cascader-filter {
    max-height: 200px;
    overflow: auto;
    @include scrollbar;
    .filter-list {
        div {
            padding-right: 10px;
            line-height: 40px;
            cursor: pointer;
            color: #606266;
            @include flex(row, flex-start, center);
            p {
                width: 20px;
                text-align: center;
                margin: 0;
            }
            &:hover {
                background: #EBEEF5;
            }
            &.active {
                color: #409EFF;
                font-weight: bold;
            }
        }
    }
    .no-data {
        line-height: 50px;
        text-align: center;
        color: #c0c4cc;
    }
}
</style>
