/**
 * @param {Array} arr
 * @description 对象数组去重
 */
class unique {
    constructor(arr) {
        this.arr = arr;
        this.init();
    }
    init() {
        let arr = this.arr,
            a = [],
            b = [];
        arr.forEach((i) => {
            a.push(JSON.stringify(i));
        })
        a = Array.from(new Set(a));
        a.forEach((i) => {
            b.push(JSON.parse(i));
        })
        this.arr = b;
    }
}
/**
 * @param {Array} arr
 * @description 数组去重
 */
function delRepeatArr(arr) {
    return Array.from(new Set(arr));
}
export { unique, delRepeatArr };