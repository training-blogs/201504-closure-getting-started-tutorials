goog.require('goog.net.XhrIo');

var xhr;

function getXhr() {
    if (!xhr) {
        xhr = new goog.net.XhrIo();

        goog.events.listen(xhr, goog.net.EventType.COMPLETE, function() {
            var obj = this.getResponseJson();
            log('Received Json data object with title property of "' + obj['title'] + '"');
            alert(obj['content']);
        });
    }

    return xhr;
}

/**
 * Retrieve Json data using XhrIo's static send() method
 *
 * @param {string} dataUrl The url to request
 */
function getData(dataUrl) {
    log('Sending simple request for [' + dataUrl + ']');
    getXhr().send(dataUrl);
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
