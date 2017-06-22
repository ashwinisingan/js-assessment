exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
     
    var dfd = $.Deferred();
      setTimeout(function() { dfd.resolve(value);  }, 10);
      return dfd.promise();
 
  },

  manipulateRemoteData: function(url) {

      var dfd = $.Deferred();

    $.ajax(url).then(function(resp) {
      var name = $.map(resp.name, function(names) {
        return names.name;
      });
      dfd.resolve(name.sort());
    });

    return dfd.promise();
  }
};
