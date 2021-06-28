/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export declare const checkedTypeof: (target: any) => string;
/**
 * 剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
export declare const removeStrCode: (str: string) => string;
/**
 * 过滤字符串为数值
 * @param str 字符串
 * @returns 数值
 */
export declare const filterNumber: (str: string) => number | "";
/**
 * 过滤为价格(两位小数点)
 * @param value 传入字符
 */
export declare const filterPrice: (value: string) => string;
/**
 * 过滤为正整数
 * @param value 传入字符
 */
export declare const filterInteger: (value: string) => string;
/**
 * 地址参数计算
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
export declare const paramsAnaly: (url: string, params: Record<string, any>) => string;
/**
 * 生成递进的数组
 * @param start 开始数值
 * @param end 结束数值
 * @returns 递进的数组
 */
export declare const generateArray: (start: number, end: number) => number[];
