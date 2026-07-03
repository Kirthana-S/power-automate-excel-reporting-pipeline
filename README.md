# Power Automate Excel Reporting Pipeline

## Overview

This project demonstrates an end-to-end reporting automation pipeline using Microsoft Power Automate, Outlook, SharePoint, Excel Office Scripts, and Power BI.

The automation receives a weekly Excel report by email, saves it to SharePoint, processes the workbook using Office Scripts, creates a sendable report format, stores the final output in an Output folder, and optionally refreshes a Power BI dataset.

> Note: This is a sanitized portfolio project. All company names, file paths, email addresses, report names, and mapping rules have been anonymized.

---

## Business Problem

A recurring weekly report was previously processed manually:

1. Download Excel attachment from Outlook.
2. Open the workbook.
3. Run Excel macros.
4. Create a sendable report format.
5. Save final file with date.
6. Email the report to team members.
7. Refresh related dashboard/reporting assets.

This process was repetitive, time-consuming, and dependent on manual execution.

---

## Solution

The solution replaces manual Excel macro execution with a cloud-based automation pipeline:

```text
Outlook Email
    ↓
Power Automate Cloud Flow
    ↓
Save Attachment to SharePoint Input Folder
    ↓
Run Office Script 1 - Process Raw Report
    ↓
Run Office Script 2 - Create Sendable Format
    ↓
Save Final File to SharePoint Output Folder
    ↓
Send Email Notification
    ↓
Optional Power BI Dataset Refresh


## Key Skills Demonstrated

- Workflow Automation
- Microsoft Power Automate
- Office Scripts
- SharePoint Integration
- Excel Automation
- Business Process Improvement
- Process Optimization
- Enterprise Reporting
- Microsoft 365
