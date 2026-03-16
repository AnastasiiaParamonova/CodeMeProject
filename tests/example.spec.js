import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Cart } from '../pages/cart';
import { Product } from '../pages/product';

test('Full E2E user path.', async ({ page }) => {
  const homePage = new HomePage(page);
  const cart = new Cart(page);
  const product = new Product(page);
  
  await homePage.navigateTo();
  await homePage.clickProduct();
  await product.checkProduct();
  await product.addToCart();
  await cart.goToCart();
  await cart.checkProductInCart();
  await cart.clickBuyButton();
  await expect(cart.successToast.filter({ hasText: cart.successMessage })).toBeVisible();


});