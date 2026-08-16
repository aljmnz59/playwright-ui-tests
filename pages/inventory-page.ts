import { Locator, Page, expect } from "@playwright/test";

export class InventoryPage {
    //variables
    readonly page:Page;
    readonly addToCartBtn: Locator;
    readonly cartBadge: Locator;
    readonly removeToCartBtn: Locator;
    readonly prodSort: Locator;
    readonly itemName: Locator;
    readonly itemDescription: Locator;
    readonly itemPrice: Locator;
    readonly itemImg: Locator;
    readonly cartBtn: Locator;

    //constructors
    constructor(page: Page){
        this.page = page;
        this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.removeToCartBtn = page.getByRole('button', { name: 'Remove' });
        this.prodSort = page.locator('[data-test="product-sort-container"]');
        this.itemName = page.locator('[data-test="inventory-item-name"]');
        this.itemDescription = page.locator('[data-test="inventory-item-desc"]');
        this.itemPrice = page.locator('[data-test="inventory-item-price"]');
        this.itemImg = page.locator('[data-test="inventory-item-img"]');
        this.cartBtn = page.locator('[data-test="shopping-cart-link"]');
    }
    //methods
    async assertPageUrl(pageUrl: RegExp){
        await expect(this.page).toHaveURL(pageUrl);
    }

    async clickAddItemToCart(){
        while (await this.addToCartBtn.count() > 0) {
            await this.addToCartBtn.first().click();
        }
    }

    async assertAddCartBadge(){
        await expect(this.cartBadge).toBeVisible();
    }

    async clickRemoveItemToCart(){
        while (await this.removeToCartBtn.count() > 0) {
            await this.removeToCartBtn.first().click();
        }
    }

    async assertRmvCartBadge(){
        await expect(this.cartBadge).not.toBeVisible();
    }

    async clickProdSort(){
        await this.prodSort.click();
    }

    async assertProdSortOpt(){
        await expect.soft(this.prodSort).toHaveValues(['az', 'za', 'lohi', 'hilo']);
    }

    async selectProdSortAZ(){
        await this.prodSort.selectOption({value:'az'});
        
    }
    
    async assertProdSort(){
        await expect(this.prodSort).toHaveValue('az');
        await expect(this.page.locator('.active_option')).toHaveText('Name (A to Z)');
    }

    async assertProductsName(){
        const itemName = await this.itemName.count();
        for(let i = 0; i < itemName; i++){
            await expect(this.itemName.nth(i)).toBeVisible();
            //await expect.soft(this.itemName.nth(i)).toHaveText(/.*Sauce Labs/, {useInnerText: true});;
        }
    }

    async assertProductsDescription(){
        const itemDesc = await this.itemDescription.count();
        for(let i = 0; i < itemDesc; i++){
            await expect(this.itemDescription.nth(i)).toBeVisible();
        }
    }

    async assertProductsPrice(){
        const itemPrice = await this.itemPrice.count();
        for(let i = 0; i < itemPrice; i++){
            await expect(this.itemPrice.nth(i)).toBeVisible();
        }
    }

    async assertProductsImg(){
        const itemImg = await this.itemImg.count();
        for(let i = 0; i < itemImg; i++){
            await expect(this.itemImg.nth(i)).toBeVisible();
        }
    }

    async clickCartBtn(){
        await this.cartBtn.click();
    }



}

export default InventoryPage;