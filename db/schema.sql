-- Schema for Mayuri placement app

CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  student_id TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  branch TEXT,
  cgpa NUMERIC(4,2),
  year_of_graduation INT,
  skills TEXT,
  cv_url TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS companies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  contact_email TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  company_id INT REFERENCES companies(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  min_cgpa NUMERIC(4,2),
  branches TEXT, -- comma-separated allowed branches
  year_of_graduation INT,
  skills TEXT,
  created_at TIMESTAMP DEFAULT now()
);
