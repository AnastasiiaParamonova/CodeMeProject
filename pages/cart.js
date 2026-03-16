import { expect } from "@playwright/test";
export class Cart  {
    constructor(page) {
    this.page = page;
       this.cartButton = page.getByTestId('cart-button');
       this.cartList = page.getByTestId('cart-list').locator('span');
       this.nameProduct = 'Eliksir Energii (p2)'
       this.buyButton = page.getByTestId('cart-buy');
       this.successToast = this.page.locator('.toast-success');
       this.successMessage = "sukces";

    }

    async goToCart() {
        await this.cartButton.click();
        await expect(this.cartList).toBeVisible();
    }

    async checkProductInCart() {
        await expect(this.cartList).toContainText(this.nameProduct);
    }

    async clickBuyButton() {
        await this.buyButton.click();
    }

}

module.exports = { Cart };
    
    
    