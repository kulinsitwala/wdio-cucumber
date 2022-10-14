var {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {
	Eyes,
    ClassicRunner,
	Configuration,
    Target
} = require('@applitools/eyes-webdriverio');


Then(/^User perform visual check on "(.+)"\.$/,{timeout: 500 * 1000}, async function (checkpoint) {
        await browser.eyes.check(checkpoint, Target.window().fully());
});