export const site = {
  name: "Kabir Kakkar",
  title: "Software Engineer",
  tagline:
    "Building reliable backend systems, data platforms, and intelligent applications.",
  headlineSupport:
    "Master of Information Systems Management at Carnegie Mellon University.",
  email: "kabir.kakkar.cmu@gmail.com",
  phone: "+1 (412) 606-1140",
  phoneHref: "tel:+14126061140",
  linkedin: "https://www.linkedin.com/in/kabir-kakkar/",
  github: "https://github.com/kabir-kakkar",
  resumePath: "/Kabir_Kakkar_Resume.pdf",
  photo: "/images/Kabir.jpg",
  form: {
    to: "kabir.kakkar.cmu@gmail.com",
    subject: "Hiring inquiry - Kabir Kakkar",
  },
  about: {
    title: "Software engineer focused on systems that scale",
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "SQL", "C++", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend & Systems",
      items: [
        "FastAPI",
        "Flask",
        "Django",
        "Spring Boot",
        "React",
        "Node.js",
        "Microservices",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Data Engineering",
      items: ["Kafka", "Spark (PySpark)", "Airflow", "Hadoop", "Spark Streaming"],
    },
    {
      category: "Databases & Warehousing",
      items: [
        "Snowflake",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Pinecone (Vector DB)",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD",
        "Prometheus",
        "Grafana",
        "Jenkins",
      ],
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      degree: "Master of Information Systems Management",
      dates: "August 2024 - December 2025",
      details:
        "Coursework: Distributed Systems, Database Management, Statistics, Agile, Machine Learning, Data Science for Product Managers, Artificial Intelligence (AI), Data Structures and Algorithms",
    },
    {
      school: "Manipal University Jaipur",
      degree: "Bachelor of Technology, Computer and Communication Engineering",
      dates: "June 2017 - June 2021",
      details: null,
    },
  ],
  experience: [
    {
      company: "MedSarthi LLC",
      role: "Software Development Engineer, Internship",
      dates: "July 2025 - August 2025",
      bullets: [
        "Built an LLM-powered residency matching platform that extracted applicant data from uploaded documents and generated personalized program recommendations with 95%+ extraction accuracy.",
        "Developed a hybrid RAG recommendation engine across 100+ residency programs using semantic retrieval, custom ranking, and grounded LLM reasoning, delivering recommendations in under 3 seconds.",
        "Built scalable backend infrastructure for document ingestion, PostgreSQL storage, observability, and Dockerized deployment, supporting over 10,000 daily processing requests.",
      ],
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      dates: "May 2021 - May 2023",
      bullets: [
        "Developed backend services using asynchronous processing, caching, and database-query optimization, increasing request throughput by 35% and reducing p95 latency by 30% under peak load.",
        "Containerized backend services using Docker and deployed them on Kubernetes, improving deployment consistency across production environments.",
        "Built Jenkins-based CI/CD pipelines that automated build, test, Docker image creation, registry push, and Kubernetes deployment, reducing standard service deployment time from 4 hours to 12 minutes.",
        "Built reusable Terraform modules and Infrastructure-as-Code workflows, reducing environment provisioning time from hours to minutes while standardizing cloud deployments across 10+ services.",
        "Implemented Prometheus metrics, Grafana dashboards, and CloudWatch alerts across production environments, reducing mean time to detect production issues by 60%.",
      ],
    },
  ],
  projects: [
    {
      title: "Movie Recommendation Platform",
      description:
        "Personalized movie recommendation system using collaborative filtering and content-based signals, with low-latency inference APIs and monitoring for production-ready serving.",
      href: null as string | null,
    },
    {
      title: "Scalable Real-Time Recommendation Platform",
      description:
        "Multi-stage recommendation system with collaborative filtering and real-time re-ranking, improving CTR by 18% and NDCG@10 by 22%. Low-latency inference APIs handling 5K+ requests/sec with automated retraining and Grafana monitoring.",
      href: null as string | null,
    },
    {
      title: "Real-Time Anomaly Detection Pipeline for Financial Fraud",
      description:
        "Production-grade anomaly detection with Apache Kafka and PySpark Structured Streaming at 1k+ events/sec. Isolation Forest model with 92% recall and concept-drift monitoring that triggers Grafana alerts when distributions shift.",
      href: null as string | null,
    },
    {
      title: "Demand Forecasting - A Comparative Approach",
      description:
        "Co-authored published comparative study of demand forecasting models on real retail sales data. End-to-end forecasting pipeline with cloud deployment and Power BI dashboards for inventory decisions.",
      href: "https://www.researchgate.net/publication/348304287_Implementation_of_Demand_Forecasting_-_A_Comparative_Approach",
    },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
