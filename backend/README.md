# Backend README

This is a minimal Express backend for the Mayuri placement app.

Quick start:

1. cd backend
2. npm install
3. cp .env.example .env and edit
4. npm start

Endpoints:
- GET /api/health
- POST /api/import (multipart form-data with file field named "file")
