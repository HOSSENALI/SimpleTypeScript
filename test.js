function converCurrency(rate, ...amounts) {
    return amounts.map(amount => rate * amount);
}
const converted = converCurrency(1.54, 10,20,23,1,90);
console.log(converted);