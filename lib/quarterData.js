/**
 * 计算销售量数据类
 */
class QuarterData {
    constructor(saleItems = [], digits = 2) {
        // 销售量数据
        this.saleItems = saleItems;
        //金额保留的小数位数
        this.digits = digits;
    }

    /**
     * 计算每个月的销售量总值
     */
    getSumByQuarter() {
        if (!this.saleItems || !this.saleItems.length) return [];
        const sumMap = {};
        if (Array.isArray(this.saleItems)) {
            for (const item of this.saleItems) {
                if(!item) continue;
                // 首先，需要计算出当前月份所属的季度
                const quarter = this.getQuarterByMonth(item.month);
                // 然后设置季度数据，如果已经有了就累加
                if (sumMap[quarter]) {
                    sumMap[quarter].totalPrices += item.salePrice;
                    sumMap[quarter].transactionNums++;
                } else { // 如果没有就初始化一个
                    sumMap[quarter] = {
                        quarter, totalPrices: item.salePrice, transactionNums: 1
                    }
                }
            }
        }
        // 最后，获取对象数组
        return Object.values(sumMap);
    }

    /**
     * 计算每个季度每个月的平均销售量
     */
    getAverageByQuarter() {
        const digits = this.digits;
        const sumArr = this.getSumByQuarter();
        const result = sumArr.map(item => {
            const { quarter, totalPrices, transactionNums = 0 } = item || {};
            return {
                quarter, averagePrices: (totalPrices / transactionNums).toFixed(digits), transactionNums
            }
        });
        return result;
    }

    /**
     * 获取当前月份所在的季度
     * @param {*} month 当前月份
     */
    getQuarterByMonth(month) {
        return Math.ceil(month / 3);
    }
}

module.exports = QuarterData;