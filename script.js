// const ctx = document.getElementById("cashFlowChart");
let toggleBtn = document.querySelector(".toggle-btn");
let aside = document.querySelector("aside");
let header = document.querySelector("header");
let section = document.querySelector("section");
let asideBtn1 = document.querySelector(".aside-part2-btn1");
let asideBtn2 = document.querySelector(".aside-part2-btn2");
let asideTransactionBtn = document.querySelector(".aside-part2-btn");
let overviewH1 = document.querySelector(".overview-h1");
let balanceDiv = document.querySelectorAll(".balance-div");
let commonDivH2 = document.querySelectorAll(".common-div-h2");
let chart = document.querySelector(".chart");
let canvas = document.querySelector("canvas");
let preferences = document.querySelector(".preferences");
let allTrasactions = document.querySelector(".all-trasactions");
let transactionBtn = document.querySelector(".transaction-btn");
let addTransactionCross = document.querySelector(".add-transaction-cross");
let addTransactionScreen = document.querySelector(".add-transaction-screen");
let saveTransactions = document.querySelector(".save-transactions");
let typeData = document.querySelector("#type-data");
let descriptionData = document.querySelector("#description-data");
let amountValue = document.querySelector("#amouunt-value");
let dateValue = document.querySelector("#date");
let currentBalanceValue = document.querySelector("#current-balance-value");
let totalIncomeValue = document.querySelector("#total-income-value");
let totalExpenseValue = document.querySelector("#total-expense-value");
let totalTransactionValue = document.querySelector("#total-transaction-value");
let allTrasactionsDiv1Searchicon = document.querySelector(".ri-search-line");
let allTrasactionsDiv2 = document.querySelector(".all-trasactions-div2");
let allTrasactionsDiv1SearchSection = document.querySelectorAll(".all-trasactions-div1-search-section",);
let resetDataBtn = document.querySelector(".reset-data");

let searchFilter = document.querySelector(".search-filter");
let section2 = document.querySelector(".section-2");
let section2Btn = document.querySelector(".section-2-btn");
let section2Input = document.querySelector(".section-2-input");
let section2Select = document.querySelector(".section-2-select");
let userName = document.querySelector(".user-name");
let currentType = document.querySelectorAll(".current-type");
let section2Header = document.querySelector(".section-2-header");
let section2Container= document.querySelector(".section-2-container");
let register= document.querySelector(".register");
let login= document.querySelector(".login");
let registerA= document.querySelector(".register-a");
let loginA= document.querySelector(".login-a");
let loginContianerHeaderH2= document.querySelector(".login-contianer-header-h2");
let loginContianerHeaderP= document.querySelector(".login-contianer-header-p");
let loginBtn= document.querySelector(".login-btn");
let registerBtn= document.querySelector(".register-btn");
let userNameInput= document.querySelector(".userName-input");
let passwordInput= document.querySelector(".password-input");
let main= document.querySelector("main");
let loginContianer= document.querySelector(".login-contianer");
let logoutBtn= document.querySelector(".logout-btn");






let savedTotalIncome;
let savedTotalExpense;
let savedarrayLength;

let tableBody = document.querySelector(".tableBody");

let editId = null


let toggle =
  JSON.parse(localStorage.getItem("toggleFlag")) == null || undefined
    ? true
    : JSON.parse(localStorage.getItem("toggleFlag"));

localStorage.setItem("toggleFlag", JSON.stringify(toggle));



let transactionDataArray =
  JSON.parse(localStorage.getItem("transactionArray")) == null
    ? []
    : JSON.parse(localStorage.getItem("transactionArray"));





let myChart = null;

  function updateChart(income, expense) {
        const ctx = document.getElementById('cashFlowChart').getContext('2d');
        if (myChart) { myChart.destroy(); }
  myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Income vs Expenses'],
                datasets: [
                    { label: 'Income',  data: [income], backgroundColor: '#166534', borderRadius: 4 },
                    { label: 'Expenses',  data: [expense], backgroundColor: '#991b1b', borderRadius: 4 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { position: 'top' } }
            }
        });
      }



function ui() {
   toggle =
  JSON.parse(localStorage.getItem("toggleFlag")) == null || undefined
    ? true
    : JSON.parse(localStorage.getItem("toggleFlag"));
  if (toggle === true || undefined) {
    toggleBtn.innerHTML = ` <i class="ri-toggle-line "></i>`;
    toggleBtn.classList.remove("toggle");
    aside.classList.remove("body-dark-theme");
    asideBtn1.classList.remove("aside-btn");
    asideBtn2.classList.remove("aside-btn");
    asideTransactionBtn.classList.remove("aside-transaction-btn");
    section2Btn.classList.remove("aside-transaction-btn");
    overviewH1.classList.remove("overview-h1-dark");
    section2Header.classList.remove("overview-h1-dark");
    header.classList.remove("body-dark-theme");
    section.classList.remove("section-dark-theme");
    section2.classList.remove("section-dark-theme");
    balanceDiv[0].classList.remove("balance-div-dark");
    balanceDiv[1].classList.remove("balance-div-dark");
    balanceDiv[2].classList.remove("balance-div-dark");
    balanceDiv[3].classList.remove("balance-div-dark");
    commonDivH2[0].classList.remove("common-dark-div-h2");
    commonDivH2[1].classList.remove("common-dark-div-h2");
    chart.classList.remove("chart-dark");
    section2Container.classList.remove("chart-dark");
    canvas.classList.remove("canvas-dark");
    preferences.classList.remove("chart-dark");
    allTrasactions.classList.remove("chart-dark");
    allTrasactionsDiv2.classList.remove("all-trasactions-div2-select-dark");
    section2Input.classList.remove("all-trasactions-div2-select-dark");
    section2Select.classList.remove("all-trasactions-div2-select-dark");
    allTrasactionsDiv1SearchSection[0].classList.remove(
      "all-trasactions-div1-search-section-dark",
    );
    allTrasactionsDiv1SearchSection[1].classList.remove(
      "all-trasactions-div1-search-section-dark",
    );
    allTrasactionsDiv1Searchicon.style.color = "black";
  } else {
    allTrasactionsDiv1Searchicon.style.color = "white";
    toggleBtn.innerHTML = `<i class="ri-toggle-fill"></i>`;
    toggleBtn.classList.add("toggle");
    aside.classList.add("body-dark-theme");
    asideBtn1.classList.add("aside-btn");
    asideBtn2.classList.add("aside-btn");
    asideTransactionBtn.classList.add("aside-transaction-btn");
    section2Btn.classList.add("aside-transaction-btn");
    overviewH1.classList.add("overview-h1-dark");
    section2Header.classList.add("overview-h1-dark");
    header.classList.add("body-dark-theme");
    section.classList.add("section-dark-theme");
    section2.classList.add("section-dark-theme");
    balanceDiv[0].classList.add("balance-div-dark");
    balanceDiv[1].classList.add("balance-div-dark");
    balanceDiv[2].classList.add("balance-div-dark");
    balanceDiv[3].classList.add("balance-div-dark");
    commonDivH2[0].classList.add("common-dark-div-h2");
    commonDivH2[1].classList.add("common-dark-div-h2");
    chart.classList.add("chart-dark");
    section2Container.classList.add("chart-dark");
    canvas.classList.add("canvas-dark");
    preferences.classList.add("chart-dark");
    allTrasactions.classList.add("chart-dark");
    allTrasactionsDiv1Searchicon.classList.add("ri-search-line");
    allTrasactionsDiv2.classList.add("all-trasactions-div2-select-dark");
    section2Input.classList.add("all-trasactions-div2-select-dark");
    section2Select.classList.add("all-trasactions-div2-select-dark");
    allTrasactionsDiv1SearchSection[0].classList.add(
      "all-trasactions-div1-search-section-dark",
    );
    allTrasactionsDiv1SearchSection[1].classList.add(
      "all-trasactions-div1-search-section-dark",
    );
  }
}

ui();



toggleBtn.addEventListener("click", () => {
  if (toggle === true || undefined) {
    toggle = false;
    localStorage.setItem("toggleFlag", JSON.stringify(false));
  } else {
    toggle = true;
    localStorage.setItem("toggleFlag", JSON.stringify(true));
  }

  ui();
});



transactionBtn.addEventListener("click", () => {
  addTransactionScreen.style.display = "flex";
});



addTransactionCross.addEventListener("click", () => {
  addTransactionScreen.style.display = "none";
});

let obj;

saveTransactions.addEventListener("click", () => {
  let type = typeData.value;
  let description = descriptionData.value;
  let amount = amountValue.value;
  let datee = dateValue.value;

  if (
    type.trim() == "" ||
    description.trim() == "" ||
    amount.trim() == "" ||
    datee.trim() == ""
  ) {
    return alert("Fill all the fields");
  }

  obj = {
    type,
    description,
    amount,
    datee,
    id: crypto.randomUUID(),
  };

  if (editId!=null) {
    transactionDataArray[editId] = obj
    editId = null
      localStorage.setItem(
    "transactionArray",
    JSON.stringify(transactionDataArray),
  );
  }
  else{ 
    transactionDataArray.push(obj);
    localStorage.setItem(
      "transactionArray",
      JSON.stringify(transactionDataArray),
    );
  }




  let income = [];
  let expense = [];
  transactionDataArray.filter((e, index) => {
    if (e.type == "Salary") {
      income.push(e.amount);
    } else {
      expense.push(e.amount);
    }
  });

  let totalIncome = income.reduce((acc, value) => {
    return Number(acc) + Number(value);
  }, 0);

  let totalExpense = expense.reduce((acc, value) => {
    return Number(acc) + Number(value);
  }, 0);

  localStorage.setItem("totalIncome", JSON.stringify(totalIncome));

  localStorage.setItem("totalExpense", JSON.stringify(totalExpense));

  localStorage.setItem(
    "arrayLength",
    JSON.stringify(transactionDataArray.length),
  );

  
  balances();
  tableBody.innerHTML = "";
  tableData();

  addTransactionScreen.style.display = "none";
  typeData.value = "";
  descriptionData.value = "";
  amountValue.value = "";
  dateValue.value = "";
});



function balances() {
  savedTotalIncome = JSON.parse(localStorage.getItem("totalIncome"));
  savedTotalExpense = JSON.parse(localStorage.getItem("totalExpense"));
  savedarrayLength = JSON.parse(localStorage.getItem("arrayLength"));
  if (
    savedTotalIncome == undefined ||
    savedTotalExpense == undefined ||
    savedarrayLength == undefined
  ) {
    //  console.log("nothing");

    currentBalanceValue.textContent = 0;
    totalIncomeValue.textContent = 0;
    totalExpenseValue.textContent = 0;
    totalTransactionValue.textContent = 0;
  } else {
    // console.log("something");
    currentBalanceValue.textContent = savedTotalIncome - savedTotalExpense;
    totalIncomeValue.textContent = savedTotalIncome;
    totalExpenseValue.textContent = savedTotalExpense;
    totalTransactionValue.textContent = savedarrayLength;
  }

  
  // console.log(savedTotalIncome);
  // console.log(savedTotalExpense);
  
  updateChart(savedTotalIncome,savedTotalExpense)
  
}

balances();



let typeSpan;

function tableData() {

  
    tableBody.innerHTML = "";
      transactionDataArray.forEach((e) => {
    const row = document.createElement("tr");
    const isIncome = e.type ==="Salary"

    row.innerHTML = `
        <td>${e.datee}</td>
        <td>${e.description}</td>
        <td class='amount-type'>${e.type}</td>
        <td class='actual-amount ${isIncome? "table-green" : "table-red"} '> ${isIncome ? "+" : "-"} <span class="current-type">$</span> ${e.amount}</td>
        <td class = 'editButtons'>
          <div class='edit-btn' onclick='editBtn("${e.id}")'><i class="ri-pencil-fill"></i></div> 
          <div class='delete-btn' onclick='deleteBtn("${e.id}")'><i class="ri-delete-bin-5-fill"></i></div>
          </td>`;
          tableBody.appendChild(row);

          
          
          typeSpan = row.querySelector('.current-type');
        });
  
}

tableData();


function editBtn(id) {
 addTransactionScreen.style.display = "flex";

   const index = transactionDataArray.findIndex((elem) => {
    if (elem.id === id) {
      return elem
    } 
  });
  
 typeData.value =    transactionDataArray[index].type
 descriptionData.value =   transactionDataArray[index].description
 amountValue.value =   transactionDataArray[index].amount
 dateValue.value =   transactionDataArray[index].datee
  editId = index
  };
  



function deleteBtn(id) {
  const index = transactionDataArray.findIndex((elem) => {
    return elem.id === id;
  });

  if (index != -1) {
    transactionDataArray.splice(index, 1);
  }

  localStorage.setItem(
    "transactionArray",
    JSON.stringify(transactionDataArray),
  );
  tableData();
}







 let value;



allTrasactionsDiv2.addEventListener("change",(elem)=>{

  value = elem.target.value
  // console.log(value);

   if (value=="All Types") {
     console.log(value);
     tableData()
    }
    else if (value=="Salary") {
      // console.log(value);
      typeFilter()    
  }
    else if (value=="Expense") {
      // console.log(value);
      typeFilter()    
  }

})




function typeFilter() {
  
   tableBody.innerHTML = "";

  let list = transactionDataArray.filter((e)=>{
    if (e.type==value) {
      return e
    }
   })
   
   
  
    list.forEach((e)=>{
      
     const row = document.createElement("tr");
    const isIncome = e.type ==="Salary"

    row.innerHTML = `
        <td>${e.datee}</td>
        <td>${e.description}</td>
        <td class='amount-type'>${e.type}</td>
        <td class='actual-amount ${isIncome? "table-green" : "table-red"} '> ${isIncome ? "+" : "-"} $${e.amount}</td>
        <td class = 'editButtons'>
          <div class='edit-btn' onclick='editBtn("${e.id}")'><i class="ri-pencil-fill"></i></div> 
          <div class='delete-btn' onclick='deleteBtn("${e.id}")'><i class="ri-delete-bin-5-fill"></i></div>
          </td>`;
          tableBody.appendChild(row);
    })

    console.log(list);
    
    
}


searchFilter.addEventListener("keyup",(e)=>{
  // console.log(e.target.value);
  let changedValue = e.target.value

 let newArr = transactionDataArray.filter((e)=>{
    if (e.description==changedValue) {
      return e
    }
  })

  
   tableBody.innerHTML = "";

  newArr.forEach((e)=>{
      
     const row = document.createElement("tr");
    const isIncome = e.type ==="Salary"

    row.innerHTML = `
        <td>${e.datee}</td>
        <td>${e.description}</td>
        <td class='amount-type'>${e.type}</td>
        <td class='actual-amount ${isIncome? "table-green" : "table-red"} '> ${isIncome ? "+" : "-"} $${e.amount}</td>
        <td class = 'editButtons'>
          <div class='edit-btn' onclick='editBtn("${e.id}")'><i class="ri-pencil-fill"></i></div> 
          <div class='delete-btn' onclick='deleteBtn("${e.id}")'><i class="ri-delete-bin-5-fill"></i></div>
          </td>`;
          tableBody.appendChild(row);
    })
 
    if (changedValue=="") {
      tableData()
    }
  
})


resetDataBtn.addEventListener("click",()=>{
  localStorage.clear()
  // localStorage.setItem("settingsData",JSON.stringify(''))
  ui()
  balances()
  tableBody.innerHTML=""
  updateChart()
  location.reload()
})

asideBtn1.addEventListener("click",(e)=>{
  section.style.display="grid"
  section2.style.display="none"
})

asideBtn2.addEventListener("click",(e)=>{
  section2.style.display="block"
  section.style.display="none"
  ui()
})




    

section2Btn.addEventListener("click",(e)=>{
 let namee = section2Input.value
 let currency = section2Select.value

 let obj={
  namee,
  currency
 }

 localStorage.setItem("settingsData",JSON.stringify(obj))
alert("Settigs updated")
 user()
 location.reload()
})









function registerContent() {
   register.style.display="none"
      login.style.display="block"
      loginContianerHeaderH2.textContent = "Create Account"
      loginContianerHeaderP.textContent = "Join Finance Tracker"
      loginBtn.style.display = "none"
      registerBtn.style.display = "block"
}




function loginContent() {
   login.style.display="none"
      register.style.display="block"
      loginContianerHeaderH2.textContent = "Welcome Back"
  loginContianerHeaderP.textContent = "Login to Finance Tracker"
  registerBtn.style.display = "none"
  loginBtn.style.display = "block"
}




registerA.addEventListener("click",(e)=>{
  e.preventDefault()
  registerContent()
})





loginA.addEventListener("click",(e)=>{
  e.preventDefault()
  loginContent()
})



registerBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  if (userNameInput.value.trim() == "" || (passwordInput.value.trim() == "") ) {
   return alert("Fill all the fields")
  }
  else{
  
 let userNamee =  userNameInput.value
 let password =  passwordInput.value

 let obj = {
  userNamee,
  password
 }

 localStorage.setItem("loginDetail",JSON.stringify(obj))

 userName.textContent=userNamee
 

 userNameInput.value = ""
 passwordInput.value = ""
 
 alert("Registeration Successful , You are login now")
  localStorage.setItem("match",JSON.stringify("true"))
 loginContent()
//  location.reload()
matched()
}

})




let loginDetails = JSON.parse(localStorage.getItem("loginDetail"))







loginBtn.addEventListener("click",(e)=>{
  e.preventDefault()

  let userdata = JSON.parse(localStorage.getItem("loginDetail"))!= undefined || null ? true : false

  let checkAvailable = userdata!= true ?  (localStorage.setItem("match",JSON.stringify("false")),JSON.parse(localStorage.getItem("match"))) : (localStorage.setItem("match",JSON.stringify("true")),JSON.parse(localStorage.getItem("match")))

  if (userNameInput.value.trim() == "" || (passwordInput.value.trim() == "") ) {
   return alert("Fill all the fields")
  }

    if (checkAvailable==="false"){
       userNameInput.value = ""
      passwordInput.value = ""
      
   return alert("No user found , Register first to acees Finance Tracker")
  }

    if(userNameInput.value.trim()===loginDetails.userName && passwordInput.value.trim()===loginDetails.password ){
      // console.log("true");
      
     
      let aa = userNameInput.value
      userName.textContent = aa
      userNameInput.value = ""
      passwordInput.value = ""  
      matched()
      // console.log("hlo");
      user()
      
    }
    else if(userNameInput.value.trim()!=loginDetails.userName || passwordInput.value.trim()!=loginDetails.password ){
      alert("Wrong Details")
      localStorage.setItem("match",JSON.stringify("false"))
      userNameInput.value = ""
      passwordInput.value = ""
    }

matched()
})






function user() {
  
 
let settingsDataArray =
      JSON.parse(localStorage.getItem("settingsData")) == undefined || null
      ? JSON.parse(localStorage.getItem("loginDetail"))
      : JSON.parse(localStorage.getItem("settingsData"));


    userName.textContent = settingsDataArray.namee 
    currentType[0].textContent = settingsDataArray.currency 
    currentType[1].textContent = settingsDataArray.currency 
    currentType[2].textContent = settingsDataArray.currency
      // typeSpan.textContent = settingsDataArray.currency   
      // console.log(typeSpan);
      
}
user()






function matched() {
  
let matchedInfo = JSON.parse(localStorage.getItem("match"))
// console.log(matchedInfo);


  if ( matchedInfo==="true") { 
      loginContianer.style.display="none"
     main.style.display="grid"
  }
  else{
    loginContianer.style.display="flex"
   main.style.display="none"
  }
}

matched()



logoutBtn.addEventListener("click",(e)=>{
  localStorage.setItem("match",JSON.stringify("false"))
  matched()
})