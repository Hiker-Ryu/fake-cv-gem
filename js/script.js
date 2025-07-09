// IIFE (Immediately Invoked Function Expression) to avoid polluting the global scope
(function () {
    // --- 1. DATA ---
    // All CV data is stored here. Future API calls can populate this object.
    const cvData = {
        name: { kor: "홍길동", eng: "Gildong Hong" },
        tagline: { kor: "혁신을 주도하는 소프트웨어 엔지니어", eng: "Innovative Software Engineer" },
        email: "gildong.hong@email.com",
        phone: "010-1234-5678",
        location: { kor: "대한민국, 서울", eng: "Seoul, South Korea" },
        profileImg: "assets/images/profile.png",
        externalLinks: [
            { name: "GitHub", url: "https://github.com", icon: "assets/icons/github.svg" },
            { name: "LinkedIn", url: "https://linkedin.com", icon: "assets/icons/linkedin.svg" },
            { name: "Blog", url: "https://blog.com", icon: "assets/icons/blog.svg" },
        ],
        keywords: {
            kor: ["백엔드 개발", "클라우드 인프라", "DevOps", "MSA", "애자일"],
            eng: ["Backend Development", "Cloud Infrastructure", "DevOps", "MSA", "Agile"]
        },
        qualifications: {
            kor: "정보처리기사 자격증 보유\nAWS Certified Solutions Architect - Associate",
            eng: "Engineer Information Processing Certificate\nAWS Certified Solutions Architect - Associate"
        },
        introduction: {
            title: { kor: "소개", eng: "Introduction" },
            icon: "assets/icons/introduction.svg",
            subsections: [
                {
                    title: { kor: "자기소개", eng: "About Me" },
                    content: {
                        kor: "안녕하세요. 저는 5년차 백엔드 개발자 홍길동입니다. 안정적이고 확장 가능한 시스템을 설계하고 구축하는 데 열정을 가지고 있습니다. 특히 마이크로서비스 아키텍처(MSA) 환경에서의 개발 및 운영 경험이 풍부하며, 클라우드 네이티브 기술을 적극적으로 활용하여 비즈니스 성장에 기여해왔습니다. 새로운 기술을 배우고 동료들과 지식을 공유하며 함께 성장하는 것을 즐깁니다.",
                        eng: "Hello, I am Gildong Hong, a backend developer with 5 years of experience. I am passionate about designing and building stable and scalable systems. I have extensive experience in developing and operating in a Microservices Architecture (MSA) environment, and I have actively utilized cloud-native technologies to contribute to business growth. I enjoy learning new technologies and growing together with my colleagues by sharing knowledge."
                    }
                },
                {
                    title: { kor: "커리어 목표", eng: "Career Goals" },
                    content: {
                        kor: "저의 장기적인 목표는 기술 리더십을 통해 복잡한 비즈니스 문제를 해결하는 기술 전문가로 성장하는 것입니다. 대규모 트래픽을 처리하는 시스템의 성능을 최적화하고, 데이터 기반의 의사결정을 지원하는 플랫폼을 구축하는 데 기여하고 싶습니다. 또한, DevOps 문화를 정착시켜 개발부터 배포, 운영까지의 파이프라인을 자동화하고 효율성을 극대화하는 역할을 수행하고자 합니다. 기술 커뮤니티에 기여하며 지속적으로 배우고 발전하는 개발자가 되겠습니다.",
                        eng: "My long-term goal is to grow into a technical expert who solves complex business problems through technical leadership. I want to contribute to optimizing the performance of systems that handle large-scale traffic and building platforms that support data-driven decision-making. Furthermore, I aim to establish a DevOps culture to automate the pipeline from development to deployment and operation, maximizing efficiency. I will strive to be a developer who continuously learns and evolves while contributing to the tech community."
                    }
                }
            ]
        },
        education: {
            title: { kor: "학력", eng: "Education" },
            icon: "assets/icons/education.svg",
            items: [
                {
                    degree: { kor: "소프트웨어공학 석사", eng: "Master of Software Engineering" },
                    institution: { kor: "가나다대학교 대학원", eng: "Ganada University Graduate School" },
                    period: "2018.03 - 2020.02",
                    description: { kor: "논문: 분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "Thesis: A Study on Efficient Data Processing Techniques in Distributed Systems" }
                },
                {
                    degree: { kor: "컴퓨터공학 학사", eng: "Bachelor of Computer Science" },
                    institution: { kor: "가나다대학교", eng: "Ganada University" },
                    period: "2014.03 - 2018.02",
                    description: { kor: "수석 졸업", eng: "Graduated Summa Cum Laude" }
                }
            ]
        },
        experience: {
            title: { kor: "경력", eng: "Experience" },
            icon: "assets/icons/experience.svg",
            items: [
                {
                    role: { kor: "시니어 소프트웨어 엔지니어", eng: "Senior Software Engineer" },
                    company: "XYZ Tech",
                    period: "2021.11 - 현재",
                    tasks: [
                        { kor: "주문 처리 시스템 MSA 전환 프로젝트 리드", eng: "Led the project to transition the order processing system to MSA" },
                        { kor: "Kubernetes 기반 CI/CD 파이프라인 구축 및 운영", eng: "Built and operated CI/CD pipelines based on Kubernetes" },
                        { kor: "실시간 데이터 분석 플랫폼 설계 및 개발", eng: "Designed and developed a real-time data analysis platform" },
                    ]
                },
                {
                    role: { kor: "소프트웨어 엔지니어", eng: "Software Engineer" },
                    company: "ABC Solutions",
                    period: "2020.03 - 2021.10",
                    tasks: [
                        { kor: "사내 ERP 시스템 백엔드 API 개발", eng: "Developed backend APIs for the in-house ERP system" },
                        { kor: "Legacy 시스템 유지보수 및 성능 개선", eng: "Maintained and improved the performance of legacy systems" },
                        { kor: "코드 리뷰 및 신규 입사자 멘토링", eng: "Conducted code reviews and mentored new hires" },
                    ]
                },
                {
                    role: { kor: "인턴", eng: "Intern" },
                    company: "Startup D",
                    period: "2019.07 - 2019.08",
                    tasks: [
                        { kor: "서비스 기능 테스트 자동화 스크립트 작성", eng: "Wrote automation scripts for service feature testing" },
                        { kor: "간단한 웹페이지 프론트엔드 개발 지원", eng: "Assisted in simple webpage frontend development" },
                    ]
                }
            ]
        },
        projects: {
            title: { kor: "프로젝트", eng: "Projects" },
            icon: "assets/icons/projects.svg",
            items: Array.from({ length: 8 }, (_, i) => ({
                id: i + 1,
                name: { kor: `프로젝트 ${i + 1}`, eng: `Project ${i + 1}` },
                description: {
                    kor: `이 프로젝트는 ...에 대한 설명입니다. 주요 기능으로는 ...이 있고, 이를 통해 ... 문제를 해결했습니다. (상세 설명은 모달에서 확인)`,
                    eng: `This is a description for Project ${i + 1}. Key features include... which solved the problem of... (Details in modal)`
                },
                tech: "Java, Spring Boot, JPA, Kafka, AWS",
                period: "2023.01 - 2023.06",
                thumbnail: `assets/images/projects/project${i + 1}.png`,
                link: "https://github.com/..."
            }))
        },
        skills: {
            title: { kor: "기술", eng: "Skills" },
            icon: "assets/icons/skills.svg",
            categories: [
                {
                    name: { kor: "프로그래밍 언어", eng: "Programming Languages" },
                    items: [
                        { name: "Java", level: 90 },
                        { name: "Kotlin", level: 75 },
                        { name: "Python", level: 70 },
                        { name: "JavaScript", level: 65 },
                    ]
                },
                {
                    name: { kor: "백엔드", eng: "Backend" },
                    items: [
                        { name: "Spring Boot", level: 95 },
                        { name: "JPA / Hibernate", level: 85 },
                        { name: "Node.js", level: 60 },
                        { name: "MSA", level: 80 },
                    ]
                },
                {
                    name: { kor: "인프라 / DevOps", eng: "Infrastructure / DevOps" },
                    items: [
                        { name: "AWS", level: 85 },
                        { name: "Docker", level: 90 },
                        { name: "Kubernetes", level: 75 },
                        { name: "Jenkins", level: 70 },
                    ]
                }
            ]
        },
        research: {
            title: { kor: "연구", eng: "Research" },
            icon: "assets/icons/research.svg",
            items: [
                {
                    title: { kor: "분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "A Study on Efficient Data Processing Techniques in Distributed Systems" },
                    publishedAt: { kor: "대한소프트웨어학회", eng: "Korea Society for Software" },
                    date: "2020.02",
                    link: "http://sol-link.com/"
                }
            ]
        },
        awards: {
            title: { kor: "수상 및 자격증", eng: "Awards & Certs" },
            icon: "assets/icons/awards.svg",
            items: [
                {
                    name: { kor: "정보처리기사", eng: "Engineer Information Processing" },
                    issuedBy: { kor: "한국산업인력공단", eng: "HRD Korea" },
                    date: "2019.11"
                },
                {
                    name: { kor: "AWS Certified Solutions Architect - Associate", eng: "AWS Certified Solutions Architect - Associate" },
                    issuedBy: "Amazon Web Services",
                    date: "2022.05"
                },
                {
                    name: { kor: "TOPCIT 정기평가 3수준", eng: "TOPCIT Level 3" },
                    issuedBy: { kor: "정보통신기획평가원", eng: "IITP" },
                    date: "2017.10"
                }
            ]
        },
        footer: {
            copyright: { kor: "© 2025 홍길동. All Rights Reserved.", eng: "© 2025 Gildong Hong. All Rights Reserved." }
        },
        // --- UI Text ---
        ui: {
            contact: { kor: "연락처 정보", eng: "Contact" },
            links: { kor: "외부 링크", eng: "Links" },
            keywords: { kor: "주요 키워드", eng: "Keywords" },
            qualifications: { kor: "주요 자격 요약", eng: "Key Qualifications" },
            contactBtn: { kor: "연락하기", eng: "Contact Me" },
            viewProject: { kor: "프로젝트 보기", eng: "View Project" },
            viewPaper: { kor: "논문 보기", eng: "View Paper" },
            contactModalTitle: { kor: "메시지 보내기", eng: "Send a Message" },
            projectModalTitle: { kor: "프로젝트 상세 정보", eng: "Project Details" },
        }
    };

    // --- 2. STATE ---
    let currentLang = 'kor'; // 'kor' or 'eng'

    // --- 3. UTILITY FUNCTIONS ---
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    // Helper to get text based on current language
    const getText = (textObject) => {
        if (typeof textObject === 'string') return textObject;
        return textObject[currentLang];
    };

    // --- 4. RENDER FUNCTIONS (COMPONENTS) ---

    function renderNavBar() {
        const { name } = cvData;
        const menuItems = [
            { id: "introduction", text: cvData.introduction.title },
            { id: "education", text: cvData.education.title },
            { id: "experience", text: cvData.experience.title },
            { id: "projects", text: cvData.projects.title },
            { id: "skills", text: cvData.skills.title },
            { id: "research", text: cvData.research.title },
            { id: "awards", text: cvData.awards.title },
        ];
        
        const menuHTML = menuItems.map(item => `
            <li><a href="#${item.id}">${getText(item.text)}</a></li>
        `).join('');

        $('#navbar-container').innerHTML = `
            <div class="navbar-title"><a href="#">${getText(name)}</a></div>
            <nav class="navbar-menu">
                <ul class="navbar-menu-items">${menuHTML}</ul>
                <button class="lang-toggle">${currentLang.toUpperCase()}</button>
            </nav>
        `;
    }
    
    function renderSummary() {
        const { name, tagline, email, phone, location, profileImg, externalLinks, keywords, qualifications, ui } = cvData;
        
        const linksHTML = externalLinks.map(link => `
            <li><img src="${link.icon}" alt="${link.name} icon"><a href="${link.url}" target="_blank">${link.name}</a></li>
        `).join('');

        const keywordsHTML = keywords[currentLang].map(kw => `<span class="keyword-tag">${kw}</span>`).join('');

        $('#summary-container').innerHTML = `
            <img src="${profileImg}" alt="Profile Picture" class="profile-img">
            <div class="profile-info">
                <h1>${getText(name)}</h1>
                <p class="tagline">${getText(tagline)}</p>
            </div>
            <div class="summary-section">
                <h3>${getText(ui.contact)}</h3>
                <ul class="contact-list">
                    <li><img src="assets/icons/email.svg" alt="Email"> ${email}</li>
                    <li><img src="assets/icons/phone.svg" alt="Phone"> ${phone}</li>
                    <li><img src="assets/icons/location.svg" alt="Location"> ${getText(location)}</li>
                </ul>
            </div>
            <div class="summary-section">
                <h3>${getText(ui.links)}</h3>
                <ul class="external-links">${linksHTML}</ul>
            </div>
            <div class="summary-section">
                <h3>${getText(ui.keywords)}</h3>
                <div class="keywords-list">${keywordsHTML}</div>
            </div>
            <div class="summary-section">
                <h3>${getText(ui.qualifications)}</h3>
                <div class="qualifications"><p style="white-space: pre-wrap;">${getText(qualifications)}</p></div>
            </div>
            <button class="contact-cta" id="contact-btn">${getText(ui.contactBtn)}</button>
        `;
    }

    function renderIntroduction() {
        const { introduction } = cvData;
        const subsectionsHTML = introduction.subsections.map(sub => `
            <div class="intro-subsection">
                <h3>${getText(sub.title)}</h3>
                <p>${getText(sub.content)}</p>
            </div>
        `).join('');
        $('#introduction').innerHTML = `
            <h2 class="section-title"><img src="${introduction.icon}" alt="">${getText(introduction.title)}</h2>
            ${subsectionsHTML}
        `;
    }

    function renderEducation() {
        const { education } = cvData;
        const itemsHTML = education.items.map(item => `
            <div class="timeline-item">
                <p class="timeline-period">${item.period}</p>
                <h3 class="timeline-title">${getText(item.degree)}</h3>
                <h4 class="timeline-subtitle">${getText(item.institution)}</h4>
                <p class="timeline-description">${getText(item.description)}</p>
            </div>
        `).join('');
        $('#education').innerHTML = `
            <h2 class="section-title"><img src="${education.icon}" alt="">${getText(education.title)}</h2>
            <div class="timeline">${itemsHTML}</div>
        `;
    }
    
    function renderExperience() {
        const { experience } = cvData;
        const itemsHTML = experience.items.map(item => `
            <div class="card">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">${getText(item.role)}</h3>
                        <p class="card-subtitle">${item.company}</p>
                    </div>
                    <span class="card-period">${item.period}</span>
                </div>
                <div class="card-body">
                    <ul>
                        ${item.tasks.map(task => `<li>${getText(task)}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
        $('#experience').innerHTML = `
            <h2 class="section-title"><img src="${experience.icon}" alt="">${getText(experience.title)}</h2>
            <div class="card-list">${itemsHTML}</div>
        `;
    }
    
    function renderProjects() {
        const { projects, ui } = cvData;
        const itemsHTML = projects.items.map(item => `
            <div class="project-card">
                <img src="${item.thumbnail}" alt="${getText(item.name)}" class="project-thumbnail">
                <div class="project-card-body">
                    <h3 class="project-title">${getText(item.name)}</h3>
                    <p class="project-tech">${item.tech}</p>
                    <button class="project-view-btn" data-project-id="${item.id}">${getText(ui.viewProject)}</button>
                </div>
            </div>
        `).join('');
        $('#projects').innerHTML = `
            <h2 class="section-title"><img src="${projects.icon}" alt="">${getText(projects.title)}</h2>
            <div class="project-grid">${itemsHTML}</div>
        `;
    }

    function renderSkills() {
        const { skills } = cvData;
        const categoriesHTML = skills.categories.map(cat => `
            <div class="skills-category">
                <h3>${getText(cat.name)}</h3>
                ${cat.items.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-level-bar">
                            <div class="skill-level" style="width: ${skill.level}%;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
        $('#skills').innerHTML = `
            <h2 class="section-title"><img src="${skills.icon}" alt="">${getText(skills.title)}</h2>
            ${categoriesHTML}
        `;
    }

    function renderResearch() {
        const { research, ui } = cvData;
        const itemsHTML = research.items.map(item => `
            <div class="list-item">
                <div class="list-item-content">
                    <p class="list-item-title">${getText(item.title)}</p>
                    <p class="list-item-meta">${getText(item.publishedAt)}, ${item.date}</p>
                </div>
                <div class="list-item-action">
                    <a href="${item.link}" target="_blank">${getText(ui.viewPaper)}</a>
                </div>
            </div>
        `).join('');
        $('#research').innerHTML = `
            <h2 class="section-title"><img src="${research.icon}" alt="">${getText(research.title)}</h2>
            <div class="list">${itemsHTML}</div>
        `;
    }

    function renderAwards() {
        const { awards } = cvData;
        const itemsHTML = awards.items.map(item => `
            <div class="list-item">
                <div class="list-item-content">
                    <p class="list-item-title">${getText(item.name)}</p>
                    <p class="list-item-meta">${getText(item.issuedBy)}, ${item.date}</p>
                </div>
            </div>
        `).join('');
        $('#awards').innerHTML = `
            <h2 class="section-title"><img src="${awards.icon}" alt="">${getText(awards.title)}</h2>
            <div class="list">${itemsHTML}</div>
        `;
    }

    function renderFooter() {
        $('#footer-container').innerHTML = `<p>${getText(cvData.footer.copyright)}</p>`;
    }

    // --- 5. MODAL LOGIC ---
    function openModal(content) {
        const modalContainer = $('#modal-container');
        modalContainer.innerHTML = content;
        modalContainer.firstChild.style.display = 'block';
        
        $('.modal-close-btn').addEventListener('click', closeModal);
        $('.modal').addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });
    }

    function closeModal() {
        if ($('.modal')) {
            $('.modal').style.display = 'none';
        }
    }

    function showContactModal() {
        const { ui } = cvData;
        const modalContent = `
            <div id="contact-modal" class="modal">
                <div class="modal-content">
                    <span class="modal-close-btn">&times;</span>
                    <h2>${getText(ui.contactModalTitle)}</h2>
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="form-submit-btn">Submit</button>
                    </form>
                </div>
            </div>`;
        openModal(modalContent);
        $('#contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // TODO: Add API call here
            alert("Message sent! (This is a demo)");
            closeModal();
        });
    }

    function showProjectModal(projectId) {
        const { projects, ui } = cvData;
        const project = projects.items.find(p => p.id == projectId);
        if (!project) return;
        
        const modalContent = `
            <div id="project-modal" class="modal">
                <div class="modal-content project-modal-content">
                    <span class="modal-close-btn">&times;</span>
                    <h2>${getText(ui.projectModalTitle)}</h2>
                    <img src="${project.thumbnail}" alt="${getText(project.name)}">
                    <h3>${getText(project.name)}</h3>
                    <p><b>Tech Stack:</b> ${project.tech}</p>
                    <p><b>Period:</b> ${project.period}</p>
                    <p>${getText(project.description)}</p>
                    <a href="${project.link}" target="_blank">View on GitHub</a>
                </div>
            </div>`;
        openModal(modalContent);
    }


    // --- 6. EVENT HANDLERS & INITIALIZATION ---
    function handleLanguageToggle() {
        currentLang = (currentLang === 'kor') ? 'eng' : 'kor';
        renderAll(); // Re-render all components with the new language
    }

    function attachEventListeners() {
        $('.lang-toggle').addEventListener('click', handleLanguageToggle);
        $('#contact-btn').addEventListener('click', showContactModal);
        
        $$('.project-view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showProjectModal(btn.dataset.projectId);
            });
        });
    }
    
    function renderAll() {
        renderNavBar();
        renderSummary();
        renderIntroduction();
        renderEducation();
        renderExperience();
        renderProjects();
        renderSkills();
        renderResearch();
        renderAwards();
        renderFooter();
        // After rendering, re-attach event listeners as the DOM is replaced
        attachEventListeners();
    }

    // Initial load
    document.addEventListener('DOMContentLoaded', renderAll);
}());
