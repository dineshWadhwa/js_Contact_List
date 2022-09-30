var contactDetails = [];
let currentElement;
let detail;

// form validation

// name
function fnamevalid() {
  let regex = /^[a-zA-Z]{2,}$/;
  let name = document.getElementById("name").value;
  if (regex.test(name)) {
    console.log("match");
    let name = document.getElementById("name");
    name.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    let name = document.getElementById("name");
    name.classList.add("is-invalid");
  }
}

// mob no
function pvalid() {
  let regexp = /^([+]\d{2}[ ])?\d{10}$/;
  let phone = document.getElementById("number").value;
  if (regexp.test(phone)) {
    console.log("match");
    let phone = document.getElementById("number");
    phone.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    let phone = document.getElementById("number");
    phone.classList.add("is-invalid");
  }
}

// email
function evalid() {
  let regexe = /^\S+@\S+\.\S+$/;
  let email = document.getElementById("email").value;
  if (regexe.test(email)) {
    console.log("match");
    let email = document.getElementById("email");
    email.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    let email = document.getElementById("email");
    email.classList.add("is-invalid");
  }
}

// Add Button 
function addDetails() {
  const table = document.getElementById("detail-table");
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;

  const detail = {
    id: Math.random(),
    name: name,
    email: email,
    number: number,
    address: address,
  };
  console.log(detail.id);
  if (!name || !number || !email || !address) {
      alert("Please fill all the details");
      return;
    }

  contactDetails.push(detail);

  table.innerHTML = "";

  contactDetails.map((contact) => {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = contact.name;
    cell2.innerHTML = contact.number;
    cell3.innerHTML = contact.email;
    cell4.innerHTML = contact.address;
    cell5.innerHTML = `<i class="fa-solid fa-pen-to-square fs e" onclick="editData(${contact.id})"></i><i class="fa-solid fa-trash fs d" onclick="remove(${contact.id})"></i>`;

    cell1.classList.add("width");
    cell2.classList.add("width");
    cell3.classList.add("width");
    cell4.classList.add("width");
    cell5.classList.add("width");

   clrinput()
  });
}

function clrinput(){
   document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email").value = "";
}

function editData(id) {
  const index = contactDetails.findIndex((detail) => detail.id === id);
  currentElement = id;

  const val = contactDetails[index];
  
  document.getElementById("name").value = val.name;
  document.getElementById("email").value = val.email;
  document.getElementById("number").value = val.number;
  document.getElementById("address").value = val.address;

  document.getElementById("add").classList.add("d-none");
  document.getElementById("save").classList.remove("d-none");
}

function savebtn() {

  const index1 = contactDetails.findIndex((obj) => obj.id == currentElement);
  
  contactDetails[index1].name = document.getElementById("name").value;
  contactDetails[index1].email = document.getElementById("email").value;
  contactDetails[index1].number = document.getElementById("number").value;
  contactDetails[index1].address = document.getElementById("address").value;

  contactDetails.map((contact) => {
    const table = document.getElementById("detail-table");
    console.log("reached");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = contact.name;
    cell2.innerHTML = contact.number;
    cell3.innerHTML = contact.email;
    cell4.innerHTML = contact.address;
    cell5.innerHTML = `<i class="fa-solid fa-pen-to-square fs e" onclick="editData(${contact.id})"></i><i class="fa-solid fa-trash fs d" onclick="remove()"></i>`;

    cell1.classList.add("width");
    cell2.classList.add("width");
    cell3.classList.add("width");
    cell4.classList.add("width");
    cell5.classList.add("width");

    clrinput();
  });
  
  contactDetails.map((i) =>{ 
    document.getElementById("detail-table").deleteRow(i);
  } 
  ) 

  console.log("contactDetails", contactDetails);

  document.getElementById('save').classList.add('d-none')
  document.getElementById('add').classList.remove('d-none')
}

function remove(id) {
  const index = contactDetails.findIndex((detail) => detail.id === id);
  if (confirm("Are you sure want to Delete ?") == true) {
    const table = document.getElementById("detail-table");
    let e = contactDetails.splice(index, 1);
    document.getElementById("detail-table").deleteRow(index);
    }
}
