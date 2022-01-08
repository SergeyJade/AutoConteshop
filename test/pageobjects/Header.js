const Page = require('../pageobjects/Page')

class Header extends Page {
    get logo () {
        return $('a.logo')
    }
    get unputWomen () {
        return $ ('li.menu2__item.active')
    }
    get inputWomenCloth () {
        return $('//*[@id="submenu_3"]/div[1]/div/div/div[2]/div/a')
    }
    // get inputWomenCloth () {
    //     return $('body > div.not_main.page > div.background-top1.mod1 > div > div.header2 > div.header2__right > div > a.icon3.cart-icon')
    // }
    open() {
        return super.open('https://conteshop.ru/');
    }
}
module.exports = new Header()


