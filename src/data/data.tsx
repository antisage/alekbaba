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
    date: '2018-2023',
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
    date: 'May 2022 - June 2023',
    school: 'T-Mobile',
    location: 'Atlanta, GA',
    title: 'Software Developer',
    content: (
      <ul>
          <li>• Developed Splunk dashboards to display server requests, uptime status and test results.</li>
          <li>• Used Spring Boot to develop APIs needed for business.</li>
          <li>• Worked with Java to develop back-end REST service for applications.</li>
          <li>• Used Kubernetes to automate the deployment of containers.</li>
          <li>• Used AWS products such as RedShift, DynamoDB, EC2, S3 to build/run projects.</li>
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
          <li>• Developed and maintained site using the JavaScript framework React.</li>
          <li>• Used RESTful APIs to gather and display data from a variety of sources to display in a web application.</li>
          <li>• Worked with NodeJS in order to develop a server-side web application.</li>
          <li>• Used JWT and OAuth2 to implement user authentication/authorization.</li>
          <li>• Set standards and developed for an AngularJS application using the test automation tool Protractor.</li>
          <li>• Contributed to creating and executing software test plans to identify software problems and their causes.</li>
          <li>• Worked with Java to develop back-end REST service for applications.</li>
          <li>• Worked with Java and .NET back-ends for web applications.</li>
          <li>• Maintained SQL databases by creating and modifying queries to meet customer needs.</li>
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