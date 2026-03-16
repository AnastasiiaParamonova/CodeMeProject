import { expect } from "@playwright/test";
export class Product {
    constructor(page) {
        this.page = page;
        this.headingLocator = this.page.getByRole('heading')
        this.nameProduct = 'Eliksir Energii'
        this.buyBtn = page.getByTestId('buy-btn-2');
        this.cartBtn = page.getByTestId('cart-button');
        this.cartList = page.getByTestId('cart-list').locator('span');
        this.cartBuy = page.getByTestId('cart-buy');

    }
    
    async checkProduct() {
        await expect(this.headingLocator).toContainText(this.nameProduct);

    }

    async addToCart() {
        await this.buyBtn.click();
    }
}

module.exports = { Product };