import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let returnData = "Hello HTMX!";

app.get("/test", (req, res) => {
    setTimeout(() => {
        res.send(returnData);
    }, 2000);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});