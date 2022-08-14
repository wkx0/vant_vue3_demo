const addChineseUnit = function(num) {
  if (num<10000)
    if (bytes === 0) return '0 B';
    var k = 1000, // or 1024
        sizes = ['K', 'M', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));

   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}