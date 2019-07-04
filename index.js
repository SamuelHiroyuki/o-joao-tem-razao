const express = require('express')
const sql = require("mssql")
const cors = require("cors")


const app = express()
const connStr = "Server=rainha7.ddns.com.br;Database=TESTE_TECWARE;User Id=sa;Password=tec9TIT16;";

sql.connect(connStr).then(conn => global.conn = conn)

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/oJoaoTemRazao', (req, res) => {
    global.conn.request()
        .query("O_JOAO_TEM_RAZAO")
        .then(result => res.json(result.recordset))
});

app.listen(process.env.PORT || 8888)