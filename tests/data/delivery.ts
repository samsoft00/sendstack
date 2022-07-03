import { DeliveryPrice, DeliveryResponse, DropOffAddress, PickUpAddress, RequestDelivery, TrackQuery } from "../../src/Sendstack";

export const deliveryParams: DeliveryPrice = {
    pickupCode: 'UMTV',
    dropoffCode: 'I0BT',
    pickupDate: '2022-12-10',
    pickupGeo: {
        lat: '6.637954799999999', 
        long: '3.5439057'
    },
    dropoffGeo: {
        lat: "6.459488599999999",
        long: "3.4179723"
    }
}

export const requestDeliveryParams: RequestDelivery = {
    "customerId": "iweniw",
    "pickup": {
        "address": "10, John Street, Ipaja",
        "locationCode": "UMTV",
        "pickupName": "Tunde Nasri",
        "pickupNumber": "081204449231",
        "altPickupNumber": "08121287231",
        "pickupDate": "2022-08-20",
        "note": "Please be prompt"
    },
    "drops": [
        {
            "locationCode": "I0BT",
            "address": "4, Toyin Street, Yaba",
            "recipientName": "Tolanu Yakub",
            "recipientNumber": "081204449231",
            "altRecipientNumber": "08219828921"
        },
        {
            "locationCode": "T58X",
            "address": "4, Kolade Street, Doa",
            "recipientName": "Shola Musa",
            "recipientNumber": "081204449231",
            "altRecipientNumber": "08219828921",
            "note": "Please be prompt"
        }
    ],
}

export let deliveryResponse: DeliveryResponse = {
    "pickup": {
        "address": "10, John Street, Ipaja",
        "locationCode": "01",
        "pickupName": "Tunde Nasri",
        "pickupNumber": "081204449231",
        "altPickupNumber": "0821287231",
        "pickupDate": "2021-08-20",
        "note": "Please be prompt"
    },
    "paymentStatus": "PAID",
    "drops": [
    {    
        "status": "PENDING",
        "trackingId": "EZcFkf",
        "batchId": "n0p48M",
        "locationCode": "04",
        "address": "4, Toyin Street, Yaba",
        "recipientName": "Tolanu Yakub",
        "recipientNumber": "081204449231",
        "altRecipientNumber": "08219828921",
        "createdAt": "2021-09-10T12:43:45.459Z",
        "updatedAt": "2021-09-10T12:43:45.459Z",
        "id": "613b53012ac8bd6000f42ab1"
    },
    {
        "status": "PENDING",
        "trackingId": "ORmlMM",
        "batchId": "n0p48M",
        "locationCode": "06",
        "address": "4, Kolade Street, Doa",
        "recipientName": "Shola Musa",
        "recipientNumber": "081204449231",
        "altRecipientNumber": "08219828921",
        "note": "Please be prompt",
        "createdAt": "2021-09-10T12:43:45.459Z",
        "updatedAt": "2021-09-10T12:43:45.459Z",
        "id": "613b53012ac8bd6000f42ab2"
        }
    ],
    "batchId": "n0p48M",
    "customerId": "iweniw",
    "totalAmount": 2000,
    "paymentSource": "self",
    "afterPickupSms": true,
    "otp": "2813",
    "managerId": "612f8f1dc3f0661e029bd65d",
    "createdAt": "2021-09-10T12:43:45.468Z",
    "updatedAt": "2021-09-10T12:43:45.468Z",
    "id": "613b53012ac8bd6000f42ab4",
    "trackingUrl": "https://www.scrader.com/delivery/track?batchId=n0p48M"
}

export const trackQuery: TrackQuery = {
    batchId: "n0p48M",
    trackingId: "EZcFkf"
}

export const updatePickUpParams: PickUpAddress = {
    "address": "10, John Street, Ipaja",
    "locationCode": "UMTV",
    "pickupName": "Tunde Nasri",
    "pickupNumber": "081204449231",
    "altPickupNumber": "0821287231",
    "pickupDate": "2022-08-20",
    "note": "Please be prompt"
}

export const updateDropOffParams: DropOffAddress = {
    "locationCode": "I0BT",
    "address": "4, Toyin Street, Yaba",
    "recipientName": "Tolanu Yakub",
    "recipientNumber": "081204449231",
    "altRecipientNumber": "08219828921"
}