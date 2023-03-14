
let allData = JSON.parse(localStorage.getItem("allData")) || [];

var selectedRow = null;
function createBlog() {
    event.preventDefault();
    let search = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let title = document.getElementById("title").value;
    let currentData = { search, description, title };
    console.log(search, description, title);
    // JSON.stringify("currentData", localStorage.setItem(currentData));
    localStorage.setItem("currentData", JSON.stringify(currentData));

    if (JSON.parse(localStorage.getItem("allData")) == null) {
        //console.log("Hello");
        allData = [];
    }
    allData.push(currentData);
    localStorage.setItem("allData", JSON.stringify(allData));
    loadData();
    reset();
}

function loadData() {
    console.log("Hello");
    let list = JSON.parse(localStorage.getItem("allData"));
    if (list == null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("allData"));
    }
    let html = "";
    list.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.title + "</td>";
        html += "<td>" + element.description + "</td>";
        html += "<td>" + element.search + "</td>";
        html += '<td><button onClick="updateData(' + index + ')">Edit</button></td>';
        html += '<td><button onClick="deleteData(' + index + ')">Delete</button></td>';
        html += "</tr>";
    });
    document.querySelector("#mainList").innerHTML = html;
}


function deleteData(index) {
    var list = JSON.parse(localStorage.getItem('allData'));
    if (localStorage.getItem('allData') == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem('allData'));
    }

    list.splice(index, 1);
    localStorage.setItem("allData", JSON.stringify(list));
    loadData();
}



function updateData(id) {
    var list = JSON.parse(localStorage.getItem('allData'));
    if (localStorage.getItem('allData') == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem('allData'));
    }
    document.getElementById("publishbutton").style.display = "none";
    document.getElementById("updatebutton").style.display = "block";
    document.getElementById("category").value = list[id].search;
    document.getElementById("title").value = list[id].title;
    document.getElementById("description").value = list[id].description;
    document.getElementById("updatebutton").onclick = function () {
        console.log("Helo")
        list[id].title = document.getElementById("title").value;
        list[id].description = document.getElementById("description").value;
        list[id].search = document.getElementById("category").value;
        localStorage.setItem("allData", JSON.stringify(list));
        loadData();
        reset();
        document.getElementById("publishbutton").style.display = "block";
        document.getElementById("updatebutton").style.display = "none";
    }
}

function reset() {
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
    document.getElementById("category").value = '';
    selectedRow = null;
}

window.onload = function abc() {
    loadData();
}