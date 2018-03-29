<template>
    <div>
        <el-button @click='add'>{{num}}</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                num: 0
            }
        },
        methods: {
            add() {
                this.num++;
            }
        }
    }
</script>

