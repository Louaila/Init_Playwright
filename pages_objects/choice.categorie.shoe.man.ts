import { Page, expect } from '@playwright/test';

export class ChoiceShopMan {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    async Choice() {
        
        // choisir la catégorie homme puis chaussures

        await this.page.getByRole('menuitem', { name: 'Homme' }).click();
        await this.page.getByRole('menuitem', { name: 'Chaussures', exact: true }).click();


        // choisir le premier article de la liste

        await this.page.getByRole('listitem').filter({ hasText: 'Chaussures de randonnée neige' }).locator('a').nth(1).click();
        await this.page.getByRole('heading', { name: 'Chaussures de randonnée neige' }).click();
    

}

}



