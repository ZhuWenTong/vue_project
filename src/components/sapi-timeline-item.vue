<template>
    <div class="timelines">
        <div class="rect" :style="{left: (14 + parseFloat(width)) + 'px'}">
            <span></span>
        </div>
        <div class="line-left" :style="{width: width + 'px'}">
            <slot name="lineLeft"></slot>
        </div>
        <div class="line-right" :style="{width: 'calc(100% - ' + (70 + parseFloat(width)) + 'px)'}">
            <slot name="lineRight"></slot>
        </div>
        <div class="line" :style="{left: (20 + parseFloat(width)) + 'px'}"></div>
    </div>
</template>
<script>
export default {
    props: {
        width: {
            // 时间线左侧内容宽度
            type: Number,
            default: 100
        }
    }
}
</script>
<style lang="scss">
@import '../assets/common.scss';
.timelines {
    display: block;
    position: relative;
    overflow: hidden;
    .rect {
        @include flexes();
        position: absolute;
        top: 8px;
        left: 114px;
        z-index: 1;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color:  #a6baee;
        & > span {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #2153D4;
        }
    }
    .line-left {
        float: left;
        width: 100px;
        text-align: right;
        line-height: 22px;
        & > span:first-child {
            font-size: 14px;
            color: #475669;
            line-height: 20px;
        }

        & > span:nth-of-type(n + 2) {
            display: inline-block;
            width: 100%;
            font-size: 12px;
            color: #999;
            text-align: right;
            line-height: 14px;
        }
    }

    .line-right {
        float: right;
        width:  calc(100% - 150px);
        padding: 0 0 20px 20px;
        margin-right: 25px;
        text-align: left;
    }

    .line {
        position: absolute;
        left: 120px;
        z-index: 0;
        width: 1px;
        height: 100%;
        background: #DCE3EB;
    }
    &:first-child {
        .line {
            top: 8px;
        }
    }
    &:last-child {
        .line {
            height: 70px;
        }
    }
}
</style>
