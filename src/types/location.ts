export interface Local {
  name: string
  locationCode: string
}

export interface LocationResponse {
  state: string
  locals: Local[]
}
