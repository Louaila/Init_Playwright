//Classe qu'on va utiliser pour les tests dans le controlleur

import { Page } from '@playwright/test';

export class Cattegorielutte {
    readonly page: Page;
    constructor(page: Page) {
     this.page = page;
  ;
}
  async clickLutte() {

        await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).click();
        await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('lutte');
        await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).press('Enter');
  }
}

