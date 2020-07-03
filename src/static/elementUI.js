import {
    Collapse,
    Button,
    Rate,
    Pagination,
    Progress,
    Input,
    Card,
    Notification,
    Message,
    Table,
    TableColumn,
    Row,
    Col,
    Loading
} from 'element-ui'

const components = {
    install (Vue) {
        Vue.use(Collapse)
        Vue.use(Button)
        Vue.use(Rate)
        Vue.use(Pagination)
        Vue.use(Progress)
        Vue.use(Input)
        Vue.use(Card)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Loading)
        Vue.prototype.$notify = Notification
        Vue.prototype.$message = Message
    }
}
export default components
