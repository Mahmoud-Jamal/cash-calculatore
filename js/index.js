cashArr=[
    {
        img:"image/5_f copy.jpg",
        cash:0,
        number:0,
        value:5
    },
    {
        img:"image/10_paper_f copy.jpg",
        cash:0,
        number:0,
        value:10
    },
    {
        img:"image/20_f copy.jpg",
        cash:0,
        number:0,
        value:20
    },
    {
        img:"image/50_f copy.jpg",
        cash:0,
        number:0,
        value:50
    },
    {
        img:"image/100_f copy.jpg",
        cash:0,
        number:0,
        value:100
    },
    {
        img:"image/200_f copy.jpg",
        cash:0,
        number:0,
        value:200
    }
]
const cashForm=document.getElementById("cashForm")
cashArr.forEach((item,index)=>{
    cashForm.innerHTML+=`
    <div class="cash-input">
    <picture>
        <img src="${item.img}" alt="">
    </picture>
    <div class="input">
        <input 
  type="text" 
  name=""  
  value="${item.number == 0 ? '' : item.number}" 
  id="cashInput${index}" 
  placeholder="Enter your num" 
  oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 5); calculate(${index})">

    </div>
    <div class="cash" id="cash${index}">
        ${item.cash}
    </div>
</div>
    `
})
function calculate(index){
    console.log(index);
    
    cashArr[index].number=document.getElementById("cashInput"+index).value
    cashArr[index].cash=cashArr[index].number*cashArr[index].value
    document.getElementById("cash"+index).innerHTML=cashArr[index].cash
    const totalCash=cashArr.reduce((acc,item)=>acc+item.cash,0)
    document.getElementById("totalCash").innerHTML=totalCash
}
function reset(){
    cashArr.forEach((item,index)=>{
        item.number=0
        item.cash=0
        document.getElementById("cash"+index).innerHTML=item.cash
        document.getElementById("cashInput"+index).value=""
    })
    document.getElementById("totalCash").innerHTML=0
}