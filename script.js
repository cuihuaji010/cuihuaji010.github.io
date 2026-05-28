const siteData = {
  en: {
    nav: {
      about: "About",
      highlight: "Highlight",
      news: "News",
      publications: "Publications",
      education: "Education",
      awards: "Awards",
      contact: "Contact",
    },
    profile: {
      eyebrow: "Academic Homepage",
      name: "Hanwen Cui",
      title:
        "Undergraduate student in Telecommunication Engineering with Management at Beijing University of Posts and Telecommunications.",
      summary:
        "My research interests include personalized story rewriting, reward modeling, post-training for long-form generation, and efficient multi-agent reasoning.",
      cv: "Download CV",
      email: "Email Me",
      github: "GitHub",
      arxiv: "arXiv",
      meta: [
        {
          label: "Affiliation",
          value: "BUPT · AIM3 Lab, Renmin University of China · ICT, CAS",
        },
        {
          label: "Location",
          value: "Beijing, China",
        },
        {
          label: "Email",
          value: "cuihanwen2023@bupt.edu.cn",
        },
      ],
    },
    about: {
      eyebrow: "Profile",
      title: "A research-oriented builder working on language systems and computational narrative.",
      body: [
        "I am an undergraduate researcher at Beijing University of Posts and Telecommunications. I enjoy building language systems that are not only fluent, but also measurable, controllable, and genuinely useful to different users.",
        "Recently, my work has focused on personalized long-story rewriting, reward modeling with large language models, and adaptive multi-agent reasoning for factual tasks. I also like turning research ideas into runnable pipelines quickly, from data construction and training to evaluation and lightweight demos.",
      ],
    },
    highlight: {
      eyebrow: "Highlight",
      title: "A few things I am currently building.",
      items: [
        {
          title: "Personalized Long Story Rewriting",
          text:
            "Leading a first-author project on adapting literary narratives for diverse readers with reward modeling, SFT, and GRPO-style post-training.",
          linkLabel: "Read on arXiv",
          linkHref: "https://arxiv.org/abs/2605.28073",
        },
        {
          title: "Multi-Agent Debate Analysis",
          text:
            "Studying when multi-agent debate truly helps factual reasoning, and when adaptive routing can reduce reasoning cost without hurting performance.",
        },
        {
          title: "Rapid Research Prototyping",
          text:
            "Building full research pipelines across data processing, training, evaluation, and demo-oriented system implementation.",
        },
        {
          title: "Speech and Multimodal Applications",
          text:
            "Applying machine learning methods to practical AI projects, including speech emotion recognition for competition settings.",
        },
      ],
    },
    news: {
      eyebrow: "News",
      title: "Recent updates.",
      items: [
        {
          date: "May 2026",
          text:
            "Uploaded “Personalized Long Story Rewriting: Adapting Literary Narratives for Diverse Users” to arXiv and submitted it to EMNLP 2026.",
        },
        {
          date: "2025 - Present",
          text:
            "Working as a research assistant at AIM3 Lab, Renmin University of China, on personalized long-form story rewriting.",
        },
        {
          date: "2025 - Present",
          text:
            "Working as a research assistant at the Institute of Computing Technology, Chinese Academy of Sciences, on multi-agent debate and adaptive routing.",
        },
      ],
    },
    publications: {
      eyebrow: "Publications",
      title: "Selected papers and manuscripts.",
      items: [
        {
          kicker: "2026 · EMNLP 2026 Submission",
          title:
            "Personalized Long Story Rewriting: Adapting Literary Narratives for Diverse Users",
          meta:
            "Hanwen Cui, et al.",
          summary:
            "A first-author study on adapting literary narratives for diverse readers through preference-aware reward modeling, stronger baselines, and long-form post-training.",
          badges: [
            { label: "arXiv", href: "https://arxiv.org/abs/2605.28073" },
            { label: "Status: Submitted", href: null },
          ],
        },
        {
          kicker: "Manuscript",
          title:
            "When Does Multi-Agent Debate Help? A Popularity-Driven Analysis and Adaptive Routing for Factual Reasoning",
          meta:
            "Hanwen Cui, et al.",
          summary:
            "A first-author project investigating when multi-agent debate helps factual reasoning, and how popularity-aware adaptive routing can improve efficiency.",
          badges: [
            { label: "Status: In Preparation", href: null },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Research Experience",
      title: "Places where I learn by shipping systems.",
      items: [
        {
          kicker: "2025 - Present",
          title: "Research Assistant · AIM3 Lab, Renmin University of China",
          meta: "Supervised by Prof. Xuepo Jin",
          summary:
            "Working on personalized long-story rewriting and literary narrative adaptation.",
          bullets: [
            "Built a reward model based on Qwen3-8B with LoRA adapters for literary rewriting quality.",
            "Designed a post-training pipeline combining supervised fine-tuning and GRPO-style optimization.",
            "Constructed evaluation workflows and stronger baselines, including retrieval-augmented and analogy-inspired settings.",
          ],
        },
        {
          kicker: "2025 - Present",
          title: "Research Assistant · Institute of Computing Technology, CAS",
          meta: "Supervised by researcher Keping Bi",
          summary:
            "Studying debate efficiency, popularity-aware analysis, and adaptive routing for factual reasoning.",
          bullets: [
            "Ran experiments across open-source LLMs to compare multi-agent debate and single-agent reasoning.",
            "Analyzed debate behavior under different popularity regimes and reasoning costs.",
            "Implemented adaptive routing strategies to keep gains on hard questions while reducing unnecessary computation.",
          ],
        },
        {
          kicker: "2025",
          title: "Project Experience · Speech Emotion Recognition",
          meta: "Zhejiang University Intelligent Development Competition",
          summary:
            "Reproduced and extended a speech emotion recognition system for competition use.",
          bullets: [
            "Worked with teammates to rebuild an open-source SER pipeline.",
            "Used Librosa for feature extraction and CNN-style models for emotion classification.",
            "Reached the finals and received an innovation and entrepreneurship competition award.",
          ],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Current academic background.",
      items: [
        {
          kicker: "2023 - Present",
          title: "Beijing University of Posts and Telecommunications",
          meta: "B.Eng. candidate in Telecommunication Engineering with Management",
          summary:
            "Weighted GPA: 90.97 · Rank: 17/284 · CET-6: 540",
          bullets: [
            "Core coursework includes probability theory, linear algebra, digital signal processing, process control, communications principles, and artificial intelligence fundamentals.",
          ],
        },
      ],
    },
    awards: {
      eyebrow: "Honors",
      title: "Awards and skills.",
      honorsTitle: "Honors and Awards",
      honors: [
        "Gold Award in the China International College Students’ Innovation Competition.",
        "Outstanding League Member, Outstanding Student, and Outstanding Student Cadre at BUPT.",
        "Second Prize in the BUPT Star of Tomorrow English Speech Competition.",
        "BUPT First-Class Scholarship and BUPT Second-Class Scholarship.",
        "Third Prize in the National College Students Mathematics Competition.",
      ],
      skillsTitle: "Skills",
      skills: [
        "Proficient in C and Python, with hands-on experience in PyTorch-based deep learning workflows.",
        "Strong interest in reward modeling, reinforcement learning, and post-training optimization.",
        "Comfortable with LaTeX and Overleaf for academic writing and paper preparation.",
        "Able to read and write academic English for research collaboration and publication.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Interested in research collaboration, internships, or language system projects.",
      copy:
        "I am happy to talk about story rewriting, reward modeling, multi-agent reasoning, and research-driven engineering. Feel free to reach out by email.",
      email: "cuihanwen2023@bupt.edu.cn",
      github: "GitHub Profile",
    },
  },
  zh: {
    nav: {
      about: "简介",
      highlight: "亮点",
      news: "动态",
      publications: "论文",
      education: "教育",
      awards: "荣誉",
      contact: "联系",
    },
    profile: {
      eyebrow: "个人主页",
      name: "崔瀚文",
      title: "北京邮电大学电信工程及管理专业本科生，研究兴趣集中在长文本生成、奖励建模与多智能体推理。",
      summary:
        "我目前主要在做个性化故事改写、面向长文本生成的后训练流程，以及多智能体辩论在事实推理中的效率与效果分析。",
      cv: "下载简历",
      email: "邮件联系",
      github: "GitHub",
      arxiv: "arXiv",
      meta: [
        {
          label: "机构",
          value: "北京邮电大学 · 中国人民大学 AIM3 实验室 · 中科院计算所",
        },
        {
          label: "地点",
          value: "中国，北京",
        },
        {
          label: "邮箱",
          value: "cuihanwen2023@bupt.edu.cn",
        },
      ],
    },
    about: {
      eyebrow: "简介",
      title: "偏研究型、也偏系统搭建的语言智能方向本科生。",
      body: [
        "我目前就读于北京邮电大学，喜欢做既能产出结果、又能被分析和优化的语言系统。我比较关心的不是模型会不会“生成”，而是它能否在真实约束下更可控、更可评估，也更贴近不同用户的需求。",
        "最近的工作主要围绕个性化长篇故事改写、基于大模型的奖励建模，以及面向事实推理任务的多智能体动态路由。我也很喜欢把研究想法尽快做成完整 pipeline，从数据构建、训练到评测和 demo 都愿意自己上手。",
      ],
    },
    highlight: {
      eyebrow: "亮点",
      title: "目前正在推进的几件事。",
      items: [
        {
          title: "个性化长篇故事改写",
          text:
            "一作推进文学叙事个性化改写项目，结合奖励模型、SFT 和 GRPO 类后训练方法，面向不同读者做风格和内容适配。",
          linkLabel: "查看 arXiv",
          linkHref: "https://arxiv.org/abs/2605.28073",
        },
        {
          title: "多智能体辩论有效性分析",
          text:
            "研究多智能体辩论何时真正提升事实推理，并探索自适应路由在效率与效果之间的平衡。",
        },
        {
          title: "科研快速原型搭建",
          text:
            "从数据处理、训练、评测到演示系统，尽量把研究思路快速做成可运行的完整流程。",
        },
        {
          title: "语音与多模态应用实践",
          text:
            "也持续参与更偏应用的 AI 项目，例如竞赛场景下的语音情感识别系统实现。",
        },
      ],
    },
    news: {
      eyebrow: "动态",
      title: "最近更新。",
      items: [
        {
          date: "2026 年 5 月",
          text:
            "《Personalized Long Story Rewriting: Adapting Literary Narratives for Diverse Users》已上传 arXiv，并投稿至 EMNLP 2026。",
        },
        {
          date: "2025 年至今",
          text:
            "在中国人民大学 AIM3 实验室担任科研助理，开展个性化长文本故事改写研究。",
        },
        {
          date: "2025 年至今",
          text:
            "在中国科学院计算技术研究所担任科研助理，研究多智能体辩论与自适应路由。",
        },
      ],
    },
    publications: {
      eyebrow: "论文",
      title: "当前论文与手稿。",
      items: [
        {
          kicker: "2026 · EMNLP 2026 投稿",
          title: "Personalized Long Story Rewriting: Adapting Literary Narratives for Diverse Users",
          meta: "崔瀚文等",
          summary:
            "围绕文学叙事个性化改写展开的一作工作，结合偏好感知奖励建模、更强基线与长文本后训练流程。",
          badges: [
            { label: "arXiv", href: "https://arxiv.org/abs/2605.28073" },
            { label: "状态：已投稿", href: null },
          ],
        },
        {
          kicker: "手稿",
          title: "When Does Multi-Agent Debate Help? A Popularity-Driven Analysis and Adaptive Routing for Factual Reasoning",
          meta: "崔瀚文等",
          summary:
            "一作项目，研究多智能体辩论在事实推理中何时有效，以及基于流行度的动态路由如何提升效率。",
          badges: [
            { label: "状态：撰写中", href: null },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "科研经历",
      title: "在真实研究环境里做系统、做实验、也做论文。",
      items: [
        {
          kicker: "2025 年至今",
          title: "科研助理 · 中国人民大学 AIM3 实验室",
          meta: "指导老师：金学坡",
          summary:
            "主要开展个性化长篇故事改写与文学叙事适配方向研究。",
          bullets: [
            "基于 Qwen3-8B 和 LoRA Adapter 构建奖励模型，面向文学改写质量建模。",
            "设计结合监督微调与 GRPO 类优化的后训练流程。",
            "搭建评测与基线系统，并探索检索增强和类比增强的设定。",
          ],
        },
        {
          kicker: "2025 年至今",
          title: "科研助理 · 中国科学院计算技术研究所",
          meta: "指导老师：毕可平",
          summary:
            "研究多智能体辩论在事实推理中的有效性、成本和动态路由策略。",
          bullets: [
            "在开源大模型上系统比较多智能体辩论与单智能体推理表现。",
            "分析不同问题流行度下的辩论收益与 token 成本。",
            "实现自适应路由机制，在困难问题上保留收益，同时减少不必要计算。",
          ],
        },
        {
          kicker: "2025",
          title: "项目经历 · 语音情感识别",
          meta: "浙江大学智能开发者竞赛",
          summary:
            "面向比赛场景复现并扩展开源语音情感识别系统。",
          bullets: [
            "与团队成员共同重建开源 SER 流水线。",
            "使用 Librosa 做特征提取，并采用 CNN 类模型进行情感分类。",
            "进入复赛，并获得大学生创新创业竞赛奖项。",
          ],
        },
      ],
    },
    education: {
      eyebrow: "教育背景",
      title: "当前学习背景。",
      items: [
        {
          kicker: "2023 年至今",
          title: "北京邮电大学",
          meta: "电信工程及管理专业本科",
          summary:
            "加权成绩 90.97 · 专业排名 17/284 · 英语六级 540",
          bullets: [
            "核心课程包括概率论、线性代数、数字信号处理、过程控制、通信原理和人工智能导论等。",
          ],
        },
      ],
    },
    awards: {
      eyebrow: "荣誉",
      title: "奖项与技能。",
      honorsTitle: "荣誉奖项",
      honors: [
        "中国国际大学生创新创业大赛金奖。",
        "北京邮电大学优秀团员、优秀学生、优秀学生干部。",
        "北邮明日之星英语演讲比赛二等奖。",
        "北京邮电大学一等奖学金、二等奖学金。",
        "全国大学生数学竞赛三等奖。",
      ],
      skillsTitle: "技能",
      skills: [
        "熟练使用 C 和 Python，具备基于 PyTorch 的深度学习实践经验。",
        "对奖励模型、强化学习和后训练优化有持续研究兴趣。",
        "熟悉 LaTeX 与 Overleaf，能够完成学术论文写作与排版。",
        "能够阅读和撰写英文学术论文与技术文档。",
      ],
    },
    contact: {
      eyebrow: "联系",
      title: "如果你也在做研究合作、实习或语言系统相关项目，欢迎交流。",
      copy:
        "我很愿意讨论故事改写、奖励建模、多智能体推理，以及研究驱动的工程实践。欢迎通过邮件联系我。",
      email: "cuihanwen2023@bupt.edu.cn",
      github: "GitHub 主页",
    },
  },
};

const state = {
  currentLang: localStorage.getItem("site-language") || "en",
};

const $ = (selector) => document.querySelector(selector);

function setText(selector, value) {
  const element = $(selector);
  if (element) {
    element.textContent = value;
  }
}

function setHTML(selector, value) {
  const element = $(selector);
  if (element) {
    element.innerHTML = value;
  }
}

function renderMeta(items) {
  $("#meta-list").innerHTML = items
    .map(
      (item) => `
        <li>
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </li>
      `
    )
    .join("");
}

function renderHighlights(items) {
  $("#highlight-list").innerHTML = items
    .map(
      (item) => `
        <article class="highlight-card">
          <h3 class="highlight-card__title">${item.title}</h3>
          <p class="highlight-card__text">${item.text}</p>
          ${
            item.linkHref
              ? `<a class="highlight-card__link" href="${item.linkHref}" target="_blank" rel="noreferrer">${item.linkLabel}</a>`
              : ""
          }
        </article>
      `
    )
    .join("");
}

function renderTimeline(target, items) {
  $(target).innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <p class="timeline-copy">${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderStacks(target, items) {
  $(target).innerHTML = items
    .map(
      (item) => `
        <article class="stack-item">
          <p class="item-kicker">${item.kicker}</p>
          <div class="stack-item__top">
            <h3 class="stack-item__title">${item.title}</h3>
          </div>
          ${item.meta ? `<p class="stack-item__meta">${item.meta}</p>` : ""}
          <p class="stack-item__summary">${item.summary}</p>
          ${
            item.bullets
              ? `<ul class="bullet-list">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
              : ""
          }
          ${
            item.badges
              ? `<div class="badge-row">${item.badges
                  .map((badge) =>
                    badge.href
                      ? `<a class="badge" href="${badge.href}" target="_blank" rel="noreferrer">${badge.label}</a>`
                      : `<span class="badge">${badge.label}</span>`
                  )
                  .join("")}</div>`
              : ""
          }
        </article>
      `
    )
    .join("");
}

function renderBullets(target, items) {
  $(target).innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderLanguage(lang) {
  const data = siteData[lang];

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "崔瀚文 | 个人主页" : "Hanwen Cui | Academic Homepage";

  Object.entries(data.nav).forEach(([key, value]) => {
    const link = document.querySelector(`[data-nav="${key}"]`);
    if (link) {
      link.textContent = value;
    }
  });

  setText("#profile-eyebrow", data.profile.eyebrow);
  setText("#profile-name", data.profile.name);
  setText("#profile-title", data.profile.title);
  setText("#profile-summary", data.profile.summary);
  setText("#cv-link", data.profile.cv);
  setText("#email-link", data.profile.email);
  setText("#github-link", data.profile.github);
  setText("#arxiv-link", data.profile.arxiv);
  renderMeta(data.profile.meta);

  setText("#about-eyebrow", data.about.eyebrow);
  setText("#about-title", data.about.title);
  setHTML("#about-body", data.about.body.map((paragraph) => `<p>${paragraph}</p>`).join(""));

  setText("#highlight-eyebrow", data.highlight.eyebrow);
  setText("#highlight-title", data.highlight.title);
  renderHighlights(data.highlight.items);

  setText("#news-eyebrow", data.news.eyebrow);
  setText("#news-title", data.news.title);
  renderTimeline("#news-list", data.news.items);

  setText("#publications-eyebrow", data.publications.eyebrow);
  setText("#publications-title", data.publications.title);
  renderStacks("#publications-list", data.publications.items);

  setText("#experience-eyebrow", data.experience.eyebrow);
  setText("#experience-title", data.experience.title);
  renderStacks("#experience-list", data.experience.items);

  setText("#education-eyebrow", data.education.eyebrow);
  setText("#education-title", data.education.title);
  renderStacks("#education-list", data.education.items);

  setText("#awards-eyebrow", data.awards.eyebrow);
  setText("#awards-title", data.awards.title);
  setText("#honors-title", data.awards.honorsTitle);
  setText("#skills-title", data.awards.skillsTitle);
  renderBullets("#honors-list", data.awards.honors);
  renderBullets("#skills-list", data.awards.skills);

  setText("#contact-eyebrow", data.contact.eyebrow);
  setText("#contact-title", data.contact.title);
  setText("#contact-copy", data.contact.copy);
  setText("#contact-email", data.contact.email);
  setText("#contact-github", data.contact.github);

  localStorage.setItem("site-language", lang);
  state.currentLang = lang;
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

$("#lang-toggle").addEventListener("click", () => {
  renderLanguage(state.currentLang === "en" ? "zh" : "en");
});

renderLanguage(state.currentLang);
initReveal();
