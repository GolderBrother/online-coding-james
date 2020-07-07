const { extensions, extensions2, saleItems } = require('./mock');
const { sortExtensionsByName, sortExtensionsByExtType, getSumByQuarter, getAverageByQuarter, getUnUsedKeys } = require('./main');
const Sequence = require('./lib/sequence');

// Question 1
describe('Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC', () => {
    test('test sortExtensionsByName', () => {
        expect(sortExtensionsByName()).toEqual([]);
        expect(sortExtensionsByName(extensions)).toEqual([{ firstName: 'Dehua', lastName: 'Ma', ext: '', extType: 'AO' },
        { firstName: 'Jack', lastName: 'Ma', ext: '', extType: 'Dept' },
        {
            firstName: 'James',
            lastName: 'Zhang',
            ext: '',
            extType: 'DigitalUser'
        },
        { firstName: 'Pony', lastName: 'Ma', ext: '', extType: 'FaxUser' },
        {
            firstName: 'Robin',
            lastName: 'Li',
            ext: '',
            extType: 'VirtualUser'
        },
        { firstName: '字节跳动', lastName: '北京', ext: '', extType: 'AO' },
        {
            firstName: '瑞幸咖啡',
            lastName: '厦门',
            ext: '',
            extType: 'DigitalUser'
        },
        {
            firstName: '百度',
            lastName: '北京',
            ext: '',
            extType: 'VirtualUser'
        },
        { firstName: '腾讯', lastName: '深圳', ext: '', extType: 'FaxUser' },
        { firstName: '阿里巴巴', lastName: '杭州', ext: '', extType: 'Dept' }]);
    });
});

// Question 2
describe(`Question 2: sort extensions by extType follow these orders ASC DigitalUser < VitrualUser < FaxUser < AO < Dept.`, () => {
    test('test sortExtensionsByExtType', () => {
        expect(sortExtensionsByExtType(extensions)).toEqual([{
            firstName: 'James',
            lastName: 'Zhang',
            ext: '',
            extType: 'DigitalUser'
        },
        {
            firstName: '瑞幸咖啡',
            lastName: '厦门',
            ext: '',
            extType: 'DigitalUser'
        },
        {
            firstName: 'Robin',
            lastName: 'Li',
            ext: '',
            extType: 'VirtualUser'
        },
        {
            firstName: '百度',
            lastName: '北京',
            ext: '',
            extType: 'VirtualUser'
        },
        { firstName: 'Pony', lastName: 'Ma', ext: '', extType: 'FaxUser' },
        { firstName: '腾讯', lastName: '深圳', ext: '', extType: 'FaxUser' },
        { firstName: 'Dehua', lastName: 'Ma', ext: '', extType: 'AO' },
        { firstName: '字节跳动', lastName: '北京', ext: '', extType: 'AO' },
        { firstName: 'Jack', lastName: 'Ma', ext: '', extType: 'Dept' },
        { firstName: '阿里巴巴', lastName: '杭州', ext: '', extType: 'Dept' }]);
        expect(sortExtensionsByExtType(extensions2, false)).toEqual(extensions2);
        expect(sortExtensionsByExtType()).toEqual([]);
    });
});

// Question 3
describe(`Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
[
    {quarter: 1, totalPrices: xxx, transactionNums: n},
    {....}
]`, () => {
    test('test getSumByQuarter', () => {
        expect(getSumByQuarter([])).toEqual([]);
        expect(getSumByQuarter([null])).toEqual([]);
        expect(getSumByQuarter(saleItems)).toEqual([{ quarter: 1, totalPrices: 41, transactionNums: 5 },
        { quarter: 2, totalPrices: 15, transactionNums: 3 },
        { quarter: 3, totalPrices: 24, transactionNums: 3 },
        { quarter: 4, totalPrices: 33, transactionNums: 3 }]);
    });
});

// Question 4
describe(`Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
[
  {quarter: 1, averagePrices: xxx, transactionNums: n},
  {....}
]`, () => {
    test('test getAverageByQuarter', () => {
        expect(getAverageByQuarter(saleItems)).toEqual([{ quarter: 1, averagePrices: '8.20', transactionNums: 5 },
        { quarter: 2, averagePrices: '5.00', transactionNums: 3 },
        { quarter: 3, averagePrices: '8.00', transactionNums: 3 },
        { quarter: 4, averagePrices: '11.00', transactionNums: 3 }]);
    });
});

// Question 5
describe(`Question 5: please create a tool to generate Sequence
Expected to be used like:
var sequence1 = new Sequence();
sequence1.next() --> return 1;
sequence1.next() --> return 2;

in another module:
var sequence2 = new Sequence();
sequence2.next() --> 3;
sequence2.next() --> 4;`, () => {
    test('test generate Sequence', () => {
        const sequence1 = new Sequence();
        const sequence2 = new Sequence();
        expect(sequence1.next()).toEqual(1);
        expect(sequence1.next()).toEqual(2);
        expect(sequence2.next()).toEqual(3);
        expect(sequence2.next()).toEqual(4);
    });
});

// Question 6
describe(`Question 6:
AllKeys: 0-9;
usedKeys: an array to store all used keys like [2,3,4];
We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]`, () => {
    test('test getUnUsedKeys', () => {
        expect(getUnUsedKeys(0, [2, 3, 4])).toEqual([]);
        expect(getUnUsedKeys(9, [2, 3, 4])).toEqual([0, 1, 5, 6, 7, 8, 9]);
    });
});

