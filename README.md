# Personal Resume Portfolio

A clean, modern, and responsive personal resume website built with HTML, CSS, and JavaScript. Features smooth transitions, dynamic elements, and a professional design perfect for showcasing your skills and experience.

## Features

- ✨ **Modern Design**: Clean and professional layout with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- 🎯 **Smooth Scrolling**: Seamless navigation between sections
- 🔝 **Back to Top Button**: Dynamic button that appears when scrolling
- 📊 **Animated Skill Bars**: Visual representation of your skills with smooth animations
- 🎨 **Interactive Elements**: Hover effects and transitions throughout
- 📝 **Contact Form**: Functional contact form with validation
- 🌙 **Professional Color Scheme**: Modern gradient backgrounds and consistent styling

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and key statistics
3. **Experience**: Timeline-based work history
4. **Skills**: Visual skill bars with proficiency levels
5. **Projects**: Showcase of your best work
6. **Contact**: Contact information and contact form

## Customization Guide

### Personal Information

1. **Update the hero section** in `index.html`:
   - Change the name in the title and hero section
   - Update the subtitle and description
   - Modify the profile image (currently using a placeholder icon)

2. **Update contact information** in the contact section:
   - Email address
   - Phone number
   - Location
   - Social media links

### Experience Section

Edit the timeline items in `index.html`:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">2023 - Present</p>
        <p>Your job description and achievements...</p>
    </div>
</div>
```

### Skills Section

Update the skills in `index.html`:
```html
<div class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85"></div>
    </div>
</div>
```
Change the `data-width` value (0-100) to reflect your proficiency level.

### Projects Section

Replace the project cards with your own projects:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### Styling Customization

The main styling is in `styles.css`. You can customize:

- **Colors**: Update the CSS custom properties for primary colors
- **Fonts**: Change the Google Fonts import in the HTML head
- **Animations**: Modify transition durations and effects
- **Layout**: Adjust spacing, padding, and grid layouts

### Adding New Sections

To add a new section:

1. Add the HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Add navigation link in the navbar
4. Add scroll animation classes if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized CSS with efficient selectors
- Smooth scroll behavior
- Intersection Observer for animations
- Minimal JavaScript footprint
- Responsive images and icons

## Getting Started

1. Clone or download the files
2. Open `index.html` in your browser
3. Customize the content as needed
4. Deploy to your preferred hosting service

## Deployment

You can deploy this resume to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your resume. 