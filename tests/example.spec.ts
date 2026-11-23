import {test, expect} from '@playwright/test';

test ('Open automation exercise site and check title', async function({page}){
  await page.goto('https://playwright.dev/');

  const navbar = page.locator('.navbar');

   const title =  navbar.getByRole('link',{name:'Playwright'}); 
   await expect(title).toBeVisible(); 

  });