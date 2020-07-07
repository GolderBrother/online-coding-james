/**
 * 销售量数据排序类
 */
class ExtensionsSort {
    constructor(data = []) {
        this.data = data;
        // extTypeMap对应的key越大优先级越高
        // DigitalUser < VitrualUser < FaxUser < AO < Dept
        this.extTypeMap = new Map([
            ['DigitalUser', 1],
            ['VirtualUser', 2],
            ['FaxUser', 3],
            ['AO', 4],
            ['Dept', 5]
        ]);
    }

    /**
     * 跟据extType来比较
     * @param {string} type1 类型1
     * @param {string} type2 类型2
     * @param {boolean} isAsc 是否正序
     */
    compareExtType(type1, type2, isAsc) {
        if (!this.extTypeMap.has(type1) || !this.extTypeMap.has(type2)) {
            console.warn(`extType can only has 'DigitalUser', 'VirtualUser','FaxUser','Dept','AO'`);
            return 0;
        }

        return this.compare(this.extTypeMap.get(type1), this.extTypeMap.get(type2), isAsc);
    }

    /**
     * 属性比较
     * @param {object} el1 数据项1
     * @param {object} el2 数据项2
     * @param {Array<object>} attrs 属性配置项 [{key: 'firstName', isAsc: true}]
     */
    compareAttrs(el1, el2, attrs) {
        const result = [];
        for (let i = 0, len = attrs.length; i < len; i++) {
            const sortVal = this.compare(el1[attrs[i].key], el2[attrs[i].key], attrs[i].isAsc);
            result.push(sortVal);
            if (sortVal === 1 || sortVal === -1) break;
        }
        for (let j = 0; j < result.length; j++) {
            if (result[j] === 1 || result[j] === -1) return result[j];
        }
        return 0;
    }

    /**
     * 比较字符顺序，支持中文
     * @param {string} val1 数据值1
     * @param {string} val2 数据值2
     * @param {boolean} isAsc 是否正序
     */
    compare(val1, val2, isAsc) {
        const sort = String(val1).localeCompare(String(val2));
        if (sort > 0) {
            return (isAsc ? 1 : -1);
        } else if (sort < 0) {
            return (isAsc ? -1 : 1);
        } else {
            return 0;
        }
    }

}

module.exports = ExtensionsSort;