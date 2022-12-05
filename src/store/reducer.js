import ACTION_TYPES from "../constants/actionTypes";
import projectImages from "../constants/images";

const initialState = {
  themeName: "",
  name: "Jasmine Sumi Vincent",
  designation: "Frontend Developer",
  profileSummary: `Frontend developer with over four years of experience in developing websites and web applications. My skill briefs
  cover JavaScript, TypeScript, HTML5, CSS3 as well as current libraries and frameworks. Enjoys research and building innovative applications to the needs of the
  business.`,
  linkedin: "https://www.linkedin.com/in/jasmine-sumi-vincent/",
  github: "https://github.com/jasminesumiv",
  emailId: "jasminesumivincent@gmail.com",
  workExperience: [
    {
      designation: "Technology Analyst",
      companyName: "Infosys Limited",
      year: "10/2021-present",
      location: "Trivandrum, India",
      details: `Worked on Vue JS application to place orders. Created registion flow, products selection, placing order, receipt generations features. \nTechnology Used : Vue JS, Vuex, Pinia, Vuetify, SASS, HTML, CSS, JavaScript, Bootstrap, Axios, Figma, StoryBook, Jenkins`,
    },
    {
      designation: "Senior Systems Engineer",
      companyName: "Infosys Limited",
      year: "06/2020-09/2021",
      location: "Trivandrum, India",
      details: `Worked on UI development for a dashboard for Business Administrators using React JS. Different functionalities including creating, modifying tables, charts, views etc. Managed design, functional approach for UI delivery and worked on major severity issues. Created complex UI designs using class-based and functional components. \nTechnology Used : React JS, TypeScript, HTML, CSS, JavaScript, Redux, SASS, Styled-Components, Axios, Bamboo`,
    },
    {
      designation: "Systems Engineer",
      companyName: "Infosys Limited",
      year: "06/2018-05/2020",
      location: "Trivandrum, India",
      details:
        "Worked on React JS and React Native applications. Created multiple components and designed more responsive UI. \nTechnology Used : React JS, React Native, TypeScript, HTML, CSS, JavaScript, Redux, SASS, Axios, Node JS, Webpack",
    },
  ],
  projects: [
    {
      projectName: "Food",
      techStack: [
        "React JS",
        "Responsive UI",
        "HTML5",
        "CSS3",
        "JavaScript",
        "ES6"
      ],
      imageUrl: projectImages.Foodproject,
      description:
        "A web application created using React JS with responsive UI. Food application helps in viewing receipes, blogs and much more.",
    },
    {
      projectName: "Schools Management",
      techStack: ["Vue JS", "Vue 3","JavaScript","ES6","HTML5", "CSS3","JSON Server"],
      imageUrl: projectImages.SchoolsManagement,
      description:
        "A school application helps to authenticate users and add school informations in the system to maintain it.",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.THEME_CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
