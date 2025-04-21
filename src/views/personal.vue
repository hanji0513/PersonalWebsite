<template>
  <el-container class="container">
    <!-- 导航菜单 -->
    <el-header class="header">
      <el-menu
        mode="horizontal"
        :router="true"
        background-color="#1a2a3a"
        text-color="#fff"
        active-text-color="#3498db"
        class="nav-menu"
      >
        <el-menu-item>
          <div @click="toggleLanguage" class="language-button">
            <img
              :src="currentLang === 'en' ? 'images/en.png' : 'images/zh.png'"
              class="language-flag"
              fit="contain"
            />
          </div>
        </el-menu-item>
        <el-menu-item index="/#home" @click="scrollToElement('home')">{{ t('Home') }}</el-menu-item>
        <el-menu-item index="/#about" @click="scrollToElement('about')">{{
          t('About me')
        }}</el-menu-item>
        <el-menu-item index="/#skills" @click="scrollToElement('skills')">{{
          t('Skills')
        }}</el-menu-item>
        <el-menu-item index="/#projects" @click="scrollToElement('projects')">{{
          t('Projects')
        }}</el-menu-item>
        <el-menu-item index="/#contact" @click="scrollToElement('contact')">{{
          t('Contact me')
        }}</el-menu-item>
      </el-menu>
    </el-header>

    <section id="home" class="section home-section">
      <div class="home-content">
        <div class="home-info">
          <h2 class="title">{{t('Ethan Liu')}}</h2>
          <p class="subtitle">
            {{ t('A full-stack developer focused on Java Back End and Vue Front End development') }}
          </p>
        </div>
        <div class="profile-image-container">
          <el-image src="images/zip.png" fit="cover" class="profile-image"></el-image>
        </div>
      </div>
    </section>

    <!-- 关于我 -->
    <section id="about" class="section about-section">
      <h1 class="section-title">{{ t('About me') }}</h1>
      <h1 class="section-title"></h1>
      <el-row :gutter="20" justify="center" class="about-content-row">
        <el-col :span="24" :lg="6" class="about-item-col">
          <div class="about-item">
            <h3 class="about-label">{{ t('Education background:') }}</h3>
            <p class="about-text">
              {{ t("Bachelor's degree - Putian University - Software Engineering") }}
            </p>
          </div>
        </el-col>
        <el-col :span="24" :lg="6" class="about-item-col">
          <div class="about-item">
            <h3 class="about-label">{{ t('Technical training experience:') }}</h3>
            <p class="about-text">
              {{ t('Chuan Yi Zhuo Yue - Java Full Stack Cloud Developer') }}
            </p>
          </div>
        </el-col>
        <el-col :span="24" :lg="6" class="about-item-col">
          <div class="about-item">
            <h3 class="about-label">{{ t('Work Experience:') }}</h3>
            <p class="about-text">{{ t('Cspeed - Java Full-Stack Developer Internship') }}</p>
          </div>
        </el-col>
        <el-col :span="24" :lg="6" class="about-item-col">
          <div class="about-item">
            <h3 class="about-label">{{ t('Hobbies:') }}</h3>
            <p class="about-text">{{ t('Gardening, Raising Animals, Badminton') }}</p>
          </div>
        </el-col>
      </el-row>
    </section>

    <!-- 技能栈 -->
    <section id="skills" class="section skills-section">
      <h1 class="section-title">{{ t('Skills') }}</h1>
      <h1 class="section-title"></h1>
      <el-row justify="center" class="skills-row">
        <el-col :span="24" :lg="6">
          <h3>{{ t('Languages') }}</h3>
          <div class="skill-tags-container">
            <el-tag v-for="lang in languages" :key="lang" class="skill-tag">{{ lang }}</el-tag>
          </div>
        </el-col>
        <el-col :span="24" :lg="6">
          <h3>{{ t('Frameworks/Libraries') }}</h3>
          <div class="skill-tags-container">
            <el-tag v-for="framework in frameworks" :key="framework" class="skill-tag">{{
              framework
            }}</el-tag>
          </div>
        </el-col>
        <el-col :span="24" :lg="6">
          <h3>{{ t('Tools') }}</h3>
          <div class="skill-tags-container">
            <el-tag v-for="tool in tools" :key="tool" class="skill-tag">{{ tool }}</el-tag>
          </div>
        </el-col>
        <el-col :span="24" :lg="6">
          <h3>{{ t('Databases') }}</h3>
          <div class="skill-tags-container">
            <el-tag v-for="database in databases" :key="database" class="skill-tag">{{
              database
            }}</el-tag>
          </div>
        </el-col>
      </el-row>
    </section>

    <!-- 项目展示 -->
    <section id="projects" class="section projects-section">
      <h1 class="section-title">{{ t('Projects') }}</h1>
      <h1 class="section-title"></h1>
      <el-row :gutter="20" justify="center" style="margin-left: 10px; margin-right: 10px">
        <el-col :span="24" :lg="12" v-for="project in projects" :key="project.name">
          <el-card class="project-card">
            <h2>{{ project.name }}</h2>
            <div class="project-image-container">
              <el-image :src="project.images" fit="cover"></el-image>
            </div>
            <div class="project-detail">
              <p class="description-label">{{ t('Description') }}:</p>
              <p class="description-content">{{ project.description }}</p>
            </div>
            <div class="project-detail">
              <p class="description-label">{{ t('My role in the project') }}:</p>
              <p class="description-content">{{ project.role }}</p>
            </div>
            <div class="project-detail">
              <p class="description-label">{{ t('Technologies used') }}:</p>
              <p class="description-content">{{ project.techStack.join(', ') }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <!-- 联系我 -->
    <section id="contact" class="section contact-section">
      <h1 class="section-title">{{ t('Contact me') }}</h1>
      <h1 class="section-title"></h1>
      <el-row justify="center">
        <el-col :span="24" :lg="12">
          <div
            style="
              display: inline-flex;
              flex-direction: column;
              align-items: center;
              margin: 0 20px;
            "
          >
            <el-link
              type="primary"
              href="https://www.linkedin.com/in/yixin-liu-27b77b358 "
              style="margin-right: 10px"
            >
              <img
                src="/images/Linkedin.png"
                alt="LinkedIn"
                style="vertical-align: middle; width: 50px; height: 50px"
              />
              <span style="margin-top: 10px; font-size: 15px; margin-left: 5px">LinkedIn</span>
            </el-link>
          </div>
          <div
            style="
              display: inline-flex;
              flex-direction: column;
              align-items: center;
              margin: 0 20px;
            "
          >
            <el-link type="primary" @click="copyEmail">
              <img
                src="/images/email.png"
                alt="Email"
                style="vertical-align: middle; width: 50px; height: 50px"
              />
              <span style="margin-top: 10px; font-size: 15px; margin-left: 5px">Email</span>
            </el-link>
          </div>
        </el-col>
      </el-row>
    </section>
  </el-container>
</template>
  
  <script>
import translations from '../translation/translations'

export default {
  data() {
    return {
      currentLang: 'en',
      languages: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL'],
      frameworks: [
        'Spring Boot',
        'Spring Cloud',
        'Spring MVC',
        'MyBatis',
        'MyBatis-Plus',
        'Vue.js',
        'Node.js',
        'Element UI',
        'Element Plus',
      ],
      databases: ['MySQL', 'Redis'],
      tools: ['IDEA', 'VSCode', 'Git', 'Maven', 'Linux', 'Docker', 'Postman','Navicat'],
      projects: [
        {
          name: '7Link',
          images: 'images/project1.png',
          description:
            'This project is a system that aims to provide a comprehensive solution for property management, with efficient property management and convenient resident service functions. In this project, I was mainly responsible for the front-end and back-end developer of the management system, and also undertook the design and developer of some APIs for mobile applications.',
          role: 'Java Full Stack Developer',
          techStack: ['Spring BladeX', 'MyBatis-Plus', 'Vue.js', 'Element Plus', 'MySQL', 'Redis'],
        },
        {
          name: 'Public Rental Housing Management System',
          images: 'images/project2.png',
          description:
            'This project is my graduation project, and I am independently responsible for the design and development, overcoming technical difficulties such as user authentication, token management, interface security, cross-origin requests, and error handling.',
          role: 'Java Full Stack Developer',
          techStack: [
            'Spring Cloud',
            'Redis',
            'Vue.js',
            'Element Plus',
            'MySQL',
            'MyBatis',
            'Docker',
          ],
        },
      ],
      contactEmail: '',
    }
  },
  methods: {
    scrollToElement(elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    toggleLanguage() {
      this.currentLang = this.currentLang === 'en' ? 'zh' : 'en'
    },
    copyEmail() {
      const email = 'yixinliu0513@gmail.com' // 您的邮箱地址
      navigator.clipboard
        .writeText(email)
        .then(() => {
          this.$message.success(this.t('You have copied my Email'))
        })
        .catch((err) => {
          console.error('复制失败:', err)
        })
    },
    t(key) {
      return this.currentLang === 'en' ? key : translations[key]
    },
  },
  computed: {
    currentLanguage() {
      return this.currentLang === 'en' ? '中文' : 'English'
    },
  },
}
</script>
  
  <style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

/* 导航栏样式 */
.header {
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #1a2a3a; /* 导航栏背景色 */
}

.nav-menu {
  justify-content: flex-end; /* 导航栏内容靠右排列 */
}

.container {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.section {
  padding: 50px 0;
  text-align: center;
  width: 100%;
  margin: 0;
}

.title {
  font-size: 55px; /* 增大字体 */
  margin-top: 20px;
}

.subtitle {
  font-size: 22px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 28px; /* 增大字体 */
  margin-bottom: 20px;
}

.profile-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
}

.project-card {
  margin-bottom: 20px;
  display: block;
}

.language-button {
  width: 50px;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
}

.language-flag {
  width: 50%;
  height: 100%;
  object-fit: contain;
}

/* 技能标签容器样式 */
.skill-tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 居中对齐 */
  /* margin: 0 -5px; */
}

/* 技能标签样式 */
.skill-tag {
  margin: 5px;
}

/* 技能列样式 */
.skills-row .el-col {
  margin-bottom: 20px;
}

/* 联系我表单样式 */
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-form-item {
  color: white;
  width: 70%;
}
.el-form-item__label {
  font-weight: bold;
}

.el-input {
  width: 100%;
}

.submit-container {
  margin-top: 15px;
}

.el-button {
  background-color: #3498db;
  border-color: #3498db;
}

.el-button:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}

/* 为首页添加额外的上边距 */
.home-section {
  background-image: url('/images/bg.jpg'); /* 添加背景图 */
  background-size: cover;
  background-position: center; /* 背景图居中 */
  background-repeat: no-repeat; /* 背景图不重复 */
}

/* 首页内容样式 */
.home-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px; /* 两个内容块之间的间距 */
}

.home-info {
  text-align: center; /* 个人简介水平居中 */
  flex: 3; /* 个人简介占3份 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  color: white;
}

.profile-image-container {
  flex: 2; /* 个人图片占2份 */
}

.profile-image {
  width: 100%;
  max-width: none; /* 移除最大宽度限制，使图片铺满容器 */
  height: auto;
  border-radius: 10px;
}

.about-content-row {
  width: 100%;
}

.about-label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.about-text {
  margin: 0;
  line-height: 1.5;
}

.about-section {
  background-color: #e6f2ff; /* 关于我部分背景色 */
}

.skills-section {
  background-color: #ffffff; /* 技能部分背景色 */
}

.projects-section {
  background-color: #e6ffe6; /* 项目部分背景色 */
}

.contact-section {
  color: white;
  background-color: #000; /* 联系我部分背景色 */
}

/* 项目描述样式 */
.project-detail {
  margin-bottom: 10px;
  text-align: left;
}

.description-label {
  font-weight: bold;
  font-style: italic;
  display: inline-block;
  width: 180px;
  vertical-align: top;
}

.description-content {
  display: inline-block;
  width: calc(100% - 180px);
}

@media (max-width: 768px) {
  .home-content {
    position: relative; /* 为定位个人简介提供参考 */
    flex-direction: row; /* 在小屏幕上水平排列 */
    align-items: flex-start; /* 顶部对齐 */
  }
  .profile-image-container {
    justify-content: flex-end; /* 靠右对齐图片 */
    width: 100%; /* 图片容器占据整个宽度 */
    max-width: 390px; /* 图片容器的最大宽度 */
  }
  .profile-image {
    /* margin-top: 10%; */
    margin-left: 0.5%;
    max-width: 390px; /* 图片的最大宽度 */
    overflow: hidden;
  }
  .home-info {
    position: absolute; /* 绝对定位个人简介 */
    top: 250px; /* 距离顶部的距离，调整后的位置 */
    left: 20px; /* 距离左侧的距离 */
    text-align: left; /* 文本左对齐 */
    width: calc(100% - 40px); /* 确保简介不会超出屏幕 */
    margin-bottom: 0; /* 移除底部间距 */
    z-index: 10; /* 确保简介在图片上方 */
  }
  .el-menu {
    font-size: 14px;
  }
  .el-col {
    margin-bottom: 15px;
  }
  .el-card {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .section {
    padding: 30px 0;
  }
  .section-title {
    font-size: 24px;
  }
  .title {
    font-size: 28px;
  }
  .subtitle {
    font-size: 16px;
  }
  .skills-row .el-col {
    margin-bottom: 15px;
  }
  /* 为移动设备上的项目详情调整样式 */
  .description-label {
    width: 100%;
    display: block;
    margin-bottom: 5px;
  }
  .description-content {
    width: 100%;
    display: block;
  }
}
</style>