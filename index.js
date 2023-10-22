// importing json server
const jsonServer = require ('json-server')

// create json server using json-server library
const contactMangerServer = jsonServer.create()

// setup path/route for db.json file
const router = jsonServer.router('db.json')

// Return middleware used by json Server
const middleware=jsonServer.defaults()

// setup a port for server App || to get dynamically use this:-  process.env.PORT
const port=4000 || process.env.PORT

// use middleware and router in server
contactMangerServer.use(middleware)
contactMangerServer.use(router)

// server should listen for request from frontend
contactMangerServer.listen (port,()=>{
    console.log(`contact manager Server Started At Port ${port}, and waiting for request!!!`);
})

