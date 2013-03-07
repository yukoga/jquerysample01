var orgMap = function(arr, callback) {
  var _result;
  if (typeof Array.prototype.map === 'function') {
    _result = arr.map(callback);
  } else {
    _result = new Array();
    for (var i=0; i<arr.length; i++) {
      _result.push(callback(arr[i]));
    }
  }
  return _result;
}
