module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {

        return browser.url(`https://www.saucedemo.com/`);
        return browser.url(`https://www.saucedemo.com/cart.html`);
      

     //const browser = $('.login_logo');
    

    }
}