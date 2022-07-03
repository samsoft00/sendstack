import fetch from 'node-fetch'

globalThis.fetch = fetch as unknown as typeof globalThis.fetch
