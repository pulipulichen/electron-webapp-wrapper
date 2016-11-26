# electron-webapp-wrapper
透過JSON設定檔就能夠直接開啟網頁應用程式的做法

# 設定檔
請修改webapp-config.json設定檔，主要修改URL屬性

請務必確認JSON格式是否正確：使用JSONLint驗證 http://jsonlint.com/

其他參數請參照BrowserWindow的參數設定：
https://github.com/electron/electron/blob/master/docs/api/browser-window.md

#編譯方法
1. 先開啟Node.js command prompt：在 開啟 > Node.js > Node.js command prompt
2. 切換到這個此目錄底下的bin
3. build.bat
4. 切換回這個此目錄底下的bin
5. run.bat

# 感謝
此程式碼的起點主要來自：QQBoxy-酷酷方盒子
http://qqboxy.blogspot.com/2016/06/electron-javascript-windows.html
