exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        {
        arr.indexOf(item);
        }

  },

  sum: function(arr) {
      var total = 0;
      for (var pos = 0; pos < arr.length; pos++) {
          total = total + arr[pos];
      }
      return total;
  },

  remove: function (arr, item) {
      for (var pos = 0; pos < arr.length; pos++) {
          if (arr[pos] == item) {
               arr.splice(pos, 1);
          }
      }
      return arr;

  },

  removeWithoutCopy: function(arr, item) {
      for (var pos = 0; pos < arr.length; pos++)
      {
          if (arr[pos] === item) {
              arr.splice(pos, 1);

              pos = pos - 1;
              arr.length = arr.length - 1;
          }
      }
      return arr;

  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item)
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function (arr1, arr2) {
      var arr = arr1.concat(arr2);
      return arr;

  },

  insert: function(arr, item, index) {
      arr.splice(arr, item, index);
      return arr;
  },

  count: function(arr, item) {
     
          var count = 0;
          for (var pos = 0; pos < arr.length; pos++)
          {
              if (arr[pos] === item) {
                  count++;
              }
          }
          return count;
  },

  duplicates: function(arr) {
      var duplicate = [];
      var arr2 = {};

      for (var pos = 0; pos < arr.length; pos++)
      {
          arr2[arr[pos]] = arr2[arr[pos]] ? arr2[arr[pos]] + 1 : 1;
      }

      for (var item in arr2)
      {
          if (arr2.hasOwnProperty(item) && arr2[item] > 1)
          {
              duplicate.push(item);
          }
      }

      return duplicate;

  },

  square: function(arr) {
      var sqr = [];
      for (var pos = 0; pos < arr.lengt; pos++) {
          sqr.push(arr[pos] * arr[pos]);
      }
      return sqr;
  },

  findAllOccurrences: function(arr, target) {
      occurnc = [];
      for (var pos = 0; pos < arr.length; pos++) {
          if (arr[pos] == target) {
              occurnc.push(pos);
          }
      }
      return occurnc;


  }
};

