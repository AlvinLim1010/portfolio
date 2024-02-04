<template>
  <div class="p-2">
    <div class="mb-6">
      <p class="text-lg">
        Hello, I'm {{ overall.name }}, but you can call me {{ overall.callName }}. I am a dedicated {{ overall.role }} motivated
        to create innovative and excellent solutions in the ever-evolving world of technology. Currently serving as a 
        {{ overall.currentRole }} in {{ overall.workPlace }}, I bring {{ overall.experience }} years of hands-on experience and a 
        passion for crafting impactful solutions through programming.
      </p>
    </div>
    
    <h2 class="text-2xl font-bold mb-1">Skills & Technologies</h2>
    <p class="text-md mb-4">
      Here are a few technologies I've been working with recently:
    </p>

    <div class="flex flex-col sm:flex-row">
      <SkillSection sectionTitle="Programming Languages" :skills="skills.programmingLanguages" />
      <SkillSection sectionTitle="Web Development" :skills="skills.webDevelopment" />
    </div>

    <div class="flex flex-col sm:flex-row">
      <SkillSection sectionTitle="Database Systems" :skills="skills.databaseSystems" />
      <SkillSection sectionTitle="Dev Ops" :skills="skills.devOps" />
    </div>

    <div class="flex flex-col sm:flex-row">
      <SkillSection sectionTitle="Version Control" :skills="skills.versionControl" />
    </div>

    <h2 class="text-2xl font-bold mb-1 mt-2">Education</h2>
    <p class="text-md mb-2">
      I successfully earned my {{ education.degree }} in {{ education.field }} from the {{ education.where }}. This foundational
      education has been instrumental in shaping my extensive career in software engineering. Equipped with a solid understanding of 
      computer science principles and artificial intelligence, I continuously apply these skills to contribute effectively 
      to various projects and technological advancements.
    </p>

    <h2 class="text-2xl font-bold mb-1">Certifications</h2>
    <p class="text-md mb-2">
      I am honoured to have been awarded the prestigious {{ certifications.award }} from the {{ certifications.where }},
      an honor bestowed upon the top 2% of the cohort. This recognition not only reflects my academic dedication but also 
      underscores my commitment to achieving excellence in every aspect of my professional journey.  
    </p>
    
    <h2 class="text-2xl font-bold mb-1">Passions and Interests</h2>
    <p class="text-md mb-6">
      Outside of coding, I prioritize staying active through regular exercise, which not only keeps me physically fit but 
      also serves as a powerful stress reliever. Playing the piano is another passion that offers a delightful escape and 
      enhances my focus and creativity. As a dedicated Formula One enthusiast, I eagerly follow the excitement of each race, 
      marveling at the precision and strategy involved. These varied interests, from exercise and piano to Formula One, not 
      only shape my personality outside programming but also infuse a unique vibrancy into my professional life.
    </p>

    <p class="text-lg mb-10">
      Thank you for visiting my portfolio, and I look forward to the opportunity to contribute my skills 
      and passion to the team or project. Let's embark on the journey of building something remarkable together! As a 
      continuous learner, I am committed to ongoing self-improvement, staying abreast of emerging technologies, and refining
      my skills to meet the evolving demands of the software engineering landscape. 
    </p>
  </div>
</template>

<script>
import SkillSection from "@/components/AboutMe/SkillSections"
export default {
  name: "AboutMe",
  components: {
    SkillSection
  },
  data() {
    return {
      overall: {
        name: "Lim Yi Hong",
        callName: "(Alvin)",
        workPlace: "Pingspace",
        role: "Software Engineer",
        currentRole: "Software Engineer",
        field: "Software Engineering",
        experience: 0.5,
      },
      education: {
        degree: "Bachelor's degree",
        field: "Computer Science with a specialization in Artificial Intelligence",
        where: "University of Nottingham"
      },
      certifications: {
        award: "Dean's Excellence Scholarship",
        where: "University of Nottingham Malaysia"
      },
      skills: {
        programmingLanguages: [
          "Python", 
          "JavaScript", 
          "Java", 
          "C"
        ],
        webDevelopment: [
          "Vue (JavaScript library for building user interfaces)", 
          "Tailwind CSS (Utility-first CSS framework)",
          "Vuetify (Material Design component framework)",
          "Flask (Python web framework)"
        ],
        databaseSystems: [
          "PostgreSQL", 
          "MongoDB", 
          "MySQL", 
          "Redis"
        ],
        devOps: [
          "Docker", 
        ],
        versionControl: [
          "Git", 
          "GitHub", 
          "GitLab", 
        ],
      }
    };
  },
};
</script>
