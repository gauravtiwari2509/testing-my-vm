import express from 'express'
const app = express()
app.get('/', (req, res) => {
    res.send('hii duniya waalo kaise hai aap log, intezaar kariyega mera aa raha hoon mai')
})
app.listen(8000)