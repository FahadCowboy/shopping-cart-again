// Any counter field selector function in cart
function getNumberCounterElement(AnyCounterELementsHalfId){
    const selectElement = document.getElementById(AnyCounterELementsHalfId + '-number')
    return selectElement
}

//This function returns value of counter element in number data type.
function productNumber(productName){
    // const inputFIeld = document.getElementById(productName + '-number')
    const inputFIeld = getNumberCounterElement(productName)
    const valueStr = inputFIeld.value
    const valueNum = parseInt(valueStr)
    return valueNum
}

// This function used to update counter value
function productNumberUpdatting(productName, isAdd){
    const valueNum = productNumber(productName)
    if(isAdd === false && valueNum > 0){
        getNumberCounterElement(productName).value = valueNum - 1
    } else if(isAdd === true){
        getNumberCounterElement(productName).value = valueNum + 1
    }
}

// This function used to upadate total amount of individual product according to counter value
function productAmountUpdate(productName, price){
    const ndividualTotalElement = document.getElementById(productName + '-total')
    ndividualTotalElement.innerText = productNumber(productName) * price
}

// This function used to calculate total amout of cart
function totalCalculation(){
    const subtotalElement = document.getElementById('sub-total')
    let subTotal = 0
    for(const name of arguments){
        const total = parseInt(document.getElementById(name + '-total').innerText)
        subTotal += total
    }
    subtotalElement.innerText = subTotal

    const taxElement = document.getElementById('tax-amount')
    const taxAmount = parseInt(subTotal / 100 * 5)
    taxElement.innerText = taxAmount

    const total = document.getElementById('total-price')
    total.innerText = subTotal + taxAmount
}

/////////////////////////////////////////////////////////////////////////////////////

// Phone Plus button code to be executed
document.getElementById('phone-plus').addEventListener('click', (e) => {
    productNumberUpdatting('phone', true)
    productAmountUpdate('phone', 1219)
    totalCalculation('phone', 'case')
})

// Phone Minus button code to be executed
document.getElementById('phone-minus').addEventListener('click', (e) => {
    productNumberUpdatting('phone', false)
    productAmountUpdate('phone', 1219)
    totalCalculation('phone', 'case')
})

// Case Plus button code to be executed
document.getElementById('case-plus').addEventListener('click', (e) => {
    productNumberUpdatting('case', true)
    productAmountUpdate('case', 59)
    totalCalculation('phone', 'case')
})

// Case Minus button code to be executed
document.getElementById('case-minus').addEventListener('click', (e) => {
    productNumberUpdatting('case', false)
    productAmountUpdate('case', 59)
    totalCalculation('phone', 'case')
})