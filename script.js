// AI Tools Database with complete information
const aiTools = [
    // Writing & Content
    {
        id: 1,
        name: 'ChatGPT',
        category: 'writing',
        description: 'Advanced AI assistant for writing, coding, research and learning. Perfect for content creation and productivity.',
        icon: '🤖',
        rating: 4.9,
        tags: 'Writing, Coding, Research',
        page: 'tools/chatgpt.html'
    },
    {
        id: 2,
        name: 'Jasper',
        category: 'writing',
        description: 'AI writing assistant designed for marketing and brand voice. Create unique, engaging content effortlessly.',
        icon: '✍️',
        rating: 4.7,
        tags: 'Writing, Marketing',
        page: 'tools/jasper.html'
    },
    {
        id: 3,
        name: 'Copy.ai',
        category: 'writing',
        description: 'Generate high-quality copy for ads, emails, and landing pages using AI technology.',
        icon: '📝',
        rating: 4.6,
        tags: 'Copywriting, Marketing',
        page: 'tools/copyai.html'
    },
    {
        id: 4,
        name: 'Grammarly',
        category: 'writing',
        description: 'Advanced grammar checker and writing assistant for perfect prose every time.',
        icon: '✏️',
        rating: 4.8,
        tags: 'Writing, Grammar',
        page: 'tools/grammarly.html'
    },

    // Coding & Development
    {
        id: 5,
        name: 'GitHub Copilot',
        category: 'coding',
        description: 'AI pair programmer that helps you write code faster and with less effort.',
        icon: '⚙️',
        rating: 4.8,
        tags: 'Coding, Development',
        page: 'tools/github-copilot.html'
    },
    {
        id: 6,
        name: 'Claude',
        category: 'coding',
        description: 'Advanced AI perfect for long documents, detailed analysis and complex coding tasks.',
        icon: '🧠',
        rating: 4.8,
        tags: 'Coding, Analysis',
        page: 'tools/claude.html'
    },
    {
        id: 7,
        name: 'Tabnine',
        category: 'coding',
        description: 'AI code completion tool that learns your coding patterns and boosts productivity.',
        icon: '💻',
        rating: 4.7,
        tags: 'Coding, IDE',
        page: 'tools/tabnine.html'
    },
    {
        id: 8,
        name: 'Amazon CodeWhisperer',
        category: 'coding',
        description: 'ML-powered code generator for faster, more secure development.',
        icon: '🔧',
        rating: 4.6,
        tags: 'Coding, AWS',
        page: 'tools/codewhisperer.html'
    },

    // Image Generation
    {
        id: 9,
        name: 'Midjourney',
        category: 'images',
        description: 'Create stunning AI-generated images and artwork from text descriptions.',
        icon: '🎨',
        rating: 4.8,
        tags: 'Images, Art',
        page: 'tools/midjourney.html'
    },
    {
        id: 10,
        name: 'DALL-E 3',
        category: 'images',
        description: 'OpenAI\'s advanced image generation from detailed text prompts.',
        icon: '🖼️',
        rating: 4.9,
        tags: 'Images, Design',
        page: 'tools/dalle.html'
    },
    {
        id: 11,
        name: 'Stable Diffusion',
        category: 'images',
        description: 'Open-source AI image generation with customizable models and unlimited potential.',
        icon: '🌈',
        rating: 4.7,
        tags: 'Images, Open Source',
        page: 'tools/stable-diffusion.html'
    },
    {
        id: 12,
        name: 'Adobe Firefly',
        category: 'images',
        description: 'Generative AI features integrated into Adobe Creative Suite.',
        icon: '🎭',
        rating: 4.6,
        tags: 'Images, Design',
        page: 'tools/adobe-firefly.html'
    },

    // Video Creation
    {
        id: 13,
        name: 'Synthesia',
        category: 'video',
        description: 'Create AI-powered videos with virtual avatars and text-to-speech.',
        icon: '🎬',
        rating: 4.7,
        tags: 'Video, Avatars',
        page: 'tools/synthesia.html'
    },
    {
        id: 14,
        name: 'Pictory',
        category: 'video',
        description: 'Convert long-form content into short, engaging AI videos automatically.',
        icon: '📹',
        rating: 4.6,
        tags: 'Video, Content',
        page: 'tools/pictory.html'
    },
    {
        id: 15,
        name: 'Runway',
        category: 'video',
        description: 'AI video editing and generation platform for creators and professionals.',
        icon: '🎥',
        rating: 4.7,
        tags: 'Video, Editing',
        page: 'tools/runway.html'
    },
    {
        id: 16,
        name: 'HeyGen',
        category: 'video',
        description: 'Generate personalized videos with AI avatars in minutes.',
        icon: '🤳',
        rating: 4.6,
        tags: 'Video, Marketing',
        page: 'tools/heygen.html'
    },

    // Productivity
    {
        id: 17,
        name: 'Notion AI',
        category: 'productivity',
        description: 'AI-powered workspace for notes, databases, and team collaboration.',
        icon: '📊',
        rating: 4.8,
        tags: 'Productivity, Notes',
        page: 'tools/notion-ai.html'
    },
    {
        id: 18,
        name: 'Automation Anywhere',
        category: 'productivity',
        description: 'Intelligent RPA platform for business process automation.',
        icon: '⚡',
        rating: 4.7,
        tags: 'Automation, RPA',
        page: 'tools/automation-anywhere.html'
    },
    {
        id: 19,
        name: 'Microsoft Copilot',
        category: 'productivity',
        description: 'AI assistant integrated into Microsoft 365 applications.',
        icon: '🪟',
        rating: 4.7,
        tags: 'Productivity, Microsoft',
        page: 'tools/microsoft-copilot.html'
    },
    {
        id: 20,
        name: 'Otter.ai',
        category: 'productivity',
        description: 'AI meeting assistant for transcription and note-taking.',
        icon: '🎙️',
        rating: 4.6,
        tags: 'Productivity, Meeting',
        page: 'tools/otter.html'
    },

    // Design
    {
        id: 21,
        name: 'Canva AI',
        category: 'design',
        description: 'Design anything with drag-and-drop simplicity powered by AI.',
        icon: '🎨',
        rating: 4.8,
        tags: 'Design, Graphics',
        page: 'tools/canva.html'
    },
    {
        id: 22,
        name: 'Adobe Generative Fill',
        category: 'design',
        description: 'AI-powered content-aware fill for professional designers.',
        icon: '🖌️',
        rating: 4.9,
        tags: 'Design, Adobe',
        page: 'tools/adobe-generative-fill.html'
    },
    {
        id: 23,
        name: 'Figma AI',
        category: 'design',
        description: 'Collaborative design platform with AI-assisted design features.',
        icon: '📐',
        rating: 4.7,
        tags: 'Design, Collaboration',
        page: 'tools/figma-ai.html'
    },
    {
        id: 24,
        name: 'Remove.bg',
        category: 'design',
        description: 'AI-powered background removal for images instantly.',
        icon: '✨',
        rating: 4.8,
        tags: 'Images, Editing',
        page: 'tools/removebg.html'
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderTools(aiTools);
    setupEventListeners();
    loadTheme();
    loadNewsletterData();
});

// Render Tools with proper links
function renderTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    const noResultsMessage = document.getElementById('noResultsMessage');
    
    if (!toolsGrid) return;
    
    if (tools.length === 0) {
        toolsGrid.innerHTML = '';
        if (noResultsMessage) noResultsMessage.style.display = 'block';
        return;
    }
    
    if (noResultsMessage) noResultsMessage.style.display = 'none';
    toolsGrid.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <h3>${tool.name}</h3>
            <div class="category-tag">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</div>
            <p>${tool.description}</p>
            <p class="tool-rating">⭐ ${tool.rating}/5</p>
            <a href="${tool.page}" class="tool-button" onclick="return confirmNavigation(event, '${tool.page}')">Learn More</a>
        `;
        toolCard.onclick = () => window.location.href = tool.page;
        toolCard.style.cursor = 'pointer';
        toolsGrid.appendChild(toolCard);
    });
}

// Navigation confirmation
function confirmNavigation(event, url) {
    event.stopPropagation();
    window.location.href = url;
    return false;
}

// Real-time search with debounce
let searchTimeout;
function setupRealTimeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchTools();
        }, 300);
    });
}

// Filter Tools by Category
function filterTools(category) {
    const filtered = aiTools.filter(tool => tool.category === category);
    renderTools(filtered);
    scrollToElement('tools');
}

// Search Tools - Real-time
function searchTools() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchValue = searchInput.value.toLowerCase();
    
    if (searchValue.trim() === '') {
        renderTools(aiTools);
        return;
    }
    
    const filtered = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(searchValue) ||
        tool.category.toLowerCase().includes(searchValue) ||
        tool.description.toLowerCase().includes(searchValue) ||
        tool.tags.toLowerCase().includes(searchValue)
    );
    
    renderTools(filtered);
}

// Setup Event Listeners
function setupEventListeners() {
    // Real-time search
    setupRealTimeSearch();
    
    // Search input on Enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                searchTools();
            }
        });
    }

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Back to top button
    window.addEventListener('scroll', showBackToTop);
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Show Back to Top Button
function showBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to Element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Set Active Navigation Link
function setActive(element) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

// Newsletter Subscription with Local Storage
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput');
    if (!email) return;
    
    const emailValue = email.value;
    
    if (emailValue.trim() === '') {
        showNotification('Please enter your email address', 'error');
        return;
    }
    
    if (!isValidEmail(emailValue)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Save to local storage
    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    if (!subscribers.includes(emailValue)) {
        subscribers.push(emailValue);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
    }
    
    showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
    email.value = '';
}

// Load Newsletter Data
function loadNewsletterData() {
    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    console.log('Current subscribers:', subscribers);
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
        color: white;
        font-weight: 600;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Dark/Light Mode Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    }
}

// Load Theme Preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
}

// Console Message
console.log('%c🚀 AI Tools Hub Loaded Successfully!', 'color: #38bdf8; font-size: 16px; font-weight: bold;');
console.log('%c✨ Premium AI Tools Directory - Production Ready', 'color: #38bdf8; font-weight: bold;');