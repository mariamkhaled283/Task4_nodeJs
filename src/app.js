
const express = require('express')
const app = express()

const port = process.env.PORT || 3000


const path = require ("path")
const publicDirectory = path.join(__dirname , '../public')
app.use (express.static(publicDirectory))


app.set('view engine', 'hbs');
const viewsDirectory = path.join (__dirname , "../parView/views" )
      app.set( "views" , viewsDirectory)

const hbs = require("hbs")
const partialspath = path.join(__dirname , "../parView/partials")
hbs.registerPartials(partialspath)



app.get('/' , (req , res) => {
  res.render('index' , {
      title: "Home Page",
      desc : "Welcome to Home Page"
  })
})

app.get('/weather' , (req , res) => {
  res.render('weather' , {
      title: "Check Weather Page",
      country : "Egypt",
      latitude : 26.4941838299718,
      longitude : 29.871903452398,
      current_weather : "Clear",
      temperature : 35
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })
  



