const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

console.log("Starting espnow2mqtt");
let serialPath = '/dev/serial/by-id/usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0';
console.log(`Using Port: ${serialPath}`);

const port = new SerialPort(serialPath, {
    baudRate: 11520
});
const parser = port.pipe(new Readline({ delimiter: '\n' }));

console.log("Adding Listener");
parser.on('data', (data) => {
    console.log(data);
});
