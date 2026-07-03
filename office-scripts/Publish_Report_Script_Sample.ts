This Office Script converts the processed incident backlog workbook into a clean, business-friendly format ready for distribution. 
It takes the Final sheet created by the previous script, removes unnecessary internal processing columns, applies formatting, renames sheets and headers,
creates reporting pivot tables, and prepares the workbook for email distribution. Power Automate then handles file naming, storage, and email delivery.


High-Level Flow

Receive Processed Workbook
    ↓
Validate Final Sheet Exists
    ↓
Remove Existing Data and Pivot Sheets
    ↓
Rename Final Sheet to Data
    ↓
Delete Internal Processing Columns
    ↓
Rename Report Headers
    ↓
Remove Original Sheet
    ↓
Apply Formatting and Column Widths
    ↓
Create Pivot Table 1
(Application vs Incident Count)
    ↓
Create Pivot Table 2
(Age Interval vs Application vs Incident Count)
    ↓
Auto-fit and Format Pivot Sheet
    ↓
Set Data Sheet as Main Report
    ↓
Return Completion Status
