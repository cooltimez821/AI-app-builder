const apps = [
    {
        rank: 1,
        title: "Todo List App",
        description: "A simple task management app with add, edit, delete, and mark complete functionality.",
        category: "productivity",
        difficulty: 2,
        tags: ["CRUD", "Local Storage", "JavaScript"],
        features: ["Add/edit/delete tasks", "Mark tasks complete", "Filter by status", "Local storage persistence"]
    },
    {
        rank: 2,
        title: "Weather App",
        description: "Display current weather and forecast using a weather API with location detection.",
        category: "utility",
        difficulty: 2,
        tags: ["API Integration", "Geolocation", "Responsive"],
        features: ["Current weather display", "5-day forecast", "Location detection", "Weather icons"]
    },
    {
        rank: 3,
        title: "Calculator",
        description: "A functional calculator with basic arithmetic operations and memory functions.",
        category: "utility",
        difficulty: 1,
        tags: ["JavaScript", "Math", "UI/UX"],
        features: ["Basic arithmetic", "Memory functions", "Keyboard support", "History log"]
    },
    {
        rank: 4,
        title: "Password Generator",
        description: "Generate secure passwords with customizable length and character sets.",
        category: "utility",
        difficulty: 1,
        tags: ["Security", "Randomization", "Customizable"],
        features: ["Custom length", "Character options", "Copy to clipboard", "Strength indicator"]
    },
    {
        rank: 5,
        title: "QR Code Generator",
        description: "Convert text or URLs into QR codes with download functionality.",
        category: "utility",
        difficulty: 1,
        tags: ["QR Code", "Canvas", "Download"],
        features: ["Text to QR", "URL to QR", "Download as image", "Size customization"]
    },
    {
        rank: 6,
        title: "Color Palette Generator",
        description: "Generate beautiful color palettes for design projects with export options.",
        category: "utility",
        difficulty: 2,
        tags: ["Design", "Colors", "Export"],
        features: ["Random palettes", "Color harmony rules", "Export formats", "Save favorites"]
    },
    {
        rank: 7,
        title: "Unit Converter",
        description: "Convert between different units of measurement (length, weight, temperature, etc.).",
        category: "utility",
        difficulty: 2,
        tags: ["Conversion", "Math", "Multiple Units"],
        features: ["Multiple unit types", "Real-time conversion", "History", "Favorites"]
    },
    {
        rank: 8,
        title: "Expense Tracker",
        description: "Track daily expenses with categories, budgets, and spending analytics.",
        category: "productivity",
        difficulty: 3,
        tags: ["Finance", "Charts", "Analytics"],
        features: ["Expense categories", "Budget tracking", "Spending charts", "Export data"]
    },
    {
        rank: 9,
        title: "Note Taking App",
        description: "Create, edit, and organize notes with search and tagging functionality.",
        category: "productivity",
        difficulty: 2,
        tags: ["CRUD", "Search", "Tags"],
        features: ["Rich text editing", "Search notes", "Tag system", "Export options"]
    },
    {
        rank: 10,
        title: "Pomodoro Timer",
        description: "Productivity timer using the Pomodoro Technique with customizable intervals.",
        category: "productivity",
        difficulty: 2,
        tags: ["Timer", "Productivity", "Notifications"],
        features: ["Customizable intervals", "Break reminders", "Session tracking", "Sound notifications"]
    },
    {
        rank: 11,
        title: "Random Quote Generator",
        description: "Display inspirational quotes with sharing and favoriting capabilities.",
        category: "entertainment",
        difficulty: 1,
        tags: ["API", "Social Sharing", "Favorites"],
        features: ["Random quotes", "Share quotes", "Favorite quotes", "Category filters"]
    },
    {
        rank: 12,
        title: "URL Shortener",
        description: "Shorten long URLs and track click analytics with custom aliases.",
        category: "utility",
        difficulty: 3,
        tags: ["URL Processing", "Analytics", "Database"],
        features: ["Shorten URLs", "Custom aliases", "Click tracking", "Analytics dashboard"]
    },
    {
        rank: 13,
        title: "Habit Tracker",
        description: "Track daily habits with streaks, progress visualization, and reminders.",
        category: "productivity",
        difficulty: 3,
        tags: ["Tracking", "Visualization", "Reminders"],
        features: ["Habit streaks", "Progress charts", "Reminders", "Goal setting"]
    },
    {
        rank: 14,
        title: "Recipe Finder",
        description: "Search for recipes by ingredients with nutritional information and ratings.",
        category: "utility",
        difficulty: 3,
        tags: ["API Integration", "Search", "Nutrition"],
        features: ["Ingredient search", "Nutritional info", "Recipe ratings", "Save favorites"]
    },
    {
        rank: 15,
        title: "Markdown Editor",
        description: "Live markdown editor with preview, syntax highlighting, and export options.",
        category: "productivity",
        difficulty: 2,
        tags: ["Markdown", "Live Preview", "Export"],
        features: ["Live preview", "Syntax highlighting", "Export HTML/PDF", "File management"]
    },
    {
        rank: 16,
        title: "Image Resizer",
        description: "Resize and compress images with batch processing and format conversion.",
        category: "utility",
        difficulty: 2,
        tags: ["Image Processing", "Batch", "Compression"],
        features: ["Resize images", "Format conversion", "Batch processing", "Quality control"]
    },
    {
        rank: 17,
        title: "Flashcard App",
        description: "Create and study flashcards with spaced repetition and progress tracking.",
        category: "productivity",
        difficulty: 3,
        tags: ["Education", "Spaced Repetition", "Progress"],
        features: ["Create flashcards", "Spaced repetition", "Progress tracking", "Categories"]
    },
    {
        rank: 18,
        title: "Budget Calculator",
        description: "Calculate and plan budgets with income, expenses, and savings goals.",
        category: "business",
        difficulty: 2,
        tags: ["Finance", "Calculations", "Planning"],
        features: ["Income tracking", "Expense categories", "Savings goals", "Budget reports"]
    },
    {
        rank: 19,
        title: "Text Analyzer",
        description: "Analyze text for word count, readability, sentiment, and keyword density.",
        category: "utility",
        difficulty: 2,
        tags: ["Text Processing", "Analytics", "NLP"],
        features: ["Word count", "Readability score", "Sentiment analysis", "Keyword density"]
    },
    {
        rank: 20,
        title: "Contact Manager",
        description: "Manage contacts with search, categories, and import/export functionality.",
        category: "productivity",
        difficulty: 3,
        tags: ["CRUD", "Search", "Import/Export"],
        features: ["Add/edit contacts", "Search & filter", "Categories", "Import/export CSV"]
    },
    {
        rank: 21,
        title: "Meme Generator",
        description: "Create memes with text overlay on images and sharing capabilities.",
        category: "entertainment",
        difficulty: 2,
        tags: ["Image Editing", "Canvas", "Social"],
        features: ["Text overlay", "Image upload", "Meme templates", "Share & download"]
    },
    {
        rank: 22,
        title: "Invoice Generator",
        description: "Create professional invoices with client management and PDF export.",
        category: "business",
        difficulty: 3,
        tags: ["PDF Generation", "Business", "Templates"],
        features: ["Invoice templates", "Client management", "PDF export", "Tax calculations"]
    },
    {
        rank: 23,
        title: "Typing Speed Test",
        description: "Test typing speed and accuracy with different difficulty levels and statistics.",
        category: "entertainment",
        difficulty: 2,
        tags: ["Typing", "Statistics", "Gamification"],
        features: ["Speed testing", "Accuracy tracking", "Difficulty levels", "Progress history"]
    },
    {
        rank: 24,
        title: "Color Picker Tool",
        description: "Pick colors from images or generate palettes with hex, RGB, and HSL values.",
        category: "utility",
        difficulty: 2,
        tags: ["Color", "Image Processing", "Design"],
        features: ["Color picking", "Multiple formats", "Palette generation", "Color history"]
    },
    {
        rank: 25,
        title: "Simple Chat App",
        description: "Real-time chat application with rooms, user authentication, and message history.",
        category: "entertainment",
        difficulty: 4,
        tags: ["Real-time", "WebSocket", "Authentication"],
        features: ["Real-time messaging", "Chat rooms", "User authentication", "Message history"]
    }
];

function createAppCard(app) {
    const difficultyStars = '★'.repeat(app.difficulty) + '☆'.repeat(5 - app.difficulty);
    
    return `
        <div class="app-card" data-category="${app.category}">
            <div class="app-rank">${app.rank}</div>
            <h3 class="app-title">${app.title}</h3>
            <p class="app-description">${app.description}</p>
            
            <div class="app-tags">
                ${app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
            </div>
            
            <div class="app-difficulty">
                <span class="difficulty-label">Difficulty:</span>
                <span class="difficulty-stars">${difficultyStars}</span>
            </div>
            
            <ul class="app-features">
                ${app.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <button class="build-btn" onclick="startBuilding('${app.title}')">
                Start Building 🚀
            </button>
        </div>
    `;
}

function renderApps(appsToRender = apps) {
    const appsGrid = document.getElementById('appsGrid');
    appsGrid.innerHTML = appsToRender.map(app => createAppCard(app)).join('');
}

function filterApps(category) {
    const filteredApps = category === 'all' ? apps : apps.filter(app => app.category === category);
    renderApps(filteredApps);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

function searchApps(query) {
    const filteredApps = apps.filter(app => 
        app.title.toLowerCase().includes(query.toLowerCase()) ||
        app.description.toLowerCase().includes(query.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    renderApps(filteredApps);
}

function startBuilding(appTitle) {
    const app = apps.find(a => a.title === appTitle);
    showProjectModal(app);
}

function showProjectModal(app) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>🚀 Start Building: ${app.title}</h2>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            
            <div class="modal-body">
                <div class="step-section">
                    <h3>📋 Project Setup</h3>
                    <div class="code-block">
                        <code>mkdir ${app.title.toLowerCase().replace(/\s+/g, '-')}-app
cd ${app.title.toLowerCase().replace(/\s+/g, '-')}-app
npm init -y</code>
                        <button onclick="copyToClipboard(this)" class="copy-btn">Copy</button>
                    </div>
                </div>

                <div class="step-section">
                    <h3>🤖 AI Assistant Prompts</h3>
                    <div class="ai-prompts">
                        <div class="prompt-item">
                            <strong>Initial Setup:</strong>
                            <p>"Help me create a ${app.title.toLowerCase()} with the following features: ${app.features.join(', ')}. Please provide the basic HTML structure and CSS styling."</p>
                        </div>
                        <div class="prompt-item">
                            <strong>Functionality:</strong>
                            <p>"Now add JavaScript functionality for: ${app.features[0]} and ${app.features[1]}. Make it interactive and user-friendly."</p>
                        </div>
                    </div>
                </div>

                <div class="step-section">
                    <h3>🔗 Helpful Resources</h3>
                    <div class="resource-links">
                        <a href="https://chat.openai.com" target="_blank" class="resource-btn">ChatGPT</a>
                        <a href="https://claude.ai" target="_blank" class="resource-btn">Claude</a>
                        <a href="https://cursor.sh" target="_blank" class="resource-btn">Cursor IDE</a>
                        <a href="https://replit.com" target="_blank" class="resource-btn">Replit</a>
                    </div>
                </div>

                <div class="step-section">
                    <h3>✅ Development Checklist</h3>
                    <ul class="checklist">
                        ${app.features.map(feature => `<li><input type="checkbox"> ${feature}</li>`).join('')}
                        <li><input type="checkbox"> Add responsive design</li>
                        <li><input type="checkbox"> Test on different devices</li>
                        <li><input type="checkbox"> Deploy to GitHub Pages</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function copyToClipboard(button) {
    const codeBlock = button.previousElementSibling;
    navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => button.textContent = 'Copy', 2000);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderApps();
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterApps(btn.dataset.category);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInput.addEventListener('input', (e) => {
        searchApps(e.target.value);
    });
    
    searchBtn.addEventListener('click', () => {
        searchApps(searchInput.value);
    });
    
    // Enter key for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchApps(searchInput.value);
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});