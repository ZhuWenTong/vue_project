<template>
    <div class="qx-cascader" ref="qxCascader">
        <el-input size="small"
            v-model="cascaderName"
            @focus="handlerFocus"
            @input="handlerInput"
            @clear="handlerClear"
            :placeholder="placeholder"
            :clearable="clearable" />
        <div class="container"
            v-loading="panelLoading"
            v-show="visible">
            <cascader-panel :data="options" @change="change" :path="path" :value-map="cascaderMap" />
        </div>
        <div class="filters" v-show="isFilter">
            <cascader-filter :data="selectOptions" :filter-key="cascaderName" :value-map="cascaderMap" @change="change" ref="cascaderFilter" />
        </div>
    </div>
</template>
<script>
import cascaderPanel from './cascaderPanel'
import cascaderFilter from './cascaderFilter'
export default {
    props: {
        options: { // 数据源
            type: Array,
            default () {
                return []
            }
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        clearable: {
            type: Boolean,
            default: true
        },
        loading: Boolean,
        value: [String, Number],
        valueMap: { // 映射关系
            type: Object,
            default () {
                return {
                    label: 'name',
                    value: 'id',
                    children: 'children',
                    path: 'depPath'
                }
            }
        }
    },
    data () {
        return {
            panelLoading: false,
            visible: false,
            cascaderName: '',
            cascaderValue: null,
            targetNode: null, // 部门id对应的树节点
            path: [], // 目标节点父子节点路径
            selectOptions: [], // 搜索时下拉框数据
            isFilter: false,
            cascaderMap: {
                label: 'name',
                value: 'id',
                children: 'children',
                path: 'depPath'
            }
        }
    },
    methods: {
        init () {
            if (this.cascaderValue) {
                this.findNode(this.options)
            }
            this.handlerSelectOptions(this.options)
        },
        handlerFocus () {
            this.visible = true
            this.panelLoading = this.loading
            if (this.path.length) {
                this.isFilter = false
            }
        },
        handlerInput () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.isFilter = this.cascaderName !== ''
                this.visible = !this.isFilter
                if (!this.cascaderName) {
                    this.$emit('input', '')
                    this.$emit('change', {})
                    this.path = []
                }
            }, 300)
        },
        handlerClear () {
            let { cascaderFilter } = this.$refs
            this.$emit('input', '')
            this.$emit('change', {})
            this.path = []
            this.cascaderName = ''
            cascaderFilter.activeName = ''
            cascaderFilter.activeId = ''
            this.targetNode = null
        },
        change (item) {
            console.log(item)
            let { label, value, children, path } = this.cascaderMap
            if (!item[children] || !item[children].length) {
                this.visible = false
            }
            this.cascaderName = item[label]
            this.$emit('input', item[value])
            this.path = item[path].substring(1).split('.').map(i => parseFloat(i))
            this.isFilter = false
            this.$emit('change', item)
        },
        closeBox (e) {
            let { label } = this.cascaderMap
            let { qxCascader, cascaderFilter } = this.$refs
            if (qxCascader && !qxCascader.contains(e.target)) {
                this.visible = false
                this.isFilter = false
                if (!cascaderFilter.activeId && this.targetNode) {
                    this.cascaderName = this.targetNode[label] || ''
                    this.path = []
                }
                if (!this.cascaderName) {
                    this.cascaderName = cascaderFilter.activeName
                }
	        }
        },
        // 递归找到 部门id对应的对象
        findNode (data) {
            let { label, value } = this.cascaderMap
            for (let i = 0, len = data.length; i < len; i++) {
                if (data[i][value] === this.cascaderValue) {
                    this.targetNode = data[i]
                    this.cascaderName = data[i][label]
                    this.path = data[i].depPath.substring(1).split('.').map(i => parseFloat(i))
                } else if (data[i].children && data[i].children.length) {
                    this.findNode(data[i].children)
                }
            }
        },
        handlerSelectOptions (data) {
            data.forEach(i => {
                this.selectOptions.push(i)
                if (i.children && i.children.length) {
                    this.handlerSelectOptions(i.children)
                }
            })
        }
    },
    components: {
        cascaderPanel,
        cascaderFilter
    },
    watch: {
        loading (val) {
            this.panelLoading = val
            if (!val) {
                this.init()
            }
        },
        value: {
            handler (val) {
                this.cascaderValue = val
            },
            immediate: true
        }
    },
    created () {
        Object.assign(this.cascaderMap, this.valueMap)
    },
    mounted () {
        this.$nextTick(function() {
            document.addEventListener('click', e => {
                this.closeBox(e)
            })
        })
    },
    beforeDestroy () {
        document.removeEventListener('click', e => {
            this.closeBox(e)
        })
    }
}
</script>
<style lang="scss">
@mixin triangle {
    position: relative;
    &::before {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -15px;
        left: 30px;
        padding: 0;
        border-bottom: 8px solid #FFFFFF;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        display: block;
        content: '';
        z-index: 200;
    }
    &::after {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -17px;
        left: 29px;
        padding: 0;
        border-bottom: 9px solid #E4E7ED;
        border-top: 9px solid transparent;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        display: block;
        content: '';
        z-index: 150;
    }
} 
.qx-cascader {
    position: relative;
    width: 200px;
    .container {
        width: 252px;
        height: 200px;
        background: #fff;
        top: 100%;
        transform: translateY(10px);
        @include triangle;
        position: absolute;
        z-index: 101;
        & > .cascader-panel {
            & > .panel-main {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                padding: 4px 0;
            }
        }
    }
    .filters {
        width: 100%;
        border: 1px solid #E4E7ED;
        border-radius: 4px;
        margin-top: 10px;
        background: #ffffff;
        @include triangle;
        position: absolute;
        z-index: 100;
    }
}
</style>
