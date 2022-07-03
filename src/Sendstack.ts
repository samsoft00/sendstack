import { BaseClient } from './BaseClient'
import { Endpoint } from './constants/Endpoint'
import {
  StackResponse,
  Transactions,
  LocationResponse,
  DeliveryPrice,
  RequestDelivery,
  DeliveryResponse,
  TrackQuery,
  PickUpAddress,
  DropOffAddress
} from './types'

export * from './types'

export default class Sendstack extends BaseClient {
  // wallet
  walletBalance = async (): Promise<StackResponse<{balance: number}>> => await this.get(Endpoint.Balance, {})

  walletTransactions = async (): Promise<StackResponse<Transactions[]>> => await this.get(Endpoint.Transactions, {})

  // locations
  locations = async (): Promise<StackResponse<LocationResponse[]>> => await this.get(Endpoint.Location, {})

  // deliveries
  deliveryPrice = async (s: DeliveryPrice): Promise<StackResponse<{price: number}>> => await this.post(Endpoint.Price, s)

  requestDelivery = async (s: RequestDelivery): Promise<StackResponse<DeliveryResponse>> => await this.post(Endpoint.Request, s)

  trackDelivery = async (s: TrackQuery): Promise<StackResponse<DeliveryResponse>> => await this.get(Endpoint.Status, s)

  cancelDelivery = async (s: {trackingId: string}): Promise<StackResponse<any>> => {
    const endpoint = Endpoint.Cancel.replace(':deliveryId', s.trackingId) as Endpoint
    return await this.post(endpoint, s)
  }

  updatePickUp = async (batchId: string, s: PickUpAddress): Promise<StackResponse<any>> => {
    const endpoint = Endpoint.PickUp.replace(':batchId', batchId) as Endpoint
    return await this.put(endpoint, s)
  }

  updateDelivery = async (trackingId: string, s: DropOffAddress): Promise<StackResponse<any>> => {
    const endpoint = Endpoint.UpdateDelivery.replace(':trackingId', trackingId) as Endpoint
    return await this.put(endpoint, s)
  }
}
