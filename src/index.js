module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var arr = str.split("");
  stack[0] = arr[0];
  var bracket = 1;

  while(bracket < arr.length){
  stack.push(arr[bracket]);
  for (var i = 0; i < bracketsConfig.length; i++){
   if (stack[stack.length-2] == bracketsConfig[i][0] && stack[stack.length-1] == bracketsConfig[i][1]){
    stack.pop();
    stack.pop();
   } 
  } 
    bracket++;
  } 
  return stack.length ? false : true;
} 