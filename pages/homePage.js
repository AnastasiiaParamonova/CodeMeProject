import { expect } from "@playwright/test";
export class HomePage {
    constructor(page) {
        this.page = page;
        this.title = 'Testowy Sklep – Strona główna';
        this.product = page.getByTestId('product-title-2');
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async clickProduct() {
        await this.product.click();
    }
}

module.exports = { HomePage };