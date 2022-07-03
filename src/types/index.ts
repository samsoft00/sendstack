export * from './delivery'
export * from './wallet'
export * from './location'

export interface StackResponse<T> {
  status: boolean
  message: string
  data: T
}
