<template>
    <div class="example">
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
    </div>
</template>
<script>
import sapiTimeLine from '../../components/sapi-timeline'
import sapiTimeLineItem from '../../components/sapi-timeline-item'
export default {
    data () {
        return {}
    },
    components: {
        sapiTimeLine,
        sapiTimeLineItem
    },
    created () {
        console.log('do')
    }
}
</script>
<style lang="scss">
.example {
    width: 1600px;
    margin: 0 auto;
}
</style>
