const apiKey = process.env.SENDSTACK_API_KEY
const appId = process.env.SENDSTACK_APP_ID

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