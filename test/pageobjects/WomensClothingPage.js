 const Page = require('../pageobjects/Page')

 class WomensClothingPage extends Page {

   get h1Women () {
    return $('body > div.not_main.page > div.padding3 > div > div:nth-child(5) > h1')
   }
   get categoryJumpers () {
    return $ ('#narrow-by-list > dd > ol > span:nth-child(2)')
   }
   get butSabmit () {
    return $ ('#tippy-68 > div > div.tippy-content > div > a')
   }
   get cardProduct () {
    return $ ('//*[@id="blockPage1"]/div/div[2]/div/div[2]/div[1]/div/a')
   }
  get h1TitleProduct () {
   return $ ('h1.title3')
  }
  get buttonAddShoppingCart () {
   return $ ('#addToCart')
  }
  get modalAddCart () {
   return $ ('#cart-popup > div > div.modal-up__content > div.text-modal1 > div.hide-mobile1 > div')
  }
  get inputClose () {
   return $ ('#cart-popup > div > div.modal-up__content > div.modal-up__close')
  }
 }
module.exports = new WomensClothingPage()