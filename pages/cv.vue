<script setup>
import { ref } from "vue";

definePageMeta({
  name: "CV",
});

const parts = ref({
  profile: [
    "I am a Computer Science graduate with a 2:1 MSci.",
    "I have excellent communication and administrative skills developed from being a member of a number of committees during my time at the University of Nottingham.",
    "I am a strong worker under pressure, able to quickly make decisions based on information available to me, and I have a good ability to convert someone's request into a more technical format, whatever that format might be.",
    "I am also a strong collaborator within a team, and am always keen to share any experience, tips, or tricks with those who need or want them in order for the team I am a part of to be as strong as it can be.",
  ],
  previous_employment: [
    {
      company: "We Are Sweet",
      job_role: "Developer",
      period: "July 2020 - Present",
      description: [
        "Responsible for the maintenance, support, and feature adding of major PHP projects, including a building management web application and a senior care provider system.",
        "Within these projects I have worked specifically on back-end improvements, including a bulk import system, an SMS-based job signoff system, and a document publishing scheduler.",
        "Shortly after the conclusion of my first year in the role the client for which I did the bulk of my work signed on for an extended ”VIP” contract.",
        "This was in large part thanks to the work I did on the project, and my responsibilities were extended to that of a de facto lead developer.",
        "As well as these back-end-oriented tasks I was tasked with creating an edetail application for a pharmaceutical company, which was a static project created entirely in Vue.js and SASS.",
        "Part of this work involved teaching and mentoring a company intern on how to use Vue, which was very well received.",
        'Alongside these development roles I am also responsible for the curation of social media posts within the company as "Social Media Champion".',
      ],
    },
    {
      company: "Fifteen Design",
      job_role: "Back-End Developer",
      period: "October 2019 - March 2020",
      description: [
        "Responsible for the development and maintenance of a number of php-based websites, built using WordPress, Laravel, and Symfony.",
        "Initially responsible for the creation of a brochure site for Birch Bedrooms, taking a design from a series of InVision drawings and converting them into a full responsive Wordpress site, liaising with the designer about any issues or inconsistencies that I noticed during the process.",
        "Also tasked with updating the website for Birmingham Metropolitan College with new features to add to their application system - this website made heavy use of custom Wordpress plugins for which there was no real documentation, as well as a bridge API to pass data back and forth to their custom student/course management system, Unit-e.",
        "Finally engaged in client-facing support work, handling tickets using Freshdesk and communicating directly with clients regarding the status of their work.",
      ],
    },
    {
      company: "Imaginaire Digital",
      job_role: "Web Developer",
      period: "August - September 2019",
      description: [
        "Responsible for the development of a client website using Wordpress and a custom theme, as well as an internal dashboard system built in Laravel and Laravel Nova.",
        "Additional to this I was involved in creating automation scripts for easier creation of development environments.",
      ],
    },
  ],
  education: [
    {
      place: "University of Nottingham",
      period: "2015-2019",
      qualification: "2:1 MSci in Computer Science",
      specifics: [
        "72% Dissertation, Creating Frogger in Haskell",
        "70% Software Quality Assurance",
        "90% Software Engineering Group Project",
        "75% Advanced Algorithms and Data Structures",
      ],
    },
    {
      place: "Beverley Joint 6th Form",
      period: "2013-2015",
      qualification: "A-Levels",
      specifics: ["A Maths", "B Physics", "B Chemistry"],
    },
    {
      place: "Beverley Grammar School",
      period: "2011-2013",
      qualification: "GCSEs",
      specifics: [
        "A* GCSE Additional Science",
        "A GCSE English Language",
        "A GCSE Mathematics",
        "B GCSE English Literature",
        "B GCSE German",
        "B GCSE Statistics",
        "C GCSE Electronic Products",
      ],
    },
  ],
  technical_skills_projects: [
    {
      type: "Programming Languages",
      list: [
        "C++",
        "JavaScript/ECMAScript",
        "HTML",
        "CSS/SASS",
        "SQL",
        "PHP",
        "Haskell",
      ],
    },
    {
      type: "Libraries and Frameworks",
      list: [
        "OpenGL",
        "d3",
        "jQuery",
        "Laravel",
        "Jekyll",
        "Bootstrap",
        "Vue.js",
        "Yii 2",
      ],
    },
    {
      type: "Tools",
      list: ["MS Visual Studio/Visual Studio Code", "vi", "GitHub", "IntelliJ"],
    },
  ],
  extra_technicals: [
    "For my Master's dissertation I recreated the game _Frogger_ using the Haskell functional programming language.",
    "Within this I gathered requirements, created a development plan, and implemented an object-oriented approach in the functional language.",
    "I carried out user testing and adjusted various aspects of the game based upon feedback from the test subjects, as well as making use of the Travis CI suite.",
    "In addition to the projects I worked on as part of my degree I am also a contributor to the Nottingham New Theatre History Project, in a predominantly data entry role.",
    "As well as this I created a website designed to show statistics and information about the links between actors at the Nottingham New Theatre, using JavaScript and the d3 library.",
  ],
  additional_experience_and_extracurriculars: [
    [
      "As well as working towards my degree I was involved with a number of societies at university, including University Radio Nottingham, the Nottingham New Theatre, and the Improv Society.",
      "At URN I was on their committee as Head Of Drama, responsible for overseeing all dramatic content produced by the station in that time.",
      "This required that I organise large groups of people into the same studio at the same time in order to record the audio, and then edit it down into something amusing.",
    ],
    [
      "Within the New Theatre I have been on their committee for the last year and a half in a backstage capacity, with my role as Company Set Technician requiring me to take a designer’s ideas and turn them into something real within the bounds of what is feasible.",
      "I am responsible for ensuring that anything that needs building is done in a safe and efficient manner, and also for assigning people to assistant roles based on known skill sets.",
      "As part of a broader backstage team I have developed good teamworking skills extending to the ability to take a leadership role where appropriate.",
      "As well as this I have been in a number of shows, which has led to my being able to take direction and adjust what I am doing quickly in accordance with what a director believes is better for a role.",
    ],
    [
      "With the Improv Society I have gained valuable experience speaking in front of large groups of people and making quick, well-justified decisions in a short time-frame.",
      "Within this society I was also elected Publicity and Media Officer, in charge of the public face of the society and attracting audiences to shows.",
    ],
    [
      "During the summer of 2014 I volunteered at the Centre for Digital Innovation in Hull (C4DI).",
      "Whilst there my project, together with a colleague, was to research the concept of smart cities in other countries and how their technologies could work in Hull, City of Culture 2017.",
      "This culminated in producing and presenting a slide show presentation for the bosses of the C4DI, the information from which was going to be presented to the local council.",
      "Whilst there I also developed a website for one of the founders of the C4DI, which traced people’s fast food litter and marked on a map where it was alongside a picture and a comment.",
    ],
  ],
});

const educationCellClasses = ["p-2", "align-top"];
</script>
<template>
  <h3>Profile</h3>
  <p v-text="parts.profile.join('\n')" />
  <hr />
  <h3>Previous Employment</h3>
  <template
    v-for="(job, index) in parts.previous_employment"
    :key="`job${index}`"
  >
    <h4 v-text="job.company" />
    <p>
      <strong v-text="job.job_role" />
      <br />
      {{ job.period }}
    </p>
    <p v-text="job.description.join('\n')" />
  </template>
  <hr />
  <h3>Education</h3>
  <table>
    <tbody>
      <template
        v-for="(qualification, index) in parts.education"
        :key="`qualification${index}`"
      >
        <tr>
          <td :class="educationCellClasses" v-text="qualification.place" />
          <td :class="educationCellClasses" v-text="qualification.period" />
          <td
            :class="educationCellClasses"
            v-text="qualification.qualification"
          />
        </tr>
        <tr
          v-for="(specific, specificIndex) in qualification.specifics"
          :key="`${index}specific${specificIndex}`"
        >
          <td v-for="filler in 2" :key="`${index}filler${filler}`" />
          <td
            :class="educationCellClasses.concat(['py-0'])"
            v-text="specific"
          />
        </tr>
      </template>
    </tbody>
  </table>
  <hr />

  <h3>Technical Skills</h3>
  <div class="row">
    <div
      v-for="(tsp, index) in parts.technical_skills_projects"
      :key="`tsp${index}`"
      class="col-4"
    >
      <h4 v-text="tsp.type" />
      <ul>
        <li
          v-for="(skill, skillIndex) in tsp.list"
          :key="`${index}${skillIndex}`"
          v-text="skill"
        />
      </ul>
    </div>
  </div>

  <p class="white-space-pre-line" v-text="parts.extra_technicals.join(' ')" />

  <h3>Additional Experience and Extracurriculars</h3>

  <p
    class="white-space-pre-line"
    v-text="
      parts.additional_experience_and_extracurriculars
        .map((para) => para.join(' '))
        .join('\n\n')
    "
  />
</template>
