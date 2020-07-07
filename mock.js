/**
 * mock数据
 */

// {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
const extensions = [
    { firstName: 'James', lastName: 'Zhang', ext: '', extType: 'DigitalUser' },
    { firstName: 'Robin', lastName: 'Li', ext: '', extType: 'VirtualUser' },
    { firstName: 'Pony', lastName: 'Ma', ext: '', extType: 'FaxUser' },
    { firstName: 'Jack', lastName: 'Ma', ext: '', extType: 'Dept' },
    { firstName: 'Dehua', lastName: 'Ma', ext: '', extType: 'AO' },
    { firstName: '瑞幸咖啡', lastName: '厦门', ext: '', extType: 'DigitalUser' },
    { firstName: '百度', lastName: '北京', ext: '', extType: 'VirtualUser' },
    { firstName: '腾讯', lastName: '深圳', ext: '', extType: 'FaxUser' },
    { firstName: '阿里巴巴', lastName: '杭州', ext: '', extType: 'Dept' },
    { firstName: '字节跳动', lastName: '北京', ext: '', extType: 'AO' }
];
const extensions2 = [
    { firstName: 'Dehua', lastName: 'Ma', ext: '', extType: 'AO' },
    { firstName: 'James', lastName: 'Zhang', ext: '', extType: 'DigitalUser' },
    { firstName: 'Robin', lastName: 'Li', ext: '', extType: 'VirtualUser' },
    { firstName: 'other', lastName: 'unknown', ext: '', extType: 'lalala' }
];

/**
  saleItems is an Array has each item has such format:
  {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
**/
const saleItems = [{
    month: 1, //[1-12],
    date: 1, //[1-31],
    transationId: "0101",
    salePrice: 11
}, {
    month: 1,
    date: 2,
    transationId: "0102",
    salePrice: 12
}, {
    month: 1,
    date: 3,
    transationId: "0103",
    salePrice: 13
}, {
    month: 2,
    date: 1,
    transationId: "0201",
    salePrice: 2
}, {
    month: 3,
    date: 1,
    transationId: "0301",
    salePrice: 3
}, {
    month: 4,
    date: 1,
    transationId: "0401",
    salePrice: 4
}, {
    month: 5,
    date: 1,
    transationId: "0501",
    salePrice: 5
}, {
    month: 6,
    date: 1,
    transationId: "0601",
    salePrice: 6
}, {
    month: 7,
    date: 1,
    transationId: "0701",
    salePrice: 7
}, {
    month: 8,
    date: 1,
    transationId: "0801",
    salePrice: 8
}, {
    month: 9,
    date: 1,
    transationId: "0901",
    salePrice: 9
}, {
    month: 10,
    date: 1,
    transationId: "1001",
    salePrice: 10
}, {
    month: 11,
    date: 1,
    transationId: "1101",
    salePrice: 11
}, {
    month: 12,
    date: 1,
    transationId: "1201",
    salePrice: 12
}];
module.exports = { extensions, extensions2, saleItems };