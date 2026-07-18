const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const upload = multer({ dest: 'tmp/' });

app.use(express.json());

// Health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Excel import endpoint (admin)
app.post('/api/import', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet, { defval: '' });
    // Basic validation example: ensure name and email exist
    const invalid = rows.filter(r => !r.name || !r.email);
    if (invalid.length) {
      return res.status(400).json({ error: 'Some rows are missing required fields (name, email)', count: invalid.length });
    }
    // TODO: insert into DB, upload CVs, run matching
    // For now just return parsed rows count
    return res.json({ imported: rows.length, sample: rows.slice(0, 5) });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to parse file' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
