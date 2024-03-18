const express = require('express'), // load express module
app = express();
app.get('/', (req, res)=>{
// initiate app
// for GET / requests
// respond 'Hello World!'
// serve on port 3000
   res.send('Hello World!')
});

app.use(express.static("public"))

app.get("/breeds", (req,res) => {
   const breeds = ["chihuahua","Boxer", "Pug", "Bulldog", "Labrador"]
   res.json(breeds)
})

app.get('/images', (req, res) => {
   const { breed } = req.query;
   const images = {
      'chihuahua': [
         'img/chihuahua/chihuahua1.jpeg',
         'img/chihuahua/chihuahua2.webp',
      ],
      'boxer': [
         'img/boxer/boxer1.jpeg',
         'img/boxer/boxer2.jpeg',
      ],
      'pug': [
         'img/bulldog/pug1.jpeg',
         'img/bulldog/pug2.jpeg',
      ],
      'bulldog': [
         'img/bulldog/bulldog1.jpeg',
         'img/bulldog/bulldog2.jpeg',
      ],
      'labrador': [
         'img/bulldog/labrador1.jpeg',
         'img/bulldog/labrador2.jpeg', 
      ]
   }
   res.json(images[breed.toLocaleLowerCase()])
})

app.listen( 3000, () => console.log("server is running on PORT 3000") );