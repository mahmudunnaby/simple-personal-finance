
// Fetching any id and retun it's  value to number

function getNumber(id, gotFromInput) {
    let catchData = document.getElementById(id)
    if (gotFromInput == true) {
        let inputData = catchData.value
        let inputValue = textToNumberConvert(inputData)
        return inputValue;
    }
    else if (gotFromInput == false) {

        let inputData = catchData.innerText
        let inputValue = textToNumberConvert(inputData)
        return inputValue;
    }
}

// convert text to number
function textToNumberConvert(text) {
    let inputValue = parseFloat(text)
    return inputValue;
}

// Event handiling of calculate button

document.getElementById('calculation').addEventListener('click', function () {

    // Getting the numbers using the function and saving into a variable 

    let incomeValue = getNumber('income', true)
    let foodCost = getNumber('food', true)
    let rentCost = getNumber('rent', true)
    let clothesCost = getNumber('clothes', true)

    let totalExpence = foodCost + rentCost + clothesCost
    let balance = incomeValue - totalExpence


    // validation & setting the numbers into display 

    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0 && incomeValue >= 0 && foodCost != typeof ('') && rentCost != typeof ('') && clothesCost != typeof ('') && incomeValue != typeof ('')) {

        if (incomeValue >= totalExpence) {
            let expenceDisplay = document.getElementById('expence')
            expenceDisplay.innerText = totalExpence

            let balanceDisplay = document.getElementById('balance')
            balanceDisplay.innerText = balance
        }

        else {
            alert('Sorry! You can not spend more than your income ')
        }

    }

    else if (typeof (incomeValue) != typeof ('') || typeof (foodCost) != typeof ('') || typeof (rentCost) != typeof ('') || typeof (clothesCost) != typeof ('')) {
        alert(' Positive Numbers only at all field')
    }
    else {
        alert('Please provide a valid positive number in all expences field')
    }






})



// Event handiling of  save button

document.getElementById('save').addEventListener('click', function () {

    let savingValue = getNumber('amoutSave', true)
    let savingAmount = getNumber('income', true) * savingValue * 0.01

    let cost = getNumber('food', true) + getNumber('rent', true) + getNumber('clothes', true)
    let balance = getNumber('income', true) - cost
    let remainingBalance = balance - savingAmount


    // validation & setting the numbers into display

    if (savingAmount <= balance && savingAmount >= 0) {


        let savings = document.getElementById('savedValue')
        savings.innerText = savingAmount



        let nowBalance = document.getElementById('remainingBalance')
        nowBalance.innerText = remainingBalance

    }


    else {
        alert('Saving more than balance is not possible.Please provide valid positive number in all the fields')
    }




})