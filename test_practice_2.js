const getAccountType = (userId) => {
    //プレミアム:PREMIUM
    //一般      :NORMAL
    //登録なし  :NONE
    if (userId === -1) {
        return "NONE";
    }
    else {
        //ID取得する何か
        if (userId > 1000) {
            return "PREMIUM";
        } else {
            return "NORMAL";
        }
    }
}

const func2 = function (accountType, subtotal, shippingFee) {
    let result = subtotal+shippingFee;
    if(subtotal>=5000){
        if(accountType==="PREMIUM"){
            result=Math.round(subtotal*0.9)
        }else if(accountType==="NORMAL"){
            result=Math.round(subtotal*0.95)
        }else{//account Type === NONE
        }

    }else if(subtotal>=3000){
        if(accountType==="PREMIUM"){
            result=Math.round(subtotal*0.95)
        }else if(accountType==="NORMAL"){
            result=Math.round(subtotal)
        }else{
        }

    }else if(subtotal>=1000){
        if(accountType==="PREMIUM"){
            result=Math.round(subtotal)
        }else{
        }

    }else{
    }
    return result;
}


const main = function (id,sum,shippingfee) {

    const result = func2(getAccountType(id),sum,shippingfee);
    return result;
}

exports.default=main;