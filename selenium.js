const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function test(){
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    // To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
    
    // Step 1 - To fetch our server from the browser with our code.
    
    
    await driver.get("http://localhost:3000");
    await driver.manage().setTimeouts({ implicit: 5000 });
    console.info(await driver.manage().getTimeouts());
    // get login button
    await driver.findElement(By.id("loginbutton")).click()
    await driver.sleep(2000)

    //register
    await driver.findElement(By.className("button-register")).click()
    await driver.sleep(2000)
    //entering details
    let firstName = await driver.findElement(By.name("firstName"));
    let lastName = await driver.findElement(By.name("lastName"));

    let contact = await driver.findElement(By.name("contact"));
    let email = await driver.findElement(By.name("email"));
    let password = await driver.findElement(By.name("password"));
    let repassword = await driver.findElement(By.name("repassword"));
    await firstName.sendKeys("Bryan")
    await lastName.sendKeys("Sitoh")
    await contact.sendKeys("91124586")
    await email.sendKeys("Bryan@gmail.com")
    await password.sendKeys("iloveboobs")
    await repassword.sendKeys("iloveboobs")
    await driver.findElement(By.id("registerbutton")).click()

    await driver.sleep(10000)


    //login 
    let email1 = await driver.findElement(By.name("email"));
    let password2 = await driver.findElement(By.name("password"))
    
    await email1.click()
    await email1.sendKeys("Bryan@gmail.com")
    await password2.click()
    await password2.sendKeys("iloveboobs")
    await driver.findElement(By.id("submit")).click()
    await driver.close()

}
test()

