
const selectItemOne =  document.querySelector("#products");
const selectItemTwo =  document.querySelector("#orders");
const selectItemThree =  document.querySelector("#package");
const selectItemFour =  document.querySelector("#accounting");
const selectItemFive =  document.querySelector("#terminal");

const item =  document.querySelector(".calc__summary ul");
let selectList =  document.querySelector(".select__dropdown");
let selectListText =  document.querySelector(".select__input");
const totalBill =  document.querySelector("#total-price");
const aaa = document.querySelector("body");

const temporaryNamber1 = document.querySelector(".temporaryNamber1");
const temporaryNamber2 = document.querySelector(".temporaryNamber2");
const temporaryNamber3 = document.querySelector(".temporaryNamber3");
const temporaryNamber4 = document.querySelector(".temporaryNamber4");
const temporaryNamber5 = document.querySelector(".temporaryNamber5");
const temporaryNamber6 = document.querySelector(".temporaryNamber6");
const temporaryNamber7 = document.querySelector(".temporaryNamber7");



const endBill = totalBill.children[1];







const ItemOne = item.children[0];
const ItemTwo = item.children[1];
const ItemThree = item.children[2];//premium
const ItemFour = item.children[3];
const ItemFive = item.children[4];

const selectChildOne = selectList.children[0];
const selectChildTwo = selectList.children[1];
const selectChildThree = selectList.children[2]



const  pBillOne = ItemOne.children[1];
const  pBillTwo = ItemOne.children[2];

const  oBillOne = ItemTwo.children[1];
const  oBillTwo = ItemTwo.children[2];

selectItemOne.addEventListener("click", function() {
    ItemOne.style.display = "flex"
    const  calcBill = pBillOne.innerText = selectItemOne.value + " * 0,5$";
    const  calcBillSum = selectItemOne.value  * 0.5 ;
    temporaryNamber1.innerText = calcBillSum
    pBillTwo.innerText = calcBillSum +"$"
    totalBill.style.display = "flex"
    console.log(temporaryNamber1.innerText)


});

selectItemTwo.addEventListener("click", function() {
    ItemTwo.style.display = "flex"


    const  calcBill = oBillOne.innerText = selectItemTwo.value + " * 0,5$";

    const  calcBillSumTwo  = selectItemTwo.value  * 0.5;
    temporaryNamber2.innerText = calcBillSumTwo
    oBillTwo.innerText = calcBillSumTwo +"$"
    totalBill.style.display = "flex"

});

selectItemThree.addEventListener("click",function (){

    selectList.style.display = "block";
    selectChildOne.addEventListener("click",function (){
        selectListText.innerText = selectChildOne.innerText;
        ItemThree.style.display = "flex";
        const basicBill = ItemThree.children[1];
        const basicBill2 = ItemThree.children[2];
        basicBill.innerText = selectChildOne.innerText;
        const basicPrice1 = 15;
        temporaryNamber3.innerText = basicPrice1
        basicBill2.innerText = basicPrice1 +"$"
        selectList.style.display = "none"
        selectList.style.display = "none"


    })
    selectChildTwo.addEventListener("click",function (){
        selectListText.innerText = selectChildTwo.innerText;
        ItemThree.style.display = "flex";
        const basicBill = ItemThree.children[1];
        const basicBill2 = ItemThree.children[2];

        basicBill.innerText = selectChildTwo.innerText;
        const basicPrice2 = 25;
        temporaryNamber3.innerText = basicPrice2
        basicBill2.innerText = basicPrice2+"$"//cena
        totalBill.style.display = "flex"
        selectList.style.display = "none"
    })
    selectChildThree.addEventListener("click",function (){
        selectListText.innerText = selectChildThree.innerText;
        ItemThree.style.display = "flex";
        const basicBill = ItemThree.children[1];
        const basicBill2 = ItemThree.children[2];
        basicBill.innerText = selectChildThree.innerText;
        const basicPrice3 = 30;
        temporaryNamber3.innerText = basicPrice3
        basicBill2.innerText = basicPrice3+"$"//cena
        totalBill.style.display = "flex"
        selectList.style.display = "none"
    })

})


selectItemFour.addEventListener("input",function (){
    const price = 100

    const chcekprice = ItemFour.children[1]
    chcekprice.innerText = price +"$"
    if(selectItemFour.checked) {
        ItemFour.style.display = "flex"
        totalBill.style.display = "flex"
        temporaryNamber6.innerText = price




    }else {
        ItemFour.style.display = "none"


    }

})




selectItemFive.addEventListener("input",function (){
    const price = 16
    const chcekprice = ItemFive.children[1]
    chcekprice.innerText = price +"$"
    if(selectItemFive.checked) {

        ItemFive.style.display = "flex"
        totalBill.style.display = "flex"
        temporaryNamber7.innerText = price

    }else {
        ItemFive.style.display = "none"



    }
})
aaa.addEventListener("click",function (){
    const sum1 = temporaryNamber1.innerText * 1;
    const sum2 = temporaryNamber2.innerText * 1;
    const sum3 = temporaryNamber3.innerText * 1;
    const sum6 = temporaryNamber6.innerText * 1;
    const sum7 = temporaryNamber7.innerText * 1;
    const array = [sum1,sum2,sum3,sum6,sum7]
    console.log(array)


    const sum = array.reduce(function (total, item) {
            return total + item;
        })

    endBill.innerText = sum +"$";
    })









