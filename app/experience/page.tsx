import { Card } from "../components/card";
import { Navigation } from "../components/nav";

interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export default function Experience() {
  const experience: Experience[] = [
    {
      position: "Senior Mobile Engineer",
      company: "7 Oaks Group",
      startDate: "October, 2023",
      endDate: "Present",
      responsibilities: [
        " Develop and maintain mobile applications using React Native framework for both iOS and Android platforms",
        "Collaborate with cross-functional teams to design, develop, test, and implement mobile applications that meet business requirements",
        "Translate UI/UX design wireframes into high-quality code",
        "Ensure the performance, quality, and responsiveness of applications",
        "Identify and troubleshoot issues and bugs, and devise solutions to address them",
        "Stay up-to-date with emerging trends and technologies in mobile development, and apply them to enhance the functionality and user experience of our mobile applications",
        "Continuously improve the codebase, maintain code quality, and ensure the best possible performance, scalability, and maintainability of the code",
        "Participate in code reviews and contribute to the development of best practices for mobile development",
      ],
    },
    {
      position: "Senior Full Stack Engineer",
      company: "Upwork",
      startDate: "March, 2023",
      endDate: "Present",
      responsibilities: [
        "Work on developing and deploying web and mobile applications using React, React Native, TypeScript, CSS and HTML.",
        "Develop and maintain REST and GraphQL endpoints with Apollo to consume and display data.",
        "Collaborate with designers and product managers to create high-quality and user-friendly applications.",
        "Deploy applications to Apple and Google Play stores.",
        "Test and debug coding issues using Jest and Playwright.",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Thought Industries",
      startDate: "February, 2022",
      endDate: "October, 2023",
      responsibilities: [
        "Build and maintain React and React Native components to organize and display LMS data.",
        "Build and utilize S3 buckets and Cloudfront to host configurations for our headless CMS.",
        "Leading development effort for React Native application for LMS platform.",
        "Replace REST API endpoints with GraphQL using Apollo client and Apollo Server.",
        "Write unit tests and integration tests using Jest to ensure reliable application behavior.",
        "Collaborate with the UX/UI team and the product team to create intuitive and user-friendly interfaces.",
        "Troubleshoot and debug issues in both the front-end and back-end of applications.",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Nutrien",
      startDate: "July, 2020",
      endDate: "February, 2022",
      responsibilities: [
        "Assist in the development of Nutrien's full stack applications for Sustainability and Agronomy pillars.",
        "Develop responsive and user friendly SPAs in React and MaterialUI.",
        "Develop scalable customer-facing mobile applications in React Native and MaterialUI.",
        "Build and enhance Node.js backends and GraphQL layers to validate and display persistent agronomic and sustainability data.",
        "Create and update unit and integration tests with Mocha and Jest to secure reliable application behavior.",
        "Practice Agile principles throughout the development cycle of planning, development, testing, deployment, and retrospection.",
        "Work with product teams to gather requirements and write bugs and user stories.",
      ],
    },
    {
      position: "Software Developer",
      company: "GreatVines",
      startDate: "March, 2019",
      endDate: "July, 2020",
      responsibilities: [
        "Maintained REST Integration with Salesforce and GoodData BI platform.",
        "Developed and exposed Apex classes as web services for GreatVines' external application.",
        "Replaced Visualforce pages with Aura and Lightning Web Components.",
        "Communicated with project managers and stakeholders during the design and implementation of new features.",
        "Collaborated with the development team during planning, development, testing, and deployment.",
        "Utilized Travis CI to test and deploy new versions and patches for the GreatVines managed package.",
      ],
    },
    {
      position: "Software Developer",
      company: "LogRhythm",
      startDate: "July, 2017",
      endDate: "March, 2019",
      responsibilities: [
        "Collaborated with representatives of different business departments to gather and prioritize business requirements.",
        "Utilized declarative tools, such as Workflow rules, Process Builder flows, Validation Rules, and Approval Processes, to solution for business enhancements.",
        "Developed scalable and maintainable code for business functions.",
        "Developed and maintained REST integrations with other business platforms, such as NetSuite, Marketo, and Impartner.",
        "Designed, developed and managed CI/CD pipeline for our Information Systems team.",
      ],
    },
    {
      position: "Software Developer",
      company: "Zayo Group",
      startDate: "August, 2016",
      endDate: "July, 2017",
      responsibilities: [
        "Implemented new enhancements including creation of custom objects, workflows, email alerts and templates for both internal and external consumption.",
        "Supported and trained new end users on finance related Salesforce applications.",
        "Participated in cross functional teams addressing strategic business issues involving CRM and business functions.",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-t from-blue-500 to-bg-black/20 pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 mt-10 sm:mt-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400">My professional work experience.</p>
        </div>
        <div className="w-full h-px bg-zinc-400" />
        {experience.map((item: Experience) => (
          <Card>
            <div className="p-4 md:p-8">
              <div className="flex w-full justify-between items-center">
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {item.position}
                </h2>
                <div className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 hidden sm:block">
                  {item.startDate} - {item.endDate}
                </div>
              </div>
              <div className="mt-4 leading-8 duration-150 text-lg text-zinc-300">
                {item.company}
              </div>
              <ul className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 list-disc ml-10 hidden sm:block">
                {item.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
