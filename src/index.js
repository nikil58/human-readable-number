module.exports = function toReadable(number) {
    under_twenty = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    above_twenty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];  
    if (number < 20) {
        return under_twenty[number];
    }
    if (number>=20&&number<100) {
        if (number%10==0) return above_twenty[(number/10)-2];
        else return above_twenty[((number/10)>>0)-2]+ ' ' + under_twenty[number%10];
    }

    if (number>=100&&number<1000) {
        if (number%100==0)
            return under_twenty[number/100]+ ' hundred';
        else
            return under_twenty[(number/100)>>0] + ' hundred ' + toReadable(number%100);
    }
}
