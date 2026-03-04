---
title: "Technical Tutorial: Building a Document Sharing App with DoQshare API and Node.js"
excerpt: "Learn how to build a complete document sharing application using DoQshare API and Node.js. Step-by-step tutorial with code examples."
author: "James Wilson"
date: "January 3, 2025"
category: "Technology"
readTime: "12 min read"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
tags:
  - Tutorial
  - API
  - Node.js
  - Development
featured: false
---

# Technical Tutorial: Building a Document Sharing App with DoQshare API and Node.js

In this tutorial, we'll build a complete document sharing application using the DoQshare API and Node.js. You'll learn how to upload documents, create shareable links, track analytics, and set up webhooks.

## Prerequisites

- Node.js 18+ installed
- Basic knowledge of JavaScript/Node.js
- A DoQshare API key (get one at [dashboard.doqshare.com](https://dashboard.doqshare.com))
- npm or yarn package manager

## Project Setup

### 1. Initialize the Project

```bash
mkdir doqshare-app
cd doqshare-app
npm init -y
```

### 2. Install Dependencies

```bash
npm install express multer axios dotenv
npm install --save-dev nodemon
```

### 3. Project Structure

```
doqshare-app/
├── src/
│   ├── config/
│   │   └── doqshare.js
│   ├── controllers/
│   │   ├── documentController.js
│   │   └── analyticsController.js
│   ├── routes/
│   │   └── index.js
│   ├── middleware/
│   │   └── upload.js
│   └── server.js
├── uploads/
├── .env
├── .gitignore
└── package.json
```

## Configuration

### 1. Create `.env` File

```env
DOQSHARE_API_KEY=your_api_key_here
DOQSHARE_API_URL=https://api.doqshare.com/v1
PORT=3000
```

### 2. Create DoQshare Client

`src/config/doqshare.js`:

```javascript
const axios = require('axios');
require('dotenv').config();

class DoQshareClient {
  constructor() {
    this.apiKey = process.env.DOQSHARE_API_KEY;
    this.baseURL = process.env.DOQSHARE_API_URL;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  // Upload a document
  async uploadDocument(fileBuffer, fileName, options = {}) {
    try {
      const formData = new FormData();
      const blob = new Blob([fileBuffer], { type: 'application/octet-stream' });
      formData.append('file', blob, fileName);
      formData.append('name', fileName);
      
      if (options.password) formData.append('password', options.password);
      if (options.watermark) formData.append('watermark', 'true');
      if (options.expiresAt) formData.append('expires_at', options.expiresAt);

      const response = await this.client.post('/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Create a shareable link
  async createShareLink(documentId, options = {}) {
    try {
      const response = await this.client.post(`/documents/${documentId}/share`, {
        expires_at: options.expiresAt,
        password: options.password,
        max_views: options.maxViews,
        allow_download: options.allowDownload !== false
      });

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get document analytics
  async getAnalytics(documentId, options = {}) {
    try {
      const params = {};
      if (options.startDate) params.start_date = options.startDate;
      if (options.endDate) params.end_date = options.endDate;
      if (options.groupBy) params.group_by = options.groupBy;

      const response = await this.client.get(`/documents/${documentId}/analytics`, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // List all documents
  async listDocuments(options = {}) {
    try {
      const params = {};
      if (options.page) params.page = options.page;
      if (options.limit) params.limit = options.limit;
      if (options.sort) params.sort = options.sort;

      const response = await this.client.get('/documents', { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get document details
  async getDocument(documentId) {
    try {
      const response = await this.client.get(`/documents/${documentId}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Delete a document
  async deleteDocument(documentId) {
    try {
      const response = await this.client.delete(`/documents/${documentId}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      return new Error(`API Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      return new Error('Network Error: No response from server');
    } else {
      return new Error(`Error: ${error.message}`);
    }
  }
}

module.exports = new DoQshareClient();
```

## Controllers

### Document Controller

`src/controllers/documentController.js`:

```javascript
const doqshare = require('../config/doqshare');
const fs = require('fs').promises;

class DocumentController {
  // Upload document
  async upload(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const fileBuffer = await fs.readFile(req.file.path);
      const options = {
        password: req.body.password,
        watermark: req.body.watermark === 'true',
        expiresAt: req.body.expires_at
      };

      const document = await doqshare.uploadDocument(
        fileBuffer,
        req.file.originalname,
        options
      );

      // Clean up uploaded file
      await fs.unlink(req.file.path);

      res.json({
        success: true,
        document: {
          id: document.id,
          name: document.name,
          created_at: document.created_at,
          share_url: document.share_url
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create shareable link
  async createShare(req, res) {
    try {
      const { documentId } = req.params;
      const options = {
        expiresAt: req.body.expires_at,
        password: req.body.password,
        maxViews: req.body.max_views,
        allowDownload: req.body.allow_download
      };

      const share = await doqshare.createShareLink(documentId, options);

      res.json({
        success: true,
        share: {
          id: share.id,
          url: share.url,
          expires_at: share.expires_at
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // List documents
  async list(req, res) {
    try {
      const options = {
        page: req.query.page || 1,
        limit: req.query.limit || 20,
        sort: req.query.sort || 'created_at'
      };

      const result = await doqshare.listDocuments(options);

      res.json({
        success: true,
        documents: result.data,
        pagination: result.pagination
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get document details
  async get(req, res) {
    try {
      const { documentId } = req.params;
      const document = await doqshare.getDocument(documentId);

      res.json({
        success: true,
        document
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete document
  async delete(req, res) {
    try {
      const { documentId } = req.params;
      await doqshare.deleteDocument(documentId);

      res.json({
        success: true,
        message: 'Document deleted successfully'
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new DocumentController();
```

### Analytics Controller

`src/controllers/analyticsController.js`:

```javascript
const doqshare = require('../config/doqshare');

class AnalyticsController {
  // Get document analytics
  async getAnalytics(req, res) {
    try {
      const { documentId } = req.params;
      const options = {
        startDate: req.query.start_date,
        endDate: req.query.end_date,
        groupBy: req.query.group_by || 'day'
      };

      const analytics = await doqshare.getAnalytics(documentId, options);

      res.json({
        success: true,
        analytics
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get document views
  async getViews(req, res) {
    try {
      const { documentId } = req.params;
      const views = await doqshare.client.get(`/documents/${documentId}/analytics/views`);

      res.json({
        success: true,
        views: views.data
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AnalyticsController();
```

## Middleware

### File Upload Middleware

`src/middleware/upload.js`:

```javascript
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.xls', '.xlsx'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX are allowed.'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB
  }
});

module.exports = upload;
```

## Routes

`src/routes/index.js`:

```javascript
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const analyticsController = require('../controllers/analyticsController');
const upload = require('../middleware/upload');

// Document routes
router.post('/documents', upload.single('file'), documentController.upload);
router.get('/documents', documentController.list);
router.get('/documents/:documentId', documentController.get);
router.delete('/documents/:documentId', documentController.delete);
router.post('/documents/:documentId/share', documentController.createShare);

// Analytics routes
router.get('/documents/:documentId/analytics', analyticsController.getAnalytics);
router.get('/documents/:documentId/analytics/views', analyticsController.getViews);

module.exports = router;
```

## Server

`src/server.js`:

```javascript
const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
```

## Usage Examples

### Upload a Document

```bash
curl -X POST http://localhost:3000/api/documents \
  -F "file=@document.pdf" \
  -F "password=secret123" \
  -F "watermark=true"
```

### Create Shareable Link

```bash
curl -X POST http://localhost:3000/api/documents/doc_123/share \
  -H "Content-Type: application/json" \
  -d '{
    "expires_at": "2025-12-31T23:59:59Z",
    "max_views": 10,
    "allow_download": true
  }'
```

### Get Analytics

```bash
curl http://localhost:3000/api/documents/doc_123/analytics?start_date=2025-01-01&end_date=2025-01-31
```

## Next Steps

1. Add authentication middleware
2. Implement webhook handling
3. Add rate limiting
4. Create a frontend interface
5. Add error handling and logging
6. Implement caching

## Conclusion

You've built a complete document sharing application with the DoQshare API! This tutorial covered:

- Setting up the project
- Creating a DoQshare client
- Implementing document upload
- Creating shareable links
- Tracking analytics
- Building RESTful API endpoints

For more advanced features, check out the [DoQshare API documentation](https://doqshare.com/docs).

