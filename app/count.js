exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function (start, end) {

        var timend;
        function doIt() {
            console.log(start++);

            if (start <= end) {
                timend = setTimeout(doIt, 100);
            }
        }
    }
};
