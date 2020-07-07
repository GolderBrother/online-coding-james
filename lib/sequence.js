/**
 * 单例模式: Sequence
 */
class Sequence {
    constructor(stepIndex = 1) {
        // JS单例模式: 如果第一次实例化该类，就缓存下来，下次就直接使用缓存的实例
        if(!Sequence.SingletonInstance) {
            // stepIndex: 初始化步长值(每次累加值)
            this.stepIndex = stepIndex;
            this.curIndex = 0;
            Sequence.SingletonInstance = this;
        }
        return Sequence.SingletonInstance;
    }
    // 获取唯一值
    getIncreIndex() {
        this.curIndex += this.stepIndex;
        return this.curIndex;
    }
    next() {
        const index = this.getIncreIndex();
        return index;
    }
}
module.exports = Sequence;