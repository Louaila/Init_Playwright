import { test, expect } from '@playwright/test';


async function goToHomePageAndAcceptCookies(page) {
  await page.goto('https://www.decathlon.fr/');
  await page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
}


test('categorieLutte', async ({ page }) => {
  await goToHomePageAndAcceptCookies(page);
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('lutte');
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).press('Enter');
});


test('categorieFemme', async ({ page }) => {
  await goToHomePageAndAcceptCookies(page);
  await page.getByRole('menuitem', { name: 'Femme' }).click();
  await page.getByRole('menuitem', { name: 'Se protéger du froid' }).click();

});


test('categorieHomme', async ({ page }) => {
  await goToHomePageAndAcceptCookies(page);
  await page.getByRole('menuitem', { name: 'Homme' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Chaussures' }).click();
});