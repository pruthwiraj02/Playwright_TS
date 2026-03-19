import {test,expect,Page,Browser} from '@playwright/test'
import {chromium} from 'playwright'
test("Title", async ({})=>
 {
const browser:Browser= await chromium.launch({headless:false});
const page:Page=await browser.newPage();
await page.goto('https://playwright.dev/');

let title: string=await page.title();
console.log('Title',title);

await expect(page).toHaveTitle(title);

await page.getByRole('link',{name:'Get started'}).click();

let title2: string=await page.title();
console.log('Title',title2);

})
