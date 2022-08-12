module.exports = function toReadable (number) {
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let arr2 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
    if (number < 20) {
        return arr[number];
    } 
    let res = (Math.floor(number / 10))-2;
    if (number < 100 && number % 10 === 0) {
        return arr2[res];
    }
    if (number < 100) {
        return (arr2[res] + ' ' + arr[number % 10]);}
   let hun = Math.floor(number / 100);
   let n100 = Math.floor(number % 100 / 10);
   let n10 = number % 100;
        if (number % 100 === 0) {
            return (arr[hun] + ' ' + 'hundred');
        }
        if (n100 < 20 && n10 < 20) {
            return (arr[hun] + ' ' + 'hundred' + ' ' + arr[n10]);
        }
        if (n100 < 100 && n10 % 10 === 0) {
            return (arr[hun] + ' ' + 'hundred' + ' ' + arr2[n100-2]);
        }
         else {
         return (arr[hun] + ' ' + 'hundred' + ' ' + arr2[n100-2] + ' ' + arr[number % 10]);
        }
} 
