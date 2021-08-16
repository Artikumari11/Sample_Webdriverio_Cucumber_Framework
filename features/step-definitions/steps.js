const { Given, When, Then } = require('cucumber');
const loginPage = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');

const pages = {
 login: LoginPage
 
}

Given(/^I am on the (\w+) page$/, (page) => {
   pages[page].open()
   browser.maximizeWindow()
   
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
  LoginPage.login(username, password)
    


});
    
Then(/^click on add card in product$/, () => {
 LoginPage.clickOnAddCardButton();
    
});

Then(/^click on hopping_cart_container$/, () => {
//$ ('div#shopping_cart_container svg').click();
 loginPage.shoppingContainer();

    });

Then(/^click on checkout button$/, () => {
 loginPage.checkoutButton();
  

   });

 Then(/^enter personal details (\w+) and (\w+) and (\w+)$/, (firstname, lastname, postalcode) => {
  loginPage.persnalInfomation(firstname, lastname, postalcode);
 });

 Then (/^click on continue$/, () => {
 loginPage.continuesbutton();
        //browser.pause(10000)
   
       
      });

 Then (/^click on finish button$/, () => {
 loginPage.placeorder();
       const elem = $('h2.complete-header');
       console.log(elem.getText());
      });

 

 

 

     


