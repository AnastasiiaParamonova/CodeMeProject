import { test, expect } from '@playwright/test';

test('Test API - GET request', async ({ request }) => {

    const response = await request.get('/api/index.php?endpoint=products&id=4');
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('{"id":4,"name":"Mysz Gamingowa","price":129,"currency":"PLN","display_price":"129.00 zł"}')
});

test('Test API - POST', async ({ request }) => {

    const response = await request.post('/api/index.php?endpoint=products', {
        data: {
            "name": "Testowy produkt",
            "price": 427,
            "currency": "PLN"
        }
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    console.log(await response.text())
    expect(await response.text()).toContain('"created (mock)\",\"product\":{\"name\":\"Testowy produkt\"')


}
);