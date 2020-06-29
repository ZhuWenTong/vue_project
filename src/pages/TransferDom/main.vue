<template>
    <div class="z-main">
        <div v-transfer-dom="'.from-child'" style="line-height: 40px;text-align: center;background: #409EFF;">子组件向父组件写入的dom</div>
        <div>我是组件main</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.z-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        line-height: 40px;
    }
}
</style>
