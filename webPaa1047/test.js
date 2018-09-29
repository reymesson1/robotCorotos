var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var Post = require('./models/post.js');
var Master = require('./models/master.js');

var CronJob = require('cron').CronJob;
new CronJob('0 */2 * * * *', function() {
  console.log('You will see this message every second');

  setTimeout(async() => {

    var master = await Master.findOne({"status":true})
    console.log(master)      
    dataMaster["title"] = master.title
    dataMaster["description"] = master.description

    
  }, 2000);

var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

var dataMaster = {}

driver.get('https://www.corotos.com.do/create');

driver.findElement(By.id('pid_email')).sendKeys('reymesson@gmail.com')
driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()

driver.wait(webdriver.until.elementLocated(webdriver.By.id('otp-verification-code')),20000)
.then(()=>{
  setTimeout(async() => {
    console.log('esperar....')
    var posts = await Post.find({})
    console.log(posts[0].code);
    return driver.findElement(webdriver.By.id('otp-verification-code')).sendKeys(posts[0].code);
  }, 15000);
  
}).then((element)=>{
    setTimeout(async() => {      
      console.log('esperar2....')
      return driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()
    }, 20000);
    setTimeout(async() => {      
      console.log('esperar3....')
      var posts = Post.remove({},function(err){
        if(!err){console.log('removed!')}
      })

      return driver.get('https://www.corotos.com.do/create')      
    }, 25000);
    setTimeout(async() => {      
      console.log('esperar4....')
      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/img(97).jpg");
    }, 30000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 35000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("title")).sendKeys(dataMaster.title);
    }, 40000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("description")).sendKeys(dataMaster.description);
    }, 41000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).click();
    }, 41000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).sendKeys("i");
    }, 41000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).sendKeys("i");
    }, 42000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 43000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).click();
    }, 45000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).sendKeys("a");
    }, 45000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 45000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 45000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.rooms")).sendKeys("4");
    }, 47000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.bathrooms")).sendKeys("4");
    }, 47000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.constructionArea")).sendKeys("110");
    }, 47000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.buildingCondition")).click();
    }, 47000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.buildingCondition")).sendKeys("n");
    }, 48000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.furnishedType")).click();
    }, 49000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.furnishedType")).sendKeys("s");
    }, 49000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 50000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("price")).sendKeys(210000);
    }, 51000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 52000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 52000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 53000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 54000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 55000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 56000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 57000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 58000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 59000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 60000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).click();
    }, 60000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).sendKeys("s");
    }, 61000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 61000);        
    setTimeout(async() => {      
      console.log('esperar5....')
      driver.close()
    }, 62000);        

}).catch(()=>{
    console.log('Element not found');
    driver.close();
})

}, null, true, 'America/Los_Angeles');


mongoose.connect('mongodb://localhost:27017/project2',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})