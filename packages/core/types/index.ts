export type AnyOjbect = {
  [key: string]: any
}

export type Key = string | number

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type DeepKeyof<T> = T extends object ? keyof T | DeepKeyof<T[keyof T]> : never

export type DeepReplace<T, K extends DeepKeyof<T>, V = unknown> = {
  [P in keyof T]: K extends P ? V : DeepReplace<T[P], K, V>
}
