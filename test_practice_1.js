//組み合わせ
//境界値
//関係ある，関係ない組み合わせ


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

const func1 = function (accountType, subtotal, shippingFee) {
    if(accountType==="PREMIUM"){
        if(subtotal>=5000){
            return Math.round(subtotal*0.9);
        }
        if(subtotal>=3000){
            return Math.round(subtotal*0.95);
        }
        if(subtotal>=1000){
            return subtotal
        }
        return subtotal+shippingFee;
    }else if(accountType==="NORMAL"){
        if(subtotal>=5000){
            return Math.round(subtotal*0.95);
        }
        if(subtotal>=3000){
            return subtotal;
        }
        return subtotal+shippingFee
    }else if(accountType==="NONE"){
        return subtotal+shippingFee;
    }else{
        //例外処理
    }
}


const main = function (id,sum,shippingfee) {

    const result = func1(getAccountType(id),sum,shippingfee);
    return result;
}

exports.default=main;