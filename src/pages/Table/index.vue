<template>
    <div>
        <p style="line-height: 40px;text-indent: 20px;">Table不设置height属性 页面滚动头部固定</p>
        <el-table :data="tableData" v-fixed-eltable-header>
            <el-table-column prop="name" label="name" fixed="left" width="300"></el-table-column>
            <el-table-column prop="age" label="age" width="600"></el-table-column>
            <el-table-column prop="id" label="id" width="600"></el-table-column>
            <el-table-column prop="phone" label="phone" width="900"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tableData: []
        }
    },
    methods: {
        loadData () {
            for (let i = 0, len = 50; i < len; i ++) {
                this.tableData.push({
                    name: i,
                    age: i,
                    id: i,
                    phone: i
                })
            }
        }
    },
    created () {
        this.loadData()
    }
}
</script>

