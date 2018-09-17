var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

driver.get('https://www.corotos.com.do/create');

driver.findElement(By.id('pid_email')).sendKeys('reymesson@gmail.com')
driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()

driver.wait(webdriver.until.elementLocated(webdriver.By.id('otp-verification-code')),20000)
.then(()=>{
   return driver.findElement(webdriver.By.id('otp-verification-code')).sendKeys('123456');
}).then((element)=>{
    // Perform any operation what you to do.
      return driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()
}).catch(()=>{
     console.log('Element not found');
})