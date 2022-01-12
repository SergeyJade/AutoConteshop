const Header = require('../pageobjects/Header')
const WomensClothingPage = require('../pageobjects/WomensClothingPage')
const OnlineStoreBasket = require('../pageobjects/OnlineStoreBasket')
// const {expect} = require("chai");
function closePopup() {
    if ($('//*[@id="popmechanic-form-16626"]/div/form/div[1]/p').toBeExisting()){
        return $('//*[@id="popmechanic-form-16626"]/div/a').click()
    }
}


describe ('Добавление товара в корзину', () =>{
    before('qwe', async () =>{
        browser.deleteAllCookies()
    })
    it ('qwe', () =>{
        closePopup()
    })
    it ('Открытие каталога',  async () =>{
        await        browser.maximizeWindow()
        await        Header.open()
        await expect(Header.logo).toBeExisting()
        await        Header.unputWomen.moveTo()
        await        Header.inputWomenCloth.click()
        await expect(WomensClothingPage.h1Women).toHaveText('Женская одежда')


    })
    it ('Открытие карточки товара', async () =>{
        await WomensClothingPage.categoryJumpers.click()
        await expect(WomensClothingPage.butSabmit).toBeClickable()
        await WomensClothingPage.butSabmit.click()
        await WomensClothingPage.cardProduct.click()
        await expect (WomensClothingPage.h1TitleProduct).toBeExisting()
    })
    it ('Проверка на наличие товара', async () =>{
        await expect (WomensClothingPage.buttonAddShoppingCart).toHaveText('ДОБАВИТЬ В КОРЗИНУ')
        await expect (WomensClothingPage.buttonAddShoppingCart).toBeClickable()

    })

})
