var {Given, When, Then, Before, After} = require('@cucumber/cucumber');

Given(/^User launch google website$/,{timeout: 500 * 1000}, async function () {
    console.log("Launch Google");
    return await browser.url("http://www.google.com/");
    // return await browser.debug();
});

When(/^User perform google search with "(.+)"$/,{timeout: 500 * 1000}, async function (searchText) {
    console.log("Search in Google");
    await $("//*[@name='q']").click();
    await $("//*[@name='q']").setValue(searchText);
    return await browser.keys("Enter");
});