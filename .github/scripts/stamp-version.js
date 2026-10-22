// Stamps app/general/version.js before the web build (.github/workflows/pages.yml), so the app's update check
// (Main_CheckUpdate, version.json) offers this fork's updates:
//   WebTag             grows with every web build: a running app sees a newer one and offers to reload the page
//   publishVersionCode the latest APK release of this fork: an older installed APK is offered the download
//   ApkUrl             that release's APK
//   changelog          the latest commit subject on top of the list
// Usage: node .github/scripts/stamp-version.js <webTag> <apkCode> "<commit subject>"
const fs = require('fs');

const file = 'app/general/version.js';
const webTag = parseInt(process.argv[2], 10);
const apkCode = parseInt(process.argv[3], 10);
const subject = (process.argv[4] || '').trim();

if (!webTag || !apkCode) {
    console.error('stamp-version: need a web tag and an APK version code');
    process.exit(1);
}

const date = new Date().toLocaleDateString('en-US', {month: 'long', day: '2-digit', year: 'numeric', timeZone: 'UTC'}).replace(',', '');
const apkUrl = 'https://github.com/RozumS321/SmartTwitchTV-lite/releases/latest/download/SmartTwitchTV-lite.apk';

let text = fs.readFileSync(file, 'utf8');

const replaceOnce = function (regex, value, name) {
    if (!regex.test(text)) {
        console.error('stamp-version: ' + name + ' not found in ' + file);
        process.exit(1);
    }
    text = text.replace(regex, value);
};

replaceOnce(/publishVersionCode: \d+/, 'publishVersionCode: ' + apkCode, 'publishVersionCode');
replaceOnce(/ApkUrl: '[^']*'/, "ApkUrl: '" + apkUrl + "'", 'ApkUrl');
replaceOnce(/WebVersion: '[^']*'/, "WebVersion: '" + date + "'", 'WebVersion');
replaceOnce(/WebTag: \d+/, 'WebTag: ' + webTag, 'WebTag');

if (subject) {
    //the file is committed with CRLF, keep whatever it uses
    const nl = text.includes('\r\n') ? '\r\n' : '\n';
    const entry = '        {' + nl + '            title: ' + JSON.stringify(date) + ',' + nl + '            changes: [' + JSON.stringify(subject) + ']' + nl + '        },' + nl;
    replaceOnce(/changelog: \[\r?\n/, 'changelog: [' + nl + entry, 'changelog');
}

fs.writeFileSync(file, text);
console.log('stamp-version: WebTag ' + webTag + ', APK ' + apkCode + ', ' + date);
