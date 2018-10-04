var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');

app.use(express.static('./dist/my-app'));

app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

app.use(cors());
app.options('*', cors());

var User = require('./models/user.js');
var Field = require('./models/field.js');
var Master = require('./models/master.js');
  
app.get('/userdata/:id',  async(req, res) =>{    
  var decode = jwt.decode(req.params.id,'123');
  var author = decode.sub
  const ObjectId = mongoose.Types.ObjectId;    
  var user = await User.find({"_id":ObjectId(author)})    
  res.send(user[0]);  
});

app.get('/master', async (req, res)=>{  

  var master = await Master.find({})
  
  res.send(master);

})

app.post('/master', async (req, res)=>{  
  var masterData = req.body     
  var decode = jwt.decode(req.body.token,'123')
  masterData.author = decode.sub  
  var master = new Master(masterData)  
  master.save((err, result)=>{
    if(!err){
      console.log('Saved!')
      res.send(result)
    }    
  })
})

app.post('/masterpicture', async (req, res)=>{  

    var master = await Master.findOne(
        {"_id":req.body._id},
        function(err,master){
          if(!err){
            master.nameImage.push(req.body.nameImage);
            master.pathImage.push('./src/assets/'+master.fullname+'/'+req.body.nameImage);
            master.save()        
        }      
      }
    )
  
    var fs = require('fs');    
    var string = req.body.url
    var nameImage = req.body.nameImage    
    var regex = /^data:.+\/(.+);base64,(.*)$/;
    
    var matches = string.match(regex);
    var ext = matches[1];
    var data = matches[2];
    var buffer = new Buffer(data, 'base64');
    var dir = './src/assets/'+master.fullname+'/';
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    fs.writeFileSync('./src/assets/'+master.fullname+'/'+nameImage, buffer); 

    res.send(master);
  
})
app.post('/masterstatus', async (req, res)=>{ 
  var master = Master.findOne({"_id":req.body._id},function(err,master){
    master.status = req.body.status
    master.save()
  })  
}) 
app.post('/masteredit', async (req, res)=>{ 
  
  var master = Master.findOne({"_id":req.body._id},function(err,master){
    master.fullname = req.body.fullname
    master.title = req.body.title
    master.description = req.body.description
    master.category = req.body.category
    master.save()    
  })  
  
}) 
app.post('/masterremove', async (req, res)=>{ 

  const ObjectId = mongoose.Types.ObjectId;      
  var _id = new ObjectId(req.body._id);

  var master = await Master.findOne({"_id":_id},function(err,field){
    if(!err){
      field.remove(function(err){
        
      })
    }
  });

  res.send(master);

      
}) 
app.post('/userdata', async (req, res)=>{  
  var decode = jwt.decode(req.body.token,'123');
  var userObj = this;
  userObj = {"author":decode.sub,"password":req.body.password,"language":req.body.language}; 
  
  const ObjectId = mongoose.Types.ObjectId;        
  var user = await User.findOne({"_id":ObjectId(userObj.author)},function(err,users){

      if(!err){
        users.language = userObj.language
        bcrypt.hash(userObj.password, null, null, (err, hash)=>{                   
          users.password = hash;          
        })
        users.save()
      }
  })    
  
})

app.get('/fields',  async(req, res) =>{    
  var fields = await Field.find({})
  res.send(fields);
});

app.post('/field', (req, res)=>{
  
      var postData = req.body      
  
      var field = new Field(postData);
  
      field.save((err, result)=>{
          if(err){
              console.error('Saving Post Error');
              return res.status(500).send({message: 'Saving Post Causing an error'});
          }
  
        })
        res.send(postData);
})

app.post('/removefield',  async (req, res)=>{
  
      var postData = req.body 
      
      const ObjectId = mongoose.Types.ObjectId;    

      var _id = new ObjectId(req.body._id);

      var field = await Field.findOne({"_id":_id},function(err,field){
        if(!err){
          field.remove(function(err){
            
          })
        }
      });

      res.send(postData);
      
})
app.post('/updatefield',  async (req, res)=>{
  
      var postData = req.body 
      
      const ObjectId = mongoose.Types.ObjectId;    

      var _id = new ObjectId(req.body._id);

      var field = await Field.findOne({"_id":_id},function(err,field){
        if(!err){
          field.description = req.body.description
          field.value = req.body.value
          field.category = req.body.category
          field.field = req.body.field
          field.save(function(err){
            
          })
        }
      });

      res.send(postData);
      
})
app.post('/login', async (req, res)=>{
  
  var userData = req.body;
  var user = await User.findOne({username: userData.username});
  
  if(!user){
    return res.status(401).send({message: 'Email or Password Invalid'})
  }
  
  bcrypt.compare(userData.password, user.password, (err, isMatch) =>{
    if(!isMatch){
      return res.status(401).send({message: 'Email or Password Invalid'})
    }
    
    var payload = { sub: user._id, expiresIn: 1 }
    
    var token = jwt.encode(payload, '123',)
    
    res.status(200).send({token})
  })
})  
app.post('/register', function(req,res){
  
  var userData = req.body;

  var user = new User(userData);

  bcrypt.hash(userData.password, null, null, (err, hash)=>{                   
    user.password = hash;          
  })

  user.save((err, newUser) =>{
    if(!err){
      console.log('User registed');
    }
  })
})
mongoose.connect('mongodb://localhost:27017/project3',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})
app.listen(4201, function(){
  console.log("Listening from 4201...");
});