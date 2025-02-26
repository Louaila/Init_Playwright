//Classe qu'on va utiliser pour les tests dans le controlleur

import { Page } from '@playwright/test';

export class HomePage {
   readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto('https://www.decathlon.fr/');
  }

  async acceptCookies() {
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
  }

}

