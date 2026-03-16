export class Login  {
    constructor(page) {
    this.page = page;
    this.usernameInput = page.getByTestId('login-username');
    this.passwordInput = page.getByTestId('login-password');
    this.loginButton = page.getByTestId('login-button');
    this.welcomeMessage = page.getByTestId('welcome-msg');
    this.successMessage = (cred) => `Witaj: ${cred}`;
    this.user_user = process.env.USER;
    this.user_password = process.env.PASSWORD;
    this.admin_user = process.env.ADMIN_USER;
    this.admin_password = process.env.ADMIN_PASSWORD;
    }

        async login(username, password) {
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
        }
    }

module.exports = { Login };