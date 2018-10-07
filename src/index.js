module.exports = function count(s, pairs) {
  let hashPairs = {};
  let lim = 1;
  for (let i = 0; i<pairs.length; i++){
    hashPairs[pairs[i][0]] = true;
    lim*=pairs[i][0];
  }

  let counter = 0;
  

  for (let i = 0; i<lim; i++) {
    let det = true;
    for (let j = 0; j<s.length; j++) {
      let k = j + i;

      if (s[j]==1 && k==0){
          det = false;
          continue;
      }

      let sdK = simpleDevisors(k);

      for (let n = 0; n<sdK.length;n++) {

        if (s[j]==1 && hashPairs[sdK[n]]){
          det = false;
          break;
        }
        
        if (s[j]==0 && !hashPairs[sdK[n]]){
          det = false;
          break;
        }

      }
    }
    if (det) counter++;
  }

  function isItSimple(num){
    if (num==2) return true;
    var i = 2;
    while (i<num) {
      if (num % i == 0) {
        return false;
      } else i++;
    }
    return true;
  }


  function simpleDevisors(num){
    var a = [];
    if (num == 1){ 
      a.push(1);
      return a;
    } 
    var d = num;
    var i = 2;
    while (d>1) {
      if (d % i == 0) {
        if (isItSimple(i)) {
          if (a[a.length-1]!= i) {
            a.push(i);
          }
          d = d/i;          
          i=2;
        }
      } else i++;
    }
  return a;
  }


return counter % 1000000007;
}