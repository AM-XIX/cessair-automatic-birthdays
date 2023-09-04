# cessair-automatic-birthdays
_C.A.B_

### Introduction

Here's a guide through setting up your **automatic birthday wishes** on your frontpage box thanks a **google form**.<br>
_The boxes with icons 💡 are simple technical explanations to read only if you want to learn things along the way. If you're just here for the magic, skip those._

## 1️⃣ Setting up your form

You want your users that wish their birthday to appear on the frontpage to fill a **google form** you've prepared.
2 questions only :
- Your name
- Your birthday (Month + day)

❗️ The format given for the date is extremely important.<br>
For now, the script works with dates like September 2, October 30, etc.<br>
_(don't worry, non-english speaking sites, you'll get to change the month names right below)_

_You can easily change the date format by yourself if you know JS.<br>
If you want me to create another date format for you, feel free to slide in my DMs._

## 2️⃣ Setting up your sheet

**2.1** — Create a response sheet document where your form answers will land automatically.

**2.2** — Rename you question cells like the following :<br>
**Name Date**<br>
(Case sensitive)

Your sheet should look like this :<br>
<img width="458" alt="Sheet screenshot with to columns : name and date" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/ff652f93-f71c-4936-a702-bb2326efc0fc">

## 3️⃣ Exporting to JSON

> 💡 JSON is a data format that JavaScript can use as an object, meaning JS can manipulate it directly in its code. We will transform our google sheet data to a JSON file in order to read the birthdays, displaying them, know what date belongs to what name, etc, all through JS.

**3.1** — Download the [Export Sheet Data](https://workspace.google.com/marketplace/app/export_sheet_data/903838927001) google extension.

**3.2** — Create another sheet
On the same google sheet document, add a sheet and copy paste the form sheet in there.<br>
This might seem very dumb but this is in order to remove unwanted meta data from our future JSON file.

> 💡 Metadata is invisible data that any element can hold. It's data... about other data. For example, a picture has medata stating it's date, the device used, it's localization sometimes, etc. Form responses in gsheet hold metadata stating the response date and this pollutes the data that we really want, aka the birthday date and name.

**3.3** — Open Sidebar<br>
Go to Extension > Export sheet data > Open sidebar<br>
<img width="651" alt="Capture d’écran 2023-09-04 à 17 28 28" src="https://github.com/AM-XIX/cessair-automatic-birthdays/assets/79641014/1e0153f0-6ac3-47b3-ae40-cfe1a46fcce4">

**3.4** — Set the right settings<br>
Make sure every checkbox is unchecked EXCEPT FOR :
**Ignore empty cells** (section : General)
**
