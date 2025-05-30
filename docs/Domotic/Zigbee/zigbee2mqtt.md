# Zigbee2MQTT

Zigbee2MQTT was written in Node.js and runs almost on every platform with affordable memory footprint.

It allows you to use Zigbee devices **without** the vendors bridge or gateway. 

It bridges events and allows you to control your Zigbee devices via MQTT. In this way you can integrate your 
Zigbee devices with whatever smart home infrastructure you are using.

## Kubernetes

### Helm

* chart: `k8s-at-home/zigbee2mqtt`
* sample `values.yml`:

```yaml
image:
  repository: koenkk/zigbee2mqtt
  tag: 1.17.1
env:
  TZ: Etc/UTC
  ZIGBEE2MQTT_DATA: /data
config:
  homeassistant: true
  device_options:
    retain: true
  # will use Permit join button on UI when needed
  permit_join: false
  mqtt:
    base_topic: zigbee2mqtt
    server: "mqtt://vernemq"
    user: {{ .Values.vernemq_user }}
    password: {{ .Values.vernemq_password }}
  serial:
    port: /dev/ttyACM0
    disable_led: true
  ota:
    disable_automatic_update_check: true
    update_check_interval: 86400
  advanced:
    ikea_ota_use_test_url: true
    log_output:
    - console
    network_key:
    - {{ .Values.zigbee_net_key_1 }}
    - {{ .Values.zigbee_net_key_2 }}
    - {{ .Values.zigbee_net_key_3 }}
    - {{ .Values.zigbee_net_key_4 }}
    - {{ .Values.zigbee_net_key_5 }}
    - {{ .Values.zigbee_net_key_6 }}
    - {{ .Values.zigbee_net_key_7 }}
    - {{ .Values.zigbee_net_key_8 }}
    - {{ .Values.zigbee_net_key_9 }}
    - {{ .Values.zigbee_net_key_10 }}
    - {{ .Values.zigbee_net_key_11 }}
    - {{ .Values.zigbee_net_key_12 }}
    - {{ .Values.zigbee_net_key_13 }}
    - {{ .Values.zigbee_net_key_14 }}
    - {{ .Values.zigbee_net_key_15 }}
    - {{ .Values.zigbee_net_key_16 }}
  frontend:
    port: 8080
  experimental:
    new_api: true
securityContext:
  privileged: true
ingress:
  enabled: true
  annotations:
# internal nginxclass = nginx
    kubernetes.io/ingress.class: nginx
  hosts:
  - host: "zigbee2mqtt.internal.{{ .Values.dns_domain_1 }}"
    paths:
    - path: /
      pathType: Prefix
  tls:
  - hosts:
    - "zigbee2mqtt.internal.{{ .Values.dns_domain_1 }}"
persistence:
  data:
    enabled: true
    mountPath: /data
    storageClass: "longhorn-r2"
    accessMode: ReadWriteOnce
    size: "1Gi"
podAnnotations:
  backup.velero.io/backup-volumes: data
additionalVolumeMounts:
- name: usb
  mountPath: /dev/ttyACM0
additionalVolumes:
- name: usb
  hostPath:
    path: /dev/ttyACM0
affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
      - matchExpressions:
        - {key: "feature.node.kubernetes.io/custom-ti-cc2531", operator: In, values: ["true"]}
addons:
  codeserver:
    enabled: false
    image:
      repository: codercom/code-server
      tag: 3.9.0
    workingDir: "/data"
    args:
    - --user-data-dir
    - "/data/.vscode"
    - --auth
    - "none"
    ingress:
      enabled: true
      annotations:
# internal nginxclass = nginx
        kubernetes.io/ingress.class: nginx-internal
      hosts:
      - host: zigbee2mqtt-config.internal.{{ .Values.dns_domain_1 }}
        paths:
        - path: /
          pathType: Prefix
      tls:
      - hosts:
        - zigbee2mqtt-config.internal.{{ .Values.dns_domain_1 }}
    volumeMounts:
    - name: data
      mountPath: /data
```

## Install on Hassio

* [Install zigbee2qtt on Hassio](https://domoticaencasa.es/tutorial-instalar-zigbee2mqtt-hassio)

## References

* [Homepage](https://www.zigbee2mqtt.io/getting_started/running_zigbee2mqtt.html)
* [GitHub](https://github.com/Koenkk/zigbee2mqtt)

