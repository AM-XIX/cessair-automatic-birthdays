
fetch('https://api.npoint.io/0e6a56eb1d69893e4e96')
.then(response => {
    return response.json()})
.then(data => {
    console.log(data);
    mainApp(data)})
.catch(err => {
    console.log(err)
});

// ONCE DOCUMENT IS LOADED
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("message").style.display = "none";

    document.getElementById("currentDate").innerHTML = getCurrentDate();
});

// OUR MAIN APP HOLDING DATA -------
function mainApp(data) {
    let count = 0;
    let message = document.getElementById("message");
    let subjectDiv = document.getElementById("subject");
    let subject;

    for(let i = 0; i < data.length; i++) {
        console.log(data[i].Date == getCurrentDate());

        if(data[i].Date == getCurrentDate()) {
            count++;
            if(count === 1) {
                subject = data[i].Name;
                subjectDiv.innerHTML = subject;
            }
            else {
                subject = subject + "<br>" + data[i].Name;
                subjectDiv.innerHTML = subject;
            }
            message.style.display = "block";
        } else {
        }
    }   
}

    // GETTING CURRENT DATE
    function getCurrentDate() {
        const date = new Date();

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];

        let currentDay= String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
        currentMonth = monthNames[currentMonth-1];

        if (Array.from(currentDay)[0] === "0") {
            currentDay = Array.from(currentDay)[1];
        }
        // we will display the date as DD-MM-YYYY 
        let currentDate = `${currentMonth} ${currentDay}`;

        return currentDate;
    }


