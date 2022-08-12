module.exports = function toReadable (number) {
    let arrTwen = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let arrHun = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
    if (number < 20) {
        return arrTwen[number];
    } 
    let num = Math.floor(number / 10);
    if (number < 100 && number % 10 === 0) {
        return arrHun[num-2];
    }
    if (number < 100) {
        return (arrHun[num-2] + ' ' + arrTwen[number % 10])}
    let hun = Math.floor(number / 100);
    let n100 = Math.floor(number % 100 / 10);
    let n10 = number % 100;
        if (number % 100 === 0) {
            return (arrTwen[hun] + ' ' + 'hundred');
        }
        if (n100 < 20 && n10 < 20) {
            return (arrTwen[hun] + ' ' + 'hundred' + ' ' + arrTwen[n10]);
        }
        if (n100 < 100 && n10 % 10 === 0) {
            return (arrTwen[hun] + ' ' + 'hundred' + ' ' + arrHun[n100-2]);
        }
         else {
         return (arrTwen[hun] + ' ' + 'hundred' + ' ' + arrHun[n100-2] + ' ' + arrTwen[number % 10]);
        }
} 
