# PTPH Job Application Email Automation — Handover Guide

## 1. Purpose of this guide

This guide explains how the next intern or authorised PTPH staff member can activate and manage the Google Forms–Google Sheets–Apps Script automation using a **Permata Hikmah Google account**.

The automation is used for:

1. Receiving job and industrial-training applications through Google Forms.
2. Creating an application ID automatically.
3. Setting a new application to `Pending`.
4. Sending a submission-confirmation email to the applicant.
5. Sending an accepted or rejected result email when staff change the application status.

---

## 2. Current handover status

At the time of handover:

- The Google Form is linked to the Google Sheet.
- The Apps Script code is still stored in the spreadsheet's Apps Script project.
- The previous intern's personal triggers have been deleted.
- Therefore, the code will **not run automatically** until new triggers are created.
- A PTPH-controlled Google account should create the new triggers.
- The system does not need to be deployed as a web app for these two triggers.

This was done intentionally so that future automated emails are not sent from the previous intern's personal email account.

---

## 3. Important account rule

Installable Apps Script triggers run using the Google account that created the trigger.

For example:

- If the previous intern creates the trigger, emails are sent through the previous intern's account.
- If a PTPH account creates the trigger, emails are sent through the PTPH account.
- It does not matter which editor changes the application status in the spreadsheet; the trigger owner's account remains the account used by the automation.

For long-term ownership, use a dedicated account controlled by PTPH, for example:

```text
permatahikmah.career@gmail.com
```

The exact address may differ. Avoid using another intern's personal account.

---

## 4. Files and components

The system contains the following components:

| Component | Purpose |
|---|---|
| PTPH website | Directs applicants to the application form |
| Google Form | Collects applicant information |
| Google Sheet | Stores responses and staff-managed application statuses |
| Apps Script | Generates IDs and sends automated emails |
| Google Drive logo | Used as an inline image in the formatted emails |

---

## 5. Required spreadsheet columns

The response sheet should contain the original Google Form response columns and these management columns at the far right:

```text
Application ID
Application Status
Result Email Sent
Submission Email Sent
Decision Date
```

Recommended status dropdown values:

```text
Pending
Accepted
Rejected
```

Expected values after a successful new submission:

| Column | Expected value |
|---|---|
| Application ID | Example: `PTPH-2026-0007` |
| Application Status | `Pending` |
| Result Email Sent | `No` |
| Submission Email Sent | `Yes` |
| Decision Date | Empty until a final result is sent |

Do not insert the management columns between the original Google Form response columns. Keep them after the final form-response column.

---

## 6. Before activating the automation

The next intern or staff member should obtain:

- Access to the PTPH Google account.
- Editor access to the Google Sheet.
- Access to the linked Google Form.
- Access to the PTPH logo file in Google Drive.
- The official PTPH contact details to display in the email footer.

The PTPH account should use:

- A strong, unique password.
- Two-step verification.
- A recovery phone number and recovery email controlled by PTPH.
- Restricted access limited to authorised staff.

Do not place the account password inside the code, spreadsheet, documentation, or GitHub repository.

---

# Part A — Activate the Apps Script using the PTPH account

## 7. Sign in with the correct account

1. Sign out of personal Google accounts when necessary.
2. Sign in using the PTPH Google account.
3. Open the shared PTPH application-response spreadsheet.
4. Confirm that the account has **Editor** access.

The account creating the triggers must be the account intended to send the emails.

---

## 8. Open the existing Apps Script project

From the application-response spreadsheet:

1. Select **Extensions**.
2. Select **Apps Script**.
3. Confirm that the existing code is visible in `Code.gs`.
4. Do not delete the existing code.
5. Click **Save** if the editor shows `Unsaved changes`.

There is no need to click **Deploy** for the spreadsheet triggers.

---

## 9. Check the organisation settings in the code

Near the top of the script, check settings similar to:

```javascript
const PTPH_LOGO_FILE_ID = "GOOGLE_DRIVE_FILE_ID";
const PTPH_PHONE = "PTPH_PHONE_NUMBER";
const PTPH_EMAIL = "PTPH_EMAIL_ADDRESS";
const PTPH_WEBSITE = "PTPH_WEBSITE_ADDRESS";
```

Update them using the official information supplied by PTPH.

### How to obtain the logo file ID

1. Upload the official logo to the PTPH Google Drive.
2. Open or share the image.
3. Copy the file ID from the Google Drive link.
4. Paste only the file ID into `PTPH_LOGO_FILE_ID`.

The PTPH Google account must have permission to access the logo file.

---

## 10. Verify the required function names

The project should contain these main functions:

```javascript
handleFormSubmit
sendApplicationResult
```

It may also contain helper functions such as:

```javascript
authorizeScript
sendSubmissionConfirmationEmail
getHeaders
findColumn
getFirstNonEmptyValue
isValidEmail
escapeHtml
```

There must not be two functions or two `const` declarations with the same name inside the same scope.

Before continuing:

1. Press **Ctrl + F**.
2. Search for `function handleFormSubmit`.
3. Confirm that it appears only once.
4. Search for `function sendApplicationResult`.
5. Confirm that it appears only once.
6. Click **Save** and resolve any red syntax errors before creating triggers.

---

## 11. Authorise the PTPH account

The PTPH account must approve access to Google Sheets, Gmail/Mail, and Google Drive.

1. In Apps Script, select `authorizeScript` from the function dropdown.
2. Click **Run**.
3. Select the PTPH Google account.
4. Review the requested permissions.
5. Click **Allow**.
6. Open **Executions** and confirm that `authorizeScript` shows `Completed`.

If the project uses a separate function named `authorizeEmailAssets`, run it as well when required.

Do not manually run `handleFormSubmit` or `sendApplicationResult`. Those functions require an event generated by an actual form submission or spreadsheet edit.

When new code later introduces an additional Google service, manual authorisation may be required again.

---

# Part B — Create the two required triggers

## 12. Open the Triggers page

1. In Apps Script, select the **clock icon** labelled **Triggers**.
2. Select **Add Trigger**.

The PTPH account must create both triggers.

---

## 13. Trigger 1 — New application submission

Create the first trigger using these exact settings:

| Setting | Value |
|---|---|
| Function to run | `handleFormSubmit` |
| Deployment | `Head` |
| Event source | `From spreadsheet` |
| Event type | `On form submit` |

Click **Save**.

### What this trigger does

When a new response reaches the Google Sheet, it should:

- Generate the application ID.
- Set the status to `Pending`.
- Set `Result Email Sent` to `No`.
- Send the submission-confirmation email.
- Set `Submission Email Sent` to `Yes`.

Use **From spreadsheet**, not **From form**, because the current function reads the spreadsheet event range.

---

## 14. Trigger 2 — Application result

Create the second trigger using these exact settings:

| Setting | Value |
|---|---|
| Function to run | `sendApplicationResult` |
| Deployment | `Head` |
| Event source | `From spreadsheet` |
| Event type | `On edit` |

Click **Save**.

### What this trigger does

When authorised staff change `Application Status`:

- `Pending` — no result email is sent.
- `Accepted` — an accepted result email is sent.
- `Rejected` — a rejected result email is sent.

After a successful result email:

- `Result Email Sent` becomes `Yes`.
- `Decision Date` is filled automatically.

---

## 15. Confirm the trigger owner

The trigger list shown while signed in to the PTPH account should contain:

```text
handleFormSubmit — From spreadsheet — On form submit
sendApplicationResult — From spreadsheet — On edit
```

The account that creates these triggers becomes the automation account.

Avoid creating duplicate triggers under multiple accounts. Duplicate triggers can cause duplicate emails or conflicting spreadsheet updates.

---

# Part C — Test the complete workflow

## 16. Test a new submission

Use a test email address controlled by the team.

1. Open the public Google Form.
2. Submit one complete test application.
3. Wait several seconds.
4. Open the response spreadsheet.
5. Check the new row.

Expected values:

```text
Application ID: generated automatically
Application Status: Pending
Result Email Sent: No
Submission Email Sent: Yes
Decision Date: blank
```

Then check the test email inbox and Spam/Junk folders.

The applicant should receive a Malay submission-confirmation email containing:

- Applicant name.
- Application ID.
- Application status.
- Application type.
- Job field or role.
- PTPH footer and logo, when configured.

---

## 17. Test an accepted result

Using only the test row:

1. Confirm `Result Email Sent` is `No`.
2. Change `Application Status` from `Pending` to `Accepted`.
3. Wait several seconds.
4. Check the test inbox.
5. Confirm `Result Email Sent` changes to `Yes`.
6. Confirm `Decision Date` is filled.

Do not repeatedly change real applicants' statuses for testing.

---

## 18. Test a rejected result

Submit another test application or reset a dedicated test row carefully.

1. Keep `Result Email Sent` as `No`.
2. Change the status from `Pending` to `Rejected`.
3. Confirm that the rejected email is received.
4. Confirm that the result tracking fields are updated.

Never reuse a real applicant's row for testing.

---

# Part D — Daily use for PTPH staff

## 19. Reviewing applications

PTPH staff should:

1. Open the response spreadsheet.
2. Review the applicant's information and submitted documents.
3. Leave the status as `Pending` while reviewing.
4. Select `Accepted` or `Rejected` only when the decision is final.
5. Check `Result Email Sent` to confirm that the decision notification was sent.
6. Check `Decision Date` for the sending date and time.

The system is designed so that changing the status sends the email immediately.

---

## 20. Preventing duplicate emails

The tracking columns help prevent the same email from being sent more than once.

Do not manually change:

```text
Submission Email Sent: Yes
Result Email Sent: Yes
```

back to `No` unless an authorised person is deliberately resending a test email.

Before resending a real applicant's email:

1. Confirm the reason for resending.
2. Verify the applicant's email address.
3. Record the action separately.
4. Avoid repeatedly changing the status between `Accepted` and `Rejected`.

---

## 21. Email sender and reply address

The email is sent using the Google account that owns the installable trigger.

The code may include:

```javascript
name: "Permata Hikmah Education Group"
```

This changes the displayed sender name but does not replace the actual sending Google account.

The code may also include:

```javascript
replyTo: PTPH_EMAIL
```

This controls where replies are directed, but the sending account remains the trigger owner's account.

For this reason, the PTPH account—not an intern's personal account—should own the triggers.

---

# Part E — Reducing Spam/Junk placement

## 22. Recommended practices

No sender can guarantee that every email avoids Spam or Junk. The following steps reduce the risk:

- Send from one consistent PTPH-controlled address.
- Use a recognisable sender name.
- Mention the sending address in the Google Form confirmation message.
- Ask applicants to check Spam/Junk and add the sender to their contacts.
- Keep messages directly related to the applicant's submission.
- Include the applicant's name and application ID.
- Include PTPH's official contact details.
- Avoid excessive capital letters in the email body.
- Avoid unrelated advertising, shortened links, and unnecessary attachments.
- Do not send repeated test messages to real applicants.
- Monitor replies and incorrect-address failures.
- Use the account responsibly because Google Apps Script email services have sending quotas.

Suggested Google Form confirmation message:

> Terima kasih kerana memohon untuk menyertai Permata Hikmah Education Group. Permohonan anda telah berjaya dihantar dan direkodkan. Emel pengesahan yang mengandungi ID serta maklumat permohonan akan dihantar ke alamat emel yang diberikan. Sila semak peti masuk anda dan folder Spam atau Junk sekiranya emel tidak diterima.

---

# Part F — Pausing or transferring the automation

## 23. Temporarily stop all automated emails

To stop the automation without deleting the code:

1. Open **Apps Script**.
2. Open **Triggers**.
3. Delete or disable:
   - `handleFormSubmit`
   - `sendApplicationResult`

The form and spreadsheet will continue receiving responses, but:

- IDs will not be generated automatically.
- New rows will not be set to `Pending`.
- Submission emails will not be sent.
- Result emails will not be sent.

Deleting triggers does not delete the Apps Script code.

---

## 24. Transfer ownership to another account

When moving the automation to a new PTPH-controlled account:

1. Delete triggers owned by the old automation account.
2. Give the new account Editor access to the spreadsheet.
3. Sign in using the new account.
4. Open the spreadsheet's Apps Script project.
5. Run `authorizeScript`.
6. Approve all permissions.
7. Recreate both triggers under the new account.
8. Submit a new test application.
9. Confirm the sender address and workflow.

Do not leave active triggers under both the old and new accounts.

---

# Part G — Troubleshooting

## 25. New application remains blank

Symptoms:

- `Application ID` is empty.
- `Application Status` is empty.
- `Submission Email Sent` is empty.

Check:

1. Apps Script → **Executions**.
2. Open the newest `handleFormSubmit` execution.
3. Read the exact error.
4. Confirm the trigger is:
   - From spreadsheet
   - On form submit
5. Confirm the script has been saved.
6. Confirm the PTPH account authorised the required permissions.
7. Confirm the required spreadsheet headings still exist.

Old failed submissions will not repair themselves automatically. Correct the row manually or create a controlled retry process.

---

## 26. Syntax error

Example:

```text
Identifier 'emailSentColumn' has already been declared
```

This means the same `const` variable was declared more than once inside one function.

Fix by:

1. Finding both declarations.
2. Keeping only one.
3. Using clear names such as:
   - `resultEmailSentColumn`
   - `submissionEmailSentColumn`
4. Saving the script.
5. Confirming there is no red error before testing again.

A syntax error can stop all functions in the script project.

---

## 27. Permission error

Example:

```text
You do not have permission to call SpreadsheetApp...
```

Fix:

1. Select `authorizeScript`.
2. Click **Run**.
3. Use the same account that created the triggers.
4. Approve all requested permissions.
5. Create a new test submission.

Refreshing an old failed execution will not change it. Executions are historical records.

---

## 28. Submission email not received

Check:

- `Submission Email Sent`.
- Apps Script **Executions**.
- Applicant email spelling.
- Spam/Junk folder.
- Whether the PTPH account reached a sending quota.
- Whether the logo file can be accessed.
- Whether `sendSubmissionConfirmationEmail` exists.
- Whether `isValidEmail`, `escapeHtml`, and other helper functions exist.

If the row says `Failed`, open the execution log before changing the data.

---

## 29. Result email not sent

Check:

- The status is exactly `Accepted` or `Rejected`.
- The status was changed in the correct status column.
- `Result Email Sent` was `No`.
- The `sendApplicationResult` On edit trigger exists.
- The applicant has a valid email address.
- The latest execution log.

Changing the status through a formula or another script may not behave the same way as a direct authorised staff edit. Use the spreadsheet dropdown for normal operation.

---

## 30. Duplicate emails

Possible causes:

- Duplicate triggers exist under one account.
- Another editor created separate triggers under another account.
- Tracking fields were manually reset.
- The status was repeatedly changed.
- Duplicate code or functions exist.

Check the Triggers page while signed in to each account that may have configured the project.

---

## 31. Logo does not appear

Check:

- The logo file ID is correct.
- The PTPH account can open the Drive file.
- The file is a supported image such as PNG or JPG.
- The script has Google Drive permission.
- The inline image key in `inlineImages` matches the `cid:` used in the HTML.

Do not use a private logo file owned only by the previous intern.

---

# Part H — Security and privacy

## 32. Applicant data

The spreadsheet may contain:

- Full names.
- Email addresses.
- Phone numbers.
- Identification details.
- Job preferences.
- Uploaded documents.

PTPH should:

- Share the sheet only with authorised personnel.
- Review Editor access regularly.
- Avoid publishing the sheet to the web.
- Avoid sending spreadsheet screenshots containing applicant data.
- Remove former interns' access after handover.
- Follow the organisation's retention and deletion policy.
- Avoid using identification numbers as a public status-check credential by themselves.

---

## 33. Safe change procedure

Before editing the production script:

1. Copy the current code into a dated backup file.
2. Test changes using test submissions only.
3. Keep the spreadsheet headings unchanged unless the script is updated too.
4. Save the code and resolve syntax errors.
5. Re-authorise the account when new services are added.
6. Check Apps Script Executions after testing.
7. Document every production change.

---

# Part I — Final handover checklist

The next intern or responsible staff member should confirm:

- [ ] A PTPH-controlled Google account is being used.
- [ ] Two-step verification is enabled.
- [ ] The PTPH account has Editor access to the Sheet.
- [ ] The Apps Script code is present and saved.
- [ ] Organisation email settings and footer details are correct.
- [ ] The logo file is stored in PTPH Google Drive.
- [ ] `authorizeScript` completed successfully.
- [ ] `handleFormSubmit` trigger was created.
- [ ] `sendApplicationResult` trigger was created.
- [ ] There are no duplicate triggers.
- [ ] A new test submission generated an application ID.
- [ ] The submission-confirmation email was received.
- [ ] Accepted and rejected result emails were tested.
- [ ] Emails show the correct sender account.
- [ ] Real applicant data was not used for testing.
- [ ] The previous intern's access and triggers were removed when no longer required.

---

## 34. Official references

- [Google Apps Script — Installable Triggers](https://developers.google.com/apps-script/guides/triggers/installable)
- [Google Apps Script — Authorisation for Google Services](https://developers.google.com/apps-script/guides/services/authorization)
- [Google Apps Script — Event Objects](https://developers.google.com/apps-script/guides/triggers/events)
- [Google Apps Script — MailApp](https://developers.google.com/apps-script/reference/mail/mail-app)
- [Google Apps Script — Troubleshooting](https://developers.google.com/apps-script/guides/support/troubleshooting)

---

## 35. Handover note from the previous intern

The previous intern deleted the triggers created under their personal Google account but intentionally left the Apps Script code in the project.

The next intern must **not rewrite the whole system simply because it is inactive**. The normal handover action is:

1. Review the existing code.
2. Configure the PTPH account and organisation details.
3. Authorise the PTPH account.
4. Create the two installable triggers.
5. Test the workflow safely.
