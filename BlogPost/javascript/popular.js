
function getData() {
    let list = JSON.parse(localStorage.getItem("allData"));
    if (list == null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("allData"));
    }
    let html = "";
    list.forEach((element, index) => {
        if (element.search == "popular") {
            html += "<tr>";
            html += "<td>" + element.title + "</td>";
            html += "<td>" + element.description + "</td>";
            html += "<td>" + element.search + "</td>";
        }
        html += "</tr>";
    });

    document.querySelector("#popularData").innerHTML = html;
}

window.onload = function loadData() {
    getData();
}