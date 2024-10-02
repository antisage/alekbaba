import {
  HomepageMeta,
  SkillGroup,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alekbaba',
  description: "Alekbaba.com",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Competition: 'competition',
  Home: 'home',
  Murphies: 'murphies',
  Blog: 'blog',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 8,
        color: '#2d6a9a'
      },
      {
        name: 'Java',
        level: 8.5,
        color: '#2d6a9a'
      },
      {
        name: 'Javascript',
        level: 8,
        color: '#2d6a9a'
      },
      {
        name: 'PHP',
        level: 4,
        color: '#2d6a9a'
      },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      {
        name: 'React',
        level: 6.8,
        color: '#2d6a9a'
      },
      {
        name: 'Angular',
        level: 8,
        color: '#2d6a9a'
      },
      {
        name: 'Spring Boot',
        level: 7.5,
        color: '#2d6a9a'
      },
      {
        name: 'NodeJS',
        level: 6.5,
        color: '#2d6a9a'
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Git',
        level: 9.5,
        color: '#2d6a9a'
      },
      {
        name: 'JIRA',
        level: 10,
        color: '#2d6a9a'
      },
      {
        name: 'Docker',
        level: 5,
        color: '#2d6a9a'
      },
      {
        name: 'Kubernetes',
        level: 6,
        color: '#2d6a9a'
      },
    ],
  },
  {
    name: 'Misc',
    skills: [
      {
        name: 'Graphic Design',
        level: 4.3,
        color: '#2d6a9a'
      },
      {
        name: 'Chess',
        level: 9.1,
        color: '#2d6a9a'
      },
      {
        name: 'Useless Progress Bars',
        level: 11,
        color: '#2d6a9a'
      },
    ],
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2018-2024',
    school: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    title: 'M.S. in Computer Science',
    content: <p>Specialization in Machine Learning</p>,
  },
  {
    date: '2012-2015',
    school: 'Southern Polytechnic State University',
    location: 'Marietta, GA',
    title: 'B.S. in Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2024 - Present',
    school: 'Floor & Decor',
    location: 'Atlanta, GA',
    title: 'Senior Software Engineer II',
    content: (
      <ul>
          <li>• Used Terraform for infrastructure as code practices, automating the provisioning and management of Azure Cloud Resources. This included creating new services as well as transitioning previously non-cloud services onto the cloud.</li>
          <li>• Worked with Talend to automate ETL processes</li>
          <li>• Leveraged Azure Databricks for large-scale data processing and data analysis on inventory to give reports on inventory in over 300 locations.</li>
          <li>• Configured and managed automated data pipelines using Azure Data Factory for various data processing tasks.</li>
          <li>• Designed and implemented APIs using Spring Boot</li>
          <li>• Led deployments on services to production environments using Kubernetes, ensuring that resources are properly allocated for each deployment.</li>
        </ul>
    ),
  },
  {
    date: 'May 2022 - June 2023',
    school: 'T-Mobile',
    location: 'Atlanta, GA',
    title: 'Software Developer',
    content: (
      <ul>
          <li>• Developed Splunk dashboards to display server requests, uptime statuses and test results. This dashboard notified teams if there were any problems ensuring they were taken care of.</li>
          <li>• Designed and implemented APIs using Spring Boot based on business needs.</li>
          <li>• Designed, developed, and deployed cloud based microservices in AWS</li>
          <li>• Worked with large offshore development teams to ensure teams were aligned in development work.</li>
        </ul>
    ),
  },
  {
    date: 'September 2019 – May 2022',
    school: 'Georgia Tech Research Institute',
    location: 'Atlanta, GA',
    title: 'Research Scientist',
    content: (
        <ul>
          <li>• Set testing standards for a large AngularJS application using the test automation tools Protractor and Selenium</li>
          <li>• Created python scripts to scrape data from various sources</li>
          <li>• Created data visualizations using Tableau in order to demonstrate trends</li>
          <li>• Developed features using NodeJS based on customer requests</li>
          <li>• Traveled to locations where software was being used in order to get live feedback on how it could be improved.</li>
        </ul>
    ),
  },
  {
    date: 'January 2015 – July 2019',
    school: 'Automated Logic',
    location: 'Kennesaw, GA',
    title: 'Software Engineer/Test Engineer',
    content: (
      <ul>
          <li>• Worked with AngularJS, Angular and React as a front-end application platform.</li>
          <li>• Used the NodeJS framework ExpressJS to create a web application that could handle user requests.</li>
          <li>• Created detailed design documents for product features based on project requirements.</li>
          <li>• Developed Protractor and Jasmine testing frameworks to assist developers in creating end to end tests.</li>
          <li>• Utilized TestComplete and Selenium automation tool suites to create functional tests.</li>
          <li>• Designed software to interface with hardware over various protocols primarily using Java.</li>
          <li>• Served as Scrum Master for a development team.</li>
          <li>• Responsible for the Continuous Integration pipeline of projects.</li>
      </ul>
    ),
  },
];