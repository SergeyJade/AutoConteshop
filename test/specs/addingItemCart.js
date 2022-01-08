const Header = require('../pageobjects/Header')
const WomensClothingPage = require('../pageobjects/WomensClothingPage')
const OnlineStoreBasket = require('../pageobjects/OnlineStoreBasket')

describe ('Доабвление товара в корзину', () =>{
    it ('Добавление',  async () =>{
        console.log('++++++++++++++++++++++++++++++++++++++++0')
        await browser.setWindowSize(1920, 1080)
        console.log('++++++++++++++++++++++++++++++++++++++++1')
        await Header.open()
        console.log('++++++++++++++++++++++++++++++++++++++++2')
        await expect(Header.logo).toBeExisting()
        console.log('++++++++++++++++++++++++++++++++++++++++3')
        const actions = driver.actions({bridge: true});
        let elem=await driver.findElement(By.id("myId"));
        await actions.move({duration:5000,origin:elem,x:0,y:0}).perform();
        await Header.unputWomen
        await Header.unputWomen.click()
        console.log('++++++++++++++++++++++++++++++++++++++++4')
        // await (Header.inputWomenCloth).click()
        console.log('++++++++++++++++++++++++++++++++++++++++5')
        await expect(WomensClothingPage.h1Women).toHaveText('Женская одежда')
    })
})