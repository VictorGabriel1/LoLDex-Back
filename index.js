const mongoose = require("mongoose")
const express = require("express");
const cors = require("cors");
const app = express();
// const champion = require("./models/champion")
const cd = require("./models/cd")
const item = require("./models/item")

mongoose.connect("mongodb://localhost:27017/lol")

app.use(cors());

app.use(express.json());

app.listen(1234, () => {
    console.log("rodando");
});

// app.get("/all", async (_, res) => {
//     const listaChampions = await champion.find({}).select("Name -_id");
//     console.log(listaChampions)
//     res.send(listaChampions);
// })

app.get("/allChamps", async (_, res) => {
    const listachamps = await cd.find({}).select("name + id -_id");
    console.log(listachamps);
    res.send(listachamps);
})

app.get("/allItems", async (_, res) => {
    const listaitens = await item.find()
    console.log(listaitens);
    res.send(listaitens);
})

// app.put("/one2", async (req, res) => {
//     const { id } = req.body;
//     try {
//         const info = await cd.findOne({ id: id })
//         // res.sendStatus(200)
//         console.log(info)
//         return res.json([info])

//     } catch (e) {
//         res.sendStatus(500)
//     }

// })

app.put("/oneChamp", async (req, res) => {
    const { idc } = req.body;
    try {
        let info = await cd.findOne({ id: idc })
        // res.sendStatus(200)
        console.log(info)
        return res.json([info])

    } catch (e) {
        res.sendStatus(500)
    }

})

app.put("/oneItem", async (req, res) => {
    const { idc } = req.body;
    try {
        let info = await item.findOne({ item_id: idc })
        // res.sendStatus(200)
        console.log(info)
        return res.json([info])

    } catch (e) {
        res.sendStatus(500)
    }

})