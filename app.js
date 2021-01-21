const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.listen(3000, () => {
  console.log('localhost/servidorExpress OK')
})

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))

app.use(express.static('assets'))


app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs())

app.get('/dashboard', (req, res) => {
  res.send(JSON.parse('product  '))
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

//Vistas parciales con motor de plantillas

app.get('/banana', function(req, res) {
  res.render('Banana', { layout: 'Banana'})
})

app.get('*', (req, res) => {
  res.send('404')
})