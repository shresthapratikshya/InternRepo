
function getData() {
    let list = JSON.parse(localStorage.getItem("allData"));
    if (list == null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("allData"));
    }
    let html = "";
    list.forEach((element, index) => {
        if (element.search == "featured") {
            html += "<tr>";
            html += "<td>" + element.title + "</td>";
            html += "<td>" + element.description + "</td>";
            html += "<td>" + element.search + "</td>";
        }
        // html += "<td>" + element.amount + "</td>";
        // html += '<td><button onClick="updateData(' + index + ')">Edit</button></td>';
        // html += '<td><button onClick="deleteData(' + index + ')">Delete</button></td>';
        html += "</tr>";
    });

    document.querySelector("#featuredData").innerHTML = html;
}

window.onload = function loadData() {
    getData();
}