const express = require('express')
const app = express()

console.log('server running')

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
  console.log(__dirname);
  res.sendFile(__dirname +'/views/home.html');
})



app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/views/about.html')
})

app.listen(3000)