import client from './lib/client'
import { env } from './lib/client';
import Sendstack, { Local, LocationResponse } from "../src/Sendstack";

const locals: Local[] = [
    { name: 'Agbara', locationCode: 'UMTV' },
    { name: 'Agege', locationCode: 'T58X' },
    { name: 'Ajah', locationCode: 'I0BT' },    
]

const LocalParams: LocationResponse[] = [{state: 'Lagos', locals }]

const location: Sendstack['locations'] = env.live
    ? client.locations
    : jest.fn(async () => {
        return {
            status: true, 
            message: '', 
            data: LocalParams
        }
    })

describe('Locations', () => {
    it('should return locations', async () => {
        const res = await location()
        
        expect(res).toMatchObject({
            status: true,
            message: '',
            data: expect.arrayContaining<LocationResponse[]>([expect.any(Object)]),
        })
    }
    )
})