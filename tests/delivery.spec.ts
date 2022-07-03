import client from './lib/client'
import { env } from './lib/client';
import { deliveryParams, deliveryResponse, requestDeliveryParams, trackQuery, updateDropOffParams, updatePickUpParams } from './data/delivery';
import Sendstack, { 
    DeliveryPrice, 
    DeliveryResponse, 
    DropOffAddress, 
    PickUpAddress, 
    RequestDelivery, 
    TrackQuery 
} from "../src/Sendstack";

const deliveryPrice: Sendstack['deliveryPrice'] = env.live
    ? client.deliveryPrice
    : jest.fn(async (s: DeliveryPrice) => {
        return {
            status: true, 
            message: 'Delivery price successfully generated', 
            data: { price: 1000 }
        }
    })

const requestDelivery: Sendstack['requestDelivery'] = env.live
    ? client.requestDelivery
    : jest.fn(async (r: RequestDelivery) => {
        return {
            status: true,
            message: 'Request successfully placed',
            data: deliveryResponse
        }
    })

const trackDelivery: Sendstack['trackDelivery'] = env.live
    ? client.trackDelivery
    : jest.fn(async (t: TrackQuery) => {
        return {
            status: true,
            message: 'Delivery details retrieved.',
            data: deliveryResponse
        }
    })


const cancelDelivery: Sendstack['cancelDelivery'] = env.live
    ? client.cancelDelivery
    : jest.fn(async (t: {trackingId: string}) => {
        return {
            status: true,
            message: 'Delivery cancelled',
            data: {}
        }
    })
    
const updatePickUp: Sendstack['updatePickUp'] = env.live
    ? client.updatePickUp
    : jest.fn(async (batchId: string, p: PickUpAddress) => {
        return {
            status: true,
            message: 'Pickup address updated',
            data: {}
        }
    })

const updateDelivery: Sendstack['updateDelivery'] = env.live
    ? client.updateDelivery
    : jest.fn(async (trackingId: string, d: DropOffAddress) => {
        return {
            status: true,
            message: 'Delivery address updated',
            data: {}
        }
    })


describe('Deliveries', () => {
    it('should return delivery price', async () => {
        const res = await deliveryPrice(deliveryParams)

        expect(res).toMatchObject({
            status: expect.any(Boolean),
            message: expect.any(String),
            data: {price: expect.any(Number)},
        })
    }
    )

    it('should return delivery request', async () => {
        const res = await requestDelivery(requestDeliveryParams)
        
        expect(res).not.toBeNull();
        expect(res.data).not.toBeNull();
        expect(Number.isInteger(res.data.totalAmount)).toBe(true);
        expect(Number(res.data.totalAmount)).toBeGreaterThan(0);
        
        expect(res.data).toHaveProperty('batchId');
        expect(res.data).toHaveProperty('pickup');
        expect(res.data).toHaveProperty('drops');

        expect(res.data.paymentStatus).toBe('PAID');

        expect(res).toMatchObject({
            status: expect.any(Boolean),
            message: expect.any(String),
            data: expect.objectContaining<Partial<DeliveryResponse>>({
                afterPickupSms: expect.any(Boolean),
                trackingUrl: expect.any(String),
            })        
        })

        trackQuery.trackingId = res.data.drops[0].trackingId;
        trackQuery.batchId = res.data.batchId

        Object.assign(deliveryResponse, res.data)
    })

    it('should return delivery status', async () => {
        const res = await trackDelivery(trackQuery)
        
        expect(res).not.toBeNull();
        expect(res.data).not.toBeNull();

        expect<PickUpAddress>(res.data.pickup).toHaveProperty('pickupDate');

        expect(res).toMatchObject({
            status: expect.any(Boolean),
            message: expect.any(String),
            data: expect.objectContaining<Partial<DeliveryResponse>>({
                pickup: expect.objectContaining<Partial<PickUpAddress>>({pickupDate: expect.any(String)}),
                drops: expect.arrayContaining<Partial<DropOffAddress>>([expect.any(Object)])
            })
        })        
    })

    it.skip('should return delivery cancellation', async () => {
        const res = await cancelDelivery({trackingId: deliveryResponse.id})
        
        expect(res).not.toBeNull();
        
        expect(res).toMatchObject({
            status: expect.any(Boolean),
            message: expect.any(String),
        })
    })

    it.skip('should return delivery update', async () => {
        const res = await updatePickUp(deliveryResponse.batchId, updatePickUpParams)
        
        expect(res).not.toBeNull();
        
        expect(res).toMatchObject({
            status: expect.any(Boolean),
            message: expect.any(String),
        })
    })

    it('should return delivery update', async () => {
        const res = await updateDelivery(deliveryResponse.drops[0].trackingId, updateDropOffParams)

        expect(res).not.toBeNull();
        
        expect(res).toMatchObject({
            status: expect.any(Boolean),
            message: expect.any(String),
        })
    })
})