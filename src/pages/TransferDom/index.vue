<template>
    <div>
        <div class="from-child"></div>
        <p style="line-height: 40px;text-align: center;">----------父组件分割线----------</p>
        <z-main />
    </div>
</template>
<script>
import main from './main'
export default {
    components: {
        'z-main': main
    }
}
</script>
