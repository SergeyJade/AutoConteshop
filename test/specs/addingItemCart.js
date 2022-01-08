const Header = require('../pageobjects/Header')
const WomensClothingPage = require('../pageobjects/WomensClothingPage')
const OnlineStoreBasket = require('../pageobjects/OnlineStoreBasket')
// const {expect} = require("chai");

describe ('Добавление товара в корзину', () =>{
    it ('Открытие каталога',  async () =>{
        await        browser.setWindowSize(1920, 1080)
        await        Header.open()
        await expect(Header.logo).toBeExisting()
        await        Header.unputWomen.moveTo()
        await        Header.inputWomenCloth.click()
        await expect(WomensClothingPage.h1Women).toHaveText('Женская одежда')
    })
    it ('Открытие карточки товара', async () =>{
        await WomensClothingPage.categoryJumpers.click()
        await WomensClothingPage.butSabmit.click()
        await WomensClothingPage.cardProduct.click()
        await expect (WomensClothingPage.h1TitleProduct).toBeExisting()
    })
    it ('Проверка на наличие товара', async () =>{
        await expect (WomensClothingPage.buttonAddShoppingCart).toHaveText('ДОБАВИТЬ В КОРЗИНУ')
        await WomensClothingPage.buttonAddShoppingCart.click()

    })

})