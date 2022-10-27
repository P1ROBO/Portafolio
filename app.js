const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine' , 'ejs')
app.set('views', __dirname+'/views')


app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('index')
})

app.get('/Educacion', (req, res) => {
    res.render('educacion',{
        titulo: "Seccion educativa",
        descripcion: "aquí verás mi info Académica"
    })
  })

app.get('/Laboral', (req, res) => {
    res.render('laboral')
  })  

  app.use((req, res, next) => {
    res.status(404).sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
  console.log(`puedes acceder al servidor haciendo click aquí http://localhost:${port}`)
})

