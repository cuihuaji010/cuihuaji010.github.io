const translations = {
  en: {
    toggle: "中文",
    navHome: "Home",
    navPublications: "Publications",
    navNews: "News",
    navAwards: "Awards",
    navLife: "Life",
    aboutTitle: "About",
    authorTitle: "Undergraduate Student @ BUPT",
    metaLocation: "Beijing, China",
    metaGithub: "GitHub",
    metaEmail: "Email",
    metaScholar: "Google Scholar",
    intro:
      'Hello, I am currently a third-year undergraduate student at Beijing University of Posts and Telecommunications. From 2025 to 2026, I was a research intern at <a href="https://www.ruc-aim3.com/" target="_blank" rel="noreferrer">RUC AIM3 Lab</a>. Since 2026, I have been an intern at the Institute of Computing Technology, Chinese Academy of Sciences, <a href="https://stay-hungry-time.github.io/" target="_blank" rel="noreferrer">TIME Group</a>. My current research interests focus on natural language processing and multi-agent systems.',
    newsTitle: "📰 News",
    news:
      '[May 26, 2026] My first paper, <a href="https://arxiv.org/abs/2605.28073" target="_blank" rel="noreferrer">StoryLens: Preference-Aligned Story Rewriting via Context-Aware Narrative Enrichment</a>, was posted to arXiv.',
    publicationsTitle: "📚 Publications",
    paperTitle:
      "StoryLens: Preference-Aligned Story Rewriting via Context-Aware Narrative Enrichment",
    paperAuthors: "Hanwen Cui, et al.",
    paperHighlights: [
      "This work studies story rewriting for diverse reader preferences while preserving plot consistency and narrative coherence.",
      "It argues that effective story rewriting requires context-aware narrative enrichment rather than surface-level style transfer alone.",
      "It introduces STORYLENSBENCH, STORYLENSEVAL, and STORYLENSWRITER for benchmark construction, reward modeling, and two-stage rewriting.",
      "Experimental results show that STORYLENSWRITER outperforms strong baselines and highlights the value of context-aware narrative enrichment.",
    ],
    awardsTitle: "🏆 Honors and Awards",
    awards: [
      "Gold Award, China International College Students' Innovation Competition.",
      "Outstanding League Member, Outstanding Student, and Outstanding Student Cadre, Beijing University of Posts and Telecommunications.",
      "Third Prize, National College Students Mathematics Competition.",
      "Second Prize, BUPT Star of Tomorrow English Speech Competition.",
      "First-Class Academic Scholarship, Beijing University of Posts and Telecommunications.",
    ],
    contactTitle: "✉️ Contact",
    contact:
      'I am currently continuing to learn and develop new research projects, and I am also looking for a suitable graduate advisor. If you are interested in supervising me or would like to collaborate on research, please feel free to contact me at <a href="mailto:hanwencui06@gmail.com">hanwencui06@gmail.com</a>.',
    lifeTitle: "🌿 Life",
    lifeText: "Coming soon.",
    visitorMapTitle: "Visitor Map",
    visitorMapText: "Live visitor locations are displayed here.",
    visitorMapNote: "Visitor analytics powered by whos.amung.us.",
  },
  zh: {
    toggle: "EN",
    navHome: "主页",
    navPublications: "论文",
    navNews: "动态",
    navAwards: "奖项",
    navLife: "生活",
    aboutTitle: "关于我",
    authorTitle: "北京邮电大学本科生",
    metaLocation: "中国，北京",
    metaGithub: "GitHub",
    metaEmail: "邮箱",
    metaScholar: "谷歌学术",
    intro:
      '你好，我目前是北京邮电大学大三本科生。2025 至 2026 年期间，我在 <a href="https://www.ruc-aim3.com/" target="_blank" rel="noreferrer">RUC AIM3 Lab</a> 担任科研实习生。自 2026 年起，我在中国科学院计算技术研究所 <a href="https://stay-hungry-time.github.io/" target="_blank" rel="noreferrer">TIME Group</a> 实习。当前研究兴趣主要聚焦于自然语言处理和多智能体系统。',
    newsTitle: "📰 动态",
    news:
      '[2026 年 5 月 26 日] 我的第一篇论文 <a href="https://arxiv.org/abs/2605.28073" target="_blank" rel="noreferrer">StoryLens: Preference-Aligned Story Rewriting via Context-Aware Narrative Enrichment</a> 发布于 arXiv。',
    publicationsTitle: "📚 论文",
    paperTitle:
      "StoryLens: Preference-Aligned Story Rewriting via Context-Aware Narrative Enrichment",
    paperAuthors: "崔瀚文 等",
    paperHighlights: [
      "本文研究了面向多样化读者偏好的故事改写问题，同时保持情节一致性和叙事连贯性。",
      "我们认为，有效的故事改写不仅需要表层风格迁移，还需要上下文感知的叙事增强。",
      "本文提出了 STORYLENSBENCH、STORYLENSEVAL 和 STORYLENSWRITER，分别用于基准构建、奖励建模和两阶段改写。",
      "实验结果表明，STORYLENSWRITER 持续优于强基线方法，验证了上下文感知叙事增强在个性化故事改写中的重要性。",
    ],
    awardsTitle: "🏆 荣誉与奖项",
    awards: [
      "中国国际大学生创新创业大赛金奖。",
      "北京邮电大学优秀团员、优秀学生、优秀学生干部。",
      "全国大学生数学竞赛三等奖。",
      "北京邮电大学明日之星英语演讲比赛二等奖。",
      "北京邮电大学一等奖学金。",
    ],
    contactTitle: "✉️ 联系方式",
    contact:
      '我目前仍在持续学习并推进新的研究项目，同时也在寻找合适的研究生导师。如果你愿意指导我，或希望与我开展科研合作，欢迎通过邮箱 <a href="mailto:hanwencui06@gmail.com">hanwencui06@gmail.com</a> 与我联系。',
    lifeTitle: "🌿 生活",
    lifeText: "内容稍后补充。",
    visitorMapTitle: "访客地图",
    visitorMapText: "这里会显示实时访客分布地图。",
    visitorMapNote: "访客统计组件由 whos.amung.us 提供。",
  },
};

const langToggle = document.getElementById("lang-toggle");

function renderList(targetId, items) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function getCurrentLanguage() {
  return document.documentElement.lang === "zh-CN" ? "zh" : "en";
}

function renderLanguage(lang) {
  const data = translations[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.theme = "dark";
  document.title = lang === "zh" ? "崔瀚文" : "Hanwen Cui";

  document.getElementById("nav-home").textContent = data.navHome;
  document.getElementById("nav-publications").textContent = data.navPublications;
  document.getElementById("nav-news").textContent = data.navNews;
  document.getElementById("nav-awards").textContent = data.navAwards;
  document.getElementById("nav-life").textContent = data.navLife;
  document.getElementById("lang-toggle").textContent = data.toggle;
  document.getElementById("about-title").textContent = data.aboutTitle;

  document.getElementById("author-title").textContent = data.authorTitle;
  document.getElementById("meta-location").textContent = data.metaLocation;
  document.getElementById("meta-github").textContent = data.metaGithub;
  document.getElementById("meta-email").textContent = data.metaEmail;
  document.getElementById("meta-scholar").textContent = data.metaScholar;

  document.getElementById("intro-text").innerHTML = data.intro;
  document.getElementById("news-title").textContent = data.newsTitle;
  document.getElementById("news-list").innerHTML = `<li>${data.news}</li>`;

  document.getElementById("publications-title").textContent = data.publicationsTitle;
  document.getElementById("paper-title").textContent = data.paperTitle;
  document.getElementById("paper-authors").textContent = data.paperAuthors;
  renderList("paper-highlights", data.paperHighlights);

  document.getElementById("awards-title").textContent = data.awardsTitle;
  renderList("awards-list", data.awards);

  document.getElementById("contact-title").textContent = data.contactTitle;
  document.getElementById("contact-text").innerHTML = data.contact;
  document.getElementById("life-title").textContent = data.lifeTitle;
  document.getElementById("life-text").textContent = data.lifeText;
  document.getElementById("visitor-map-title").textContent = data.visitorMapTitle;
  document.getElementById("visitor-map-text").textContent = data.visitorMapText;
  document.getElementById("visitor-map-note").textContent = data.visitorMapNote;

  localStorage.setItem("site-language", lang);
}

const savedLang = localStorage.getItem("site-language") || "en";

renderLanguage(savedLang);

langToggle.addEventListener("click", () => {
  const currentLang = getCurrentLanguage();
  renderLanguage(currentLang === "en" ? "zh" : "en");
});
