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
// Enhanced features data (keeping original visual design)
const enhancedAppData = {
    "Todo List App": {
        buildTime: "2-4 hours",
        complexity: "Frontend Only",
        techStack: ["HTML", "CSS", "JavaScript"],
        resources: [
            { name: "MDN Local Storage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" },
            { name: "JavaScript DOM Tutorial", url: "https://www.w3schools.com/js/js_htmldom.asp" }
        ],
        relatedApps: ["Note Taking App", "Habit Tracker", "Contact Manager"],
        rating: 4.8,
        views: 1250,
        builds: 890
    },
    "Weather App": {
        buildTime: "3-5 hours",
        complexity: "API Required",
        techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
        resources: [
            { name: "OpenWeatherMap API", url: "https://openweathermap.org/api" },
            { name: "Geolocation API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" }
        ],
        relatedApps: ["Recipe Finder", "Text Analyzer", "Unit Converter"],
        rating: 4.6,
        views: 980,
        builds: 720
    },
    "Calculator": {
        buildTime: "1-2 hours",
        complexity: "Frontend Only",
        techStack: ["HTML", "CSS", "JavaScript"],
        resources: [
            { name: "JavaScript Math Object", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" },
            { name: "CSS Grid Layout", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
        ],
        relatedApps: ["Unit Converter", "Budget Calculator", "Text Analyzer"],
        rating: 4.9,
        views: 1450,
        builds: 1200
    }
    // Add more app data as needed...
};

// App statistics tracking (no visual changes)
let appStats = JSON.parse(localStorage.getItem('appStats') || '{}');
let userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');

// Initialize enhanced features
function initializeEnhancedFeatures() {
    // Initialize stats for all apps
    apps.forEach(app => {
        if (!appStats[app.title]) {
            const enhanced = enhancedAppData[app.title];
            appStats[app.title] = {
                views: enhanced ? enhanced.views : Math.floor(Math.random() * 1000) + 100,
                builds: enhanced ? enhanced.builds : Math.floor(Math.random() * 500) + 50,
                lastViewed: null
            };
        }
    });
    localStorage.setItem('appStats', JSON.stringify(appStats));
}

// Track app interactions (backend functionality)
function trackAppView(appTitle) {
    if (!appStats[appTitle]) {
        appStats[appTitle] = { views: 0, builds: 0, lastViewed: null };
    }
    appStats[appTitle].views++;
    appStats[appTitle].lastViewed = new Date().toISOString();
    localStorage.setItem('appStats', JSON.stringify(appStats));
}

function trackAppBuild(appTitle) {
    if (!appStats[appTitle]) {
        appStats[appTitle] = { views: 0, builds: 0, lastViewed: null };
    }
    appStats[appTitle].builds++;
    localStorage.setItem('appStats', JSON.stringify(appStats));
}

// Enhanced project modal (keeping original design)
function showEnhancedProjectModal(app) {
    const enhanced = enhancedAppData[app.title] || {};
    const stats = appStats[app.title] || { views: 0, builds: 0 };
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>🚀 Start Building: ${app.title}</h2>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            
            <div class="modal-body">
                <!-- Quick Start Templates -->
                <div class="step-section">
                    <h3>⚡ Quick Start Options</h3>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <button onclick="downloadTemplate('${app.title}')" style="background: #10b981; color: white; border: none; padding: 0.75rem 1rem; border-radius: 4px; cursor: pointer;">
                            📁 Download Template
                        </button>
                        <button onclick="generateAIPrompt('${app.title}')" style="background: #667eea; color: white; border: none; padding: 0.75rem 1rem; border-radius: 4px; cursor: pointer;">
                            🤖 Get AI Prompt
                        </button>
                    </div>
                </div>

                <!-- App Statistics -->
                <div class="step-section">
                    <h3>📊 App Statistics</h3>
                    <p style="color: #6b7280; margin-bottom: 1rem;">
                        👀 ${stats.views} views • 🚀 ${stats.builds} builds • ⭐ ${enhanced.rating || '4.5'} rating
                        ${enhanced.buildTime ? ` • ⏱️ ${enhanced.buildTime}` : ''}
                        ${enhanced.complexity ? ` • 🎯 ${enhanced.complexity}` : ''}
                    </p>
                </div>

                <!-- Original project setup -->
                <div class="step-section">
                    <h3>📋 Project Setup</h3>
                    <div class="code-block">
                        <code>mkdir ${app.title.toLowerCase().replace(/\s+/g, '-')}-app
cd ${app.title.toLowerCase().replace(/\s+/g, '-')}-app
npm init -y</code>
                        <button onclick="copyToClipboard(this)" class="copy-btn">Copy</button>
                    </div>
                </div>

                <!-- Enhanced resources -->
                ${enhanced.resources ? `
                <div class="step-section">
                    <h3>📚 Essential Resources</h3>
                    <div class="resource-links">
                        ${enhanced.resources.map(resource => 
                            `<a href="${resource.url}" target="_blank" class="resource-btn">${resource.name}</a>`
                        ).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Technology Stack -->
                ${enhanced.techStack ? `
                <div class="step-section">
                    <h3>🛠️ Technology Stack</h3>
                    <p style="color: #6b7280;">
                        ${enhanced.techStack.join(' • ')}
                    </p>
                </div>
                ` : ''}

                <!-- Related Apps -->
                ${enhanced.relatedApps ? `
                <div class="step-section">
                    <h3>🔗 Related Apps You Might Like</h3>
                    <p style="color: #6b7280;">
                        ${enhanced.relatedApps.join(' • ')}
                    </p>
                </div>
                ` : ''}

                <!-- Original AI prompts section -->
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

                <!-- Original resources -->
                <div class="step-section">
                    <h3>🔗 Helpful Resources</h3>
                    <div class="resource-links">
                        <a href="https://chat.openai.com" target="_blank" class="resource-btn">ChatGPT</a>
                        <a href="https://claude.ai" target="_blank" class="resource-btn">Claude</a>
                        <a href="https://cursor.sh" target="_blank" class="resource-btn">Cursor IDE</a>
                        <a href="https://replit.com" target="_blank" class="resource-btn">Replit</a>
                    </div>
                </div>

                <!-- Original checklist -->
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

// Enhanced start building function
function startBuildingEnhanced(appTitle) {
    const app = apps.find(a => a.title === appTitle);
    trackAppView(appTitle);
    trackAppBuild(appTitle);
    showEnhancedProjectModal(app);
}

// Download template functionality
function downloadTemplate(appTitle) {
    const projectName = appTitle.toLowerCase().replace(/\s+/g, '-');
    const enhanced = enhancedAppData[appTitle] || {};
    
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appTitle}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${appTitle}</h1>
        </header>
        <main>
            <!-- Add your ${appTitle.toLowerCase()} content here -->
            <div class="app-content">
                <p>Start building your ${appTitle.toLowerCase()} here!</p>
            </div>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>`;
    
    // Download the HTML file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectName}-template.html`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert('Template downloaded! This includes a basic HTML structure to get you started.');
}

// Generate AI prompt functionality
function generateAIPrompt(appTitle) {
    const app = apps.find(a => a.title === appTitle);
    const enhanced = enhancedAppData[appTitle] || {};
    
    const prompt = `Create a ${appTitle.toLowerCase()} with the following specifications:

Features to implement:
${app.features.map(feature => `- ${feature}`).join('\n')}

${enhanced.techStack ? `Technologies to use: ${enhanced.techStack.join(', ')}` : ''}
${enhanced.complexity ? `Complexity level: ${enhanced.complexity}` : ''}
${enhanced.buildTime ? `Estimated build time: ${enhanced.buildTime}` : ''}

Please provide:
1. Complete HTML structure
2. CSS styling (modern and responsive)
3. JavaScript functionality
4. Comments explaining the code
5. Instructions for setup and deployment

Make it beginner-friendly but professional-looking.`;

    navigator.clipboard.writeText(prompt).then(() => {
        alert('AI prompt copied to clipboard! Paste this into ChatGPT, Claude, or your preferred AI assistant.');
    });
}

// Override the original startBuilding function
const originalStartBuilding = startBuilding;
startBuilding = startBuildingEnhanced;

// Initialize enhanced features when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeEnhancedFeatures();
});

// Progress Tracker & Random App Generator (keeping original design)

// Progress tracking storage
let completedApps = JSON.parse(localStorage.getItem('completedApps') || '[]');
let appProgress = JSON.parse(localStorage.getItem('appProgress') || '{}');

// Initialize progress tracking
function initializeProgressTracker() {
    // Add progress data to existing apps
    apps.forEach(app => {
        if (!appProgress[app.title]) {
            appProgress[app.title] = {
                started: false,
                completed: false,
                startDate: null,
                completedDate: null,
                timeSpent: 0
            };
        }
    });
    updateProgressDisplay();
}

// Mark app as started
function markAppStarted(appTitle) {
    if (!appProgress[appTitle].started) {
        appProgress[appTitle].started = true;
        appProgress[appTitle].startDate = new Date().toISOString();
        localStorage.setItem('appProgress', JSON.stringify(appProgress));
        updateProgressDisplay();
    }
}

// Mark app as completed
function markAppCompleted(appTitle) {
    appProgress[appTitle].completed = true;
    appProgress[appTitle].completedDate = new Date().toISOString();
    
    if (!completedApps.includes(appTitle)) {
        completedApps.push(appTitle);
    }
    
    localStorage.setItem('completedApps', JSON.stringify(completedApps));
    localStorage.setItem('appProgress', JSON.stringify(appProgress));
    updateProgressDisplay();
    
    // Show celebration message
    showProgressCelebration(appTitle);
}

// Toggle app completion status
function toggleAppCompletion(appTitle) {
    const isCompleted = completedApps.includes(appTitle);
    
    if (isCompleted) {
        // Mark as incomplete
        completedApps = completedApps.filter(title => title !== appTitle);
        appProgress[appTitle].completed = false;
        appProgress[appTitle].completedDate = null;
    } else {
        // Mark as complete
        markAppCompleted(appTitle);
    }
    
    localStorage.setItem('completedApps', JSON.stringify(completedApps));
    localStorage.setItem('appProgress', JSON.stringify(appProgress));
    updateProgressDisplay();
}

// Update progress display in hero section
function updateProgressDisplay() {
    const totalApps = apps.length;
    const completedCount = completedApps.length;
    const startedCount = Object.values(appProgress).filter(p => p.started && !p.completed).length;
    const progressPercentage = Math.round((completedCount / totalApps) * 100);
    
    // Update the hero stats (keeping original design)
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        // Find or create progress stat
        let progressStat = heroStats.querySelector('.progress-stat');
        if (!progressStat) {
            progressStat = document.createElement('div');
            progressStat.className = 'stat-item progress-stat';
            heroStats.appendChild(progressStat);
        }
        
        progressStat.innerHTML = `
            <span class="stat-number">${completedCount}/${totalApps}</span>
            <span class="stat-label">Completed (${progressPercentage}%)</span>
        `;
    }
    
    // Update app cards with progress indicators
    updateAppCardsProgress();
}

// Update app cards with progress indicators (minimal visual change)
function updateAppCardsProgress() {
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
        const title = card.querySelector('.app-title').textContent;
        const isCompleted = completedApps.includes(title);
        const isStarted = appProgress[title] && appProgress[title].started;
        
        // Add subtle progress indicator to existing rank circle
        const rankElement = card.querySelector('.app-rank');
        if (rankElement) {
            if (isCompleted) {
                rankElement.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                rankElement.innerHTML = '✓';
            } else if (isStarted) {
                rankElement.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
            } else {
                rankElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                rankElement.innerHTML = card.dataset.rank || rankElement.textContent;
            }
        }
        
        // Add click handler for completion toggle
        if (!card.dataset.progressHandlerAdded) {
            const buildBtn = card.querySelector('.build-btn');
            if (buildBtn) {
                // Add completion checkbox to build button area (keeping original design)
                const progressContainer = document.createElement('div');
                progressContainer.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = isCompleted;
                checkbox.style.cssText = 'width: 18px; height: 18px; accent-color: #10b981;';
                checkbox.addEventListener('change', (e) => {
                    e.stopPropagation();
                    toggleAppCompletion(title);
                });
                
                const label = document.createElement('label');
                label.textContent = 'Mark as completed';
                label.style.cssText = 'font-size: 0.875rem; color: #6b7280; cursor: pointer;';
                label.addEventListener('click', (e) => {
                    e.stopPropagation();
                    checkbox.checked = !checkbox.checked;
                    toggleAppCompletion(title);
                });
                
                progressContainer.appendChild(checkbox);
                progressContainer.appendChild(label);
                buildBtn.parentNode.appendChild(progressContainer);
                
                card.dataset.progressHandlerAdded = 'true';
            }
        }
    });
}

// Show celebration when app is completed
function showProgressCelebration(appTitle) {
    const celebration = document.createElement('div');
    celebration.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        text-align: center;
        animation: celebrationPop 0.5s ease;
    `;
    
    celebration.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
        <h3 style="margin-bottom: 0.5rem;">Congratulations!</h3>
        <p>You completed <strong>${appTitle}</strong>!</p>
        <p style="margin-top: 1rem; opacity: 0.9;">${completedApps.length} of ${apps.length} apps completed</p>
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#celebration-styles')) {
        const style = document.createElement('style');
        style.id = 'celebration-styles';
        style.textContent = `
            @keyframes celebrationPop {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(celebration);
    
    // Remove after 3 seconds
    setTimeout(() => {
        celebration.remove();
    }, 3000);
}

// Random App Generator
function getRandomApp() {
    // Filter out completed apps for better suggestions
    const uncompletedApps = apps.filter(app => !completedApps.includes(app.title));
    const appsToChooseFrom = uncompletedApps.length > 0 ? uncompletedApps : apps;
    
    const randomIndex = Math.floor(Math.random() * appsToChooseFrom.length);
    return appsToChooseFrom[randomIndex];
}

function showRandomApp() {
    const randomApp = getRandomApp();
    
    // Create random app modal (keeping original modal design)
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>🎲 Random App Suggestion</h2>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            
            <div class="modal-body">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🎯</div>
                    <h3 style="color: #667eea; margin-bottom: 1rem;">${randomApp.title}</h3>
                    <p style="color: #6b7280; margin-bottom: 1.5rem;">${randomApp.description}</p>
                    
                    <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
                        <span style="background: #f3f4f6; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem;">
                            ${'★'.repeat(randomApp.difficulty)}${'☆'.repeat(5 - randomApp.difficulty)} Difficulty
                        </span>
                        <span style="background: #f3f4f6; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem;">
                            ${randomApp.category}
                        </span>
                    </div>
                    
                    <div style="display: flex; justify-content: center; gap: 1rem;">
                        <button onclick="startBuilding('${randomApp.title}'); closeModal();" 
                                style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 500;">
                            Start Building This! 🚀
                        </button>
                        <button onclick="showRandomApp()" 
                                style="background: #f3f4f6; color: #374151; border: 1px solid #d1d5db; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 500;">
                            Try Another 🎲
                        </button>
                    </div>
                </div>
                
                <div class="step-section">
                    <h3>✨ Why This App?</h3>
                    <ul style="color: #6b7280; margin-left: 1.5rem;">
                        ${randomApp.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="step-section">
                    <h3>🏷️ Technologies You'll Learn</h3>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${randomApp.tags.map(tag => 
                            `<span style="background: #e0e7ff; color: #3730a3; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">${tag}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Add random app button to hero section
function addRandomAppButton() {
    const heroContainer = document.querySelector('.hero .container');
    if (heroContainer && !document.querySelector('.random-app-btn')) {
        const randomBtn = document.createElement('button');
        randomBtn.className = 'random-app-btn';
        randomBtn.innerHTML = '🎲 Surprise Me!';
        randomBtn.style.cssText = `
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 500;
            margin-top: 1rem;
            transition: all 0.3s;
            backdrop-filter: blur(10px);
        `;
        
        randomBtn.addEventListener('mouseenter', () => {
            randomBtn.style.background = 'rgba(255, 255, 255, 0.3)';
            randomBtn.style.transform = 'translateY(-2px)';
        });
        
        randomBtn.addEventListener('mouseleave', () => {
            randomBtn.style.background = 'rgba(255, 255, 255, 0.2)';
            randomBtn.style.transform = 'translateY(0)';
        });
        
        randomBtn.addEventListener('click', showRandomApp);
        
        // Add after search container
        const searchContainer = heroContainer.querySelector('.search-container');
        if (searchContainer) {
            searchContainer.parentNode.insertBefore(randomBtn, searchContainer.nextSibling);
        }
    }
}

// Enhanced start building to mark as started
const originalStartBuildingEnhanced = startBuildingEnhanced;
function startBuildingWithProgress(appTitle) {
    markAppStarted(appTitle);
    originalStartBuildingEnhanced(appTitle);
}

// Override the start building function
startBuilding = startBuildingWithProgress;

// Initialize progress tracker and random app generator
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure original DOM is loaded
    setTimeout(() => {
        initializeProgressTracker();
        addRandomAppButton();
    }, 100);
});

// Re-render progress when apps are filtered/searched
const originalRenderApps = renderApps;
renderApps = function(appsToRender = apps) {
    originalRenderApps(appsToRender);
    // Small delay to ensure cards are rendered
    setTimeout(updateAppCardsProgress, 50);
};
