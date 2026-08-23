# IotCASA ESPHome Configurations

ESPHome configurations for IotCASA devices.

| Device | Hardware revision | Configuration |
| ------- | ----------------- | ------------- |
| 2 Channel Basic| V1 | 2ch-basic.yaml |
| 2 Channel Pro | V1-V1.2 | 2ch-pro.yaml |
| 2 Channel | V1-V1.2 | 2ch.yaml |
| 4 Channel | V1-V1.4 | 4ch.yaml |
| 4 Channel | V2 | 4ch-v2.yaml |
| 6 Channel | V1 | 6ch.yaml |
| 6 Channel | V2 | 6ch-v2.yaml |
| 8 Channel | V1-V1.2 | 8ch.yaml |
| 8 Channel | V1.3 | 8ch-v1.3.yaml |

See [REVISIONS.md](REVISIONS.md) for hardware revisions and version history.

## Migrating to Tasmota

- Download the Tasmota firmware for [ESP8266](http://ota.tasmota.com/tasmota/release/tasmota.bin.gz).
- Select firmware upgrade, upload `tasmota.bin.gz`, and click Update.
...

## Migrating from Tasmota

- First, execute `SetOption78 1` in the console of Tasmota.
- Download the Tasmota firmware for [ESP8266](http://ota.tasmota.com/tasmota/release/tasmota-minimal.bin.gz).
- Select firmware upgrade, upload `tasmota-minimal.bin`, and click Start Upgrade.
- Select firmware upgrade again, upload the firmware for ESPHome, and click Start Upgrade.
...

## Migrating is currently not possible for ESP32 after SafeBoot is enabled (e.g., after v12)
