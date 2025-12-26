// ============================================================
// 🎨 RENDERER: Static Badges & Data
// ============================================================

// 1. HARDCODED BADGE MAP (From README style)
const TECH_BADGES = {
    "Python": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "Selenium": "https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white",
    "Tableau": "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=Tableau&logoColor=white",
    "SQL": "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white",
    "Pandas": "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
    "Excel": "https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
    "Data Analysis": "https://img.shields.io/badge/Data_Analysis-FFA500?style=for-the-badge&logo=google-analytics&logoColor=white", // Generic fallback logo
    "NLTK": "https://img.shields.io/badge/NLTK-3776AB?style=for-the-badge&logo=python&logoColor=white", // NLTK part of Python ecosystem
    "Natural Language Processing": "https://img.shields.io/badge/NLP-4B8BBE?style=for-the-badge&logo=python&logoColor=white",
    "Machine Learning": "https://img.shields.io/badge/Machine_Learning-F7931E?style=for-the-badge&logo=tensorflow&logoColor=white",
    "Flask": "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    "HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "CSS": "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "JavaScript": "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "GitHub": "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    "Render": "https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white",
    "Hugging Face API": "https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black",
    "Tailwind CSS": "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "Web Development": "https://img.shields.io/badge/Web_Dev-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    "R": "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white",
    "NumPy": "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
    "Scikit-learn": "https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white",
    "TensorFlow": "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
    "Airflow": "https://img.shields.io/badge/Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white",
    "Apache Spark": "https://img.shields.io/badge/Apache_Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white",
    "Kafka": "https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white",
    "Hadoop": "https://img.shields.io/badge/Apache_Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black",
    "DataBricks": "https://img.shields.io/badge/Databricks-FF3621?style=for-the-badge&logo=databricks&logoColor=white",
    "dbt": "https://img.shields.io/badge/dbt-FF694B?style=for-the-badge&logo=dbt&logoColor=white",
    "Snowflake": "https://img.shields.io/badge/Snowflake-29B5E8?style=for-the-badge&logo=snowflake&logoColor=white",
    "AWS": "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "Azure": "https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white",
    "Docker": "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    "Kubernetes": "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white",
    "Terraform": "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white",
    "MongoDB": "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
    "Power BI": "https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black",
    "Git": "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
};

// Fallback for unknown skills
const DEFAULT_BADGE = "https://img.shields.io/badge/Code-000000?style=for-the-badge&logo=github&logoColor=white";

document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadProjects();
    loadSkills();
    loadExperience();
});

function loadProfile() {
    if (typeof PROFILE === 'undefined') return;
    document.getElementById('hero-bio').textContent = PROFILE.bio;
    document.getElementById('year').textContent = new Date().getFullYear();

    const socialHTML = `
        <a href="${PROFILE.github}" target="_blank"><i class='bx bxl-github'></i></a>
        <a href="${PROFILE.linkedin}" target="_blank"><i class='bx bxl-linkedin'></i></a>
        <a href="mailto:${PROFILE.email}"><i class='bx bx-envelope'></i></a>
    `;
    
    document.getElementById('nav-socials').innerHTML = socialHTML;
    document.getElementById('footer-socials').innerHTML = socialHTML;
}

function loadProjects() {
    const container = document.getElementById('projects-grid');
    if (!container || typeof PROJECTS === 'undefined') return;

    container.innerHTML = PROJECTS.map(p => {
        const visualContent = p.image 
            ? `<img src="${p.image}" alt="${p.title}">`
            : `<div class="project-icon-placeholder"><i class='bx bx-code-alt'></i></div>`;

        // USE THE LOOKUP TABLE
        const badges = p.technologies.map(t => {
            const url = TECH_BADGES[t] || TECH_BADGES[Object.keys(TECH_BADGES).find(k => k.includes(t))] || DEFAULT_BADGE;
            return `<img src="${url}" alt="${t}" class="tech-badge">`;
        }).join('');

        return `
        <article class="project-card">
            <div class="project-visual">
                ${visualContent}
            </div>
            <div class="project-content">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.description}</p>
                <div class="tech-stack">${badges}</div>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" class="btn-link"><i class='bx bxl-github'></i> Code</a>
                    ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn-link"><i class='bx bx-link-external'></i> Live Demo</a>` : ''}
                </div>
            </div>
        </article>
        `;
    }).join('');
}

function loadSkills() {
    const container = document.getElementById('skills-list');
    if (!container || typeof SKILLS === 'undefined') return;

    const allSkills = [
        ...SKILLS.languages, 
        ...SKILLS.pythonTools, 
        ...SKILLS.dataEngineering,
        ...SKILLS.cloud,
        ...SKILLS.visualization
    ];
    const uniqueSkills = [...new Set(allSkills)];

    // Render using the same lookup table
    container.innerHTML = uniqueSkills.map(s => {
        const url = TECH_BADGES[s] || TECH_BADGES[Object.keys(TECH_BADGES).find(k => k.includes(s))] || DEFAULT_BADGE;
        return `<img src="${url}" alt="${s}" style="height: 28px; border-radius: 4px;">`;
    }).join('');
}

function loadExperience() {
    // Work (Stays the same)
    const expContainer = document.getElementById('experience-list');
    if (expContainer && typeof EXPERIENCE !== 'undefined') {
        expContainer.innerHTML = EXPERIENCE.map(job => `
            <div class="info-card">
                <div class="info-header">
                    <div>
                        <div class="info-role">${job.title}</div>
                        <div class="info-org">${job.company}</div>
                    </div>
                    <div class="info-date">${job.startDate} - ${job.endDate}</div>
                </div>
                <p style="font-size: 0.9rem; color: #aaa;">${job.description}</p>
            </div>
        `).join('');
    }

    // Education - UPDATED WITH LOGO
    const eduContainer = document.getElementById('education-list');
    if (eduContainer && typeof EDUCATION !== 'undefined') {
        eduContainer.innerHTML = EDUCATION.map(edu => `
            <div class="info-card">
                <div class="info-header" style="align-items: center; gap: 1rem;">
                    
                    <div class="edu-logo-wrapper">
                        <img src="${edu.logo}" alt="${edu.school}" class="edu-logo">
                    </div>

                    <div style="flex: 1;">
                        <div class="info-role">${edu.degree}</div>
                        <div class="info-org">${edu.school}</div>
                        <div style="font-size: 0.85rem; color: #3b82f6; margin-top: 4px; font-weight: 500;">
                            <i class='bx bxs-graduation'></i> ${edu.batch}
                        </div>
                    </div>

                    <div class="info-date">${edu.startDate} - ${edu.endDate}</div>
                </div>
            </div>
        `).join('');
    }
}