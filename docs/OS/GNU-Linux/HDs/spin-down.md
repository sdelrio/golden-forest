# Spin Down HDs

## Tunning

* <https://arjan.wooning.cz/tips-to-spindown-your-hard-disk-in-debian-or-ubuntu/>
* <http://www.howtoeverything.net/linux/hardware/permanently-configure-hard-drives-spin-down-after-given-idle-time>
* <https://petermolnar.net/article/hard-drive-spindown-clicking-noise/>

### /etc/hdparm.conf

hdparm3 is a low-level hard drive utility, and in this case, it has two important parameters:

* `-B` - Get/set Advanced Power Management feature
* `-S` - set the standby (spindown) timeout for the drive

APM was not a thing on many old machines, and, by default, it was set to 255, disabled.

The spindown timeout was also respected, when it was put into /etc/hdparm.conf, which is not the case any more.

### Advanced Power Management

* `-B` Get/set Advanced Power Management feature, if the drive supports it. A low value means aggressive power management and a high value means better performance. Possible settings range from values 1 through 127 (which permit spin-down), and values 128 through 254 (which do not permit spin-down). The highest degree of power management is attained with a setting of 1, and the highest I/O performance with a setting of 254. A value of 255 tells hdparm to disable Advanced Power Management altogether on the drive (not all drives support disabling it, but most do). Accepts the following values:
    * Maximum performance `FEh`
    * Intermediate power management levels without Standby `81h-FDh`
    * Minimum power consumption without Standby `80h`
    * Intermediate power management levels with Standby `02h-7Fh`
    * Minimum power consumption with Standby `01h`
    * Reserved `FFh`
    * Reserved `00h`

### Raspberry Pi

* <https://forums.raspberrypi.com/viewtopic.php?t=188462>

## K8s monitoring spindown

```yaml
apiVersion: apps/v1beta2
kind: DaemonSet
metadata:
  generation: 9
  labels:
    app: prometheus
    chart: prometheus-6.2.1
    component: node-exporter
    heritage: Tiller
    release: prometheus
  name: prometheus-node-exporter
  namespace: prometheus
spec:
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: prometheus
      component: node-exporter
      release: prometheus
  template:
    metadata:
      annotations:
        field.cattle.io/ports: '[[{"containerPort":9100,"dnsName":"prometheus-node-exporter-","name":"metrics","protocol":"TCP","sourcePort":0}]]'
      creationTimestamp: null
      labels:
        app: prometheus
        component: node-exporter
        release: prometheus
    spec:
      affinity: {}
      containers:
      - args:
        - --path.procfs=/host/proc
        - --path.sysfs=/host/sys
        - --collector.filesystem.ignored-mount-points
        - ^/(sys|proc|dev|mnthost|etc)(|/)
        - --collector.textfile.directory
        - /etc/node-exporter/
        - --no-collector.diskstats
        - --no-collector.bcache
        - --no-collector.arp
        - --no-collector.hwmon
        - --no-collector.infiniband
        - --no-collector.ipvs
        - --no-collector.mdadm
        - --no-collector.xfs
        env:
        - name: HOST_HOSTNAME
          value: /etc/host_hostname
        image: basi/node-exporter:v1.15.0
        imagePullPolicy: IfNotPresent
        name: prometheus-node-exporter
        ports:
        - containerPort: 9100
          hostPort: 9100
          name: metrics
          protocol: TCP
        resources: {}
        securityContext: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        volumeMounts:
        - mountPath: /host/proc
          name: proc
          readOnly: true
        - mountPath: /host/sys
          name: sys
          readOnly: true
        - mountPath: /etc/host_hostname
          name: hostname
        - mountPath: /etc/node-exporter
          name: vol1
        - mountPath: /rootfs
          name: rootfs
          readOnly: true
      - env:
        - name: FREQUENCY
          value: "400"
        - name: STANDBY_TIMEOUT
          value: "60"
        image: segator/smart-exporter
        imagePullPolicy: Always
        name: smart-exporter
        resources: {}
        securityContext:
          allowPrivilegeEscalation: true
          privileged: true
          readOnlyRootFilesystem: false
          runAsNonRoot: false
        stdin: true
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        tty: true
        volumeMounts:
        - mountPath: /dev
          name: dev
        - mountPath: /etc/node-exporter
          name: vol1
      dnsPolicy: ClusterFirst
      hostNetwork: true
      hostPID: true
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      serviceAccount: prometheus-node-exporter
      serviceAccountName: prometheus-node-exporter
      terminationGracePeriodSeconds: 30
      volumes:
      - hostPath:
          path: /proc
          type: ""
        name: proc
      - hostPath:
          path: /sys
          type: ""
        name: sys
      - hostPath:
          path: /etc/hostname
          type: ""
        name: hostname
      - hostPath:
          path: /dev
          type: ""
        name: dev
      - hostPath:
          path: /srv/node-exporter
          type: DirectoryOrCreate
        name: vol1
      - hostPath:
          path: /
          type: ""
        name: rootfs
  updateStrategy:
    type: OnDelete
```
