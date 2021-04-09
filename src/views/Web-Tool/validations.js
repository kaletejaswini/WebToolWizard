/*********************************************************************************
* Agiliron Inc. (TM) - Accelerate Your Business. On Demand (SM)
* Support: support@agiliron.com, 1-855-AGIL-IRON
*
* Portions created by Agiliron are Copyright (C) 2021 Agiliron Inc. | All Rights Reserved.
*
* Unauthorized copying of this file, via any medium is strictly prohibited.
*
* Proprietary and Confidential.
********************************************************************************/

export function nonblankRequired(value){
    if(typeof value == 'undefined' || value == null || value.trim() == ''){
        return "Required";
    }
    return true;
}

export function checkFloat(price){
    if(price == '' || typeof price == 'undefined' || price == null) {
        return "Blank";
    } else if(isNaN(price) || price < 0 || ( typeof price == "string" && price.length != price.trim().length)){
        return "Invalid";
    } else {
        return "Valid";
    }
}

export function checkPrice(price){
    if(price == '' || typeof price == 'undefined' || price == null) {
        return "Blank";
    } else if(isNaN(price) || price <= 0 || ( typeof price == "string" && price.length != price.trim().length)){
        return "Invalid";
    } else {
        return "Valid";
    }
}

export function validateExchangeRate(exchangeRate){
    let validity = checkPrice(exchangeRate);
    if(validity == 'Blank') {
        return true;
    } else if(validity == 'Invalid') {
        return 'Please enter valid Exchange Rate';
    } else {
        return true;
    }
}

export function toggleTreeselectError(errorFlag, treeselectId, errorId){
    if(errorFlag == true) {
        document.getElementById(treeselectId).classList.add("red-border");
        document.getElementById(errorId).style.display = "block";
    } else {
        document.getElementById(treeselectId).classList.remove("red-border");
        document.getElementById(errorId).style.display = "none";
    }
}

export function isBlank(value){
    if(
        typeof value == 'undefined' ||
        value == null ||
        value == '' ||
        (typeof value == 'string' && value.trim() == '')
    ) {
        return true;
    } else {
        return false;
    }
}

export function checkQuantity(quantity) {
    if(quantity == '' || typeof quantity == 'undefined' || quantity == null) {
        return 'Blank';
    } else if(!Number.isInteger(Number(quantity)) || quantity <= 0 || ( typeof quantity == "string" && quantity.length != quantity.trim().length)){
        return 'Invalid';
    } else {
        return 'Valid';
    }
}

export function validateQuantity(quantity){
    let validity = checkQuantity(quantity);
    if(validity == 'Blank') {
        return 'Please enter Quantity';
    } else if(validity == 'Invalid') {
        return 'Please enter valid Quantity';
    } else {
        return true;
    }
}

export function checkDiscount(discount){
    if(discount == '' || typeof discount == 'undefined' || discount == null) {
        return "Blank";
    } else if(isNaN(discount) || discount < 0 || discount > 100 || ( typeof discount == "string" && discount.length != discount.trim().length)){
        return "Invalid";
    } else {
        return "Valid";
    }
}

export function validateDiscount(discount){
    let validity = checkDiscount(discount);
    if(validity == 'Blank') {
        return true;
    } else if(validity == 'Invalid') {
        return 'Please enter valid Discount';
    } else {
        return true;
    }
}

export function validateShipping(shipping){
    let validity = checkFloat(shipping);
    if(validity == 'Blank') {
        return true;
    } else if(validity == 'Invalid') {
        return 'Please enter valid Shipping Price';
    } else {
        return true;
    }
}

export function validatePrice(price){
    let validity = checkPrice(price);
    if(validity == 'Blank') {
        return 'Please enter Price';
    } else if(validity == 'Invalid') {
        return 'Please enter valid Price';
    } else {
        return true;
    }
}

export function addError(idDiv, x, y){
    $('#'+ idDiv +' td[data-x="'+ x +'"][data-y="'+ y +'"]').addClass('error-field');
    $('#'+ idDiv +' td[data-x="'+ x +'"][data-y="'+ y +'"]').removeClass('success-field');
}

export function addSuccess(idDiv, x, y){
    $('#'+ idDiv +' td[data-x="'+ x +'"][data-y="'+ y +'"]').addClass('success-field');
    $('#'+ idDiv +' td[data-x="'+ x +'"][data-y="'+ y +'"]').removeClass('error-field');
}

export function removeNotice(idDiv, x, y){
    $('#'+ idDiv +' td[data-x="'+ x +'"][data-y="'+ y +'"]').removeClass('success-field');
    $('#'+ idDiv +' td[data-x="'+ x +'"][data-y="'+ y +'"]').removeClass('error-field');
}

export function checkIfBlank(value){
    if(
        typeof value == "undefined" ||
        value == null ||
        ( typeof value == "string" && value.trim() == "")
    ) {
        return true;
    } else {
        return false;
    }
}
