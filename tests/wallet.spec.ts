import client from './lib/client'
import { env } from './lib/client';
import Sendstack, { Transactions } from "../src/Sendstack";

const baseResponse = {
    status: true,
    message: 'success',
}

const baseMatcher = {
    status: expect.any(Boolean),
    message: expect.any(String),
}

const balance: Sendstack['walletBalance'] = env.live 
    ? client.walletBalance 
    : jest.fn(async () => {
        return {
            ...baseResponse,
            data: { balance: 10000 }
        }
    })

const transactions: Sendstack['walletTransactions'] = env.live
    ? client.walletTransactions 
    : jest.fn(async () => {
        return {
            ...baseResponse,
            data: [
                {
                    id: '1',
                    amount: 1000,
                    description: 'payment for order #1',
                    type: 'delivery',
                    balance: 90000,
                    createdAt: '2020-01-01T00:00:00.000Z'
                }
            ]
        }
    })

describe('Wallet', () => {
    it('should have balance property', async () => expect(await balance()).toHaveProperty('data.balance'));
    
    it('should return wallet balance', async () => {
        expect(await balance()).toMatchObject({
            ...baseMatcher,
            data: expect.objectContaining({balance: expect.any(Number)})
        })
    });

    it('should return wallet transactions', async () => {
        const res = await transactions()

        expect(res).toMatchObject({
            ...baseMatcher,
            data: expect.arrayContaining<Transactions[]>([expect.any(Object)]),
        })
    });
})