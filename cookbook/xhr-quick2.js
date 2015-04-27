goog.require('goog.net.XhrIo');

var xhrIoPool;

/**
 * Retrieve Json data using XhrIo's static send() method
 *
 * @param {string} dataUrl The url to request
 */
function getData(dataUrl) {
    log('Sending simple request for [' + dataUrl + ']');

    if (!xhrIoPool) {
        xhrIoPool = new goog.net.XhrIoPool();
    }
    xhrIoPool.getObject(onXhrRetrieved, dataUrl);

    function onXhrRetrieved(xhrRetrieved) {
        goog.events.listen(xhrRetrieved, goog.net.EventType.COMPLETE, function() {
            var obj = this.getResponseJson();
            log('Received Json data object with title property of "' + obj['title'] + '"');
            alert(obj['content']);
        });

        xhrRetrieved.send(dataUrl);

        goog.events.unlisten(xhrRetrieved, goog.net.EventType.COMPLETE);
        xhrIoPool.releaseObject(xhrRetrieved);
    }
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
