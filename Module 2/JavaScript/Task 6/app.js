let students = [
  { id: 101, name: "Ali Khan", age: 20, city: "Karachi" },
  { id: 102, name: "Ahmed Raza", age: 22, city: "Lahore" },
  { id: 103, name: "Usman Tariq", age: 19, city: "Islamabad" },
  { id: 104, name: "Hassan Ali", age: 21, city: "Faisalabad" },
  { id: 105, name: "Bilal Ahmed", age: 23, city: "Multan" },
  { id: 106, name: "Saad Khan", age: 20, city: "Peshawar" },
  { id: 107, name: "Zain Malik", age: 24, city: "Quetta" },
  { id: 108, name: "Farhan Ali", age: 22, city: "Hyderabad" },
  { id: 109, name: "Imran Shah", age: 25, city: "Sialkot" },
  { id: 110, name: "Hamza Tariq", age: 21, city: "Rawalpindi" },
];

let show = document.getElementById("show");

let indexValue = -1;

function render() {
  show.innerHTML = ``;
  for (let i = 0; i < students.length; i++) {
    if (indexValue == i) {
      show.innerHTML += `<tr> <td>${i + 1}</td> <td> <input type="text" id="newid" value="${students[i].id}"> </td> <td> <input type="text" id="name" value="${students[i].name}"> </td> <td> <input type="text" id="newage" value="${students[i].age}"> </td> <td><input type="text" id="city" value="${students[i].city}"> </td> <td><button onclick="update(${i})">Update</button> <button onclick="cancel()">Cancel</button></td> </tr>`;
    } else {
      show.innerHTML += `<tr> <td>${i + 1}</td> 
   <td>${students[i].id}</td> 
   <td>${students[i].name}</td> 
   <td>${students[i].age}</td> 
   <td>${students[i].city}</td> 
   <td><button onclick="edit(${i})">Edit</button> <button onclick="del(${i})">Delete</button></td> </tr>`;
    }
  }
}

function del(i) {
  students.splice(i, 1);

  render();
}
function edit(i) {
  indexValue = i;
  render();
}
function update(i) {
  let newId = document.getElementById("newid").value;
  let newName = document.getElementById("name").value;
  let newAge = document.getElementById("newage").value;
  let newCity = document.getElementById("city").value;

  students[i].id = newId;
  students[i].name = newName;
  students[i].age = newAge;
  students[i].city = newCity;

  indexValue = -1;
  render();
}
function cancel() {
  indexValue = -1;
  render();
}

render();
