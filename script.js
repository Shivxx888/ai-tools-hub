// AI Tools Database
const aiTools = [
    // Writing & Content
    {
        id: 1,
        name: 'ChatGPT',
        category: 'writing',
        description: 'Advanced AI assistant for writing, coding, research and learning. Perfect for content creation and productivity.',
        icon: '🤖',
        rating: 4.9,
        tags: 'Writing, Coding, Research'
    },
    {
        id: 2,
        name: 'Jasper',
        category: 'writing',
        description: 'AI writing assistant designed for marketing and brand voice. Create unique, engaging content effortlessly.',
        icon: '✍️',
        rating: 4.7,
        tags: 'Writing, Marketing'
    },
    {
        id: 3,
        name: 'Copy.ai',
        category: 'writing',
        description: 'Generate high-quality copy for ads, emails, and landing pages using AI technology.',
        icon: '📝',
        rating: 4.6,
        tags: 'Copywriting, Marketing'
    },
    {
        id: 4,
        name: 'Grammarly',
        category: 'writing',
        description: 'Advanced grammar checker and writing assistant for perfect prose every time.',
        icon: '✏️',
        rating: 4.8,
        tags: 'Writing, Grammar'
    },

    // Coding & Development
    {
        id: 5,
        name: 'GitHub Copilot',
        category: 'coding',
        description: 'AI pair programmer that helps you write code faster and with less effort.',
        icon: '⚙️',
        rating: 4.8,
        tags: 'Coding, Development'
    },
    {
        id: 6,
        name: 'Claude',
        category: 'coding',
        description: 'Advanced AI perfect for long documents, detailed analysis and complex coding tasks.',
        icon: '🧠',
        rating: 4.8,
        tags: 'Coding, Analysis'
    },
    {
        id: 7,
        name: 'Tabnine',
        category: 'coding',
        description: 'AI code completion tool that learns your coding patterns and boosts productivity.',
        icon: '💻',
        rating: 4.7,
        tags: 'Coding, IDE'
    },
    {
        id: 8,
        name: 'Amazon CodeWhisperer',
        category: 'coding',
        description: 'ML-powered code generator for faster, more secure development.',
        icon: '🔧',
        rating: 4.6,
        tags: 'Coding, AWS'
    },

    // Image Generation
    {
        id: 9,
        name: 'Midjourney',
        category: 'images',
        description: 'Create stunning AI-generated images and artwork from text descriptions.',
        icon: '🎨',
        rating: 4.8,
        tags: 'Images, Art'
    },
    {
        id: 10,
        name: 'DALL-E 3',
        category: 'images',
        description: 'OpenAI\'s advanced image generation from detailed text prompts.',
        icon: '🖼️',
        rating: 4.9,
        tags: 'Images, Design'
    },
    {
        id: 11,
        name: 'Stable Diffusion',
        category: 'images',
        description: 'Open-source AI image generation with customizable models and unlimited potential.',
        icon: '🌈',
        rating: 4.7,
        tags: 'Images, Open Source'
    },
    {
        id: 12,
        name: 'Adobe Firefly',
        category: 'images',
        description: 'Generative AI features integrated into Adobe Creative Suite.',
        icon: '🎭',
        rating: 4.6,
        tags: 'Images, Design'
    },

    // Video Creation
    {
        id: 13,
        name: 'Synthesia',
        category: 'video',
        description: 'Create AI-powered videos with virtual avatars and text-to-speech.',
        icon: '🎬',
        rating: 4.7,
        tags: 'Video, Avatars'
    },
    {
        id: 14,
        name: 'Pictory',
        category: 'video',
        description: 'Convert long-form content into short, engaging AI videos automatically.',
        icon: '📹',
        rating: 4.6,
        tags: 'Video, Content'
    },
    {
        id: 15,
        name: 'Runway',
        category: 'video',
        description: 'AI video editing and generation platform for creators and professionals.',
        icon: '🎥',
        rating: 4.7,
        tags: 'Video, Editing'
    },
    {
        id: 16,
        name: 'HeyGen',
        category: 'video',
        description: 'Generate personalized videos with AI avatars in minutes.',
        icon: '🤳',
        rating: 4.6,
        tags: 'Video, Marketing'
    },

    // Productivity
    {
        id: 17,
        name: 'Notion AI',
        category: 'productivity',
        description: 'AI-powered workspace for notes, databases, and team collaboration.',
        icon: '📊',
        rating: 4.8,
        tags: 'Productivity, Notes'
    },
    {
        id: 18,
        name: 'Automation Anywhere',
        category: 'productivity',
        description: 'Intelligent RPA platform for business process automation.',
        icon: '⚡',
        rating: 4.7,
        tags: 'Automation, RPA'
    },
    {
        id: 19,
        name: 'Microsoft Copilot',
        category: 'productivity',
        description: 'AI assistant integrated into Microsoft 365 applications.',
        icon: '🪟',
        rating: 4.7,
        tags: 'Productivity, Microsoft'
    },
    {
        id: 20,
        name: 'Otter.ai',
        category: 'productivity',
        description: 'AI meeting assistant for transcription and note-taking.',
        icon: '🎙️',
        rating: 4.6,
        tags: 'Productivity, Meeting'
    },

    // Design
    {
        id: 21,
        name: 'Canva AI',
        category: 'design',
        description: 'Design anything with drag-and-drop simplicity powered by AI.',
        icon: '🎨',
        rating: 4.8,
        tags: 'Design, Graphics'
    },
    {
        id: 22,
        name: 'Adobe Generative Fill',
        category: 'design',
        description: 'AI-powered content-aware fill for professional designers.',
        icon: '🖌️',
        rating: 4.9,
        tags: 'Design, Adobe'
    },
    {
        id: 23,
        name: 'Figma AI',
        category: 'design',
        description: 'Collaborative design platform with AI-assisted design features.',
        icon: '📐',
        rating: 4.7,
        tags: 'Design, Collaboration'
    },
    {
        id: 24,
        name: 'Remove.bg',
        category: 'design',
        description: 'AI-powered background removal for images instantly.',
        icon: '✨',
        rating: 4.8,
        tags: 'Images, Editing'
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderTools(aiTools);
    setupEventListeners();
});

// Render Tools
function renderTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
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
            <a href="#" class="tool-button">Learn More</a>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

// Filter Tools by Category
function filterTools(category) {
    const filtered = aiTools.filter(tool => tool.category === category);
    if (filtered.length > 0) {
        renderTools(filtered);
        document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
    }
}

// Search Tools
function searchTools() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    if (searchInput.trim() === '') {
        renderTools(aiTools);
        return;
    }
    
    const filtered = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(searchInput) ||
        tool.description.toLowerCase().includes(searchInput) ||
        tool.tags.toLowerCase().includes(searchInput)
    );
    
    renderTools(filtered);
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
}

// Setup Event Listeners
function setupEventListeners() {
    // Search input on Enter key
    document.getElementById('searchInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchTools();
        }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Back to top button
    window.addEventListener('scroll', showBackToTop);
}

// Show Back to Top Button
function showBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
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

// Set Active Navigation Link
function setActive(element) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    
    if (email.trim() === '') {
        alert('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Success message
    alert('Thank you for subscribing! Check your email for confirmation.');
    document.getElementById('emailInput').value = '';
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Console Message
console.log('%c🚀 AI Tools Hub Loaded Successfully!', 'color: #38bdf8; font-size: 16px; font-weight: bold;');
console.log('%cVisit our resources for more info', 'color: #38bdf8; font-weight: bold;');