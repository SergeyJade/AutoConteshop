const Page = require('../pageobjects/Page')

class Header extends Page {
    get logo () {
        return $('/html/body/div[4]/div[2]/div[1]/div/div[2]/div[1]/a/img')
    }
    get unputWomen () {
        return $ ('/html/body/div[3]/div[2]/div[1]/div/div[2]/div[2]/ul/li[1]/a')
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


