let product_name =prompt(" ENTER PRODUCT NAME");
console.log (product_name)

let unit_price =prompt(" ENTER unit price");
console.log (unit_price)

let quantity =prompt(" ENTER quantity");
console.log (quantity)

const sub_total= unit_price*quantity;
console.log(sub_total)

if(sub_total>=1000){
    final_total= sub_total-sub_total*0.1
    console.log(final_total)
}
else if(sub_total<1000){
    final_total= sub_total
    console.log(final_total)
}
 if(sub_total<500){
    final_total= sub_total+50
    console.log(final_total)
}
else if(sub_total<=0){
console.log(invalid_order)
}