const express =require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Word!");
});
app.listenerCount(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

console.log("Hello Word!");

