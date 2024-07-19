document.addEventListener('DOMContentLoaded', ()=>{
    const form =document.getElementById('clientform')
    const msg= document.getElementById('msg')
    const URL = 'http://localhost:3000/posts'

    // fucntion to fetch api
    const fetchrecords = () =>{
        fetch(URL)
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            // using DOM to represent content
            msg.innerHTML='';
            data.foreach(posts =>{
                console.log(posts)
            })
    })
    }


// let selectedRow = null;

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = readFormData();
//     if (selectedRow == null) {
//         insertNewRecord(formData);
//     } else {
//         updateRecord(formData);
//     }
//     resetForm();
// }

// function readFormData() {
//     const formData = {};
//     formData["clientsname"] = document.getElementById("clientname").value;
//     formData["id_ppno"] = document.getElementById("id_ppno").value;
//     formData["partylevel"] = document.getElementById("partylevel").value;
//     formData["nationality"] = document.getElementById("nationality").value;
//     formData["casetype"] = document.getElementById("casetype").value;
//     return formData;
// }

// function insertNewRecord(data) {
//     const table = document.getElementById("clientlist").getElementsByTagName('tbody')[0];
//     const newRow = table.insertRow();
//     newRow.insertCell(0).innerHTML = data.clientsname;
//     newRow.insertCell(1).innerHTML = data.id_ppno;
//     newRow.insertCell(2).innerHTML = data.partylevel;
//     newRow.insertCell(3).innerHTML = data.nationality;
//     newRow.insertCell(4).innerHTML = data.casetype;
//     newRow.insertCell(5).innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`;
// }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("clientname").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("id_ppno").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("partylevel").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("nationality").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("casetype").value = selectedRow.cells[4].innerHTML;
// }

// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.clientsname;
//     selectedRow.cells[1].innerHTML = formData.id_ppno;
//     selectedRow.cells[2].innerHTML = formData.partylevel;
//     selectedRow.cells[3].innerHTML = formData.nationality;
//     selectedRow.cells[4].innerHTML = formData.casetype;
// }

// function onDelete(td) {
//     if (confirm('Do you want to delete this record?')) {
//         const row = td.parentElement.parentElement;
//         document.getElementById('clientlist').deleteRow(row.rowIndex);
//         resetForm();
//     }
// }

// function resetForm() {
//     document.getElementById("clientForm").reset();
//     selectedRow = null;
// }
// })