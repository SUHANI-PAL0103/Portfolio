# Suhani Pal - Portfolio Website

A dynamic portfolio website showcasing education, experience, projects, weekly progress, and assignments.

## Features

- **Dynamic Content**: Weekly Progress and Assignments load from JSON files
- **Easy Updates**: Simply edit JSON files to update your progress and assignments
- **Responsive Design**: Works on all devices
- **Modern UI**: Clean and professional design

## How to Update Your Portfolio

### Weekly Progress
Edit `data/progress.json` to add new weeks:

```json
{
  "week": 4,
  "title": "Week 4 - New Topic",
  "date": "Jan 27 - Feb 2, 2025",
  "description": "What you worked on this week",
  "tasks": [
    "Task 1",
    "Task 2",
    "Task 3"
  ]
}
```

### Assignments
Edit `data/assignments.json` to add or update assignments:

```json
{
  "id": 4,
  "title": "Assignment 4 - Title",
  "description": "Assignment description",
  "dueDate": "Feb 5, 2025",
  "status": "pending",
  "submittedDate": null,
  "grade": null
}
```

**Status options**: `completed`, `in-progress`, `pending`

## Deployment Instructions

### 1. Push to GitHub

```bash
cd "C:\Users\Suhani Pal\OneDrive\Desktop\portfilio"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SUHANI-PAL0103/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy"

### 3. Update Your Portfolio (After Deployment)

1. Edit JSON files locally:
   - `data/progress.json` - Add new weekly progress
   - `data/assignments.json` - Update assignments

2. Push to GitHub:
```bash
git add data/
git commit -m "Update weekly progress and assignments"
git push
```

3. Vercel will automatically redeploy!

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript for dynamic content
│
├── data/
│   ├── progress.json   # Weekly progress data
│   └── assignments.json # Assignment data
│
└── README.md           # This file
```

## Local Development

Simply open `index.html` in your browser to view the portfolio locally.

## Support

For issues or questions, contact: suhanipal441@gmail.com

---
© 2025 Suhani Pal
