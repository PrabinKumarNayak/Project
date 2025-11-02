import logo from "./logo.png"

import co1 from "./co1.png";
import co2 from "./co2.png";
import co3 from "./co3.png";

import arithmetic from "../assets/C_Programming/unit_1_c_arithmetic.html?raw";
import selection_control from "../assets/C_Programming/unit_2_selection_control.html?raw";
import loops from "../assets/C_Programming/unit_3_loops.html?raw";
import functions from "../assets/C_Programming/unit_4_functions.html?raw";
import array from "../assets/C_Programming/unit_5_Array.html?raw";
import string from "../assets/C_Programming/unit_6_strings.html?raw";
import structure from "../assets/C_Programming/unit_7_structures.html?raw";
import pointers from "../assets/C_Programming/unit_8_pointers.html?raw";
import file_handling from "../assets/C_Programming/unit_9_file_handling.html?raw";
import summary from "../assets/C_Programming/unit_10_summary.html?raw";

import paython_day1 from "../assets/Python/python_day1.html?raw";
import paython_day2 from "../assets/Python/python_day2.html?raw";
import paython_day3 from "../assets/Python/python_day3.html?raw";

import burle_sharma from "./profile.jpg";
import anshuman_sahu from "./anshuman_sahu.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiGo,
} from "react-icons/si";

import {
  FaCalculator,
  FaBrain,
  FaBookOpen,
  FaBalanceScale,
  FaProjectDiagram,
} from "react-icons/fa";
import { BsGraphUp, BsCardList } from "react-icons/bs";
import { HiOutlinePuzzle, HiOutlineUsers } from "react-icons/hi";

export const assets = {
  logo,
  co1,
  co2,
  co3,

  burle_sharma,
  anshuman_sahu
};

export const courses = [
  {
    id: "web-development",
    name: "Web Development",
    course_image: co1,
    course_description:
      "Involves coding, designing, and maintaining web interfaces.",
    sections: [
      {
        type: "Frontend",
        items: [
          {
            id: "html",
            name: "HTML",
            icon: FaHtml5,
            description: "Standard markup language for creating web pages.",
            unit: [
              {
                id: "basic-tags",
                title: "Basic Tags",
                content: null,
                html_file: null,
              },
              {
                id: "forms-inputs",
                title: "Forms and Inputs",
                content: null,
                html_file: null,
              },
              {
                id: "semantic-html",
                title: "Semantic HTML",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "css",
            name: "CSS",
            icon: FaCss3Alt,
            description: "Styles the layout and appearance of web pages.",
            unit: [
              {
                id: "selectors",
                title: "Selectors and Properties",
                content: null,
                html_file: null,
              },
              {
                id: "box-model",
                title: "Box Model",
                content: null,
                html_file: null,
              },
              {
                id: "flexbox-grid",
                title: "Flexbox and Grid",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "javascript",
            name: "JavaScript",
            icon: FaJs,
            description: "Adds interactivity and logic to web pages.",
            unit: [
              {
                id: "variables",
                title: "Variables and Data Types",
                content: null,
                html_file: null,
              },
              {
                id: "dom",
                title: "DOM Manipulation",
                content: null,
                html_file: null,
              },
              {
                id: "es6",
                title: "ES6 Features",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "react",
            name: "React",
            icon: FaReact,
            description: "JavaScript library for building user interfaces.",
            unit: [
              {
                id: "jsx",
                title: "JSX and Components",
                content: null,
                html_file: null,
              },
              {
                id: "state-props",
                title: "State and Props",
                content: null,
                html_file: null,
              },
              {
                id: "hooks",
                title: "Hooks and Lifecycle",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "tailwind",
            name: "Tailwind CSS",
            icon: null,
            description: "Utility-first CSS framework for fast UI development.",
            unit: [
              {
                id: "utilities",
                title: "Utility Classes",
                content: null,
                html_file: null,
              },
              {
                id: "responsive",
                title: "Responsive Design",
                content: null,
                html_file: null,
              },
              {
                id: "theme",
                title: "Customizing Theme",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
      {
        type: "Backend",
        items: [
          {
            id: "node",
            name: "Node.js",
            icon: FaNodeJs,
            description: "JavaScript runtime for server-side development.",
            unit: [
              {
                id: "modules",
                title: "Modules and File System",
                content: null,
                html_file: null,
              },
              {
                id: "event-loop",
                title: "Event Loop",
                content: null,
                html_file: null,
              },
              {
                id: "express",
                title: "Express Integration",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "express",
            name: "Express.js",
            icon: SiExpress,
            description: "Minimal web framework for Node.js.",
            unit: [
              {
                id: "routing",
                title: "Routing",
                content: null,
                html_file: null,
              },
              {
                id: "middleware",
                title: "Middleware",
                content: null,
                html_file: null,
              },
              {
                id: "rest",
                title: "REST APIs",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "django",
            name: "Django",
            icon: null,
            description:
              "High-level Python framework for rapid backend development.",
            unit: [
              {
                id: "models",
                title: "Models and ORM",
                content: null,
                html_file: null,
              },
              {
                id: "views",
                title: "Views and Templates",
                content: null,
                html_file: null,
              },
              {
                id: "admin",
                title: "Admin Panel",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "spring",
            name: "Spring Boot",
            icon: null,
            description: "Java framework for building production-grade APIs.",
            unit: [
              {
                id: "annotations",
                title: "Spring Annotations",
                content: null,
                html_file: null,
              },
              {
                id: "jpa",
                title: "JPA and Hibernate",
                content: null,
                html_file: null,
              },
              {
                id: "controllers",
                title: "REST Controllers",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
      {
        type: "Database",
        items: [
          {
            id: "mysql",
            name: "MySQL",
            icon: SiMysql,
            description: "Relational database management system.",
            unit: [
              {
                id: "sql",
                title: "SQL Basics",
                content: null,
                html_file: null,
              },
              {
                id: "joins",
                title: "Joins and Queries",
                content: null,
                html_file: null,
              },
              {
                id: "procedures",
                title: "Stored Procedures",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "mongodb",
            name: "MongoDB",
            icon: SiMongodb,
            description: "NoSQL database using flexible documents.",
            unit: [
              {
                id: "crud",
                title: "CRUD Operations",
                content: null,
                html_file: null,
              },
              {
                id: "aggregation",
                title: "Aggregation",
                content: null,
                html_file: null,
              },
              {
                id: "indexing",
                title: "Indexing",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "postgres",
            name: "PostgreSQL",
            icon: SiPostgresql,
            description: "Advanced open-source SQL database.",
            unit: [
              {
                id: "types",
                title: "Data Types and Constraints",
                content: null,
                html_file: null,
              },
              {
                id: "views",
                title: "Indexes and Views",
                content: null,
                html_file: null,
              },
              {
                id: "triggers",
                title: "Triggers and Functions",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "firebase",
            name: "Firebase",
            icon: null,
            description: "Backend-as-a-Service by Google for real-time apps.",
            unit: [
              {
                id: "firestore",
                title: "Firestore Basics",
                content: null,
                html_file: null,
              },
              {
                id: "auth",
                title: "Authentication",
                content: null,
                html_file: null,
              },
              {
                id: "hosting",
                title: "Hosting and Deployment",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "programming-languages",
    name: "Programming Languages",
    course_image: co2,
    course_description:
      "A tool to write instructions for computers. Used to build software, apps, and systems.",
    sections: [
      {
        type: "Compiled",
        items: [
          {
            id: "c",
            name: "C",
            icon: SiCplusplus,
            description: "Low-level language for system programming.",
            unit: [
              {
                id: "c-1",
                title: "C Arithmetic",
                content: null,
                html_file: arithmetic,
              },
              {
                id: "c-2",
                title: "Selection And Control",
                content: null,
                html_file: selection_control,
              },
              {
                id: "c-3",
                title: "Loops",
                content: null,
                html_file: loops,
              },
              {
                id: "c-4",
                title: "Functions",
                content: null,
                html_file: functions,
              },
              {
                id: "c-5",
                title: "Array",
                content: null,
                html_file: array,
              },
              {
                id: "c-6",
                title: "Strings",
                content: null,
                html_file: string,
              },
              {
                id: "c-7",
                title: "Structure",
                content: null,
                html_file: structure,
              },
              {
                id: "c-8",
                title: "Pointers",
                content: null,
                html_file: pointers,
              },
              {
                id: "c-9",
                title: "File Handling",
                content: null,
                html_file: file_handling,
              },
              {
                id: "c-10",
                title: "Summary",
                content: null,
                html_file: summary,
              },
            ],
          },
          {
            id: "java",
            name: "Java",
            icon: FaJava,
            description:
              "Object-oriented programming language used for enterprise applications.",
            unit: [
              {
                id: "java-1",
                title: "OOP Concepts",
                content: null,
                html_file: null,
              },
              {
                id: "java-2",
                title: "Collections",
                content: null,
                html_file: null,
              },
              {
                id: "java-3",
                title: "Multithreading",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "cpp",
            name: "C++",
            icon: SiCplusplus,
            description: "Extension of C with object-oriented features.",
            unit: [
              {
                id: "cpp-1",
                title: "Classes and Objects",
                content: null,
                html_file: null,
              },
              {
                id: "cpp-2",
                title: "STL (Standard Template Library)",
                content: null,
                html_file: null,
              },
              {
                id: "cpp-3",
                title: "Inheritance and Polymorphism",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "go",
            name: "Go",
            icon: SiGo,
            description:
              "Statically typed language known for concurrency and performance.",
            unit: [
              {
                id: "go-1",
                title: "Goroutines and Channels",
                content: null,
                html_file: null,
              },
              {
                id: "go-2",
                title: "Packages and Modules",
                content: null,
                html_file: null,
              },
              {
                id: "go-3",
                title: "Interfaces",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
      {
        type: "Interpreted",
        items: [
          {
            id: "python",
            name: "Python",
            icon: FaPython,
            description:
              "Versatile, interpreted language great for automation and data science.",
            unit: [
              {
                id: "python-1",
                title: "Introduction",
                content: null,
                html_file: paython_day1,
              },
              {
                id: "python-2",
                title: "Arithmetic",
                content: null,
                html_file: paython_day2,
              },
              {
                id: "python-3",
                title: "Conditional Statements",
                content: null,
                html_file: paython_day3,
              },
            ],
          },
          {
            id: "javascript",
            name: "JavaScript",
            icon: FaJs,
            description: "Core scripting language of the web.",
            unit: [
              {
                id: "javascript-1",
                title: "DOM and Events",
                content: null,
                html_file: null,
              },
              {
                id: "javascript-2",
                title: "Async JS: Promises & Async/Await",
                content: null,
                html_file: null,
              },
              {
                id: "javascript-3",
                title: "ES6 Modules",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "php",
            name: "PHP",
            icon: FaPhp,
            description: "Server-side scripting language for web development.",
            unit: [
              {
                id: "php-1",
                title: "Syntax and Variables",
                content: null,
                html_file: null,
              },
              {
                id: "php-2",
                title: "Form Handling",
                content: null,
                html_file: null,
              },
              {
                id: "php-3",
                title: "Sessions and Cookies",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "quantitative-aptitude",
    name: "Quantitative Aptitude",
    course_image: co3,
    course_description:
      "Aptitude tests math; reasoning checks logic. Verbal English covers grammar and comprehension.",
    sections: [
      {
        type: "Mathematics",
        items: [
          {
            id: "mathematics-profit-and-loss",
            name: "Profit and Loss",
            icon: FaBalanceScale,
            description:
              "Covers calculations on profit %, loss %, cost and selling prices.",
            unit: [
              {
                id: "mathematics-profit-and-loss-basic-formulas",
                title: "Basic Formulas",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-profit-and-loss-discount-calculations",
                title: "Discount Calculations",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-profit-and-loss-successive-profit-and-loss",
                title: "Successive Profit and Loss",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "mathematics-time-and-work",
            name: "Time and Work",
            icon: FaCalculator,
            description: "Deals with work efficiency and completion time.",
            unit: [
              {
                id: "mathematics-time-and-work-work-done-formula",
                title: "Work Done Formula",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-time-and-work-pipes-and-cisterns",
                title: "Pipes and Cisterns",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-time-and-work-man-day-concepts",
                title: "Man-Day Concepts",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "mathematics-ratio-and-proportion",
            name: "Ratio and Proportion",
            icon: BsGraphUp,
            description: "Relates two or more quantities proportionally.",
            unit: [
              {
                id: "mathematics-ratio-and-proportion-basic-concepts",
                title: "Basic Concepts",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-ratio-and-proportion-mixtures-and-alligation",
                title: "Mixtures and Alligation",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-ratio-and-proportion-direct-inverse-proportion",
                title: "Direct & Inverse Proportion",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "mathematics-averages",
            name: "Averages",
            icon: FaCalculator,
            description: "Focuses on finding the mean of quantities.",
            unit: [
              {
                id: "mathematics-averages-average-speed",
                title: "Average Speed",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-averages-weighted-average",
                title: "Weighted Average",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-averages-problems-on-ages",
                title: "Problems on Ages",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "mathematics-simple-compound-interest",
            name: "Simple & Compound Interest",
            icon: FaBalanceScale,
            description: "Covers interest calculations on principal amounts.",
            unit: [
              {
                id: "mathematics-simple-compound-interest-si-basics",
                title: "Simple Interest Basics",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-simple-compound-interest-ci-formula",
                title: "Compound Interest Formula",
                content: null,
                html_file: null,
              },
              {
                id: "mathematics-simple-compound-interest-si-vs-ci",
                title: "Difference Between SI and CI",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
      {
        type: "Logical Reasoning",
        items: [
          {
            id: "logical-reasoning-coding-decoding",
            name: "Coding-Decoding",
            icon: BsCardList,
            description: "Tests ability to decode a pattern or logic.",
            unit: [
              {
                id: "logical-reasoning-coding-decoding-letter-based",
                title: "Letter-based Coding",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-coding-decoding-symbol-substitution",
                title: "Symbol Substitution",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-coding-decoding-matrix-coding",
                title: "Matrix Coding",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "logical-reasoning-blood-relations",
            name: "Blood Relations",
            icon: HiOutlineUsers,
            description: "Solves family-related relationship puzzles.",
            unit: [
              {
                id: "logical-reasoning-blood-relations-tree",
                title: "Tree-based Relations",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-blood-relations-coded",
                title: "Coded Relations",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-blood-relations-complex",
                title: "Complex Family Trees",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "logical-reasoning-seating-arrangement",
            name: "Seating Arrangement",
            icon: FaProjectDiagram,
            description:
              "Logical arrangement of people in circular/linear setups.",
            unit: [
              {
                id: "logical-reasoning-seating-arrangement-linear",
                title: "Linear Arrangements",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-seating-arrangement-circular",
                title: "Circular Arrangements",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-seating-arrangement-multiple",
                title: "Multiple Variables",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "logical-reasoning-puzzles",
            name: "Puzzles",
            icon: HiOutlinePuzzle,
            description: "Analytical problem-solving using given clues.",
            unit: [
              {
                id: "logical-reasoning-puzzles-tabular",
                title: "Tabular Puzzles",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-puzzles-scheduling",
                title: "Scheduling Problems",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-puzzles-floor-based",
                title: "Floor-based Puzzles",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "logical-reasoning-syllogisms",
            name: "Syllogisms",
            icon: FaBrain,
            description: "Draws logical conclusions from statements.",
            unit: [
              {
                id: "logical-reasoning-syllogisms-venn",
                title: "Venn Diagram Method",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-syllogisms-statement-conclusion",
                title: "Statement & Conclusion",
                content: null,
                html_file: null,
              },
              {
                id: "logical-reasoning-syllogisms-some-all",
                title: "Only/Some/All Rules",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
      {
        type: "Verbal Ability",
        items: [
          {
            id: "verbal-ability-synonyms",
            name: "Synonyms",
            icon: FaBookOpen,
            description: "Words with similar meanings.",
            unit: [
              {
                id: "verbal-ability-synonyms-common",
                title: "Common Synonyms",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-synonyms-contextual",
                title: "Contextual Usage",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-synonyms-pairs",
                title: "Synonym Pairs",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "verbal-ability-antonyms",
            name: "Antonyms",
            icon: FaBookOpen,
            description: "Words with opposite meanings.",
            unit: [
              {
                id: "verbal-ability-antonyms-common",
                title: "Common Antonyms",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-antonyms-root",
                title: "Root-based Words",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-antonyms-contrast",
                title: "Contrast Pairs",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "verbal-ability-reading-comprehension",
            name: "Reading Comprehension",
            icon: FaBookOpen,
            description: "Understand and answer questions from a passage.",
            unit: [
              {
                id: "verbal-ability-reading-comprehension-inference",
                title: "Inference-Based Questions",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-reading-comprehension-tone",
                title: "Tone and Style",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-reading-comprehension-summary",
                title: "Summary Questions",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "verbal-ability-sentence-correction",
            name: "Sentence Correction",
            icon: FaBookOpen,
            description: "Grammar and syntax improvement of sentences.",
            unit: [
              {
                id: "verbal-ability-sentence-correction-sva",
                title: "Subject-Verb Agreement",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-sentence-correction-tense",
                title: "Tense Consistency",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-sentence-correction-punctuation",
                title: "Punctuation Rules",
                content: null,
                html_file: null,
              },
            ],
          },
          {
            id: "verbal-ability-para-jumbles",
            name: "Para Jumbles",
            icon: FaBookOpen,
            description: "Arrange jumbled sentences in logical order.",
            unit: [
              {
                id: "verbal-ability-para-jumbles-opening",
                title: "Opening and Closing Sentences",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-para-jumbles-transitions",
                title: "Transition Words",
                content: null,
                html_file: null,
              },
              {
                id: "verbal-ability-para-jumbles-flow",
                title: "Coherence and Flow",
                content: null,
                html_file: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const blog_list = [
  {
    id: "1",
    category: "Personal",
    date: "Dec 18, 2024",
    title: "The Journey of a Self-Taught Developer",
    description:
      "Sharing my personal experience of learning to code and the challenges I faced along the way. Tips for staying motivated during your coding journey.",
    read_time: "5 min read",
  },
  {
    id: "2",
    category: "Education",
    date: "Dec 14, 2024",
    title: "Why Practical Learning Beats Theory",
    description:
      "Exploring why hands-on coding projects are more effective than just reading about programming concepts. The science behind active learning.",
    read_time: "7 min read",
  },
  {
    id: "3",
    category: "Career",
    date: "Dec 11, 2024",
    title: "Building a Career in Tech: My Teaching Philosophy",
    description:
      "How I approach teaching programming and why I believe in empowering students to become independent problem solvers.",
    read_time: "6 min read",
  },
];

export const course_features = [
  {
    id: 1,
    title: "HD Video Lessons",
    description: "High-quality video content with clear explanations",
  },
  {
    id: 2,
    title: "Certificates",
    description: "Earn certificates upon course completion",
  },
  {
    id: 3,
    title: "Community",
    description: "Join a community of learners and get support",
  },
];

export const community = [
  {
    id: 1,
    title: "Burle Sharma",
    description:
      "Burle Prasad, founder of Geecoding, is a passionate educator who believes in hands-on learning through real-world projects. To make coding accessible to everyone through practical tutorials that bridge the gap between theory and application.",
    profile_pic: burle_sharma, // Add image path or URL here
    features: [
      "5+ years of teaching experience",
      "1000+ students taught",
      "50+ practical tutorials created",
      "Founder of Geecoding platform"
    ],
  },
  {
    id: 2,
    title: "Anshuman Sahu",
    description:
      "To make coding accessible to everyone through practical tutorials that bridge the gap between theory and application.",
    profile_pic: anshuman_sahu, // Add image path or URL here
    features: [
      "20+ years of experience",
      "Full Stack Developer",
      "Mentored 200+ students",
      "Open Source Contributor"
    ],
  },
];

