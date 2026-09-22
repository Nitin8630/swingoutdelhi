# Connecting the RSVP Form to Google Sheets

Follow these quick steps to send registrations from the **Swing Out Delhi** website directly into your private Google Sheet.

---

### Step 1: Create Your Google Sheet
1. Open [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. Name it e.g. **"Swing Out Delhi — RSVPs"**.
3. In row 1, set up the column headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `WhatsApp / Phone`
   - **E1**: `Class / Event`
   - **F1**: `Dance Role`
   - **G1**: `Partner Status`
   - **H1**: `Notes`

---

### Step 2: Add Google Apps Script
1. In the Google Sheets menu, click **Extensions** &rarr; **Apps Script**.
2. Delete any code in the editor and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append the attendee data as a new row
    sheet.appendRow([
      data.timestamp ? new Date(data.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.selectedItem || "",
      data.danceRole || "",
      data.partnerStatus || "",
      data.notes || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the 💾 **Save** icon (or press `Ctrl + S` / `Cmd + S`).

---

### Step 3: Deploy as a Web App
1. At the top right of Apps Script, click **Deploy** &rarr; **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Enter a description, for example: `Swing Out Delhi RSVP Endpoint`.
4. Under **Execute as**, select: **Me (your-email@gmail.com)**.
5. Under **Who has access**, select: **Anyone** *(Important: this allows the website to send submissions without requiring user logins)*.
6. Click **Deploy**.
7. Grant Google permissions if prompted (click *Advanced* &rarr; *Go to Untitled project (unsafe)* &rarr; *Allow*).
8. Copy the **Web App URL** provided (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Paste the URL in `data.js`
Open [`data.js`](file:///c:/Users/Nitin%20Sharma/Downloads/Sod_website8Aug26/Sod_website8Aug26/data.js) and paste your URL into the `rsvp.googleScriptUrl` setting:

```javascript
  rsvp: {
    googleScriptUrl: "https://script.google.com/macros/s/AKfycb.../exec",
    googleFormUrl: "",
  },
```

That's it! Every time someone clicks "Register" or "RSVP" on the site, their name, WhatsApp number, email, dance role, and selected class or event will appear instantly as a new row in your Google Sheet.
