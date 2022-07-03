type Nullable = string | undefined | null

export interface GeoLocation {
  lat: string
  long: string
}

export interface DeliveryPrice {
  pickupCode: string
  dropoffCode: string
  pickupDate: string
  pickupGeo: GeoLocation
  dropoffGeo: GeoLocation
}

export interface PickUpAddress {
  address: string
  locationCode: string
  pickupName: string
  pickupNumber: string
  altPickupNumber: string
  pickupDate: string
  lga?: string
  state?: string
  note: Nullable
}

export interface DropOffAddress {
  locationCode: string
  address: string
  recipientName: string
  recipientNumber: string
  altRecipientNumber: string
  note?: string
}

export interface RequestDelivery {
  customerId: string
  pickup: PickUpAddress
  drops: DropOffAddress[]
}

export interface ErrorResponse {
  status: boolean
  message: string
  data: {[key: string]: any} | string | null | undefined
}

export interface DropOffResponse {
  status: string
  trackingId: string
  batchId: string
  locationCode: string
  address: string
  recipientNumber: string
  recipientName: string
  altRecipientNumber: string
  assignedTo?: {[key: string]: any}
  statusTimestamps?: any[]
  createdAt?: string
  updatedAt?: string
  note?: string
  id: string
}

export interface DeliveryResponse {
  id: string
  pickup: PickUpAddress
  paymentStatus: string
  paymentSource: string
  trackingUrl: string
  afterPickupSms: boolean
  drops: DropOffResponse[]
  batchId: string
  customerId: string
  totalAmount: number
  otp: string
  managerId: string
  createdAt: string
  updatedAt: string
}

// export interface DeliveryResponse {
//   delivery: Delivery[]
//   trackingUrl: string
// }

export interface TrackQuery {
  batchId: string
  trackingId: string
}
