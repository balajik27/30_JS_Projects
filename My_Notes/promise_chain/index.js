
const cart = ['shirt' , 'pant' , 'tie']

createOrder(cart)
.then(function(response){
    console.log(response.orderId , response.amount);
    return proceedPayment(response);
})
.then(function (response){
    return showOrderSummary(response);
})
.then(function (response){
    return updateWallet(response);
})
.catch(function(err){
    console.log("Something error");

})

function createOrder(cart){
    return new Promise(function(resolve , reject){
        let err;
        let amount , orderId;
        if(orderId = isProductsAvailable(cart)){
            if(amount = calculateAmount(cart)){
                resolve({orderId : orderId , amount : amount , cart : cart});
            } else {
                err = new Error('Amount calculation error')
                reject(err);
            }
        } else {
            err = new Error('Product not available');
            reject(err);
            return //Without return, the code would continue executing the subsequent promises even after an error has occurred, which might lead to unexpected behavior.
        }
    })

}
function isProductsAvailable(cart){
    return 4572;
}
function calculateAmount(cart){
    return cart.length * 200;
}


function proceedPayment(data){
    let paymentId;
    return new Promise(function(resolve , reject){
        if(paymentId = payAmount(data.orderId , data.amount)){
            data.paymentId = paymentId
            resolve(data)
        } else {
            reject("Payment Error")
        }
    })
}
function payAmount(orderId , amount){
    return orderId-amount + "" + orderId + amount;
}


function showOrderSummary(data){
    return new Promise(function(resolve , reject){
        if(data){
            console.log("OrderId = " , data.orderId+ " User ordered " , data.cart , " items. It costs "+ data.amount , ". The payment id is " + data.paymentId + "." )
            resolve(data.amount);
        } else {
            reject("Summary error data not found")
        }
    })
}

function updateWallet(amount){
    return new Promise(function(resolve , reject){
        if(updateBalance(amount)){
            resolve()
        } else {
            reject("Update wallet error");
        }
    })
}
function updateBalance(amount){
    return true;
}