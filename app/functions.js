exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(fn, arr);
    },

    speak: function (fn, obj) {

        return fn.call(obj);
    },

    functionFunction: function (str) {

        return function (str2) {
            return str + ", " + str2;
        }
    },

    makeClosures: function (arr, fn) {
        return arr.map(function (item) {
            return (function (item) {
                return function () {
                    return fn(item);
                }
            })(item);
        });
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments: function () {

        var total = 0;

        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }

        return total;
    },

    callIt: function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {

        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function () {
            var moreArgs = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, moreArgs);
        };
    },

    curryIt: function (fn) {
        function applyArguments(_fn, args) {
            return _fn.apply(null, args);
        }
    },
}
