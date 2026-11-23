import {test, expect} from '@playwright/test';

test ('Open automation exercise site and check title', async function({page}){
  //read URL from env variable, otherwise open default
  const targetURL = process.env.TEST_URL||'https://playwright.dev/';
  await page.goto(targetURL);

  const navbar = page.locator('.navbar');

   const title =  navbar.getByRole('link',{name:'Playwright'}); 
   await expect(title).toBeVisible(); 

  });