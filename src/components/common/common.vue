<template>
    <div>
        <el-rate show-text @change="rateChange" v-model="changeNum"></el-rate>
    </div>
</template>
<script>
    export default {
        props: {
            name: String,
            num: Number
        },
        computed: {
            changeNum: {
                get() {
                    return this.num;
                },
                set() {

                }
            }
        },
        data() {
            return {

            }
        },
        methods: {
            rateChange(val) {
                console.log(val, this.name);
                this.$emit('getrate', {val, name:this.name});
            }
        }
    }
</script>