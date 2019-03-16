module.exports = function check(str, bracketsConfig) {
  var checkBox = [];
  checkBox.push(str[0]);
  for (var i = 1; i < str.length; i++) {
    if (checkBox.length === 0) {
      checkBox.push(str[i]);
    } else {
      for (var z = 0; z < bracketsConfig.length; z++) {
        if (checkBox.includes(str[i])
          & bracketsConfig[z][0] === bracketsConfig[z][1]
          & bracketsConfig[z][0] === str[i]
          & bracketsConfig[z][1] === str[i]) {
          var d = 0;
          for (var y = checkBox.length; y > 0; y--) {

            if (bracketsConfig[z].indexOf(checkBox[y - 1]) === 0) {
              while (d >= 0) {
                checkBox.pop();
                d--;
              }
            } else {
              d++;
            }
          }
        } else if (bracketsConfig[z].indexOf(str[i]) >= 0) {
          if (bracketsConfig[z].indexOf(str[i]) === 0) {
            checkBox.push(str[i]);
          } else if (bracketsConfig[z].indexOf(str[i]) === 1) {
            var d = 0;
            for (var y = checkBox.length; y > 0; y--) {
              if (bracketsConfig[z].indexOf(checkBox[y - 1]) === 0) {
                while (d >= 0) {
                  checkBox.pop();
                  d--;
                }
              } else if (d === -1) {
                break;
              } else {
                d++;
              }
            }
          }
        }
      }
    }
  }
  if (checkBox.length === 0) {
    return true;
  } else {
    return false;
  }
}
