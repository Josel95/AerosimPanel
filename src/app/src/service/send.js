import { socket } from '../socket'

export const sendMessage = (event, data) => {
    socket.emit(event, data)
}

export const sendButton = (id, options) => {
    sendMessage('button', { id, options })
}