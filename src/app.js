// ==== REQUESTING DATA FROM API ====
// data = JSON with bdays
fetch('https://am-xix.github.io/cessair-automatic-birthdays/db.json')
.then(response => {
    return response.json()})
.then(data => {
    console.log(data);
    mainApp(data)})
.catch(err => {
    console.log(err)
});

// You probs do NOT need the addEventListener on WoX but DO MAKE SURE you hide the message div by default
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("message").style.display = "none";
});

// ==== OUR MAIN APP MANIPULATING DATA ====
function mainApp(data) {
    // --- basic variables ---
    let count = 0;
    // message = your whole div containing wishes
    let message = document.getElementById("message");
    let subjectDiv = document.getElementById("subject");
    let subject;

    // --- Loop for each entry ---
    for(let i = 0; i < data.length; i++) {
        console.log(data[i].Date == getCurrentDate());

        // --- if an entry's bday is today
        if(data[i].Date == getCurrentDate()) {
            // --- couting bdays
            count++;
            //--- default : 1 bday
            if(count === 1) {
                subject = data[i].Name;
                subjectDiv.innerHTML = subject;
            }
            else {
                 // --- if there's more : names will be piling up
                subject = subject + "<br>" + data[i].Name;
                subjectDiv.innerHTML = subject;
            }
            message.style.display = "block";
        } else {
        }
    }   
}
    // ==== GETTING CURRENT DATE ====
    function getCurrentDate() {
        const date = new Date();

        // getting month names instead of numbers
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];

        let currentDay= String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
        currentMonth = monthNames[currentMonth-1];

        // getting rid of the 0 in front of the day
        if (Array.from(currentDay)[0] === "0") {
            currentDay = Array.from(currentDay)[1];
        }
        // we will display the date as Month name + Day
        let currentDate = `${currentMonth} ${currentDay}`;

        return currentDate;
    }


