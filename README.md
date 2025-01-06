# IotCASA ESPHome configurations

This repository contains a bunch of ESPHome configurations for IotCASA devices.

If you are prompted that there is not enough space, you should upgrade `ESP8266_MINI.bin` first

- mini is a transit firmware, after running, it will generate a hotspot of "ESP_UPDATE_XXXXXX"
- Connect to the hotspot and visit `http://192.168.4.1/update` in the browser
- Upload updated ESPHome firmware

# Migrating to Tasmota

- Download the Tasmota firmware for [ESP8266](http://ota.tasmota.com/tasmota/release/tasmota.bin.gz).
- Select firmware upgrade, upload `tasmota.bin.gz`, and click Update.

# Migrating from Tasmota

- First, execute `SetOption78 1` in the console of Tasmota.
- Download the Tasmota firmware for [ESP8266](http://ota.tasmota.com/tasmota/release/tasmota-minimal.bin.gz).
- Select firmware upgrade, upload `tasmota-minimal.bin`, and click Start Upgrade.
- Select firmware upgrade again, upload the firmware for ESPHome, and click Start Upgrade.

## Migrating is currently not possible for ESP32 after SafeBoot is enabled (e.g., after v12)
