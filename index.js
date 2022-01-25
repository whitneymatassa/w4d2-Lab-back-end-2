const express =  require("express");
const cors = require("cors");
const { application } = require("express");
const {getHouses, createHouse, deleteHouse, updateHouse} = require('./controller')


const app = express();
app.use(cors());

app.use(express.json());

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)


app.listen(4000, () => console.log("server running on port 4000"))
