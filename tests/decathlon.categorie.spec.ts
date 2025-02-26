// CONTROLLEUR DE TESTS

import { test} from "@playwright/test";
import {HomePage} from "../pages_objects/go.to.home"; 
import {Cattegorielutte} from "../pages_objects/categorie.lutte";



test.beforeEach("GoDecathlon", async ({ page }) => {   

  // instancie la classe HomePage .
  //  New HomePage c'est object de la classe HomePage et on le stocke dans la variable homePage
  const homePage = new HomePage(page);
  await homePage.goToHomePage();
  await homePage.acceptCookies();

});



test("categorieLutte", async ({ page }) => {

  const categorieLutte = new Cattegorielutte(page);
  await categorieLutte.clickLutte();
  
});
