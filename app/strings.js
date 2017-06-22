exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var count = 0;
      var redstring = '';
      for (var pos = 0; pos < str.length; pos++) {
          if (str[pos] === str[pos + 1]) {
              count++;
              if (count < amount) {
                  redstring += str[pos];
              }
          } else {
              count = 0;
              redstring += str[pos];
          }
      };
      return redstring;
  },

  wordWrap: function(str, cols) {
     
      var formatedString = '',
       Arrayofwords = [];


      Arrayofwords = str.split(' ');

      formatedString = Arrayofwords[0];

      for (var i = 1; i < Arrayofwords.length; i++)
      {
          if (Arrayofwords[i].length > cols)
          {
              formatedString += '\n' + Arrayofwords[i];
          }
          else
          {
              if (formatedString.length + Arrayofwordsy[i].length > cols)
              {
                  formatedString += '\n' + Arrayofwords[i];
              }
              else
              {
                  formatedString += ' ' + Arrayofwords[i];
              }
          }
      }

      console.log(formatedString);

  },

  reverseString: function(str) {
      return str.split('').reverse().join('');


  }
};
