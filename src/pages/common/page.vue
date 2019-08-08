<template>
    <el-pagination background @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="prev, pager, next" :total="allNum"></el-pagination>
</template>
<script>
    export default {
        props: {
            currentPage: Number,
            allNum: Number
        },
        data () {
            return {
                pageSize: 20
            }
        },
        mounted () {
            
        },
        methods: {
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`)
                this.$emit('currentPage', val)
            }
        }
    }
</script>
