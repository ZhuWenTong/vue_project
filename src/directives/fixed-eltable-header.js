import utils from '../static/utils'

// 作用于el-table固定表头
// 实现过程：滚动过程判断表头位置，根据位置状态重写部分元素的样式实现
export default {
    inserted (el, binding, vnode) {
        let opts = binding.value || {}
        let ele = window
        if (vnode.context.$root.$pageBody || opts.scroller || ele) {
            const header = new FixedHeader({
                scroller: vnode.context.$root.$pageBody || opts.scroller || ele,
                tableEl: el,
                top: opts.hasOwnProperty('top') ? opts.top : 50
            })

            el._fixedHeader = header
        }
    },
    componentUpdated (el, binding, vnode) {
        let opts = binding.value || {}
        if (!el._fixedHeader && (vnode.context.$root.$pageBody || opts.scroller)) {
            const header = new FixedHeader({
                scroller: vnode.context.$root.$pageBody || opts.scroller,
                tableEl: el,
                top: opts.hasOwnProperty('top') ? opts.top : 50
            })

            el._fixedHeader = header
        }
        if (el._fixedHeader) {
            el._fixedHeader.top = opts.hasOwnProperty('top') ? opts.top : 50
            el._fixedHeader.update()
        }
    },
    unbind (el) {
        if (el._fixedHeader) {
            el._fixedHeader.destory()
            el._fixedHeader = null
        }
    }
}

/**
 * 固定表头
 * @param {object} opts 参数
 */
function FixedHeader (opts) {
    // 滚动容器
    console.log(opts)
    this.scroller = opts.scroller
    if (utils.isUndefined(this.scroller)) {
        this.scroller = window
    } else if (utils.isString(this.scroller)) {
        this.scroller = utils.query(this.scroller)

        if (utils.isNull(this.scroller)) {
            throw new Error('未找到指令fixed-eltable-header制定的元素')
        }
    }

    // 需固定表格元素
    this.tableEl = opts.tableEl
    // 距离顶部位置
    this.top = opts.top || 0
    this.timer = null
    this.init()
}

FixedHeader.prototype = {
    init () {
        const _this = this
        this.scrollListener = function () {
            _this.scroll()
        }
        this.scroller.addEventListener('scroll', this.scrollListener, false)
    },
    scroll () {
        const _this = this
        if (!this.timer) {
            this.timer = setTimeout(function () {
                _this.update()
                _this.timer = null
            }, 100)
        }
    },
    update () {
        let tbPos = this.tableEl.getBoundingClientRect()
        this.header = utils.query('.el-table__header-wrapper', this.tableEl)
        this.fixedHeader = utils.query('.el-table__fixed .el-table__fixed-header-wrapper', this.tableEl)
        if (this.fixedHeader) {
            this.fixedHeaderWrap = this.fixedHeader.parentNode
        }
        this.fixedRightHeader = utils.query('.el-table__fixed-right .el-table__fixed-header-wrapper', this.tableEl)
        if (this.fixedRightHeader) {
            this.fixedRightHeaderWrap = this.fixedRightHeader.parentNode
            this.fixedRightHeaderTable = utils.query('.el-table__header', this.fixedRightHeader)
        }
        let state = {}
        if (tbPos.top - this.top < 0 &&
            tbPos.bottom - this.top - this.header.offsetHeight > 0) {
            state.overTop = true
        } else {
            state.overTop = false
        }

        this.updatePos(state)
    },
    updatePos (state) {
        let headerStyle
        let tableStyle
        let fixedHeaderStyle
        let fixedRightHeaderStyle
        let fixedRightHeaderTableStyle

        // 非固定表头定位、固定表头定位
        if (this.state && this.state.overTop !== state.overTop || !this.state && state.overTop) {
            this.state = state

            headerStyle = {
                position: state.overTop ? 'fixed' : 'static',
                top: state.overTop ? this.top + 'px' : 'auto',
                width: state.overTop ? this.tableEl.offsetWidth + 'px' : 'auto',
                zIndex: state.overTop ? 2 : 'auto'
            }
            
            tableStyle = {
                paddingTop: state.overTop ? this.header.offsetHeight + 'px' : 0
            }

            if (this.fixedHeader) {
                let pos = this.fixedHeaderWrap.getBoundingClientRect()
                fixedHeaderStyle = {
                    position: state.overTop ? 'fixed' : 'inherit',
                    top: state.overTop ? this.top + 'px' : 'auto',
                    width: state.overTop ? (pos.right - pos.left) + 'px' : 'auto',
                    left: state.overTop ? pos.left + 'px' : 'auto',
                    overflow: state.overTop ? 'hidden' : 'initial',
                    // height: state.overTop ? 'auto' : 'auto',
                    zIndex: state.overTop ? 5 : 'auto'
                }
            }

            if (this.fixedRightHeader) {
                let pos = this.fixedRightHeaderWrap.getBoundingClientRect()
                fixedRightHeaderStyle = {
                    position: state.overTop ? 'fixed' : 'inherit',
                    top: state.overTop ? this.top + 'px' : 'auto',
                    width: state.overTop ? (pos.right - pos.left) + 'px' : 'auto',
                    left: state.overTop ? pos.left + 'px' : 'auto',
                    overflow: state.overTop ? 'hidden' : 'initial',
                    // height: state.overTop ? '44px' : 'auto',
                    zIndex: state.overTop ? 5 : 'auto'
                }

                fixedRightHeaderTableStyle = {
                    position: state.overTop ? 'absolute' : 'static',
                    right: state.overTop ? '1px' : 'auto'
                }
            }

            utils.setStyle(this.header, headerStyle)
            utils.setStyle(this.tableEl, tableStyle)

            if (this.fixedHeader) {
                utils.setStyle(this.fixedHeader, fixedHeaderStyle)
            }

            if (this.fixedRightHeader) {
                utils.setStyle(this.fixedRightHeader, fixedRightHeaderStyle)
                utils.setStyle(this.fixedRightHeaderTable, fixedRightHeaderTableStyle)
            }
        }
    },
    destory () {
        this.scroller.removeEventListener('scroll', this.scrollListener)
        if (this.timer) {
            window.clearTimeout(this.timer)
        }
        this.scroller = null
        this.tableEl = null
    }
}
