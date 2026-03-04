// Help Center Content Management
// This file manages all help articles and categories

export interface HelpArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  description?: string;
  content: string;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}

export interface HelpCategory {
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  featured?: boolean;
  articleCount?: number;
}

// Categories
export const helpCategories: HelpCategory[] = [
  {
    slug: 'getting-started',
    name: 'Getting Started',
    description: 'Learn the basics of DoQshare and how to get started',
    featured: true,
  },
  {
    slug: 'data-rooms',
    name: 'Data Rooms (VDR)',
    description: 'Learn how to create and manage secure data rooms',
    featured: true,
  },
  {
    slug: 'document-analytics',
    name: 'Document Analytics',
    description: 'Understand how to track and analyze viewer engagement',
    featured: true,
  },
  {
    slug: 'documents',
    name: 'Documents',
    description: 'Manage and share your documents',
  },
  {
    slug: 'links-permissions',
    name: 'Links & Permissions',
    description: 'Control access and permissions for your documents',
  },
  {
    slug: 'custom-domains',
    name: 'Custom Domains & Branding',
    description: 'Customize your domain and branding',
  },
  {
    slug: 'account-team',
    name: 'Account & Team',
    description: 'Manage your account and team members',
  },
  {
    slug: 'folders',
    name: 'Folders',
    description: 'Organize documents into folders',
  },
  {
    slug: 'security',
    name: 'Security',
    description: 'Security features and best practices',
  },
  {
    slug: 'videos',
    name: 'Videos',
    description: 'Share and analyze videos',
  },
  {
    slug: 'self-hosting',
    name: 'Self-Hosting',
    description: 'Deploy DoQshare on your own infrastructure',
  },
  {
    slug: 'notion-documents',
    name: 'Notion Documents',
    description: 'Share Notion documents securely with DoQshare',
  },
];

// Sample articles - In production, these would be loaded from Markdown files or a CMS
export const helpArticles: HelpArticle[] = [
  // Getting Started
  {
    id: 'getting-started-1',
    title: 'Getting started with DoQshare',
    slug: 'getting-started-with-doqshare',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    description: 'Learn the basics of DoQshare and how to get started with your first document.',
    content: `# Getting started with DoQshare

Welcome to DoQshare! This guide will help you get started with sharing your first document securely.

## Step 1: Create an Account

1. Go to [dashboard.doqshare.com](https://dashboard.doqshare.com)
2. Click "Sign Up" or "Start Free Trial"
3. Enter your email and create a password
4. Verify your email address

## Step 2: Upload Your First Document

1. Once logged in, click "Upload Document" or drag and drop a file
2. Supported formats: PDF, Word (.docx), PowerPoint (.pptx), Excel, Images
3. Wait for the upload to complete

## Step 3: Create a Shareable Link

1. Click on your uploaded document
2. Click "Share" or "Create Link"
3. Configure your link settings:
   - Set password protection (optional)
   - Set expiration date (optional)
   - Enable download (optional)
   - Require email verification (optional)

## Step 4: Share and Track

1. Copy your secure link
2. Share it with your viewers via email, Slack, or any other method
3. View analytics in real-time from your dashboard

## Next Steps

- Learn about [page-by-page analytics](/help/document-analytics/page-by-page-analytics)
- Set up [custom branding](/help/custom-domains/custom-branding)
- Create your first [data room](/help/data-rooms/create-data-room)`,
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-12-01',
    tags: ['basics', 'getting-started', 'first-steps'],
  },
  {
    id: 'getting-started-2',
    title: 'How to upload your document to DoQshare',
    slug: 'how-to-upload-document',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    description: 'Step-by-step guide to uploading documents to DoQshare.',
    content: `# How to upload your document to DoQshare

Uploading documents to DoQshare is simple and secure. Follow these steps:

## Upload Methods

### Method 1: Drag and Drop
1. Log in to your DoQshare dashboard
2. Drag your document file directly onto the upload area
3. Wait for the upload to complete

### Method 2: Click to Upload
1. Click the "Upload" button in your dashboard
2. Select the file from your computer
3. Wait for the upload to complete

### Method 3: Bulk Upload
1. Select multiple files at once
2. Drag and drop or click to select multiple files
3. All files will upload simultaneously

## Supported File Types

- PDF (.pdf)
- Microsoft Word (.docx, .doc)
- Microsoft PowerPoint (.pptx, .ppt)
- Microsoft Excel (.xlsx, .xls)
- Images (.jpg, .png, .gif, .webp)
- And more...

## File Size Limits

- Free plan: Up to 50MB per file
- Pro plan: Up to 100MB per file
- Business plan: Up to 500MB per file
- Data Rooms plan: Unlimited

## Tips

- Large files may take longer to upload
- Ensure you have a stable internet connection
- Files are automatically optimized for secure sharing`,
    createdAt: '2024-01-20',
    updatedAt: '2024-12-01',
    tags: ['upload', 'documents', 'files'],
  },
  // Data Rooms
  {
    id: 'data-rooms-1',
    title: 'How to create a data room',
    slug: 'create-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Learn how to create and manage secure data rooms for your documents.',
    content: `# How to create a data room

Data rooms are perfect for organizing multiple documents for due diligence, fundraising, or M&A transactions.

## Creating a Data Room

1. Go to your DoQshare dashboard
2. Click "Create Data Room" or "New Data Room"
3. Enter a name for your data room
4. Add a description (optional)
5. Click "Create"

## Adding Documents

1. Open your data room
2. Click "Add Documents" or drag and drop files
3. Organize documents into folders if needed
4. Set permissions for each document or folder

## Configuring Settings

- **Access Control**: Set who can view the data room
- **NDA Required**: Require viewers to accept an NDA
- **Custom Branding**: Add your logo and colors
- **Custom Domain**: Use your own domain (Business+ plans)
- **Expiration Date**: Set when the data room expires

## Best Practices

- Organize documents into logical folders
- Use clear naming conventions
- Set appropriate permissions
- Enable audit logs for compliance
- Regularly review access permissions`,
    featured: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'vdr', 'organization'],
  },
  {
    id: 'data-rooms-2',
    title: 'How to add documents to your data room',
    slug: 'add-documents-to-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Step-by-step guide to adding documents to your data room.',
    content: `# How to add documents to your data room

Adding documents to your data room is straightforward. Here's how:

## Adding Documents

1. Open your data room from the dashboard
2. Click "Add Documents" button
3. Select files from your computer or drag and drop
4. Wait for uploads to complete

## Organizing Documents

- Create folders to organize related documents
- Drag and drop to move documents between folders
- Use descriptive names for easy navigation

## Bulk Upload

- Select multiple files at once
- Upload entire folders
- Maintain folder structure automatically`,
    createdAt: '2024-02-05',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'documents', 'upload'],
  },
  // Document Analytics
  {
    id: 'analytics-1',
    title: 'How to track page-by-page analytics',
    slug: 'page-by-page-analytics',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Understand how to track and analyze viewer engagement with your documents.',
    content: `# How to track page-by-page analytics

DoQshare provides detailed page-by-page analytics to help you understand how viewers engage with your documents.

## Viewing Analytics

1. Open your document in the dashboard
2. Click on the "Analytics" tab
3. View page-by-page engagement data

## Available Metrics

- **Time spent per page**: See how long viewers spend on each page
- **Page views**: Track which pages are viewed most
- **Completion rate**: See how many viewers reach the end
- **Viewer information**: Know who viewed your document

## Using Analytics

- Identify which content resonates most
- Optimize your pitch deck or proposal
- Prioritize follow-ups based on engagement
- Understand viewer behavior patterns

## Exporting Data

- Export analytics to CSV
- Share reports with your team
- Track performance over time`,
    featured: true,
    createdAt: '2024-02-10',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'tracking', 'insights'],
  },
  {
    id: 'analytics-2',
    title: 'How to see detailed document view analytics',
    slug: 'detailed-document-analytics',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Access detailed analytics for your documents.',
    content: `# How to see detailed document view analytics

Get comprehensive insights into how your documents are being viewed.

## Accessing Detailed Analytics

1. Navigate to your document
2. Click "View Analytics"
3. Explore different analytics sections

## Analytics Sections

- **Overview**: Summary of all views and engagement
- **Page-by-Page**: Detailed page-level analytics
- **Viewers**: Information about who viewed your document
- **Geographic**: Where viewers are located
- **Device**: What devices viewers are using
- **Timeline**: When documents were viewed

## Key Metrics

- Total views
- Unique viewers
- Average time spent
- Completion rate
- Download count
- Return visits`,
    createdAt: '2024-02-15',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'metrics', 'insights'],
  },
  // Links & Permissions
  {
    id: 'links-1',
    title: 'Link permissions',
    slug: 'link-permissions',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Control access and permissions for your document links.',
    content: `# Link permissions

Control who can access your documents and what they can do with them.

## Permission Types

- **Public**: Anyone with the link can view
- **Password Protected**: Requires a password to access
- **Email Required**: Viewers must provide their email
- **Email Verification**: Viewers must verify their email
- **Domain Restriction**: Only specific email domains can access

## Setting Permissions

1. Open your document
2. Click "Link Settings" or "Permissions"
3. Choose your permission type
4. Configure additional settings
5. Save changes

## Download Control

- Allow or disable downloads
- Control printing
- Restrict screenshot capabilities
- Enable watermarking`,
    createdAt: '2024-02-20',
    updatedAt: '2024-12-01',
    tags: ['permissions', 'security', 'access-control'],
  },
  {
    id: 'links-2',
    title: 'How to set an expiration date on your link',
    slug: 'set-expiration-date',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Learn how to set expiration dates for your document links.',
    content: `# How to set an expiration date on your link

Set expiration dates to automatically revoke access after a certain time.

## Setting Expiration

1. Open your document
2. Go to "Link Settings"
3. Enable "Expiration Date"
4. Select a date and time
5. Save changes

## Use Cases

- Time-sensitive documents
- Temporary access for due diligence
- Limited-time offers
- Compliance requirements

## After Expiration

- Links become inactive
- Viewers see an expiration message
- You can extend the expiration if needed`,
    createdAt: '2024-02-25',
    updatedAt: '2024-12-01',
    tags: ['expiration', 'security', 'access-control'],
  },
  // Custom Domains
  {
    id: 'custom-1',
    title: 'How to connect a custom domain to your link',
    slug: 'connect-custom-domain',
    category: 'Custom Domains & Branding',
    categorySlug: 'custom-domains',
    description: 'Use your own domain for sharing documents.',
    content: `# How to connect a custom domain to your link

Use your own branded domain instead of doqshare.com links.

## Requirements

- Business plan or higher
- Access to your domain's DNS settings
- Domain ownership verification

## Setup Steps

1. Go to Settings > Custom Domains
2. Click "Add Domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Verify domain ownership
6. Wait for DNS propagation (up to 48 hours)

## DNS Configuration

Add the following DNS records:
- CNAME record pointing to doqshare.com
- Or A record with provided IP address

## Benefits

- Professional branded links
- Better brand recognition
- Improved trust with viewers`,
    createdAt: '2024-03-01',
    updatedAt: '2024-12-01',
    tags: ['custom-domain', 'branding', 'setup'],
  },
  // Account & Team
  {
    id: 'account-1',
    title: 'How to add team members to your DoQshare account',
    slug: 'add-team-members',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Invite team members and manage roles.',
    content: `# How to add team members to your DoQshare account

Collaborate with your team by inviting members to your account.

## Adding Team Members

1. Go to Settings > Team
2. Click "Invite Member"
3. Enter email address
4. Select role (Admin, Member, Viewer)
5. Send invitation

## Team Roles

- **Admin**: Full access to all features
- **Member**: Can create and manage documents
- **Viewer**: Read-only access

## Managing Members

- Edit roles
- Remove members
- Resend invitations
- View activity logs`,
    createdAt: '2024-03-05',
    updatedAt: '2024-12-01',
    tags: ['team', 'collaboration', 'roles'],
  },
  // Security
  {
    id: 'security-1',
    title: 'How to require NDA agreement before viewing documents',
    slug: 'require-nda-agreement',
    category: 'Security',
    categorySlug: 'security',
    description: 'Protect your documents by requiring NDAs.',
    content: `# How to require NDA agreement before viewing documents

Require viewers to accept an NDA before accessing sensitive documents.

## Setting Up NDA

1. Open your document or data room
2. Go to "Security Settings"
3. Enable "Require NDA"
4. Upload your NDA document or use template
5. Configure NDA settings
6. Save changes

## NDA Features

- Custom NDA documents
- Automatic acceptance tracking
- Audit trail of all acceptances
- Legal compliance

## Best Practices

- Use clear, legally-reviewed NDAs
- Track all acceptances
- Keep records for compliance
- Review acceptance logs regularly`,
    createdAt: '2024-03-10',
    updatedAt: '2024-12-01',
    tags: ['nda', 'security', 'compliance'],
  },
  // Folders
  {
    id: 'folders-1',
    title: 'How to add folders to your Data Room',
    slug: 'add-folders-to-data-room',
    category: 'Folders',
    categorySlug: 'folders',
    description: 'Organize your data room by creating folders and organizing documents.',
    content: `# How to add folders to your Data Room

Organize your data room documents into folders for better structure and navigation.

## Creating Folders

1. Open your data room
2. Click "New Folder" or "Create Folder"
3. Enter a folder name
4. Add a description (optional)
5. Click "Create"

## Organizing Documents

- Drag and drop documents into folders
- Create nested folders for complex structures
- Move folders by dragging them
- Rename folders at any time

## Folder Permissions

- Set permissions at the folder level
- All documents in a folder inherit folder permissions
- Override permissions for specific documents if needed

## Best Practices

- Use clear, descriptive folder names
- Create a logical hierarchy
- Group related documents together
- Keep folder structure simple and intuitive`,
    createdAt: '2024-03-15',
    updatedAt: '2024-12-01',
    tags: ['folders', 'organization', 'data-room'],
  },
  {
    id: 'folders-2',
    title: 'How to organise documents into folders',
    slug: 'organise-documents-into-folders',
    category: 'Folders',
    categorySlug: 'folders',
    description: 'Learn how to organize your documents into folders for better management.',
    content: `# How to organise documents into folders

Organize your documents into folders to keep your workspace tidy and easy to navigate.

## Organizing Methods

### Method 1: Drag and Drop
1. Select one or more documents
2. Drag them to the desired folder
3. Drop to move

### Method 2: Move Option
1. Right-click on a document
2. Select "Move to Folder"
3. Choose destination folder
4. Confirm

## Folder Structure Tips

- Create folders by project, date, or document type
- Use consistent naming conventions
- Keep folder hierarchies shallow (2-3 levels max)
- Regularly review and reorganize as needed

## Bulk Organization

- Select multiple documents at once
- Move them all to a folder simultaneously
- Maintain organization as you add new documents`,
    createdAt: '2024-03-20',
    updatedAt: '2024-12-01',
    tags: ['folders', 'organization', 'management'],
  },
  // Data Rooms - Additional Articles
  {
    id: 'data-rooms-3',
    title: 'How to allow file downloads from your data room',
    slug: 'allow-file-downloads-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Control download permissions for files in your data room.',
    content: `# How to allow file downloads from your data room

Control whether viewers can download files from your data room.

## Enabling Downloads

1. Open your data room settings
2. Go to "Permissions" or "Access Control"
3. Enable "Allow Downloads"
4. Choose download options:
   - Allow all downloads
   - Require permission for each download
   - Disable downloads entirely

## Per-File Download Control

- Set download permissions for individual files
- Override data room settings for specific documents
- Track all download activity in audit logs

## Best Practices

- Only allow downloads when necessary
- Monitor download activity regularly
- Use watermarks on downloadable files
- Set expiration dates for download access`,
    createdAt: '2024-03-25',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'downloads', 'permissions'],
  },
  {
    id: 'data-rooms-4',
    title: 'How to customize data room branding',
    slug: 'customize-data-room-branding',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Personalize your data room with your branding and colors.',
    content: `# How to customize data room branding

Make your data room match your brand identity with custom branding options.

## Branding Options

1. Go to your data room settings
2. Navigate to "Branding" or "Customization"
3. Configure:
   - Logo upload
   - Color scheme
   - Custom domain
   - Welcome message
   - Footer text

## Custom Domain

- Connect your own domain (Business+ plans)
- Use your brand's domain for data room links
- Professional appearance for viewers

## Welcome Message

- Add a custom welcome message
- Set expectations for viewers
- Include important instructions or disclaimers

## Color Customization

- Match your brand colors
- Customize header and footer
- Ensure consistent brand experience`,
    createdAt: '2024-03-30',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'branding', 'customization'],
  },
  {
    id: 'data-rooms-5',
    title: 'How to add a custom welcome message to your data room link',
    slug: 'add-custom-welcome-message',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Personalize the viewer experience with a custom welcome message.',
    content: `# How to add a custom welcome message to your data room link

Create a personalized welcome experience for your data room viewers.

## Adding Welcome Message

1. Open your data room settings
2. Go to "Branding" or "Customization"
3. Find "Welcome Message" section
4. Enter your custom message
5. Format with markdown if supported
6. Save changes

## Message Content Ideas

- Brief introduction to the data room
- Instructions for viewers
- Important deadlines or dates
- Contact information
- Legal disclaimers

## Best Practices

- Keep messages concise and clear
- Include relevant instructions
- Update messages as needed
- Test the viewer experience`,
    createdAt: '2024-04-01',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'welcome', 'customization'],
  },
  {
    id: 'data-rooms-6',
    title: 'What can you set in a DoQshare data room',
    slug: 'data-room-settings',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Complete guide to all data room configuration options.',
    content: `# What can you set in a DoQshare data room

Comprehensive overview of all settings and options available for your data room.

## Access Control

- Password protection
- Email verification required
- Domain allow/block lists
- IP address restrictions
- Viewer-specific permissions

## Security Settings

- NDA requirement
- Dynamic watermarking
- Download permissions
- Print restrictions
- Screenshot protection
- Expiration dates

## Branding & Customization

- Custom logo
- Brand colors
- Custom domain
- Welcome message
- Footer customization
- Email templates

## Analytics & Tracking

- Page-by-page analytics
- Viewer identification
- Download tracking
- Time spent tracking
- Export capabilities

## Organization

- Folder structure
- Document organization
- Search functionality
- Index generation
- Preview options

## Notifications

- View notifications
- Download alerts
- Access notifications
- Custom notification settings`,
    createdAt: '2024-04-05',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'settings', 'configuration'],
  },
  {
    id: 'data-rooms-7',
    title: 'How to delete a Data Room in DoQshare',
    slug: 'delete-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Learn how to permanently delete a data room.',
    content: `# How to delete a Data Room in DoQshare

Permanently remove a data room from your account.

## Deleting a Data Room

1. Go to your data rooms list
2. Find the data room you want to delete
3. Click on the data room settings
4. Scroll to "Danger Zone" or "Delete"
5. Click "Delete Data Room"
6. Confirm deletion

## Before Deleting

⚠️ **Warning**: This action cannot be undone!

- Export any important analytics
- Download any documents you need
- Notify team members
- Check for active viewers

## What Gets Deleted

- All documents in the data room
- All folders and organization
- All analytics data
- All access permissions
- All viewer information

## Recovery

- Deleted data rooms cannot be recovered
- Make sure to backup important data first
- Consider archiving instead of deleting`,
    createdAt: '2024-04-10',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'delete', 'management'],
  },
  {
    id: 'data-rooms-8',
    title: 'How to duplicate a Data Room in DoQshare',
    slug: 'duplicate-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Create a copy of an existing data room.',
    content: `# How to duplicate a Data Room in DoQshare

Create a copy of an existing data room to save time setting up similar rooms.

## Duplicating a Data Room

1. Go to your data rooms list
2. Find the data room to duplicate
3. Click on the data room menu (three dots)
4. Select "Duplicate" or "Copy"
5. Enter a name for the new data room
6. Choose what to copy:
   - Documents and folders
   - Settings and permissions
   - Branding configuration
7. Click "Duplicate"

## What Gets Copied

- Document structure and folders
- Settings and configurations
- Branding and customization
- Folder permissions (not viewer access)

## What Doesn't Get Copied

- Viewer access and permissions
- Analytics data
- Custom domain settings
- Active links

## Use Cases

- Create templates for similar projects
- Set up multiple rounds of fundraising
- Duplicate for different teams or departments
- Create backup copies`,
    createdAt: '2024-04-15',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'duplicate', 'templates'],
  },
  {
    id: 'data-rooms-9',
    title: 'How to share Data Room via custom domain',
    slug: 'share-data-room-custom-domain',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Share your data room using your own custom domain.',
    content: `# How to share Data Room via custom domain

Use your own branded domain to share your data room links.

## Requirements

- Business plan or higher
- Custom domain configured in account settings
- DNS records properly set up

## Setting Up Custom Domain

1. Go to Account Settings > Custom Domains
2. Add and verify your domain
3. Configure DNS records as instructed
4. Wait for DNS propagation (up to 48 hours)

## Using Custom Domain for Data Room

1. Open your data room settings
2. Go to "Sharing" or "Link Settings"
3. Select your custom domain
4. Generate or update your data room link
5. Share the branded link

## Benefits

- Professional branded appearance
- Increased trust with viewers
- Consistent brand experience
- Better brand recognition

## DNS Configuration

- CNAME record pointing to DoQshare
- Or A record with provided IP address
- SSL certificate automatically provisioned`,
    createdAt: '2024-04-20',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'custom-domain', 'branding'],
  },
  {
    id: 'data-rooms-10',
    title: 'How to set granular folder and file permissions for your data room',
    slug: 'granular-folder-file-permissions',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Set detailed permissions at the folder and file level.',
    content: `# How to set granular folder and file permissions for your data room

Control access with precision using folder and file-level permissions.

## Setting Folder Permissions

1. Right-click on a folder
2. Select "Permissions" or "Access Control"
3. Configure:
   - Who can view the folder
   - Download permissions
   - Print permissions
   - Specific viewer access

## Setting File Permissions

1. Right-click on a file
2. Select "Permissions"
3. Override folder permissions if needed
4. Set file-specific access rules

## Permission Levels

- **View Only**: Can view but not download
- **Download Allowed**: Can view and download
- **No Access**: Cannot see the file/folder
- **Custom**: Specific permissions per viewer

## Viewer-Specific Permissions

- Assign permissions to individual viewers
- Create viewer groups with shared permissions
- Override default permissions per viewer

## Best Practices

- Start with folder-level permissions
- Override at file level when needed
- Regularly review and update permissions
- Document permission structure for team`,
    createdAt: '2024-04-25',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'permissions', 'access-control'],
  },
  {
    id: 'data-rooms-11',
    title: 'Groups and granular permissions in data rooms',
    slug: 'groups-granular-permissions',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Use groups to manage permissions efficiently.',
    content: `# Groups and granular permissions in data rooms

Organize viewers into groups and manage permissions efficiently.

## Creating Groups

1. Go to your data room settings
2. Navigate to "Groups" or "Viewer Groups"
3. Click "Create Group"
4. Enter group name and description
5. Add viewers to the group

## Assigning Permissions to Groups

1. Select a folder or file
2. Go to permissions settings
3. Choose "Group Permissions"
4. Select the group
5. Set permissions for that group

## Group Benefits

- Manage multiple viewers at once
- Consistent permissions across group
- Easy to add/remove viewers
- Clear permission structure

## Use Cases

- Investor groups (different access levels)
- Team departments
- External advisors
- Legal teams

## Best Practices

- Create logical groups
- Document group purposes
- Review group membership regularly
- Use descriptive group names`,
    createdAt: '2024-04-30',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'groups', 'permissions'],
  },
  {
    id: 'data-rooms-12',
    title: 'How to enable file requests in your data room',
    slug: 'enable-file-requests',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Allow viewers to request files or upload documents.',
    content: `# How to enable file requests in your data room

Allow viewers to request specific files or upload documents to your data room.

## Enabling File Requests

1. Open your data room settings
2. Go to "Features" or "Options"
3. Enable "File Requests"
4. Configure request settings:
   - Who can make requests
   - Notification preferences
   - Request approval workflow

## Request Workflow

1. Viewer requests a file or upload
2. You receive a notification
3. Approve or deny the request
4. Viewer is notified of decision

## Use Cases

- Due diligence document requests
- Q&A document submissions
- Additional information requests
- Document uploads from viewers

## Best Practices

- Set clear guidelines for requests
- Respond to requests promptly
- Organize requested files appropriately
- Track request history`,
    createdAt: '2024-05-01',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'file-requests', 'collaboration'],
  },
  {
    id: 'data-rooms-13',
    title: 'How to enable index generation for your data room viewers',
    slug: 'enable-index-generation',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Generate an automatic index of all documents for viewers.',
    content: `# How to enable index generation for your data room viewers

Automatically generate a searchable index of all documents in your data room.

## Enabling Index Generation

1. Open your data room settings
2. Go to "Features" or "Viewer Options"
3. Enable "Index Generation"
4. Configure index options:
   - Auto-generate on document add
   - Include document metadata
   - Make searchable

## Index Features

- Automatic document listing
- Search functionality
- Document metadata display
- Quick navigation

## Benefits

- Easier document discovery
- Better viewer experience
- Time-saving navigation
- Professional presentation

## Customization

- Customize index format
- Include/exclude specific folders
- Add custom metadata fields
- Export index if needed`,
    createdAt: '2024-05-05',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'index', 'navigation'],
  },
  {
    id: 'data-rooms-14',
    title: 'How to preview documents in your data room',
    slug: 'preview-documents-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Preview documents before sharing with viewers.',
    content: `# How to preview documents in your data room

Preview how documents will appear to viewers before sharing.

## Previewing Documents

1. Open your data room
2. Click on any document
3. Select "Preview" option
4. View document as a viewer would see it

## Preview Features

- See exact viewer experience
- Test document rendering
- Check formatting
- Verify watermarks
- Test permissions

## Use Cases

- Quality assurance before sharing
- Testing new document formats
- Verifying branding
- Checking security settings

## Best Practices

- Preview before sharing important documents
- Test on different devices
- Verify all settings are correct
- Check watermark appearance`,
    createdAt: '2024-05-10',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'preview', 'quality-assurance'],
  },
  {
    id: 'data-rooms-15',
    title: 'Q&A Conversations in DoQshare',
    slug: 'qa-conversations',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Enable Q&A conversations within your data room.',
    content: `# Q&A Conversations in DoQshare

Facilitate communication between viewers and administrators through Q&A.

## Enabling Q&A

1. Open your data room settings
2. Go to "Features"
3. Enable "Q&A Conversations"
4. Configure Q&A settings

## Q&A Features

- Viewers can ask questions
- Administrators can respond
- Thread-based conversations
- Document-specific questions
- Private or public Q&A

## Managing Q&A

- View all questions in dashboard
- Respond to questions
- Mark questions as resolved
- Export Q&A history

## Best Practices

- Respond promptly to questions
- Organize questions by topic
- Use Q&A for due diligence
- Document important answers`,
    createdAt: '2024-05-15',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'qa', 'communication'],
  },
  {
    id: 'data-rooms-16',
    title: 'White label Data Room',
    slug: 'white-label-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Fully white-label your data room with complete branding control.',
    content: `# White label Data Room

Completely customize your data room to match your brand with white-labeling.

## White-Label Features

- Custom domain
- Your logo and branding
- Custom color scheme
- Branded email templates
- No DoQshare branding visible

## Setup Requirements

- Enterprise plan
- Custom domain configured
- Brand assets ready

## Configuration

1. Go to Account Settings > White-Label
2. Upload your logo
3. Set brand colors
4. Configure custom domain
5. Customize email templates
6. Remove DoQshare branding

## Benefits

- Complete brand control
- Professional appearance
- Increased trust
- Seamless brand experience

## Best Practices

- Use high-quality brand assets
- Maintain brand consistency
- Test on different devices
- Keep branding updated`,
    createdAt: '2024-05-20',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'white-label', 'branding'],
  },
  {
    id: 'data-rooms-17',
    title: 'How to download an entire data room (admin only)',
    slug: 'download-entire-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Download all documents from a data room as an administrator.',
    content: `# How to download an entire data room (admin only)

Download all documents from your data room for backup or archival purposes.

## Downloading Data Room

1. Open your data room
2. Go to data room settings
3. Click "Download All" or "Export"
4. Choose download format:
   - ZIP archive
   - Individual files
5. Wait for download to complete

## What Gets Downloaded

- All documents in the data room
- Folder structure (if preserved)
- Document metadata
- Analytics data (optional)

## Requirements

- Admin access required
- Sufficient storage space
- Stable internet connection

## Use Cases

- Backup before deletion
- Archival purposes
- Migration to another system
- Local storage

## Best Practices

- Download regularly for backups
- Verify download completeness
- Store securely
- Keep organized`,
    createdAt: '2024-05-25',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'download', 'backup'],
  },
  {
    id: 'data-rooms-18',
    title: 'How to rename your Data Room',
    slug: 'rename-data-room',
    category: 'Data Rooms (VDR)',
    categorySlug: 'data-rooms',
    description: 'Change the name of your data room.',
    content: `# How to rename your Data Room

Update your data room name at any time.

## Renaming Process

1. Open your data rooms list
2. Find the data room to rename
3. Click on the data room name or settings
4. Click "Rename" or edit the name field
5. Enter new name
6. Save changes

## Considerations

- Name change doesn't affect links
- Viewers see updated name
- Update internal references if needed
- Consider naming conventions

## Best Practices

- Use descriptive names
- Include project or deal name
- Add date if relevant
- Keep names consistent`,
    createdAt: '2024-05-30',
    updatedAt: '2024-12-01',
    tags: ['data-room', 'rename', 'management'],
  },
  // Documents - Additional Articles
  {
    id: 'documents-1',
    title: 'Document versions',
    slug: 'document-versions',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Manage different versions of your documents.',
    content: `# Document versions

Keep track of different versions of your documents and update them seamlessly.

## Creating New Versions

1. Open your document
2. Click "Upload New Version"
3. Select the updated file
4. Add version notes (optional)
5. Upload

## Version Management

- View all document versions
- Compare versions
- Restore previous versions
- Set default version

## Version History

- See when each version was uploaded
- View version notes
- Track changes between versions
- Download specific versions

## Best Practices

- Use clear version notes
- Keep important versions
- Archive old versions
- Notify viewers of updates`,
    createdAt: '2024-06-01',
    updatedAt: '2024-12-01',
    tags: ['documents', 'versions', 'management'],
  },
  {
    id: 'documents-2',
    title: 'Dynamic document watermark',
    slug: 'dynamic-watermark',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Protect documents with dynamic, personalized watermarks.',
    content: `# Dynamic document watermark

Add personalized watermarks to documents that identify each viewer.

## Enabling Dynamic Watermarking

1. Open your document settings
2. Go to "Security" or "Watermarking"
3. Enable "Dynamic Watermark"
4. Configure watermark options:
   - Viewer name
   - Email address
   - Timestamp
   - IP address
   - Custom text

## Watermark Features

- Automatically personalized per viewer
- Cannot be removed by viewers
- Visible on every page
- Helps prevent unauthorized sharing

## Customization

- Choose watermark position
- Adjust opacity
- Select font and size
- Add custom text

## Best Practices

- Enable for sensitive documents
- Use clear, visible watermarks
- Include identifying information
- Test watermark appearance`,
    createdAt: '2024-06-05',
    updatedAt: '2024-12-01',
    tags: ['documents', 'watermark', 'security'],
  },
  {
    id: 'documents-3',
    title: 'How to rename your document in DoQshare',
    slug: 'rename-document',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Change the name of your document.',
    content: `# How to rename your document in DoQshare

Update your document name without affecting the shared link.

## Renaming Process

1. Open your document
2. Click on the document name
3. Edit the name field
4. Press Enter or click outside to save

## Alternative Method

1. Right-click on document
2. Select "Rename"
3. Enter new name
4. Save

## Considerations

- Name change doesn't affect the link
- Viewers see updated name
- Update internal references if needed

## Best Practices

- Use descriptive names
- Include version numbers if applicable
- Keep naming consistent
- Use clear, searchable names`,
    createdAt: '2024-06-10',
    updatedAt: '2024-12-01',
    tags: ['documents', 'rename', 'management'],
  },
  {
    id: 'documents-4',
    title: 'How to sort documents in DoQshare',
    slug: 'sort-documents',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Organize your documents by sorting them in different ways.',
    content: `# How to sort documents in DoQshare

Sort your documents to find what you need quickly.

## Sorting Options

1. Click the sort icon or dropdown
2. Choose sorting method:
   - Name (A-Z or Z-A)
   - Date created (newest/oldest)
   - Date modified
   - Size
   - Views

## Sorting Methods

### By Name
- Alphabetical order
- Ascending or descending

### By Date
- Newest first
- Oldest first
- Last modified

### By Size
- Largest first
- Smallest first

### By Views
- Most viewed first
- Least viewed first

## Best Practices

- Use sorting to find documents quickly
- Combine with search for better results
- Sort by date for recent work
- Sort by views for popular content`,
    createdAt: '2024-06-15',
    updatedAt: '2024-12-01',
    tags: ['documents', 'sort', 'organization'],
  },
  {
    id: 'documents-5',
    title: 'File types supported in DoQshare',
    slug: 'file-types-supported',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Complete list of file types you can upload to DoQshare.',
    content: `# File types supported in DoQshare

DoQshare supports a wide range of file types for secure sharing.

## Supported File Types

### Documents
- PDF (.pdf)
- Microsoft Word (.docx, .doc)
- Microsoft PowerPoint (.pptx, .ppt)
- Microsoft Excel (.xlsx, .xls)
- Text files (.txt)
- Rich Text Format (.rtf)

### Images
- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
- SVG (.svg)

### Videos
- MP4 (.mp4)
- WebM (.webm)
- MOV (.mov)

### Other
- CSV (.csv)
- ZIP archives (.zip)

## File Size Limits

- Free plan: 50MB per file
- Pro plan: 100MB per file
- Business plan: 500MB per file
- Enterprise plan: Unlimited

## Best Practices

- Use PDF for best compatibility
- Optimize large files before upload
- Check file size before uploading
- Use supported formats for best results`,
    createdAt: '2024-06-20',
    updatedAt: '2024-12-01',
    tags: ['documents', 'file-types', 'upload'],
  },
  {
    id: 'documents-6',
    title: 'How to change document orientation in PDFs and presentations',
    slug: 'change-document-orientation',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Adjust document orientation for better viewing.',
    content: `# How to change document orientation in PDFs and presentations

Adjust how documents are displayed for optimal viewing.

## Changing Orientation

1. Open your document
2. Go to document settings
3. Find "Display" or "View Settings"
4. Select orientation:
   - Portrait
   - Landscape
   - Auto (based on document)

## Orientation Options

### Portrait
- Vertical orientation
- Best for text documents
- Standard for most PDFs

### Landscape
- Horizontal orientation
- Best for presentations
- Wide content

### Auto
- Automatically detects best orientation
- Adapts to document content

## Best Practices

- Set orientation before sharing
- Test on different devices
- Consider viewer preferences
- Match document content`,
    createdAt: '2024-06-25',
    updatedAt: '2024-12-01',
    tags: ['documents', 'orientation', 'display'],
  },
  {
    id: 'documents-7',
    title: 'How to share Excel files with advanced mode',
    slug: 'share-excel-advanced-mode',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Share Excel files with advanced viewing options.',
    content: `# How to share Excel files with advanced mode

Share Excel files with enhanced viewing and interaction features.

## Enabling Advanced Mode

1. Upload your Excel file
2. Open document settings
3. Enable "Advanced Mode"
4. Configure options:
   - Interactive spreadsheet
   - Formula visibility
   - Cell editing (optional)
   - Filtering and sorting

## Advanced Mode Features

- Interactive spreadsheet viewing
- Formula display
- Filter and sort capabilities
- Cell-level interaction
- Better mobile experience

## Use Cases

- Financial models
- Data analysis
- Reports with calculations
- Interactive dashboards

## Best Practices

- Test advanced mode before sharing
- Ensure formulas work correctly
- Consider viewer permissions
- Provide instructions if needed`,
    createdAt: '2024-06-30',
    updatedAt: '2024-12-01',
    tags: ['documents', 'excel', 'advanced-mode'],
  },
  {
    id: 'documents-8',
    title: 'How to preview documents on DoQshare',
    slug: 'preview-documents',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Preview documents before sharing with viewers.',
    content: `# How to preview documents on DoQshare

Preview how your document will appear to viewers.

## Previewing Documents

1. Open your document
2. Click "Preview" button
3. View document as viewers will see it
4. Test all features:
   - Watermarking
   - Download options
   - Navigation
   - Mobile view

## Preview Features

- Exact viewer experience
- Test document rendering
- Check formatting
- Verify security settings
- Mobile preview

## Use Cases

- Quality assurance
- Testing new formats
- Verifying branding
- Checking settings

## Best Practices

- Always preview before sharing
- Test on different devices
- Verify all settings
- Check watermark appearance`,
    createdAt: '2024-07-01',
    updatedAt: '2024-12-01',
    tags: ['documents', 'preview', 'quality-assurance'],
  },
  {
    id: 'documents-9',
    title: 'Make links clickable in documents, pitch decks, PDFs',
    slug: 'make-links-clickable',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Enable clickable links in your shared documents.',
    content: `# Make links clickable in documents, pitch decks, PDFs

Ensure links in your documents are clickable for viewers.

## Enabling Clickable Links

1. Upload your document
2. Go to document settings
3. Enable "Clickable Links"
4. Save settings

## Link Features

- URLs automatically become clickable
- Email addresses become mailto links
- Preserves link formatting
- Works in PDFs and presentations

## Supported Link Types

- HTTP/HTTPS URLs
- Email addresses
- Phone numbers
- Custom link formats

## Best Practices

- Test links before sharing
- Use full URLs (https://)
- Verify link destinations
- Consider link security

## Troubleshooting

- Ensure links are properly formatted
- Check document format support
- Verify link settings are enabled`,
    createdAt: '2024-07-05',
    updatedAt: '2024-12-01',
    tags: ['documents', 'links', 'formatting'],
  },
  {
    id: 'documents-10',
    title: 'How to share PDF with animated GIF via DoQshare',
    slug: 'share-pdf-animated-gif',
    category: 'Documents',
    categorySlug: 'documents',
    description: 'Share PDFs containing animated GIFs with full animation support.',
    content: `# How to share PDF with animated GIF via DoQshare

Share PDFs with animated GIFs that play correctly for viewers.

## Sharing PDFs with GIFs

1. Create your PDF with embedded GIF
2. Upload to DoQshare
3. Document automatically supports animations
4. Viewers see animated GIFs

## GIF Support

- Animated GIFs play automatically
- Preserves animation quality
- Works in web viewer
- Mobile compatible

## Best Practices

- Use optimized GIF files
- Keep file sizes reasonable
- Test animation playback
- Consider loading times

## Use Cases

- Interactive presentations
- Animated pitch decks
- Dynamic content
- Engaging visuals`,
    createdAt: '2024-07-10',
    updatedAt: '2024-12-01',
    tags: ['documents', 'pdf', 'gif', 'animation'],
  },
  // Links & Permissions - Additional Articles
  {
    id: 'links-3',
    title: 'How to create an allow list in DoQshare',
    slug: 'create-allow-list',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Restrict document access to specific email domains.',
    content: `# How to create an allow list in DoQshare

Control who can access your documents by creating an allow list of approved domains.

## Creating Allow List

1. Open your document settings
2. Go to "Permissions" or "Access Control"
3. Click "Allow List"
4. Add email domains:
   - company.com
   - partner.com
   - client.com
5. Save changes

## How It Works

- Only emails from listed domains can access
- Other domains are automatically blocked
- Viewers see access denied message
- You receive notification of blocked attempts

## Use Cases

- Internal company documents
- Partner-only access
- Client-specific materials
- Restricted distribution

## Best Practices

- Keep allow list updated
- Test access before sharing
- Document allowed domains
- Review list regularly`,
    createdAt: '2024-07-15',
    updatedAt: '2024-12-01',
    tags: ['links', 'permissions', 'allow-list', 'security'],
  },
  {
    id: 'links-4',
    title: 'How to create a block list in DoQshare',
    slug: 'create-block-list',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Block specific email domains from accessing your documents.',
    content: `# How to create a block list in DoQshare

Prevent specific email domains from accessing your documents.

## Creating Block List

1. Open your document settings
2. Go to "Permissions" or "Access Control"
3. Click "Block List"
4. Add email domains to block:
   - competitor.com
   - spam.com
5. Save changes

## Global Block List

- Create account-wide block list
- Applies to all documents
- Manage in account settings
- Override per document if needed

## How It Works

- Blocked domains cannot access
- Viewers see access denied message
- Attempts are logged
- You receive notifications

## Use Cases

- Block competitors
- Prevent spam access
- Security measures
- Compliance requirements

## Best Practices

- Keep block list updated
- Document blocked domains
- Review regularly
- Consider allow list instead`,
    createdAt: '2024-07-20',
    updatedAt: '2024-12-01',
    tags: ['links', 'permissions', 'block-list', 'security'],
  },
  {
    id: 'links-5',
    title: 'How to create a global block list in DoQshare',
    slug: 'create-global-block-list',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Create an account-wide block list that applies to all documents.',
    content: `# How to create a global block list in DoQshare

Set up a block list that applies to all your documents automatically.

## Creating Global Block List

1. Go to Account Settings
2. Navigate to "Security" or "Block List"
3. Click "Global Block List"
4. Add domains to block
5. Save settings

## Global vs Document Block List

- **Global**: Applies to all documents
- **Document**: Only for specific document
- Document settings override global if needed

## Management

- Add/remove domains easily
- View all blocked domains
- Export block list
- Set exceptions if needed

## Best Practices

- Use for common threats
- Keep list manageable
- Review regularly
- Document reasons for blocking`,
    createdAt: '2024-07-25',
    updatedAt: '2024-12-01',
    tags: ['links', 'permissions', 'block-list', 'security'],
  },
  {
    id: 'links-6',
    title: 'How to allow document downloads for viewers',
    slug: 'allow-document-downloads',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Control whether viewers can download your documents.',
    content: `# How to allow document downloads for viewers

Configure download permissions for your shared documents.

## Enabling Downloads

1. Open your document settings
2. Go to "Permissions" or "Link Settings"
3. Find "Download" option
4. Enable or disable downloads
5. Configure additional options:
   - Require permission for each download
   - Watermark downloaded files
   - Track download activity

## Download Options

- **Allow All**: Viewers can download freely
- **Require Permission**: Ask before each download
- **Disable**: No downloads allowed

## Watermarking Downloads

- Automatically watermark downloaded files
- Include viewer information
- Prevent unauthorized sharing
- Track download source

## Best Practices

- Only allow downloads when necessary
- Use watermarks for sensitive content
- Monitor download activity
- Set expiration dates`,
    createdAt: '2024-07-30',
    updatedAt: '2024-12-01',
    tags: ['links', 'permissions', 'downloads'],
  },
  {
    id: 'links-7',
    title: 'How to require an email to view a document',
    slug: 'require-email-view',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Require viewers to provide their email before accessing documents.',
    content: `# How to require an email to view a document

Collect viewer email addresses before granting document access.

## Requiring Email

1. Open your document settings
2. Go to "Permissions" or "Access Control"
3. Enable "Require Email"
4. Configure options:
   - Email verification required
   - Domain restrictions
   - Custom email message

## Email Verification

- Verify email addresses
- Prevent fake emails
- Ensure valid contacts
- Track viewer identity

## Use Cases

- Lead generation
- Contact collection
- Viewer identification
- Marketing purposes

## Best Practices

- Explain why email is required
- Use clear messaging
- Verify emails when possible
- Respect privacy`,
    createdAt: '2024-08-01',
    updatedAt: '2024-12-01',
    tags: ['links', 'permissions', 'email', 'access-control'],
  },
  {
    id: 'links-8',
    title: 'How to require email verification before viewing a document',
    slug: 'require-email-verification',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Require viewers to verify their email address before access.',
    content: `# How to require email verification before viewing a document

Ensure viewers verify their email addresses for enhanced security.

## Enabling Email Verification

1. Open your document settings
2. Go to "Permissions"
3. Enable "Require Email Verification"
4. Configure verification settings:
   - Verification email template
   - Expiration time
   - Resend options

## Verification Process

1. Viewer enters email address
2. Receives verification email
3. Clicks verification link
4. Gains document access

## Benefits

- Verify email ownership
- Prevent fake emails
- Enhanced security
- Better viewer tracking

## Best Practices

- Use clear verification emails
- Set reasonable expiration times
- Allow resend if needed
- Track verification status`,
    createdAt: '2024-08-05',
    updatedAt: '2024-12-01',
    tags: ['links', 'permissions', 'email', 'verification'],
  },
  {
    id: 'links-9',
    title: 'How do link presets work in DoQshare',
    slug: 'link-presets',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Create and use link presets for consistent sharing settings.',
    content: `# How do link presets work in DoQshare

Save time by creating reusable link permission presets.

## Creating Link Presets

1. Go to Account Settings > Link Presets
2. Click "Create Preset"
3. Configure settings:
   - Password protection
   - Expiration date
   - Download permissions
   - Email requirements
4. Name your preset
5. Save

## Using Presets

1. When creating a link
2. Select a preset from dropdown
3. Preset settings apply automatically
4. Customize if needed

## Preset Benefits

- Consistent settings
- Time-saving
- Standard configurations
- Easy to apply

## Use Cases

- Standard sharing settings
- Team-wide configurations
- Different use cases
- Quick setup

## Best Practices

- Create presets for common scenarios
- Name presets clearly
- Update presets as needed
- Share with team`,
    createdAt: '2024-08-10',
    updatedAt: '2024-12-01',
    tags: ['links', 'presets', 'settings'],
  },
  {
    id: 'links-10',
    title: 'How to tag links in DoQshare',
    slug: 'tag-links',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Organize and categorize your links with tags.',
    content: `# How to tag links in DoQshare

Organize your links with tags for better management and tracking.

## Adding Tags

1. Open your document
2. Go to link settings
3. Find "Tags" section
4. Add tags:
   - Type tag name
   - Press Enter
   - Add multiple tags
5. Save

## Tag Management

- Create custom tags
- Use existing tags
- Remove tags
- Filter by tags

## Use Cases

- Organize by project
- Categorize by type
- Track campaigns
- Group by client

## Best Practices

- Use consistent tag names
- Keep tags simple
- Use relevant tags
- Review tags regularly`,
    createdAt: '2024-08-15',
    updatedAt: '2024-12-01',
    tags: ['links', 'tags', 'organization'],
  },
  {
    id: 'links-11',
    title: 'How to turn off link notifications',
    slug: 'turn-off-link-notifications',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Disable email notifications for link views and activity.',
    content: `# How to turn off link notifications

Control when you receive notifications about link activity.

## Disabling Notifications

1. Open your document settings
2. Go to "Notifications"
3. Toggle off notification types:
   - View notifications
   - Download alerts
   - Access attempts
4. Save settings

## Notification Types

- **View Notifications**: When someone views
- **Download Alerts**: When file is downloaded
- **Access Attempts**: Failed access attempts
- **Daily Summary**: Summary of activity

## Per-Document Settings

- Configure per document
- Override account settings
- Fine-tune notifications
- Set quiet hours

## Best Practices

- Disable for low-priority documents
- Keep enabled for important content
- Use daily summaries
- Review notification settings`,
    createdAt: '2024-08-20',
    updatedAt: '2024-12-01',
    tags: ['links', 'notifications', 'settings'],
  },
  {
    id: 'links-12',
    title: 'How to disable view notifications for specific domains',
    slug: 'disable-notifications-specific-domains',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Stop receiving notifications for views from specific email domains.',
    content: `# How to disable view notifications for specific domains

Reduce notification noise by excluding specific domains.

## Disabling for Domains

1. Go to Account Settings > Notifications
2. Find "Excluded Domains"
3. Add email domains:
   - company.com
   - internal.com
4. Save settings

## How It Works

- Views from excluded domains don't trigger notifications
- Still tracked in analytics
- Other notifications continue
- Can override per document

## Use Cases

- Internal team views
- Regular monitoring
- Reduce notification noise
- Focus on external views

## Best Practices

- Exclude internal domains
- Keep important domains active
- Review excluded list
- Test notification behavior`,
    createdAt: '2024-08-25',
    updatedAt: '2024-12-01',
    tags: ['links', 'notifications', 'domains'],
  },
  {
    id: 'links-13',
    title: 'How to change meta information on your link',
    slug: 'change-meta-information',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Customize the metadata displayed when your link is shared.',
    content: `# How to change meta information on your link

Customize how your link appears when shared on social media or messaging apps.

## Changing Meta Information

1. Open your document settings
2. Go to "Link Settings" or "Sharing"
3. Find "Meta Information"
4. Configure:
   - Title
   - Description
   - Image (OG image)
   - Custom preview
5. Save changes

## Meta Tags

- **Title**: Link preview title
- **Description**: Preview description
- **Image**: Preview image
- **Custom**: Additional metadata

## Social Media

- Optimize for each platform
- Use engaging descriptions
- Include relevant images
- Test preview appearance

## Best Practices

- Use clear, descriptive titles
- Write compelling descriptions
- Use high-quality images
- Test on different platforms`,
    createdAt: '2024-08-30',
    updatedAt: '2024-12-01',
    tags: ['links', 'meta', 'social-sharing'],
  },
  {
    id: 'links-14',
    title: 'How to change social media cards for shared links',
    slug: 'change-social-media-cards',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Customize how your links appear when shared on social media.',
    content: `# How to change social media cards for shared links

Create attractive social media previews for your shared links.

## Customizing Social Cards

1. Open your document settings
2. Go to "Sharing" or "Social Media"
3. Configure card settings:
   - Card title
   - Description
   - Preview image
   - Custom branding
4. Preview appearance
5. Save

## Card Elements

- **Title**: Headline for the card
- **Description**: Brief summary
- **Image**: Visual preview
- **Branding**: Your logo/branding

## Platform Optimization

- Optimize for Twitter/X
- Facebook/LinkedIn cards
- WhatsApp previews
- Other platforms

## Best Practices

- Use engaging titles
- Include compelling descriptions
- Use high-quality images
- Test on actual platforms
- Keep descriptions concise`,
    createdAt: '2024-09-01',
    updatedAt: '2024-12-01',
    tags: ['links', 'social-media', 'sharing'],
  },
  {
    id: 'links-15',
    title: 'How to change favicon for your shared links',
    slug: 'change-favicon',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Customize the favicon displayed for your shared links.',
    content: `# How to change favicon for your shared links

Add your custom favicon to shared links for brand consistency.

## Changing Favicon

1. Go to Account Settings > Branding
2. Find "Favicon" section
3. Upload favicon image:
   - 32x32 or 16x16 pixels
   - ICO, PNG, or SVG format
4. Preview appearance
5. Save changes

## Favicon Requirements

- Size: 32x32 or 16x16 pixels
- Formats: ICO, PNG, SVG
- File size: Under 100KB
- High contrast recommended

## Custom Domain

- Favicon works with custom domains
- Appears in browser tabs
- Shows in bookmarks
- Brand recognition

## Best Practices

- Use your logo or brand icon
- Ensure high contrast
- Test on different browsers
- Keep file size small`,
    createdAt: '2024-09-05',
    updatedAt: '2024-12-01',
    tags: ['links', 'favicon', 'branding'],
  },
  {
    id: 'links-16',
    title: 'How to customize your document link',
    slug: 'customize-document-link',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Customize the appearance and behavior of your document links.',
    content: `# How to customize your document link

Personalize your document links with custom settings and branding.

## Link Customization Options

1. Open your document settings
2. Go to "Link" or "Sharing"
3. Customize:
   - Link alias/slug
   - Custom domain
   - Branding
   - Preview settings
   - Redirect behavior

## Custom Link Slug

- Create memorable link endings
- Use descriptive names
- Easy to remember
- Branded appearance

## Custom Domain

- Use your own domain
- Professional appearance
- Brand consistency
- Increased trust

## Branding

- Custom logo
- Brand colors
- Custom messaging
- Professional look

## Best Practices

- Use clear, descriptive slugs
- Match your brand
- Test link appearance
- Keep it professional`,
    createdAt: '2024-09-10',
    updatedAt: '2024-12-01',
    tags: ['links', 'customization', 'branding'],
  },
  {
    id: 'links-17',
    title: 'How to create a trackable link to your document',
    slug: 'create-trackable-link',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Create links with full analytics and tracking capabilities.',
    content: `# How to create a trackable link to your document

Generate links that provide detailed analytics and tracking information.

## Creating Trackable Links

1. Upload your document
2. Click "Share" or "Create Link"
3. Enable tracking:
   - Analytics enabled by default
   - Page-by-page tracking
   - Viewer identification
4. Copy and share link

## Tracking Features

- View count
- Unique viewers
- Time spent
- Page-by-page analytics
- Geographic data
- Device information

## Analytics Dashboard

- Real-time updates
- Detailed insights
- Export capabilities
- Historical data

## Best Practices

- Always enable tracking
- Review analytics regularly
- Use insights for optimization
- Export data for reporting`,
    createdAt: '2024-09-15',
    updatedAt: '2024-12-01',
    tags: ['links', 'tracking', 'analytics'],
  },
  {
    id: 'links-18',
    title: 'How to remove a document view',
    slug: 'remove-document-view',
    category: 'Links & Permissions',
    categorySlug: 'links-permissions',
    description: 'Delete specific view records from your analytics.',
    content: `# How to remove a document view

Remove individual view records from your document analytics.

## Removing Views

1. Open your document analytics
2. Go to "Views" or "Viewers"
3. Find the view to remove
4. Click "Remove" or delete icon
5. Confirm deletion

## When to Remove Views

- Test views
- Internal team views
- Accidental views
- Data cleanup

## What Gets Removed

- View record
- Analytics data for that view
- Viewer information
- Cannot be recovered

## Best Practices

- Only remove if necessary
- Export data before removing
- Document reasons
- Keep important views`,
    createdAt: '2024-09-20',
    updatedAt: '2024-12-01',
    tags: ['links', 'views', 'analytics', 'management'],
  },
  // Document Analytics - Additional Articles
  {
    id: 'analytics-3',
    title: 'How to export document visits to CSV in DoQshare',
    slug: 'export-document-visits-csv',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Export your document analytics data to CSV format.',
    content: `# How to export document visits to CSV in DoQshare

Download your document analytics data for further analysis.

## Exporting to CSV

1. Open your document analytics
2. Click "Export" button
3. Select "CSV" format
4. Choose data to export:
   - All visits
   - Date range
   - Specific metrics
5. Click "Export"
6. Download file

## Exported Data

- View timestamps
- Viewer information
- Time spent
- Pages viewed
- Geographic data
- Device information

## Use Cases

- Further analysis
- Reporting
- Integration with other tools
- Data backup
- Compliance

## Best Practices

- Export regularly
- Keep exports organized
- Use for reporting
- Backup important data`,
    createdAt: '2024-09-25',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'export', 'csv'],
  },
  {
    id: 'analytics-4',
    title: 'How to export Data Room visits to CSV in DoQshare',
    slug: 'export-data-room-visits-csv',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Export data room analytics to CSV format.',
    content: `# How to export Data Room visits to CSV in DoQshare

Export comprehensive analytics data from your data room.

## Exporting Data Room Analytics

1. Open your data room
2. Go to "Analytics" tab
3. Click "Export"
4. Select "CSV" format
5. Choose export options:
   - All visits
   - Date range
   - Per document
   - Summary data
6. Export and download

## Exported Data Includes

- All visitor data
- Document views
- Time spent
- Download activity
- Q&A interactions
- Access patterns

## Use Cases

- Due diligence reporting
- Investor updates
- Compliance documentation
- Performance analysis

## Best Practices

- Export after important periods
- Keep organized records
- Use for reporting
- Maintain data privacy`,
    createdAt: '2024-09-30',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'export', 'csv', 'data-room'],
  },
  {
    id: 'analytics-5',
    title: 'How to exclude internal visits from analytics',
    slug: 'exclude-internal-visits',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Filter out internal team visits from your analytics.',
    content: `# How to exclude internal visits from analytics

Get accurate analytics by excluding your team's internal views.

## Excluding Internal Visits

1. Go to Account Settings > Analytics
2. Find "Exclude Internal Visits"
3. Add domains or IPs:
   - Company email domains
   - Office IP addresses
   - Team member emails
4. Save settings

## Exclusion Options

- **By Domain**: Exclude email domains
- **By IP**: Exclude IP addresses
- **By Email**: Exclude specific emails
- **Per Document**: Document-specific exclusions

## Benefits

- Accurate viewer counts
- Better engagement metrics
- Focus on external views
- Cleaner analytics

## Best Practices

- Exclude all internal domains
- Update list regularly
- Review excluded visits
- Test exclusion settings`,
    createdAt: '2024-10-01',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'filtering', 'internal-visits'],
  },
  {
    id: 'analytics-6',
    title: 'How to export analytics in DoQshare',
    slug: 'export-analytics',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Export analytics data in various formats.',
    content: `# How to export analytics in DoQshare

Export your analytics data for reporting, analysis, or backup.

## Export Formats

- CSV (spreadsheet)
- JSON (data format)
- PDF (reports)

## Exporting Analytics

1. Open analytics dashboard
2. Select data to export
3. Choose export format
4. Configure options:
   - Date range
   - Metrics included
   - Formatting
5. Click "Export"
6. Download file

## Export Options

- **Full Export**: All data
- **Date Range**: Specific period
- **Filtered**: Custom filters
- **Summary**: Aggregated data

## Use Cases

- Monthly reports
- Client updates
- Data analysis
- Compliance
- Backup

## Best Practices

- Export regularly
- Use appropriate format
- Organize exports
- Keep backups`,
    createdAt: '2024-10-05',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'export', 'reporting'],
  },
  {
    id: 'analytics-7',
    title: 'Viewer Analytics in DoQshare',
    slug: 'viewer-analytics',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Understand detailed analytics about your document viewers.',
    content: `# Viewer Analytics in DoQshare

Get comprehensive insights about who is viewing your documents.

## Viewer Information

- Email addresses
- Names (if provided)
- Organizations
- Geographic location
- Device types
- View history

## Analytics Metrics

- Total views per viewer
- Time spent
- Pages viewed
- Download activity
- Return visits
- Engagement score

## Viewer Insights

- Most engaged viewers
- Viewing patterns
- Content preferences
- Follow-up opportunities

## Use Cases

- Identify hot leads
- Prioritize follow-ups
- Understand audience
- Optimize content

## Best Practices

- Review viewer data regularly
- Identify key viewers
- Track engagement trends
- Use for sales/marketing`,
    createdAt: '2024-10-10',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'viewers', 'insights'],
  },
  {
    id: 'analytics-8',
    title: 'Location tracking in DoQshare',
    slug: 'location-tracking',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Track where your documents are being viewed from.',
    content: `# Location tracking in DoQshare

See where in the world your documents are being accessed.

## Location Data

- Country
- City (if available)
- Region
- Time zone

## Viewing Location Data

1. Open document analytics
2. Go to "Geographic" or "Location"
3. View map or list
4. See view counts by location

## Use Cases

- Global reach analysis
- Regional performance
- Time zone optimization
- Security monitoring

## Privacy

- IP-based location
- Approximate location
- Respects privacy
- GDPR compliant

## Best Practices

- Review location data
- Identify key regions
- Optimize for time zones
- Monitor for anomalies`,
    createdAt: '2024-10-15',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'location', 'geographic'],
  },
  {
    id: 'analytics-9',
    title: 'How can I track engagement with my documents',
    slug: 'track-engagement',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Comprehensive guide to tracking document engagement.',
    content: `# How can I track engagement with my documents

Measure how viewers interact with your documents.

## Engagement Metrics

- Time spent per page
- Total viewing time
- Pages viewed
- Completion rate
- Return visits
- Download activity

## Tracking Features

- Page-by-page analytics
- Viewer identification
- Real-time updates
- Historical data
- Export capabilities

## Using Engagement Data

- Identify engaging content
- Optimize document structure
- Prioritize follow-ups
- Measure effectiveness

## Best Practices

- Review engagement regularly
- Compare documents
- Track trends over time
- Use for optimization

## Tips

- Focus on completion rates
- Track time on key pages
- Identify drop-off points
- Measure return engagement`,
    createdAt: '2024-10-20',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'engagement', 'tracking'],
  },
  {
    id: 'analytics-10',
    title: 'How to manage document views in DoQshare',
    slug: 'manage-document-views',
    category: 'Document Analytics',
    categorySlug: 'document-analytics',
    description: 'Organize and manage your document view records.',
    content: `# How to manage document views in DoQshare

Organize, filter, and manage your document view analytics.

## Managing Views

1. Open document analytics
2. Go to "Views" section
3. Use filters:
   - Date range
   - Viewer
   - Location
   - Device
4. Organize views
5. Export if needed

## View Management Options

- Filter views
- Sort views
- Remove views
- Export views
- View details

## Organization

- Group by viewer
- Sort by date
- Filter by location
- Organize by device

## Best Practices

- Regular cleanup
- Organize views
- Export important data
- Review regularly`,
    createdAt: '2024-10-25',
    updatedAt: '2024-12-01',
    tags: ['analytics', 'views', 'management'],
  },
  // Account & Team - Additional Articles
  {
    id: 'account-2',
    title: 'How to manage team member roles in DoQshare',
    slug: 'manage-team-roles',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Assign and manage roles for your team members.',
    content: `# How to manage team member roles in DoQshare

Control what team members can do with role-based permissions.

## Team Roles

- **Admin**: Full access to all features
- **Member**: Can create and manage documents
- **Viewer**: Read-only access

## Managing Roles

1. Go to Settings > Team
2. Find team member
3. Click "Edit Role"
4. Select new role
5. Save changes

## Role Permissions

### Admin
- All features
- Account settings
- Team management
- Billing

### Member
- Create documents
- Manage own documents
- View analytics
- Limited settings

### Viewer
- View documents
- Read-only access
- No editing

## Best Practices

- Assign appropriate roles
- Review roles regularly
- Use least privilege principle
- Document role assignments`,
    createdAt: '2024-10-30',
    updatedAt: '2024-12-01',
    tags: ['account', 'team', 'roles', 'permissions'],
  },
  {
    id: 'account-3',
    title: 'How to change your team name in DoQshare',
    slug: 'change-team-name',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Update your team or organization name.',
    content: `# How to change your team name in DoQshare

Update your team name to reflect your organization.

## Changing Team Name

1. Go to Account Settings
2. Find "Team" or "Organization"
3. Click "Edit" on team name
4. Enter new name
5. Save changes

## Considerations

- Name appears in shared links
- Affects branding
- Update internal references
- Notify team members

## Best Practices

- Use official organization name
- Keep it professional
- Update consistently
- Document changes`,
    createdAt: '2024-11-01',
    updatedAt: '2024-12-01',
    tags: ['account', 'team', 'settings'],
  },
  {
    id: 'account-4',
    title: 'How to manage email notifications in DoQshare',
    slug: 'manage-email-notifications',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Configure email notification preferences.',
    content: `# How to manage email notifications in DoQshare

Control when and how you receive email notifications.

## Notification Settings

1. Go to Account Settings > Notifications
2. Configure notification types:
   - Document views
   - Downloads
   - Access attempts
   - Team activity
   - System updates
3. Set preferences:
   - Real-time
   - Daily digest
   - Weekly summary
   - Disabled
4. Save settings

## Notification Types

- **View Notifications**: When documents are viewed
- **Download Alerts**: When files are downloaded
- **Team Activity**: Team member actions
- **System Updates**: Platform updates

## Best Practices

- Enable for important documents
- Use digests for less critical
- Review settings regularly
- Test notification delivery`,
    createdAt: '2024-11-05',
    updatedAt: '2024-12-01',
    tags: ['account', 'notifications', 'settings'],
  },
  {
    id: 'account-5',
    title: 'How to delete your DoQshare account',
    slug: 'delete-account',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Permanently delete your DoQshare account.',
    content: `# How to delete your DoQshare account

Permanently remove your account and all associated data.

## Before Deleting

⚠️ **Warning**: This action cannot be undone!

- Export all important documents
- Download analytics data
- Cancel any subscriptions
- Notify team members
- Backup important data

## Deleting Account

1. Go to Account Settings
2. Scroll to "Danger Zone"
3. Click "Delete Account"
4. Enter account password
5. Confirm deletion
6. Account is permanently deleted

## What Gets Deleted

- All documents
- All data rooms
- All analytics data
- Team members
- Account settings
- Billing information

## Recovery

- Cannot be recovered
- All data is permanently deleted
- Make sure to backup first
- Consider deactivating instead

## Alternatives

- Deactivate account (temporary)
- Downgrade to free plan
- Remove team members
- Archive documents`,
    createdAt: '2024-11-10',
    updatedAt: '2024-12-01',
    tags: ['account', 'delete', 'management'],
  },
  {
    id: 'account-6',
    title: 'Understanding the DoQshare dashboard',
    slug: 'understanding-dashboard',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Navigate and understand your DoQshare dashboard.',
    content: `# Understanding the DoQshare dashboard

Learn how to navigate and use your DoQshare dashboard effectively.

## Dashboard Overview

- Document list
- Data rooms
- Analytics overview
- Quick actions
- Recent activity

## Main Sections

### Documents
- All your documents
- Upload new documents
- Quick access
- Search and filter

### Data Rooms
- All data rooms
- Create new data room
- Quick stats
- Recent activity

### Analytics
- Overview metrics
- Recent views
- Engagement stats
- Quick insights

## Navigation

- Sidebar menu
- Top navigation
- Quick search
- User menu

## Best Practices

- Organize documents
- Use folders effectively
- Review analytics regularly
- Keep dashboard clean`,
    createdAt: '2024-11-15',
    updatedAt: '2024-12-01',
    tags: ['account', 'dashboard', 'navigation'],
  },
  {
    id: 'account-7',
    title: 'How to use custom fields in DoQshare',
    slug: 'use-custom-fields',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Add custom metadata fields to your documents.',
    content: `# How to use custom fields in DoQshare

Add custom metadata to organize and track your documents.

## Creating Custom Fields

1. Go to Account Settings > Custom Fields
2. Click "Create Field"
3. Configure field:
   - Field name
   - Field type (text, number, date, etc.)
   - Required or optional
4. Save field

## Using Custom Fields

1. Open document
2. Go to "Details" or "Metadata"
3. Fill in custom fields
4. Save

## Field Types

- Text
- Number
- Date
- Dropdown
- Checkbox
- URL

## Use Cases

- Project tracking
- Client information
- Document categories
- Custom metadata
- Organization

## Best Practices

- Use consistent field names
- Keep fields relevant
- Don't create too many
- Use for important metadata`,
    createdAt: '2024-11-20',
    updatedAt: '2024-12-01',
    tags: ['account', 'custom-fields', 'metadata'],
  },
  {
    id: 'account-8',
    title: 'How to select the right DoQshare plan for your data room',
    slug: 'select-right-plan',
    category: 'Account & Team',
    categorySlug: 'account-team',
    description: 'Choose the best plan for your data room needs.',
    content: `# How to select the right DoQshare plan for your data room

Choose the plan that best fits your data room requirements.

## Plan Comparison

### Free Plan
- Basic features
- Limited storage
- Basic analytics
- Good for testing

### Pro Plan
- More storage
- Advanced analytics
- Custom branding
- Better for individuals

### Business Plan
- Unlimited storage
- Custom domain
- White-labeling
- Team features
- Best for businesses

### Enterprise Plan
- Everything in Business
- Self-hosting option
- Priority support
- Custom SLA
- SSO integration

## Considerations

- Number of data rooms needed
- Storage requirements
- Team size
- Branding needs
- Security requirements

## Best Practices

- Start with free plan
- Upgrade as needed
- Consider team size
- Evaluate features needed
- Review regularly`,
    createdAt: '2024-11-25',
    updatedAt: '2024-12-01',
    tags: ['account', 'plans', 'pricing'],
  },
  // Security - Additional Articles
  {
    id: 'security-2',
    title: 'GDPR compliance',
    slug: 'gdpr-compliance',
    category: 'Security',
    categorySlug: 'security',
    description: 'How DoQshare ensures GDPR compliance for your data.',
    content: `# GDPR compliance

DoQshare is fully compliant with the General Data Protection Regulation (GDPR).

## GDPR Features

- Data encryption
- Right to access
- Right to deletion
- Data portability
- Privacy by design
- Consent management

## Your Rights

- Access your data
- Request data deletion
- Export your data
- Object to processing
- Rectify inaccurate data

## Data Protection

- Encryption at rest and in transit
- Secure data storage
- Regular security audits
- Data breach notification
- Privacy impact assessments

## Compliance Measures

- Data processing agreements
- Privacy policy
- Cookie consent
- Data retention policies
- Regular compliance reviews

## Best Practices

- Understand your rights
- Review privacy settings
- Export data regularly
- Keep data updated
- Report concerns`,
    createdAt: '2024-11-30',
    updatedAt: '2024-12-01',
    tags: ['security', 'gdpr', 'compliance', 'privacy'],
  },
  {
    id: 'security-3',
    title: 'How to self-host DoQshare',
    slug: 'self-host',
    category: 'Self-Hosting',
    categorySlug: 'self-hosting',
    description: 'Deploy DoQshare on your own infrastructure.',
    content: `# How to self-host DoQshare

Deploy DoQshare on your own servers for maximum control and data sovereignty.

## Self-Hosting Requirements

- Enterprise plan
- Server infrastructure
- Docker knowledge
- Technical expertise

## Deployment Options

### Docker
- Easiest deployment
- Containerized
- Quick setup

### Kubernetes
- Scalable deployment
- Production-ready
- Advanced configuration

### Manual Installation
- Full control
- Custom configuration
- Advanced setup

## Setup Process

1. Obtain self-hosting license
2. Prepare infrastructure
3. Install DoQshare
4. Configure settings
5. Set up SSL
6. Deploy

## Benefits

- Complete data control
- Custom configurations
- On-premises deployment
- Enhanced security
- Compliance flexibility

## Best Practices

- Follow deployment guide
- Regular updates
- Security monitoring
- Backup strategy
- Documentation`,
    createdAt: '2024-12-01',
    updatedAt: '2024-12-01',
    tags: ['self-hosting', 'deployment', 'enterprise'],
  },
  {
    id: 'security-4',
    title: 'Why are open source projects more secure',
    slug: 'open-source-security',
    category: 'Security',
    categorySlug: 'security',
    description: 'Understanding the security benefits of open source software.',
    content: `# Why are open source projects more secure

Open source software offers unique security advantages.

## Security Benefits

- **Transparency**: Code is visible to all
- **Community Review**: Many eyes on the code
- **Rapid Patching**: Quick security fixes
- **No Hidden Backdoors**: Code is auditable
- **Independent Verification**: Anyone can verify

## How It Works

- Source code is publicly available
- Security researchers can audit
- Vulnerabilities are found quickly
- Fixes are developed rapidly
- Community contributes improvements

## DoQshare and Open Source

- Core components are open source
- Community contributions
- Regular security audits
- Transparent development
- Security-first approach

## Best Practices

- Review source code
- Stay updated
- Report vulnerabilities
- Contribute improvements
- Trust but verify`,
    createdAt: '2024-12-02',
    updatedAt: '2024-12-01',
    tags: ['security', 'open-source', 'transparency'],
  },
  {
    id: 'security-5',
    title: 'How to add agreements before viewing documents or data rooms',
    slug: 'add-agreements-before-viewing',
    category: 'Security',
    categorySlug: 'security',
    description: 'Require viewers to accept agreements before accessing content.',
    content: `# How to add agreements before viewing documents or data rooms

Require viewers to accept terms, NDAs, or other agreements before access.

## Adding Agreements

1. Open document or data room settings
2. Go to "Security" or "Agreements"
3. Click "Add Agreement"
4. Upload agreement document or use template
5. Configure:
   - Agreement type (NDA, Terms, etc.)
   - Required for all viewers
   - Acceptance tracking
6. Save

## Agreement Types

- **NDA**: Non-disclosure agreements
- **Terms of Service**: Usage terms
- **Privacy Policy**: Privacy terms
- **Custom**: Your own agreement

## Acceptance Tracking

- Track who accepted
- When they accepted
- IP address
- Export acceptance records

## Best Practices

- Use legally-reviewed agreements
- Make agreements clear
- Track all acceptances
- Keep records for compliance
- Update agreements as needed`,
    createdAt: '2024-12-03',
    updatedAt: '2024-12-01',
    tags: ['security', 'agreements', 'nda', 'compliance'],
  },
  {
    id: 'security-6',
    title: 'Audit logs',
    slug: 'audit-logs',
    category: 'Security',
    categorySlug: 'security',
    description: 'Comprehensive audit logging for compliance and security.',
    content: `# Audit logs

Track all activity in your DoQshare account with comprehensive audit logs.

## What's Logged

- Document views
- Downloads
- Access attempts
- Permission changes
- Settings changes
- Team member actions
- Data room activity

## Viewing Audit Logs

1. Go to Account Settings > Audit Logs
2. Filter by:
   - Date range
   - User
   - Action type
   - Document
3. View detailed logs
4. Export if needed

## Log Details

- Timestamp
- User/Viewer
- Action performed
- IP address
- Location
- Device information

## Use Cases

- Compliance requirements
- Security monitoring
- Activity tracking
- Investigation
- Reporting

## Best Practices

- Review logs regularly
- Export important logs
- Monitor for anomalies
- Keep logs secure
- Use for compliance`,
    createdAt: '2024-12-04',
    updatedAt: '2024-12-01',
    tags: ['security', 'audit-logs', 'compliance'],
  },
  {
    id: 'security-7',
    title: 'How to remove DoQshare branding',
    slug: 'remove-branding',
    category: 'Security',
    categorySlug: 'security',
    description: 'Remove DoQshare branding for white-label experience.',
    content: `# How to remove DoQshare branding

Create a fully white-labeled experience by removing DoQshare branding.

## Removing Branding

1. Go to Account Settings > Branding
2. Enable "White Label" mode
3. Configure:
   - Remove DoQshare logo
   - Replace with your logo
   - Custom colors
   - Custom domain
4. Save settings

## Requirements

- Business plan or higher
- Custom domain (recommended)
- Brand assets ready

## White-Label Features

- No DoQshare branding
- Your logo everywhere
- Custom colors
- Branded emails
- Custom domain

## Best Practices

- Use high-quality assets
- Maintain brand consistency
- Test on all devices
- Keep branding updated`,
    createdAt: '2024-12-05',
    updatedAt: '2024-12-01',
    tags: ['security', 'branding', 'white-label'],
  },
  // Videos
  {
    id: 'videos-1',
    title: 'How to share and analyze videos',
    slug: 'share-analyze-videos',
    category: 'Videos',
    categorySlug: 'videos',
    description: 'Share videos securely and track viewer engagement.',
    content: `# How to share and analyze videos

Share videos securely and get detailed analytics on viewer engagement.

## Sharing Videos

1. Upload video file
2. Configure video settings:
   - Access permissions
   - Download options
   - Watermarking
3. Create shareable link
4. Share with viewers

## Video Analytics

- View count
- Watch time
- Completion rate
- Engagement metrics
- Viewer information

## Video Features

- Secure sharing
- Password protection
- Expiration dates
- Download control
- Watermarking

## Best Practices

- Optimize video size
- Use appropriate format
- Test playback
- Monitor analytics
- Update content regularly`,
    createdAt: '2024-12-06',
    updatedAt: '2024-12-01',
    tags: ['videos', 'sharing', 'analytics'],
  },
  // Notion Documents
  {
    id: 'notion-1',
    title: 'How to share Notion documents using DoQshare',
    slug: 'share-notion-documents',
    category: 'Notion Documents',
    categorySlug: 'notion-documents',
    description: 'Share your Notion pages securely with DoQshare.',
    content: `# How to share Notion documents using DoQshare

Share your Notion pages with secure tracking and analytics.

## Sharing Notion Documents

1. Connect your Notion account
2. Select Notion page to share
3. Configure sharing settings:
   - Access permissions
   - Analytics tracking
   - Custom branding
4. Generate shareable link
5. Share with viewers

## Notion Integration Features

- Secure Notion sharing
- Page-by-page analytics
- Access control
- Custom branding
- Download options

## Use Cases

- Share internal docs externally
- Track external Notion views
- Secure Notion content
- Professional presentation

## Best Practices

- Keep Notion pages updated
- Use clear page structure
- Test sharing before sending
- Monitor analytics`,
    createdAt: '2024-12-07',
    updatedAt: '2024-12-01',
    tags: ['notion', 'sharing', 'integration'],
  },
  // Custom Domains - Additional
  {
    id: 'custom-2',
    title: 'How to disable feedback from visitors on your documents',
    slug: 'disable-feedback',
    category: 'Custom Domains & Branding',
    categorySlug: 'custom-domains',
    description: 'Turn off visitor feedback features on your documents.',
    content: `# How to disable feedback from visitors on your documents

Control whether viewers can leave feedback on your documents.

## Disabling Feedback

1. Open your document settings
2. Go to "Features" or "Options"
3. Find "Feedback" section
4. Disable "Allow Feedback"
5. Save settings

## Feedback Options

- **Enabled**: Viewers can leave feedback
- **Disabled**: No feedback allowed
- **Moderated**: Review before showing

## When to Disable

- Sensitive documents
- Final versions
- Professional presentations
- Reduce noise

## Best Practices

- Enable for drafts
- Disable for final versions
- Use moderation if needed
- Review feedback regularly`,
    createdAt: '2024-12-08',
    updatedAt: '2024-12-01',
    tags: ['custom-domains', 'feedback', 'settings'],
  },
  {
    id: 'custom-3',
    title: 'How to add feedback questions to your DoQshare documents',
    slug: 'add-feedback-questions',
    category: 'Custom Domains & Branding',
    categorySlug: 'custom-domains',
    description: 'Add custom questions for viewers to answer.',
    content: `# How to add feedback questions to your DoQshare documents

Collect structured feedback from viewers with custom questions.

## Adding Feedback Questions

1. Open your document settings
2. Go to "Feedback" section
3. Click "Add Question"
4. Create questions:
   - Question text
   - Question type (text, rating, etc.)
   - Required or optional
5. Save questions

## Question Types

- **Text**: Open-ended responses
- **Rating**: Star or number rating
- **Multiple Choice**: Select from options
- **Yes/No**: Binary questions

## Managing Feedback

- View all responses
- Export feedback data
- Analyze responses
- Follow up with viewers

## Best Practices

- Keep questions relevant
- Don't ask too many
- Make questions clear
- Review responses regularly`,
    createdAt: '2024-12-09',
    updatedAt: '2024-12-01',
    tags: ['custom-domains', 'feedback', 'questions'],
  },
];

// Helper functions
export function getArticlesByCategory(categorySlug: string): HelpArticle[] {
  return helpArticles.filter(article => article.categorySlug === categorySlug);
}

export function getFeaturedArticles(): HelpArticle[] {
  return helpArticles.filter(article => article.featured);
}

export function getRecentArticles(limit: number = 10): HelpArticle[] {
  return [...helpArticles]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
}

export function getArticleBySlug(slug: string, categorySlug?: string): HelpArticle | undefined {
  if (categorySlug) {
    return helpArticles.find(
      article => article.slug === slug && article.categorySlug === categorySlug
    );
  }
  return helpArticles.find(article => article.slug === slug);
}

export function searchArticles(query: string): HelpArticle[] {
  const lowerQuery = query.toLowerCase();
  return helpArticles.filter(
    article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.description?.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery) ||
      article.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getCategoryBySlug(slug: string): HelpCategory | undefined {
  return helpCategories.find(category => category.slug === slug);
}

