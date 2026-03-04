# Blog Posts Directory

This directory contains all blog posts in Markdown format. Each post is a `.md` file with frontmatter metadata.

## Creating a New Blog Post

1. Create a new `.md` file in this directory with a descriptive slug as the filename (e.g., `my-awesome-post.md`)

2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
excerpt: "A brief description of your post that will appear in listings"
author: "Author Name"
date: "December 20, 2024"
category: "Security"  # Options: Security, Startups, Compliance, Analytics, Enterprise, Technology
readTime: "5 min read"
image: "/images/blog/your-image.jpg"  # Optional
tags:
  - Tag1
  - Tag2
  - Tag3
featured: false  # Set to true to feature on the blog homepage
---

Your markdown content here...
```

## Frontmatter Fields

- **title** (required): The post title
- **excerpt** (required): Short description for listings
- **author** (required): Author name
- **date** (required): Publication date (format: "Month Day, Year")
- **category** (required): Post category
- **readTime** (required): Estimated reading time
- **image** (optional): Featured image path
- **tags** (optional): Array of tags
- **featured** (optional): Boolean to feature on homepage

## Markdown Support

The blog supports full Markdown syntax including:

- Headers (`#`, `##`, `###`)
- **Bold** and *italic* text
- [Links](https://example.com)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes
- Images
- Tables

## Code Blocks

Use triple backticks for code blocks:

\`\`\`javascript
const example = "This is a code block";
\`\`\`

## Examples

See `complete-guide-secure-document-sharing-2024.md` for a complete example.

## File Naming

- Use lowercase letters
- Separate words with hyphens
- Keep it descriptive and SEO-friendly
- Example: `how-to-secure-documents-2024.md`

