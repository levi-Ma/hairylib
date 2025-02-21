import { isUndefined, isNumber } from 'lodash'

export interface SpacingOptions {
  /** 步进值, step 设置为 false 则不进行步进; @default 1 */
  step?: number | boolean
  /** 步进极限值, 到达步进翻倍节点之后, 将以极限值步进 @default 50 */
  stepMax?: number
  /** 步进翻倍节点 @default [16, 48, 80, 256, 320, 384] */
  nodes?: number[]
  /**
   * 单位计算(默认以得出px > rem 单位)
   * @default (num: number) => num / 16
   */
  compute?: (number_: number) => number
  /** 单位 @default 'rem' */
  unit?: string
  /** 生成Key值的前缀 */
  prefix?: string
}
const generateArray = (start: number, end: number) => {
  start = Number(start)
  end = Number(end)
  end = end > start ? end : start
  return [...new Array(end + 1).keys()].slice(start)
}

/** 生成 0 ~ max Spacing 尺寸 */
export const spacing = (max: number, option?: SpacingOptions) => {
  const nodes = option?.nodes ?? [16, 48, 80, 256, 320, 384]
  const stepMax = option?.stepMax ?? 50
  const compute = option?.compute ?? ((number_: number) => number_ / 16)
  const unit = option?.unit ?? 'rem'
  const prefix = option?.prefix ?? ''
  const isStep = isUndefined(option?.step) || isNumber(option?.step) || option?.step === true
  let step = isNumber(option?.step) ? option!.step! : 1

  const key = (key: string | number) => `${prefix}${key}`

  /** 生成数值数据 */
  const generates = generateArray(0, max).filter((v) => {
    if (!isStep) {
      step = 1
    } else if (nodes.includes(v)) {
      step = step * 2
    } else if (v === (nodes.at(-1) || 400)) {
      step = stepMax
    }
    return v % step === 0
  })

  /** 拼接单位 */
  /** 拼接单位 */
  const spacing = generates.reduce((total, current) => {
    total[key(current)] = `${compute(current)}${unit}`
    return total
  }, {} as Record<string, string>)

  spacing[key('px')] = '1px'
  spacing[key(unit)] = '1' + unit

  return spacing
}

/** 将尺寸进行反转 */
export const negative = (spacing: Record<string, string>) => {
  const _spacing: Record<string, string> = {}
  for (const [key, value] of Object.entries(spacing)) {
    _spacing[`-${key}`] = `-${value}`
  }
  return _spacing
}
