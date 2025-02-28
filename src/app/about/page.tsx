import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Master’s-level educated professional with 2+ years of expertise in Full-Stack Development and Data Science,
        delivering scalable microservices, REST APIs, and ML-driven insights using Java, Spring Boot, Python, SQL,
        and AWS.
      </p>
      <h2 className="text-2xl font-bold mb-2">Education</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>University of Illinois Springfield, IL</strong> - Master’s in Data Analytics (Aug 2022 – Dec 2023)
        </li>
        <li>
          <strong>GITAM University Vizag, India</strong> - Bachelor’s in Computer Science (Jul 2018 – Mar 2022)
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Experience</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Freddie Mac McLean, VA</strong> - Full-Stack Java Developer (Oct 2024 – Present)
          <ul className="list-disc list-inside ml-4">
            <li>Refactored a monolithic mortgage system into microservices, enabling independent deployments and scaling.</li>
            <li>Implemented Kafka for real-time loan processing, ensuring seamless communication between application, credit check, and approval services.</li>
            <li>Optimized Next.js (SSR) lender dashboards, cutting page load times by 40% and enhancing performance.</li>
          </ul>
        </li>
        <li>
          <strong>Randolph-Brooks Federal Credit Union (RBFCU) Remote</strong> - Full-Stack Developer (Jan 2024 – Oct 2024)
          <ul className="list-disc list-inside ml-4">
            <li>Developed RESTful APIs with Spring Boot for investment data integration.</li>
            <li>Integrated Morningstar/Bloomberg APIs, speeding up financial reports by 30%.</li>
            <li>Secured portfolio storage with JPA and Spring Security on AWS Docker.</li>
            <li>Built a logistic regression model with Scikit-Learn, boosting recovery rates by 18%.</li>
            <li>Visualized 1M survey records with Tableau for actionable insights.</li>
          </ul>
        </li>
        <li>
          <strong>Phoenix Global Data Science Intern Projects</strong> - Remote (Apr 2021 – Aug 2021)
          <ul className="list-disc list-inside ml-4">
            <li>Optimized 1M survey records with Spark for data quality.</li>
            <li>Predicted drop-off with 93.36% accuracy using click-stream analysis.</li>
          </ul>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <p className="mb-4">
        <strong>Languages:</strong> Python, Java, SQL, JavaScript, TypeScript, HTML, CSS<br />
        <strong>Frameworks:</strong> Spring Boot, Flask, Angular, React.js (Next.js), Spark, Kafka<br />
        <strong>Tools:</strong> AWS, Docker, Kubernetes, Tableau, H2O.ai<br />
        <strong>Libraries:</strong> Pandas, Scikit-Learn, PyTorch, Matplotlib<br />
        <strong>Certifications:</strong> AWS Solutions Architect, Azure Developer, GCP Data Engineer
      </p>
    </div>
  );
};

export default About;
