import FixedEltableHeader from '../directives/fixed-eltable-header'
import TransferDom from '../directives/transfer-dom'

const directives = {
    install (Vue) {
        Vue.directive('fixed-eltable-header', FixedEltableHeader)
        Vue.directive('transfer-dom', TransferDom)
        //全局自定义指令
        Vue.directive('pColor', {
            bind(el, binding) {
                el.style.color = binding.arg
            }
        })
    }
}
export default directives
