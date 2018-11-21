const diff = require('fast-diff');

function mismatch(node) {
    var serverHtml = node.innerHTML;
    var hr = '------------------------------------------------------';

    return function callback() {
        var clientHtml = node.innerHTML;

        console.log(hr)
        console.log('How to read diff: https://github.com/jhchen/fast-diff');
        console.log(diff(serverHtml, clientHtml));
        console.log(hr)
    }
}

module.exports = mismatch;