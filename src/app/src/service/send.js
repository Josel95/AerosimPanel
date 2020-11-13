import { socket } from '../socket'

export const sendMessage = (event, data) => {
    socket.emit(event, data)
}

export const sendButton = (id) => {
    sendMessage('button', { id })
}