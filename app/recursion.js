exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

      var totalFiles = [];
      var directory = [];

      function processDir(dir) {
          
        
          var files = dir.files;

          directory.push(dir.dir);

          for (var i = 0; i < files.length; i++)
          {
             var file = files[i];
             if (typeof file === 'string')
             {
                 if (!dirName || directory.indexOf(dirName) > -1) {
                      totalFiles.push(files[i]);
                  }
             }
             else
              {
                  processDir(files[i]);
              }
          }

          directory.pop();
      }

      processDir(data);


      return totalFiles;
  
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
      var fibonacci = function (n)
      {
          var output = 0;
          if (n <= 2)
          {
              return n - 1;
          }
          output = fibonacci(n - 1) + fibonacci(n - 2);
          return output;
      };
  },

  validParentheses: function (n) {
      function Pair(n) {
          if (n == 0)
              return [""];

          var output = [];
          for (var i = 0; i < n; ++i) {

              var leftp = Pair(i);
              var rightp = Pair(n - i - 1);

              for (var j = 0; j < leftp.length; ++j)
                  for (var k = 0; k < rightp.length; ++k)
                      output.push("(" + leftp[j] + ")" + rightp[k]);
          }

          return output;
      }
  }
};
