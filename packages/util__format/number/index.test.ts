import { integer, prefixZero, keepDecimal, thousandBitSeparator, percentage } from '.'

describe('@hairy/format:number', () => {
  test('integer', () => {
    expect(integer('ada0')).toEqual(0)
    expect(integer('1.24')).toEqual(1)
    expect(integer(1.23)).toEqual(1)
    expect(integer(1.001_010_1)).toEqual(1)
    expect(integer(100.44)).toEqual(100)
    expect(integer('ddw1adwad2')).toEqual(0)
    expect(integer('442.33')).toEqual(442)
  })
  test('prefixZero', () => {
    expect(prefixZero('223')).toEqual('223')
    expect(prefixZero('4421')).toEqual('4421')
    expect(prefixZero('12')).toEqual('12')
    expect(prefixZero('12', 3)).toEqual('012')
    expect(prefixZero('1')).toEqual('01')
    expect(prefixZero('1', 3)).toEqual('001')
    expect(prefixZero('1', 100)).toEqual('0'.repeat(99) + '1')
  })
  test('keepDecimal', () => {
    expect(keepDecimal('223')).toEqual('223.00')
    expect(keepDecimal('223.4421')).toEqual('223.44')
    expect(keepDecimal('223.1')).toEqual('223.10')
    expect(keepDecimal('223.100000', 6)).toEqual('223.100000')
  })
  test('thousandBitSeparator', () => {
    expect(thousandBitSeparator('123456789')).toEqual('123,456,789')
    expect(thousandBitSeparator('123456789.123456789')).toEqual('123,456,789.123,456,789')
    expect(thousandBitSeparator('123456789.123456789', ',', { decimal: false })).toEqual('123,456,789.123456789')
    expect(thousandBitSeparator('123456789.123456789', ',', { integer: false })).toEqual('123456789.123,456,789')
  })
  test('percentage', () => {
    expect(percentage(200, 7)).toEqual(3)
    expect(percentage(100, 7)).toEqual(7)
    expect(percentage(100, 50)).toEqual(50)
    expect(percentage(100, 60)).toEqual(60)
    expect(percentage(1000, 60)).toEqual(6)
    expect(percentage(42_341_234_324, 4_123_132_312)).toEqual(9)
  })
})
