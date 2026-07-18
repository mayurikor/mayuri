# mayuri

College placement website that helps colleges and companies match eligible students for job opportunities automatically.

## Project idea

This project provides a web platform where companies can post job requirements and colleges/admins can upload spreadsheets (Excel) containing student details and eligibility data. The system automatically matches students who meet company requirements and can automatically upload or attach student CVs to company applications — either triggered by students themselves or by an admin with authority.

## Key features

- Companies create job postings with role details and eligibility criteria (e.g., branch, GPA, year, skills).
- Admins or students upload student data via Excel (.xlsx/.csv) containing fields such as name, email, branch, CGPA, year, skills, and CV filename or link.
- Automatic eligibility matching: server-side logic filters students who satisfy a company's requirements.
- CV handling: students can upload CV files; admins with authority can upload CVs on behalf of students when needed.
- Bulk operations: admins can bulk-send eligible students' CVs to company application queues.
- Dashboard for companies to review matched candidates and for admins to track placements.
- Audit logs and permissions so only authorized admins can act on students' behalf.

## How it works (high level)

1. Company submits job requirements via a form (role, required branches, min CGPA, skills, graduating year, etc.).
2. Admin uploads an Excel sheet (or CSV) of students with necessary fields. The server parses the sheet and imports students into the database (or updates existing records).
3. Matching engine evaluates imported students against active job requirements and builds a list of eligible candidates.
4. For each eligible candidate, the system can either:
   - Notify the student to apply (email/portal notification), or
   - Automatically attach the student's CV to the company's applicant list if admin-authorized.
5. Companies review candidates in their dashboard and contact them through the platform or external contact details.

## Suggested data fields for student Excel

- student_id (optional)
- name
- email
- phone
- branch
- cgpa
- year_of_graduation
- skills (comma-separated)
- cv_filename or cv_url

## Security & privacy

- CVs and personal data must be stored securely (use access controls and encryption at rest where possible).
- Only authorized admins should be able to upload CVs on behalf of students.
- Students should be notified when their CV is shared with a company and given a way to opt out.

## Tech stack (suggested)

- Backend: Node.js/Express or Django/Flask
- Database: PostgreSQL or MySQL
- File storage: AWS S3 or other secure object store
- Frontend: React / Vue / plain server-rendered templates
- Excel parsing: SheetJS (xlsx) or backend library (python: openpyxl/pandas)

## Development setup (example)

1. Clone the repo
2. Install dependencies (e.g., npm install or pip install -r requirements.txt)
3. Configure environment variables for DB and storage
4. Run migrations
5. Start the dev server

## Next steps I can help with

- Create a README section with specific setup commands for your chosen stack.
- Add example Excel import code (backend script) that parses rows and validates fields.
- Implement the matching algorithm and automated CV submission flow.
- Add UI mockups or API endpoints for companies, students, and admins.

If you want, I can update the README further with exact setup steps for a specific stack (Node/Express + PostgreSQL, or Django), or create the Excel import script now. Which would you prefer?