const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('input#user-name') }
    get inputPassword () { return $('input#password')}
    get btnSubmit () { return $('input#login-button') }
    

    get addcard () { return $('div.inventory_item:nth-of-type(1) button')}

    get container () { return $ ('div#shopping_cart_container svg')}

    //get checkout () { return $ ('//a[@class ="btn_action checkout_button"]')}
    get checkout () { return $ ('//a[text() ="CHECKOUT"]')}

    get firstinput () { return $('#first-name')}
    get lastinput () { return $ ('#last-name')}
    get postalcode () { return $('#postal-code')}

    get continues () { return $('//input[@class ="btn_primary cart_button"]')}

    get finish  () { return $('//a[@class ="btn_action cart_button"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
        const homepage= $('#inventory_container');
        expect(homepage).toBeDisplayed();
        
    
    }
     
    clickOnAddCardButton(){
        this.addcard.click();

    }
      shoppingContainer(){
          this.container.click();
      }
      checkoutButton(){
          this.checkout.click();
      }
       persnalInfomation(firstname, lastname, postalcode){
           this.firstinput.setValue(firstname);
           this.lastinput.setValue(lastname);
           this.postalcode.setValue(postalcode);
       }

continuesbutton(){
    this.continues.click();
}
 placeorder(){
     this.finish.click();
 }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();