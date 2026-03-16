import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Login } from '../pages/login';

test('loginAsUser', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page);

    await homePage.navigateTo();
    await login.login(process.env.USER, process.env.PASSWORD);
    await expect(login.welcomeMessage).toContainText(login.successMessage(login.user_user));
});

test('loginAsAdmin', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page);

    await homePage.navigateTo();
    await login.login(process.env.ADMIN_USER, process.env.ADMIN_PASSWORD);
    await expect(login.welcomeMessage).toContainText(login.successMessage(login.admin_user));
});