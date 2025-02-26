import {Page} from "@playwright/test";
import { User } from "../pages_objects/constantes";




export class FakeMail {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToAccount() {
        await this.page.getByRole('link', { name: 'Mon compte' }).click();
    }

    async fillEmail(email: string) {
        await this.page.getByRole('textbox', { name: 'Email' }).fill(User.mail);;
        
    }

    async clickNext() {
        await this.page.getByRole('button', { name: 'Suivant' }).click();
    }

    async mailFake() {

        await this.page.getByText('Veuillez entrer un format d\'').isVisible();
    }
}