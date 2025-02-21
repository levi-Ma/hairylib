export type DirectiveConfig = Partial<typeof directiveOptions>

/**
 * 命令配置
 */
export const directiveOptions = {
  permissions: [] as string[]
}

/**
 * 定义命令配置
 * @param options {DirectiveConfig}
 */
export const defineHasConfig = (options: DirectiveConfig = {}) => {
  for (const [key, value] of Object.entries(options)) {
    ;(directiveOptions as any)[key] = value
  }
}
