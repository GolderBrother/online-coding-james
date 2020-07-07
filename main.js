const ExtensionsSort = require('./lib/extensionsSort');
const Util = require('./lib/utils');
const QuarterData = require('./lib/quarterData');
const Sequence = require('./lib/sequence');
const { extensionsAttrs } = require('./model');
// const { extensions, saleItems } = require('./mock');

/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/
/**
 * 根据 "firstName" + "lastName" + "ext" 正序排序
 * @param {Array<{firstName: string, lastName: string, ext: string, extType: string}>} extensions 数据集合
 */
function sortExtensionsByName(extensions) {
  if (!extensions || !extensions.length) return [];
  const extSort = new ExtensionsSort(extensions);
  // 通过 "firstName" + "lastName" + "ext" ASC 来排序
  extensions.sort((a, b) => {
    return extSort.compareAttrs(a, b, extensionsAttrs);
  });

  return extensions;
}

/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.
**/
/**
 * 根据用户类型正序排序 DigitalUser < VitrualUser < FaxUser < AO < Dept.
 * @param {Array<{firstName: string, lastName: string, ext: string, extType: string}>} extensions 数据集合
 * @param {*} isAsc 
 */
function sortExtensionsByExtType(extensions, isAsc = true) {
  if (!extensions || !extensions.length) return [];
  let extSort = new ExtensionsSort(extensions);
  extensions.sort((a = {}, b = {}) => {
    return extSort.compareExtType(a.extType, b.extType, isAsc);
  });
  return extensions;
}

/**
  saleItems is an Array has each item has such format:
  {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
**/

/**
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
  	{quarter: 1, totalPrices: xxx, transactionNums: n},
  	{....}
  ]
**/

/**
 * 计算每个月的销售量总值
 * @param {Array<{quarter: number, totalPrices: number, transactionNums: number}>} saleItems 销售量数据
 */
function getSumByQuarter(saleItems) {
  const quarterData = new QuarterData(saleItems);
  // 获取每个月的销售量总值
  return quarterData.getSumByQuarter();
}

/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/
/**
 * 计算每个季度每个月的平均销售量
 * @param {*} saleItems 销售量集合数据
 * @param {*} digits 金额保留的小数位数
 */
function getAverageByQuarter(saleItems, digits = 2) {
  const quarterData = new QuarterData(saleItems, digits);
  // 获取每个季度每个月的平均销售量
  return quarterData.getAverageByQuarter();
}

/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;
  
  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/

const sequence1 = new Sequence();
const sequence2 = new Sequence();
// console.log(sequence1.next()); // 1
// console.log(sequence1.next()); // 2
// console.log(sequence2.next()); // 3
// console.log(sequence2.next()); // 4

/**
  Question 6:
  AllKeys: 0-9;
  usedKeys: an array to store all used keys like [2,3,4];
  We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/

/**
 * 获取不同的key
 * @param {number} allKeys key最大范围值
 * @param {Array<number>} usedKeys 使用过的key
 */
function getUnUsedKeys(allKeys = 9, usedKeys = []) {
  const utils = new Util();
  // 如果传入的是数值，则创建一个数组，这个数组的每一项是从 0-allKeys 之间(包含)的数字
  utils.isNumber(allKeys) ? allKeys = utils.createArray(allKeys) : null;
  if (utils.isArray(allKeys)) {
    const set = new Set(usedKeys);
    return allKeys.filter(key => !set.has(key));
  } else {
    console.error('ERROR: allKeys should be an array or number');
  }
}

module.exports = {
  sortExtensionsByName,
  sortExtensionsByExtType,
  getSumByQuarter,
  getAverageByQuarter,
  getUnUsedKeys,
};