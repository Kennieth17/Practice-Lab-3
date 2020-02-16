function save() {
    if (document.getElementById("btn").click) {
        if (document.getElementById("eventTitle").value && document.getElementById("fromDate").value && document.getElementById("toDate").value && document.getElementById("postDate").value != null) {
            alert("The response has been saved.");
        } 
        else {
            alert("Please fill the form.");
        }
    }
}

function cancel() {
    window.open('','_self').close()
}

