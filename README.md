# cessair-automatic-birthdays
_C.A.B_

### Introduction

Here's a guide through setting up your **automatic birthday wishes** on your frontpage box thanks a **google form**.<br>
_The boxes with icons 💡 are very simple technical explanations to read only if you want to learn things along the way. If you're just here for the magic or you already know all that, skip those._

## 1️⃣ Setting up your form

You want your users that wish their birthday to appear on the frontpage to fill a **google form** you've prepared.
2 questions only :
- Your name
- Your birthday (Month + day)

❗️❗️ The format given for the date is **extremely important**.<br>
For now, the script works with dates like September 2, October 30, etc.<br>
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

> 💡 JSON is a data format that JavaScript can use as an object, meaning JS can manipulate it directly in its code. We will transform our google sheet data to a JSON file in order to read the birthdays, displaying them, know what date belongs to what name, etc, all through JS.

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

No other boxes should be checked than those. If there are, please uncheck them!<br>
<img width="227" alt="Capture d’écran 2023-09-04 à 19 22 46" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/d16095d3-71d3-4893-98a6-37d83781b4b7">
<img width="229" alt="Capture d’écran 2023-09-04 à 19 27 17" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/a4a7d82c-88ce-4ea2-af93-c347285932f8"><br>
<img width="230" alt="Capture d’écran 2023-09-04 à 19 25 08" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/15a96450-d659-4159-ba75-317d4e3faf7f">

**3.5** — Export file

Good news : those settings are registered so you won't to do that step again.
Bad news : now's time for export and code. Let's go. 🎶

Click on **Vizualize**. If you've got a result similar to the screenshot below, click on **Export** > **Download**.<br>
<img width="503" alt="Capture d’écran 2023-09-04 à 19 58 18" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/bd35a49f-6ff5-4386-9d48-a4c32de379d5">

## 4️⃣ Hosting JSON here

> 💡 Hosting a file is like giving it a nice appartment address on the internet so you can find it when you need it. For now, your holy JSON birthday file is solely on your computer. We need your WoX to be able to find it online. Github will allow us to do that, as Github Pages is a free hosting service.

This very github repository is deployed under the adress [https://am-xix.github.io/cessair-automatic-birthdays/](https://am-xix.github.io/cessair-automatic-birthdays/). What's after the last / ? Well, that's gonna be **your JSON file**.

**4.1** — Create & share Github account

If you don't have a github account yet, it's time to create it.<br>
Someday, you might need it for other things than setting birthdays on your WoX frontpage box. Or you won't.

Anyways, DM me with you github tag so I can add you on this project and so you can host your site's JSON with the others.
_If you cannot DM on discord, please send me an email at **shaynelock.hall@gmail.com**._

In any case, when I'll add you, you'll recieve an invitation to join the project via email. Accepting the invite will allow you join the project.
