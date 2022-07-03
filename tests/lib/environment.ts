const apiKey = "GG6BSJV1KTKEZE8DYQL8VY2Z2XB46G26"
const appId = "0748943"

if (!apiKey) {
  throw new Error('SENDSTACK_API_KEY environment variable is not set')
}

if(!appId) {
  throw new Error('SENDSTACK_APP_ID environment variable is not set')
}

export type Environment = {
    apiKey: string
    appId: string
    live: boolean
    debug: boolean
}

const environment: Environment = {
    apiKey,
    appId,
    debug: Boolean(process.env.SENDSTACK_DEBUG),
    live: false //Boolean(process.env.SENDSTACK_LIVE),
}

export default environment