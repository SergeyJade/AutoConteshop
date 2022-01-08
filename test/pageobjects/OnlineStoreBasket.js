const Page = require('../pageobjects/Page')

class OnlineStoreBasket extends Page {

    get basketTitle () {
        return $('body > div.not_main.page > div.padding3 > div > div.cart > div.cart-header')
    }
    get basketTitle () {
        return $('body > div.not_main.page > div.padding3 > div > div.cart > div.row > div.col-lg-9.col-xs-12 > div:nth-child(1) > ul.my-cart.col-xs-12 > li > div > div.item-info.col-md-5.col-sm-6.col-xs-12 > div.wrapper-item-info > div.product-name > a')
    }

    }
module.exports = new OnlineStoreBasket()
