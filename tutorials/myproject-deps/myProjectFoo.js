goog.provide('myproject.foo');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('myproject.bar');

myproject.foo.start = function() {
    myproject.bar.hello('foo');
};
