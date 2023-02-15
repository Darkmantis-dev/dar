function gcloak() {
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico';
document.title = 'My Drive - Google Drive';
console.log(document.title);
document.getElementsByTagName('head')[0].appendChild(link) };
gcloak();setInterval(gcloak, 1000);


const discord = "https://discord.com/"
const google = "https://www.google.com"
const tiktok = "https://www.tiktok.com/"
const spotify = "https://open.spotify.com/"
const reddit = "https://reddit.com/"
const twitter = "https://twitter.com/"


function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function loadDiscord() {
      window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = discord;
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
})}
function loadTiktok() {
      window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = tiktok;
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
})}
function loadGoogle() {
      window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = google;
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
})}
function loadSpotify() {
      window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = spotify;
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
})}
function loadReddit() {
      window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = reddit;
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
})}
function loadTwitter() {
      window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = twitter;
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
})}
