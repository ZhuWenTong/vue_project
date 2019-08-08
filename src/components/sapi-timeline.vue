<template>
    <div class="sapi-timeline">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        model: [Array, String]
    },
    data () {
        return {
            timeLineModel: null
        }
    },
    methods: {
        init () {
            let model = this.model
            this.timeLineModel = Object.prototype.toString.call(model) === '[object String]' ? JSON.parse(model) : model
        }
    },
    created () {
        this.init()
    }
}
</script>
