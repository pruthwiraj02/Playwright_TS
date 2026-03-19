import {test,expect,Page,Browser,Locator} from '@playwright/test'
import {chromium,firefox} from 'playwright'

test("Login Test", async ({})=>
 {
const browser:Browser= await chromium.launch({headless:false});
const page:Page=await browser.newPage();
await page.goto('https://practicetestautomation.com/practice-test-login/');

//Verify title
let title: string=await page.title();
await expect(page).toHaveTitle(title);

//Verify Login
await page.locator('#username').fill("student");
await page.locator('#password').fill("Password123");
await page.locator('#submit').click();
expect(page.locator('text=Logged In Successfully')).toBeVisible;

})
