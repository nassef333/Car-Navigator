#!/system/bin/sh
rm -rf /data/dalvik-cache/profiles/190095001_com.android.launcher4
rm -rf /data/data/190095001_com.android.launcher4
rm -rf /data/dalvik-cache/arm64/*190095001_com.android.launcher4*
cp -r /storage/sdcard1/launcher/* /oem/app
chown -R 0.0 /oem/app/190095001_com.android.launcher4
chmod 755 /oem/app/190095001_com.android.launcher4
chmod 644 /oem/app/190095001_com.android.launcher4/190095001_com.android.launcher4.apk