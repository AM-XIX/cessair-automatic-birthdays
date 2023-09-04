# Cessair Automatic Birthdays
_C.A.B_

### Introduction

Here's a guide through setting up your **automatic birthday wishes** on your frontpage box thanks to a **google form**.<br>
> The boxes with icons 💡 are simple technical explanations to read only if you want to learn things along the way. If you're just here for the magic or you already know all the tricks, skip those.

**WARNING :** when asking for your users' birthdays, do not register any **year** for privacy reasons. Always stick to day and month for any public destination, just like WoX and the cake system.

## 1️⃣ Setting up your form

You want your users that wish their birthday to appear on the frontpage to fill a **google form** you've prepared.
2 questions only :
- Your name
- Your birthday (Month + day)

❗️❗️ The format given for the date is **extremely important**.<br>
For now, the script works with dates like : September 2, October 30, etc.<br>
_(don't worry, non-english speaking sites, you'll get to change the month names right below)_

_You can easily change the date format by yourself if you know JS.<br>
If you want me to create another date format for you, feel free to slide in my DMs._

## 2️⃣ Setting up your sheet

**2.1** — Create a response sheet document where your form answers will land automatically.

**2.2** — Rename your question cells like the following :<br>
**Name Date**<br>
(Case sensitive)

Your sheet should look like this :<br>
<img width="458" alt="Sheet screenshot with to columns : name and date" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/ff652f93-f71c-4936-a702-bb2326efc0fc">

## 3️⃣ Exporting to JSON

> 💡 JSON is a data format that JavaScript can use as an object, meaning JS can manipulate it directly in its code. We will transform our google sheet data into a JSON file in order to read the birthdays, display them, know what date belongs to what name, etc, all through JS.

**3.1** — Download the [Export Sheet Data](https://workspace.google.com/marketplace/app/export_sheet_data/903838927001) google extension.

**3.2** — Create another sheet<br>
On the **same google sheet document**, add a new sheet and **copy paste** the form sheet in there.<br>
This might seem very dumb but this is in order to remove unwanted meta data from our future JSON file.

> 💡 Metadata is invisible data that any element can hold. It's data... about other data. For example, a picture has medata stating it's date, the device used, it's localization sometimes, etc. Form responses in gsheet hold metadata stating the response date and this pollutes the data that we really want, aka the birthday date and name.

**3.3** — Open Sidebar<br>
Go to Extension > Export sheet data > Open sidebar<br>
<img width="451" alt="Capture d’écran 2023-09-04 à 17 28 28" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/1e0153f0-6ac3-47b3-ae40-cfe1a46fcce4">

**3.4** — Set the right settings

- In Format > Export Sheet(s), select **Current sheet only**
- In General, check **Ignore empty cells**
- In Advanced JSON, check **Export content as array** AND **Export cell objects**

**No other boxes** should be checked. If there are, please uncheck them!<br>
<img width="227" alt="Capture d’écran 2023-09-04 à 19 22 46" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/d16095d3-71d3-4893-98a6-37d83781b4b7">
<img width="229" alt="Capture d’écran 2023-09-04 à 19 27 17" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/a4a7d82c-88ce-4ea2-af93-c347285932f8"><br>
<img width="230" alt="Capture d’écran 2023-09-04 à 19 25 08" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/15a96450-d659-4159-ba75-317d4e3faf7f">

**3.5** — Export file

Good news : those settings are registered so you won't have to do that step ever again.
Bad news : now's time for export and code. Let's go. 🎶

Click on **Visualize**. If you've got a result similar to the screenshot below, click on **Export** > **Download**.<br>
<img width="503" alt="Capture d’écran 2023-09-04 à 19 58 18" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/bd35a49f-6ff5-4386-9d48-a4c32de379d5">

## 4️⃣ Hosting JSON here

> 💡 Hosting a file is like giving it a nice appartment address on the internet so you can find it when you need it. For now, your holy JSON birthday file is solely on your computer. We need your WoX to be able to find it online. Github will allow us to do that, as Github Pages is a free hosting service.

This very github repository is deployed under the adress [https://am-xix.github.io/cessair-automatic-birthdays/](https://am-xix.github.io/cessair-automatic-birthdays/). What's after the last / ? Well, that's gonna be **your JSON file**.

**4.1** — Create & share Github account

If you don't have a **github account** yet, it's time to create it.<br>
Someday, you might need it for other things than setting birthdays on your WoX frontpage box. Or you won't.

Anyways, DM me with you **github tag** so I can send you the invite to join this project and so _you_ can host your site's JSON with the others.<br>
_If you cannot DM on discord, please send me an email at **shaynelock.hall@gmail.com**._

**4.2** — Rename your JSON file

Before doing anything on github, rename your JSON file with the following instructions :<br>
**yourSite-langageIfNeeded-bd.json**

> 🤌 Examples :
> - WoP US -> wop-us-bd.json
> - WoPM -> wopm-bd.json
> - WoO DK -> woo-dk-bd.json

**4.3** — Upload your JSON file

Yeah, it's finally time. Once you've been added, go to : 
[https://github.com/AM-XIX/cessair-automatic-birthdays/tree/main
](https://github.com/AM-XIX/cessair-automatic-birthdays/tree/main) > **src** > Add file > Upload files<br>
<img width="334" alt="Capture d’écran 2023-09-04 à 20 28 58" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/ac74d4c8-0683-449b-b354-dd90c2f0a879">

-> **Commit changes**

## 5️⃣ The code, alas

Last 2 steps.

**5.1** — Add these codes to your frontpage box.

**HTML**
```
<div id="message">
  <h3>Happy Birthday to :</h3>
  <div id="subject"></div>
</div>
```

**JS**
```
/ ==== REQUESTING DATA FROM API ====
// data = JSON with bdays
fetch('https://am-xix.github.io/cessair-automatic-birthdays/src/YOUR_JSON_FILE')
.then(response => {
    return response.json()})
.then(data => {
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
```

Put this script in the **same script tag you're already using**, do not create another <script> just for this.

_Side note : this code is heavily commented to help you out with the process but once you've read this a couple of times, I'd suggest removing these comments as this code is not destined to be shared with anyone else and you would want to make some space in your frontpage box code, haha._

**5.2** — Complete your link in JS

In the begining of the script, when using fetch, replace YOUR_JSON_FILE by the name you gave it.<br>
Let's take the previous examples : 
WoP US -> wop-us-bd.json -> **https://am-xix.github.io/cessair-automatic-birthdays/src/wop-us-bd.json**<br>
Thus : 
```
fetch('https://am-xix.github.io/cessair-automatic-birthdays/src/wop-us-bd.json')
```

### 🎉 Congrats! You've succeeded this tutorial!
.<br>
.<br>
.<br>
Now, check out [Maintenance](/maintenance.md) to discover how to keep your birthdays updated and healthy!
