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

function render() {
  let html = "";
  for (let i = 0; i < students.length; i++) {
    html += `<tr> <td>${i + 1}</td> 
   <td>${students[i].id}</td> 
   <td>${students[i].name}</td> 
   <td>${students[i].age}</td> 
   <td>${students[i].city}</td> 
   <td><button onclick="edit()">Edit</button> <button onclick="del(${i})">Delete</button></td> </tr>`;
  }
  show.innerHTML = html;
}

function del(i) {
  students.splice(i, 1);

  render();
}

render();
// console.log(students);
