The first Office Script processes the weekly incident backlog Excel file. It prepares the raw data, classifies incidents as Manual or Automated, maps 
each incident to an application using assignment group and keyword-based business rules, masks restricted information for non-global files, calculates
incident age, assigns aging intervals, creates a cleaned Final sheet, removes unmapped records, sorts the output, and generates an application-level summary sheet.
Power Automate handles the file movement, renaming, saving, and email distribution steps.


High-Level Flow

Start
  ↓
Receive Excel file from Power Automate
  ↓
Read input parameters: instance and fileType
  ↓
Prepare workbook and rename raw sheet as Original
  ↓
Delete old Final and Pivot sheets if present
  ↓
Format raw data and apply filters
  ↓
Add Incident Type column
  ↓
Classify each incident as Manual or Automated
  ↓
Mask restricted fields for non-global manual records
  ↓
Add Mapped Application and Reason Mapping columns
  ↓
Apply assignment group and keyword-based mapping rules
  ↓
Mask sensitive description fields for non-global files
  ↓
Add Age and Interval columns
  ↓
Calculate incident age from opened date
  ↓
Categorize each incident into aging bucket
  ↓
Copy Original sheet to create Final sheet
  ↓
Remove unmapped records from Final sheet
  ↓
Sort Final sheet by incident number and opened date
  ↓
Create Pivot summary by mapped application
  ↓
Return processing status to Power Automate
End
