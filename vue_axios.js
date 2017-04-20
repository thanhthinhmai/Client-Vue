const path = require('path')
const express = require('express')
const expressVue = require('express-vue')
const app = express()

app.use('/public', express.static('public'))


app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/views/components'),
    defaultLayout: 'layout'
});

//--------Body Parser ----------------------
const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

const selectItems = [
    { name: '-', type: 0 },
    { name: 'thing', type: 1 },
    { name: 'animal', type: 2 },
    { name: 'all', type: 3}
];

let things = require('./model/things')

app.get('/', (req, res) => {
    let scope = {
        data: {
            selectItems: selectItems
        },
        vue: {
            components:['demo']
        }
    }
    res.render('index_axios',scope );
})

app.post('/querydata', (req, res) => {
    res.json(things.getThing(req.body.selectedType))
})


app.listen(4000, () => {
    console.log('Express server listening on port 4000');
});