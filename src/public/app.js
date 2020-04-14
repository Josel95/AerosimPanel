const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')


button1.addEventListener('click', handleButtonPress)
button2.addEventListener('click', handleButtonPress)
button3.addEventListener('click', handleButtonPress)
button4.addEventListener('click', handleButtonPress)
button5.addEventListener('click', handleButtonPress)
button6.addEventListener('click', handleButtonPress)
button7.addEventListener('click', handleButtonPress)
button8.addEventListener('click', handleButtonPress)


var socket = io.connect('http://192.168.1.99:3000')

socket.on('news', data => {
    console.log(data)
})

function handleButtonPress(event) {
    let id = Number(event.target.id[event.target.id.length - 1])

    socket.emit('evento', {id, checked: true})
}