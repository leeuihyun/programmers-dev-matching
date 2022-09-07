export const getPrice = (price) => {
    const strPrice = price.toString();
    var count = 0;
    for (var i = strPrice.length - 1; i >= 0; i--) {
        var strChange = "";
        count += 1;
        if (count === 2) {
            strChange = `${strPrice[i]},${strChange}`;
            count = 0;
        } else {
            strChange = `${strPrice[i]}`;
        }
    }
    return strChange;
};
