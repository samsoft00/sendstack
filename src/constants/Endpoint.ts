export enum Endpoint {
  Balance = 'wallet/balance',
  Transactions = 'wallet/transactions',
  Location = 'locations',
  Price = 'deliveries/price',
  Request = 'deliveries',
  Status = 'deliveries/track',
  Cancel = 'deliveries/:deliveryId/cancel',
  PickUp = 'deliveries/batch/:batchId',
  UpdateDelivery = 'deliveries/:trackingId'
}
