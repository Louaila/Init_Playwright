import { Page, } from '@playwright/test';

export class Choiceshoe {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    async ChoiceShoeMan() {
   
        // Verifier si cest bien la bonne chaussure et le prix
    await this.page.getByRole('heading', { name: 'Chaussures de randonnée neige' }).click();
      await this.page.getByRole('article').filter({ hasText: 'Voir plus QUECHUA Chaussures' }).getByLabel('Prix').click();

}


}

