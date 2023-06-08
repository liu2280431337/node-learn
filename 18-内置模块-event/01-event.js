const EventEmitter = require('events');

const event = new EventEmitter();

event.on("play", (data) => {
    console.log("Playing...", data);
})
event.on("run", (data) => {
    console.log("Running...", data);
})


setTimeout(() => {
    event.emit('play', '111111');
}, 2000)
setTimeout(() => {
    event.emit('run', '111111');
}, 5000)