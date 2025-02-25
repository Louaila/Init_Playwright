import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.decathlon.fr/');
  await page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('lutte');
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).press('Enter');
});


test('test2', async ({ page }) => {
  await page.goto('https://www.decathlon.fr/');
  await page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
  await page.getByRole('menuitem', { name: 'Femme' }).click();
  await page.getByRole('menuitem', { name: 'Se protéger du froid' }).click();

});
