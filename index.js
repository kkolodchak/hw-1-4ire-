const eur = 30.40;
const usd = 26.30;
const pln = 6.60;
const bgn = 15.60;
const uah = 1;
let exchange = true;

while (exchange) {
    let firstCurrensy = prompt('From the listed currencies, enter FROM which currency you want to convert (eur, usd, pln, bgn, uah)').toLowerCase();

    if (firstCurrensy === null) {
        break;
    }
    else if (firstCurrensy != 'eur' &&
        firstCurrensy != 'usd' &&
        firstCurrensy != 'pln' &&
        firstCurrensy != 'bgn' &&
        firstCurrensy != 'uah') {
        alert('Choose a currency from the list')
    }
    else {
        let amountFrom;
        if (firstCurrensy === 'eur') {
            amountFrom = eur;
        } else if (firstCurrensy === 'usd') {
            amountFrom = usd;
        } else if (firstCurrensy === 'pln') {
            amountFrom = pln;
        } else if (firstCurrensy === 'bgn') {
            amountFrom = bgn;
        } else if (firstCurrensy === 'uah') {
            amountFrom = uah;
        }

        let amountMoney = +prompt('Enter the amount you want to convert');
        if (amountMoney === null) {
            break;
        }
        else if (amountMoney <= 0) {
            alert('Enter an amount greater than 0');
        }
        else if (isNaN(amountMoney)) {
            alert('Enter some amount');
        }
        else {
            let secondCurrency = prompt('From the currencies listed, enter the currency TO which you want to convert (eur, usd, pln, bgn, uah)').toLowerCase();
            if (secondCurrency === null) {
                break;
            }
            else if (secondCurrency != 'eur' &&
                secondCurrency != 'usd' &&
                secondCurrency != 'pln' &&
                secondCurrency != 'bgn' &&
                secondCurrency != 'uah') {
                alert('Choose a currency from the list')
            }
            else {
                let result;
                if (secondCurrency === 'eur') {
                    result = (amountMoney * amountFrom) / eur;
                } else if (secondCurrency === 'usd') {
                    result = (amountMoney * amountFrom) / usd;
                } else if (secondCurrency === 'pln') {
                    result = (amountMoney * amountFrom) / pln;
                } else if (secondCurrency === 'bgn') {
                    result = (amountMoney * amountFrom) / bgn;
                } else if (secondCurrency === 'uah') {
                    result = (amountMoney * amountFrom) / uah;
                }
                alert(`The result of the exchange: ${amountMoney} ${firstCurrensy} = ${result.toFixed(2)} ${secondCurrency}`);
                exchange = confirm('Do you want to recalculate the exchange?');
            }
        }
    }
}

