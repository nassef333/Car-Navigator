#!/system/bin/sh
rm -rf /data/dalvik-cache/profiles/190001020_com.android.launcher17
rm -rf /data/data/190001020_com.android.launcher17
rm -rf /data/dalvik-cache/arm64/*190001020_com.android.launcher17*
cp -r /storage/sdcard1/launcher/* /oem/app
chown -R 0.0 /oem/app/190001020_com.android.launcher17
chmod 755 /oem/app/190001020_com.android.launcher17
chmod 644 /oem/app/190001020_com.android.launcher17/190001020_com.android.launcher17.apk