// CONTROLLEUR DE TESTS

import { test} from "@playwright/test";
import {HomePage} from "../pages_objects/go.to.home"; 
import {Cattegorielutte} from "../pages_objects/categorie.lutte";
import {ChoiceShopMan} from "../pages_objects/choice.categorie.shoe.man";
import {Choiceshoe} from "../pages_objects/select.shoe";
import {FakeMail  } from "../pages_objects/fakemail";
import { User } from "../pages_objects/constantes";
 


test("Decathlon", async ({ page }) => {   
  // instancie la classe HomePage .
  //  New HomePage c'est object de la classe HomePage et on le stocke dans la variable homePage

  const homePage = new HomePage(page);
  const categorieLutte = new Cattegorielutte(page);
  const choiceShopMan = new ChoiceShopMan(page);
  const choiceShoe = new Choiceshoe(page);
 

  await homePage.goToHomePage();
  await homePage.acceptCookies();

  await categorieLutte.clickLutte();
  await choiceShopMan.Choice();
  await choiceShoe.ChoiceShoeMan();
  
});



test('mailFake1', async ({ page }) => {

  const homePage = new HomePage(page);
  const fakeMail = new FakeMail(page);
  
  await homePage.goToHomePage();
  await homePage.acceptCookies();

  await fakeMail.mailFake();

  await fakeMail.navigateToAccount();
  await fakeMail.fillEmail(User.mail);
  await fakeMail.clickNext();

});