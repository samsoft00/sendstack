import Sendstack from '../../src/Sendstack'
import environment from './environment'

if(!environment.apiKey) {
  throw new Error('environment apiKey is missing!')
}

export const env = environment

export default new Sendstack(env.apiKey, env.appId, environment.debug)
