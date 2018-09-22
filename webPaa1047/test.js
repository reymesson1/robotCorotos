var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var Post = require('./models/post.js');

var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

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
      return driver.findElement(By.id("title")).sendKeys("test");
    }, 40000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("description")).sendKeys("test2");
    }, 41000);
    setTimeout(async() => {      
      console.log('esperar5....')
      //el = driver.find_element_by_id('categories')
      // el = driver.findElement(By.id("category_0"))
      // for (option in el.findElement(By.tagName("option")) ){
      //   console.log(option)
      //   if (option.get_attribute("value") == "1"){

      //     return option.click()
      //   }
      // }
      return driver.findElement(By.id("category_0")).sendKeys("Inmuebles en venta");
    }, 41000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).sendKeys("Apartamentos");
    }, 42000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 45000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.rooms")).sendKeys("4");
    }, 50000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.bathrooms")).sendKeys("4");
    }, 51000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.constructionArea")).sendKeys("110");
    }, 51000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.buildingCondition")).sendKeys("Nuevo");
    }, 52000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.furnishedType")).sendKeys("Sin amueblar");
    }, 53000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.furnishedType")).sendKeys("Sin amueblar");
    }, 53000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 55000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("price")).sendKeys("30000.00");
    }, 570000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("Santo Domingo");
    }, 570000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).sendKeys("Santo Domingo Este");
    }, 570000);
    

}).catch(()=>{
    console.log('Element not found');
})


mongoose.connect('mongodb://localhost:27017/meanstack',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})