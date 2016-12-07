Model No:BU-353S4 セットアップ資料

構成
------------
・RaspberryPi2
・Linux raspberrypi ４．４．３４−v７＋

設定
------------
・USBのデバイス名を固定化
<pre>
#/etc/udev/rules.d/99-gps.rules
KERNEL=="ttyUSB*", ATTRS{idVendor}=="067b", ATTRS{idProduct}=="2303", SYMLINK+="ttyGPS"
</pre>

・gpsdのインストール
<pre>
$ sudo apt-get install gpsd gpsd-clients
</pre>

・gpsdの設定
<pre>
#/etc/default/gpsd

# Default settings for the gpsd init script and the hotplug wrapper.

# Start the gpsd daemon automatically at boot time
START_DAEMON="true"

# Use USB hotplugging to add new USB devices automatically to the daemon
USBAUTO="true"

# Devices gpsd should collect to at boot time.
# They need to be read/writeable, either by user gpsd or the group dialout.
#DEVICES="/dev/ttyUSB0"
DEVICES="/dev/ttyGPS"

# Other options you want to pass to gpsd
GPSD_OPTIONS="-F /var/run/gpsd.sock -b -n"
</pre>
