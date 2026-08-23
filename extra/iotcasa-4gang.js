// Custom Z2M external converter for the IOTCasa 4-Gang ZB Switch
// (ESP32-C6, built with luar's external zigbee component)
const m = require('zigbee-herdsman-converters/lib/modernExtend');
module.exports = [
    {
        zigbeeModel: ['diy-4gang'],
        model: 'ESP32 C6 4 Gang',
        vendor: 'IOTCasa',
        description: 'DIY Zigbee Device - 4 Gang Switch',
        extend: [
            m.deviceEndpoints({"endpoints":{"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"11":11}}),
            m.binary({
                name: "WiFi_state",
                cluster: "genBinaryOutput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_output_wifi",
                access: "ALL",
                endpointName: "1"
            }),
            m.binary({
                name: "Relay_1",
                cluster: "genBinaryOutput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_output_relay1",
                access: "ALL",
                endpointName: "2"
            }),
            m.binary({
                name: "Relay_2",
                cluster: "genBinaryOutput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_output_relay2",
                access: "ALL",
                endpointName: "3"
            }),
            m.binary({
                name: "Relay_3",
                cluster: "genBinaryOutput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_output_relay3",
                access: "ALL",
                endpointName: "4"
            }),
            m.binary({
                name: "Relay_4",
                cluster: "genBinaryOutput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_output_relay4",
                access: "ALL",
                endpointName: "5"
            }),
            m.binary({
                name: "Switch_1",
                cluster: "genBinaryInput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_input_switch1",
                access: "STATE_GET",
                endpointName: "6"
            }),
            m.binary({
                name: "Switch_2",
                cluster: "genBinaryInput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_input_switch2",
                access: "STATE_GET",
                endpointName: "7"
            }),
            m.binary({
                name: "Switch_3",
                cluster: "genBinaryInput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_input_switch3",
                access: "STATE_GET",
                endpointName: "8"
            }),
            m.binary({
                name: "Switch_4",
                cluster: "genBinaryInput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_input_switch4",
                access: "STATE_GET",
                endpointName: "9"
            }),
            m.binary({
                name: "Status_LED",
                cluster: "genBinaryOutput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_output_led",
                access: "ALL",
                endpointName: "10"
            }),
            m.binary({
                name: "Restart",
                cluster: "genBinaryOutput",
                attribute: "presentValue",
                reporting: {attribute: "presentValue", min: "MIN", max: "MAX", change: 1},
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                description: "binary_output_restart_button",
                access: "ALL",
                endpointName: "11"
            }),
        ],
        meta: {multiEndpoint: true},
        icon: 'https://i.postimg.cc/Y2PPBhxp/4ch-z2m.png',
    },
];
