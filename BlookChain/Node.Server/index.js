const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Books = require("./index.mongo").Books

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    Books.find({}, (err, data) => {
        if (err)
            res.send("Something went wrong")
        else
            res.send(data)
    })
})

app.post("/api/buyBook", (req, res) => {
    const { owner, newOwner, approved } = req.body
    if (approved) {
        Books.findOneAndUpdate({ owner }, { $set: { owner: newOwner }}, { new: true }, function (err, data) {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            console.log(data);
        });
    } else
        res.send("transaction npt approved")
})


app.post("/api/addbook", (req, res) => {
    const { title, owner, price } = req.body
    if (title.length > 0 && owner.length > 0, price) {
        const Book = new Books(req.body)
        Book.save((err, data) => {
            if (err)
                console.log(err);
            else {
                res.send(data)
                console.log(data);
            }
        })
    }
    else
        res.send("Somthing went wrong")
})

app.post("/api/deletebook", (req, res) => {
    const { _id } = req.body
    Books.findByIdAndRemove({ _id }, (err, data) => {
        if (err)
            res.send("Somthing went wrong")
        else
            res.send("Book Deleted")
    })
})

app.listen(8081, (err) => {
    if (err)
        console.log(err);
    else
        console.log("app runing on port 8081");
})