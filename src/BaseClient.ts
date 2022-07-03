import { Endpoint } from './constants/Endpoint'

const METHODS = ['get', 'post', 'put'] as const
type Method = (typeof METHODS)[number]
type Response<R> = R
type RequestPayload = { [k: string]: any} | undefined | null

export class BaseClient {
  public static readonly BASE_URL = 'https://sandbox.sendstack.africa/api/v1'

  constructor (
    protected appSecret: string,
    protected appId: string,
    protected debug: boolean = false
  ) {}

  post = async <R>(endpoint: Endpoint, payload: RequestPayload): Promise<Response<R>> => await this.request<R>('post', endpoint, payload)

  get = async <R>(endpoint: Endpoint, payload: RequestPayload): Promise<Response<R>> => await this.request<R>('get', endpoint, payload)

  put = async <R>(endpoint: Endpoint, payload: RequestPayload): Promise<Response<R>> => await this.request<R>('put', endpoint, payload)

  private async request<R>(method: Method, endpoint: Endpoint, o: RequestPayload = {}, json = true): Promise<Response<R>> {
    let url = `${BaseClient.BASE_URL}/${endpoint}`

    const headers: HeadersInit = {
      app_id: this.appId,
      app_secret: this.appSecret
    }

    const opts: RequestInit = {
      headers,
      method
    }

    if ((o != null) && (Object.keys(o).length > 0)) {
      if (json && !['get'].includes(method)) {
        opts.body = JSON.stringify(o)
        headers['Content-Type'] = 'application/json'
      } else {
        const params = new URLSearchParams()

        Object.entries(o).forEach(([k, v]) => { params.set(k, v) })

        switch (method) {
          case 'get':
            url += `?${params.toString()}`
            break
          default:
            opts.body = params
        }
      }
    }

    const res = await fetch(url, opts)
    const body = await res.json()

    if ('status' in body && body.status !== true) {
      throw new Error(body.message)
    }

    return body
  }
}
