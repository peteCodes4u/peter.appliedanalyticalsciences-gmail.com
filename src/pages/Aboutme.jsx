import abtMeGif from '../assets/pete-skating_demo.gif';

export default function Aboutme() {
    return (
        <div>
        <h2 className="page-title">About Me</h2>
        <img id="abt-me-gif" className="logos" src={abtMeGif}></img>
        <p className="">
            I am Peter Smith, a developer from Tampa Florida. Professionally I am a MERN full stack developer with a multitude of skills and passions.
            I enjoy and use many programming languages, predominantly JavaScript and C#. I have developed automation test frameworks for APIs. I also have expereience with front end web application automation. 
            My interests and passions include engineering eloquent solutions for any challenge. I am great with end to end analysis, evaluation, reverse-engineering, documentation and development.
            I am a meticulous analyst that maintains detailed focus on the complex technical details of a system while maintaining a clear vison of the high level business goals or initiatives. 
            I am an agile developer who can easily transition from various engineering teams to share knowlege and assist in complex deliveries.
            My skills and abilities have provided me with opertunities to become proficient with database backends for both SQL and NoSQL, specifically with MSSQL, Postgres, and Mongo. 
            As I have proficiency with technical system analysis, I have assisted many teams to resolve major issues and ensure software realaseas with the highest statndard of quality possible with respect CICD oriented SDLC's.
            I have also been a great cross team resource leveraged by the exectuive and business departments while maintaing engineering roles.     
            Professionally I have performed in critical roles for software development specifically to Quality Assurance as a Tier-3 escalation engineer, Senior Quality Assurance Analyst and Automation Engineer.
            In those roles I have had the responsibility to directly report critical information to the executive team, documnet and publish root cause analysis reports, develop and implement hot fix solutions, communicate and work directly with customers and stakeholders in critical leadership roles, approve software builds for deployment, perform code reviews, and assist the Devops teams with deployments.     
        </p>
      </div>
    );
}