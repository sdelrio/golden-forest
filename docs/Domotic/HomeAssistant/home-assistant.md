# Home Assistant

## Automations

Automations are created in Home Assistant via the UI, but are stored in a YAML format. If you want to edit the YAML of an automation, go to edit the automation, click on the menu button in the top right and turn on YAML mode.

* [https://www.home-assistant.io/docs/automation/yaml/](https://www.home-assistant.io/docs/automation/yaml/)


## Amazon Smart Plugs

There is no directo control, but can make a forwarder through alexa.

```yaml
input_boolean:
  alexa_fwd_charger:
    name: "Charger"

binary_sensor:
  - platform: template
    sensors:
      - alexa_fwd_charger:
          friendly_name: "FWD-TRG-Device Charger"
          device_class: garage_door
          value_template: "{{ is_state('input_boolean.alexa_fwd_dev_charger', 'on') }}"
```

* [https://community.home-assistant.io/t/amazon-smart-plugs/80994/18](https://community.home-assistant.io/t/amazon-smart-plugs/80994/18)

## Change color temperature based on sun angle

```yaml
  - condition: numeric_state
    entity_id: sun.sun
    value_template: "{{ state.attributes.elevation }}"
    below: 9.5
    above: -30.0
```

* [https://community.home-assistant.io/t/trying-to-change-color-temp-based-on-sun-angle-or-time/74774](https://community.home-assistant.io/t/trying-to-change-color-temp-based-on-sun-angle-or-time/74774)

## Prometheus and Grafana

You have to install the [prometheus-exporter](https://www.home-assistant.io/integrations/prometheus/) and then gather metrics with the prometheus server.

* [https://www.technicallywizardry.com/home-assistant-prometheus-charts-grafana/](https://www.technicallywizardry.com/home-assistant-prometheus-charts-grafana/)

