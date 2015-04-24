goog.require('goog.net.XhrIo');

/**
 * Retrieve Json data using XhrIo's static send() method.
 *
 * @param {string} dataUrl The url to request.
 */
function getData(dataUrl) {
    log('Sending simple request for [' + dataUrl + ']');
    goog.net.XhrIo.send(dataUrl, function(e) {
        var xhr = e.target;
        var obj = xhr.getResponseJson();
        log('Received Json data object with title property of "' +
        obj['title'] + '"');
        alert(obj['content']);
    });
}

/**
 * Basic logging to an element called "log".
 *
 * @param {string} msg Message to display on page
 */
function log(msg) {
    document.getElementById('log').appendChild(document.createTextNode(msg));
    document.getElementById('log').appendChild(document.createElement('br'));
}

