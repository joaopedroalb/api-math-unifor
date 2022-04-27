const math = require('./math')
const express = require('express')
const app = express()
const cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(9191,()=>{
    console.log('server express on...')
})

app.get("/", (req, res) => {
    return res.json({ok:'200'});
});

app.get("/sum",(req,res)=>{
    const {a,b} = req.query

    if(!a || !b || isNaN(a) || isNaN(b))
        return res.status(500).send({error:'Utilize valores validos'});
    
    const parseA = parseFloat(a)
    const parseB = parseFloat(b)
    const result = math.sum(parseA,parseB)

    return res.json({soma:result});
})

app.get("/sub",(req,res)=>{
    const {a,b} = req.query

    if(!a || !b || isNaN(a) || isNaN(b))
        return res.status(500).send({error:'Utilize valores validos'});

    const parseA = parseFloat(a)
    const parseB = parseFloat(b)
    const result = math.subt(parseA,parseB)

    return res.json({subtração:result});
})

app.get("/mult",(req,res)=>{
    const {a,b} = req.query

    if(!a || !b || isNaN(a) || isNaN(b))
        return res.status(500).send({error:'Utilize valores validos'});
    
    const parseA = parseFloat(a)
    const parseB = parseFloat(b)
    const result = math.multi(parseA,parseB)
    
    return res.json({multiplicação:result});
})

app.get("/div",(req,res)=>{
    const {a,b} = req.query

    if(!a || !b || isNaN(a) || isNaN(b))
        return res.status(500).send({error:'Utilize valores validos'});
    
    const parseA = parseFloat(a)
    const parseB = parseFloat(b)
    const result = math.div(parseA,parseB)
    
    return res.json({divisao:result});
})
   



