// https://github.com/jangxx/node-vjoy
const { vJoy, vJoyDevice } = require('vjoy');

const express = require('express')

const sleep = require('sleep');
const { Console } = require('console');

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

if (!vJoy.isEnabled()) {
	console.log("vJoy is not enabled.");
	process.exit();
}

let device = vJoyDevice.create(1);

const max_buttons = Object.keys(device.buttons).length

const pressButton = (buttonId, options) => {

    if(options?.active != undefined) {
        device.buttons[buttonId].set(options.active)
        return
    }

    device.buttons[buttonId].set(true)
    sleep.msleep(30)
    device.buttons[buttonId].set(false)
}

io.on('connection', socket => {
    console.log("Cliente conectado")

    socket.on('button', data => {
        if(!data.id) {
            return
        }

        if( data.id > max_buttons){
            console.error(`\t Se ha recibido un botón invalido (recibido: ${data.id}, maximo permitido: ${max_buttons})`)
            return
        }

        console.log(`\t - Presionado botón: ${data.id} `)
        pressButton(data.id, data.options)
    })
})

server.listen(3001, '192.168.1.99', () => {
    console.log("Servidor corriendo en puerto 3001")
})

