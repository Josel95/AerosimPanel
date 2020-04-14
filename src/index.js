// https://github.com/jangxx/node-vjoy
const { vJoy, vJoyDevice } = require('vjoy');

const express = require('express')

const sleep = require('sleep')

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

if (!vJoy.isEnabled()) {
	console.log("vJoy is not enabled.");
	process.exit();
}

let device = vJoyDevice.create(1);

io.on('connection', socket => {
    socket.on('evento', data => {
        device.buttons[data.id].set(true)
        sleep.msleep(30)
        device.buttons[data.id].set(false)
    })
})

server.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})

