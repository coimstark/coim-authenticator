# COIM Authenticator - GitHub Pages Website

A modern, animated website for the COIM Authenticator app - a secure two-factor authentication solution.

## Features

- Fully responsive design that works on mobile, tablet, and desktop
- Modern UI with animations and interactive elements
- Complete pages including Home, About, Privacy Policy, and Terms of Service
- 404 error page
- Ready to deploy on GitHub Pages

## Setup Instructions

### Deploying to GitHub Pages

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/yourusername/coim-authenticator-site.git
   cd coim-authenticator-site
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select the main branch as the source
   - Click Save

3. **Customize the Site**
   - Update information in the HTML files to match your app details
   - Replace placeholder images with your own app screenshots
   - Update links to your actual app download pages and social media

### Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/coimstark/coim-authenticator-site.git
   cd coim-authenticator-site
   ```

2. **Open with a Local Server**
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Or with Node.js (after installing `http-server`):
     ```bash
     npx http-server
     ```

3. **View in Browser**
   - Open `http://localhost:8000` in your browser

## File Structure

```
coim-authenticator-site/
├── index.html            # Home page
├── about.html            # About page
├── privacy.html          # Privacy policy
├── terms.html            # Terms of service
├── 404.html              # 404 error page
├── css/
│   └── styles.css        # Main stylesheet
├── js/
│   └── script.js         # JavaScript functionality
├── assets/
│   └── multi-device.svg  # SVG illustration
├── favicon/              # Favicon files
└── .github/
    └── workflows/        # GitHub Actions config
        └── pages.yml
```

## Customization

### Colors

The main color scheme can be modified in the CSS file. Look for the `:root` section at the beginning of `styles.css`:

```css
:root {
    --primary: #4f46e5;
    --primary-dark: #3730a3;
    --primary-light: #818cf8;
    --secondary: #10b981;
    /* other color variables */
}
```

### Content

- Update the app description, features, and other text in the HTML files
- Replace the download links with actual app store links
- Update email addresses and other contact information

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Last Updated

2025-03-06