const app = require("./App")

const config = require("./app/config")


const PORT = config.app.port

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}.`);
});




