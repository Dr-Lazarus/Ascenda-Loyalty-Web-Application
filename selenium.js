const {By,Key,Builder, until} = require("selenium-webdriver");
require("chromedriver");

async function test(){
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    // Step 1 - To fetch our server from the browser with our code.
    await driver.get("https://localhost:3000");
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
   


    //login 
    let email1 = await driver.findElement(By.name("email"));
    let password2 = await driver.findElement(By.name("password"))
    
    await email.click()
    await email.sendKeys("Sharryl Seto")
    await password.click()
    await password.sendKeys("caomeipiaoliang12345")
    await driver.findElement(By.id("submit")).click()


    let hotelCards = driver.findElement(By.name("HotelCard"));
    await sleep(5000);
    await driver.findElement(By.name("HotelsSearchBar")).click();
    // load search input bar then continue
    let inputBar = driver.findElement(By.name("dest_input"));
    await inputBar.click();
    await inputBar.clear();
    await sleep(3000);
await driver.close()




