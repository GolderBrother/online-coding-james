/**
 * 常用工具类
 */
class Util {
    /**
     * 判断是否这个值为Number类型
     * @param {*} num 
     */
    isNumber(num) {
        return Object.prototype.toString.call(num) === `[object Number]`;
    }

    /**
     * 判断是否这个值为Array类型
     * @param {*} data 
     */
    isArray(data) {
        return Array.isArray(data);
    }

    /**
     * 基于给定的数值创建数组
     * @param {*} num 给定的数字
     */
    createArray(num = 9) {
        if(num <= 0) return [];
        const arr = [];
        for (let index = 0; index <= num; index++) {
            arr.push(index);
        }
        return arr;
    }
}

module.exports = Util;