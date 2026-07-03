# 📊 Weekly Incident Backlog Reporting Automation using Microsoft Power Automate

Automated the end-to-end weekly incident backlog reporting process using Microsoft Power Automate, Office Scripts, SharePoint, and Outlook. The solution eliminates repetitive manual reporting tasks by automatically processing incoming reports, generating formatted outputs, and distributing summary emails to leadership.

> **Note:** This repository is a sanitized portfolio version of an enterprise automation solution. All company-specific information, email addresses, file names, SharePoint locations, and business logic have been replaced with sample content.

---

# 🚀 Project Overview

Business teams required a weekly incident backlog report to monitor aging incidents and share key metrics with leadership.

Previously, the reporting process involved manually:

- Downloading the weekly backlog report
- Saving the report to SharePoint
- Running multiple Excel macros
- Generating the final publish report
- Counting aging incidents
- Preparing summary emails
- Attaching reports
- Sending updates to leadership

This automation streamlines the complete workflow using Microsoft Power Automate and Office Scripts.

---

# 🎯 Business Problem

The existing reporting process was:

- Time-consuming
- Repetitive
- Prone to manual errors
- Dependent on human intervention every week

The objective was to create an automated workflow that would reliably process the weekly report and notify stakeholders without manual effort.

---

# 💡 Solution

The Power Automate flow performs the following tasks automatically:

1. Trigger when the weekly backlog report email is received.
2. Download the report attachment.
3. Store the report in a SharePoint document library.
4. Execute the first Office Script to process the raw data.
5. Execute the second Office Script to generate the publish-ready report.
6. Store the processed report in SharePoint.
7. Retrieve the generated report.
8. Generate a summary of aging incidents.
9. Send an automated email to leadership with the processed report attached.

---

# 🔄 Workflow

```
Incoming Weekly Report Email
            │
            ▼
Download Attachment
            │
            ▼
Store in SharePoint
            │
            ▼
Run Office Script #1
(Process Raw Report)
            │
            ▼
Run Office Script #2
(Generate Publish Report)
            │
            ▼
Store Final Report
            │
            ▼
Generate Incident Summary
            │
            ▼
Email Leadership Team
```

---

# 🛠️ Technologies Used

- Microsoft Power Automate
- Microsoft Office Scripts
- Microsoft Excel Online
- Microsoft SharePoint Online
- Microsoft Outlook
- Microsoft 365

---

# 📁 Repository Structure

```
power-automate-weekly-reporting/

│
├── README.md
├── LICENSE
├── .gitignore
│
├── docs/
│   ├── BusinessProblem.md
│   └── Architecture.md
│
├── images/
│   ├── flow.png
│   ├── architecture.png
│   └── email-sample.png
│
├── office-scripts/
│   ├── Weekly_Backlog_Script_Sample.ts
│   └── Publish_Report_Script_Sample.ts
│
├── sample-data/
│   ├── Sample_Input.xlsx
│   └── Sample_Output.xlsx
│
└── screenshots/
```

---

# 📷 Workflow Screenshot

> Add a sanitized screenshot of the Power Automate flow here.

Example:

```
images/flow.png
```

---

# 📈 Business Impact

The automation delivered several operational improvements:

- Reduced repetitive manual reporting effort
- Standardized the weekly reporting process
- Improved report consistency
- Reduced the risk of manual errors
- Automated report distribution to leadership
- Centralized report storage in SharePoint

---

# 🔒 Security & Privacy

To protect organizational confidentiality, this repository contains:

- Sample Office Scripts
- Sample Excel files
- Generic workflow screenshots
- Sanitized documentation

The following have been intentionally removed:

- Company names
- Email addresses
- SharePoint URLs
- Internal report names
- Folder structures
- Business rules
- Production Office Scripts

---

# 🚀 Future Enhancements

Potential improvements include:

- Microsoft Teams notifications
- Power BI dashboard integration
- AI-generated executive summaries
- Exception handling and retry logic
- Configurable reporting schedules
- Enhanced monitoring and logging

---



# 📚 Learning Outcomes

This project demonstrates experience with:

- Business Process Automation
- Workflow Design
- Microsoft Power Platform
- Office Scripts
- SharePoint Integration
- Enterprise Reporting Automation
- Process Optimization

---

# 📄 Disclaimer

This repository is intended for educational and portfolio purposes only.

The original enterprise solution contained confidential business information and proprietary logic. All such information has been removed or replaced with sample content before publication.
