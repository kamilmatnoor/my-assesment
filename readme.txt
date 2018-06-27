Get source code
1.  Checkout this repository 
git clone https://github.com/kamilmatnoor/my-assesment.git

 or 

 Unzip assessment.zip

2. Go into my-assessment folder
3. Open commad prompt from the my-assessement folder
4. Run : npm install -g ionic and npm install

If you want to run the apps from brower

1. Run: ionic serve
2. Browser will automatically run the apps from localhost:8100
3. Once the apps is completely display into the browser(assuming chrome)
4. Right click (at any) on the current apps browser, Click Inspect Element
5. The browser will display developer tool, from there, press Ctrl+Shift+M
6. Now you can choose on what devices you want to display the apps

If you want to install the apps into your devices(assuming android)
1. Simply copy app.apk from my-assessment folder and install it into your android devices
or if your want to generate the apk by your own, kindly follow this step

1. Run : ionic cordova build android
2. After execution done, there will be the message telling you where you can get the installer (filename: app-debug.apk)
3. Copy app-debug.apk into your android device and proceed with installation
