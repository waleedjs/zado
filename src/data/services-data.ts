import ser_img_1 from "@/assets/img/inner-service/service/software-solution.webp";
import ser_img_2 from "@/assets/img/inner-service/service/web.webp";
import ser_img_3 from "@/assets/img/inner-service/service/digital-marketing.webp";
import ser_img_4 from "@/assets/img/inner-service/service/seo.webp";
import ser_img_5 from "@/assets/img/inner-service/service/graphic-design.webp";
import ser_img_6 from "@/assets/img/inner-service/service/email-marketing.webp";


export interface IServiceData {
  id: number;
  slug: string;
  img: any;
  subtitle: string;
  title: string;
  text: string;
  lists: string[];
  details: {
    description: string[];
    features: string[];
  };
}

const services_data: IServiceData[] = [
  {
    id: 1,
    slug: "software-services",
    img: ser_img_1,
    subtitle: "Development",
    title: "Software Services",
    text: "Custom software solutions tailored to your business needs. From enterprise applications to specialized tools, we build robust and scalable software.",
    lists: ["Custom Software Development", "Enterprise Applications", "API Integration", "Software Maintenance"],
    details: {
      description: [
        "We develop custom software solutions that streamline your business processes and enhance productivity.",
        "Our software services include full-cycle development from concept to deployment and ongoing support.",
      ],
      features: ["Custom application development", "System integration", "Quality assurance", "Technical support"],
    },
  },
  {
    id: 2,
    slug: "graphic-design",
    img: ser_img_5,
    subtitle: "Design Studio",
    title: "Graphic Design",
    text: "Creative visual solutions that communicate your brand message effectively. From logos to marketing materials, we bring your vision to life.",
    lists: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
    details: {
      description: [
        "Professional graphic design services that enhance your brand presence and visual communication.",
        "We create compelling visuals that resonate with your target audience and strengthen your brand identity.",
      ],
      features: ["Logo and branding design", "Marketing collateral", "Digital asset creation", "Print-ready designs"],
    },
  },
  {
    id: 3,
    slug: "web-mobile-development",
    img: ser_img_2,

    subtitle: "Development",
    title: "Web & Mobile Development",
    text: "Full-stack web and mobile application development. We create responsive websites and native/cross-platform mobile apps.",
    lists: ["Web Development", "Mobile App Development", "E-commerce Solutions", "Progressive Web Apps"],
    details: {
      description: [
        "Comprehensive web and mobile development services using the latest technologies and best practices.",
        "We build scalable, secure, and user-friendly applications for web and mobile platforms.",
      ],
      features: [
        "Full-stack web development",
        "Native and cross-platform mobile apps",
        "E-commerce platforms",
        "API development",
      ],
    },
  },
  {
    id: 4,
    slug: "digital-marketing",
    img: ser_img_3,
    subtitle: "Marketing",
    title: "Digital Marketing",
    text: "Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.",
    lists: ["Social Media Marketing", "Content Marketing", "PPC Advertising", "Marketing Automation"],
    details: {
      description: [
        "Strategic digital marketing campaigns that drive traffic, engagement, and conversions.",
        "We use data-driven approaches to optimize your marketing efforts across all digital channels.",
      ],
      features: [
        "Social media management",
        "Content strategy and creation",
        "Paid advertising campaigns",
        "Marketing analytics and reporting",
      ],
    },
  },
  {
    id: 5,
    slug: "seo",
    img: ser_img_4,
    subtitle: "Marketing",
    title: "SEO Services",
    text: "Optimize your website for search engines to increase visibility and drive organic traffic to your business.",
    lists: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Local SEO"],
    details: {
      description: [
        "Improve your search engine rankings and attract more qualified traffic to your website.",
        "Our SEO strategies are designed to deliver long-term results and sustainable growth.",
      ],
      features: ["Comprehensive SEO audits", "Keyword optimization", "Technical SEO fixes", "Performance monitoring"],
    },
  },
  {
    id: 6,
    slug: "email-marketing",
    img: ser_img_6,
    subtitle: "Marketing",
    title: "Email Marketing",
    text: "Effective email marketing campaigns that nurture leads, retain customers, and drive conversions.",
    lists: ["Email Campaign Design", "List Management", "Automation Workflows", "Performance Analytics"],
    details: {
      description: [
        "Strategic email marketing that builds relationships and drives business growth.",
        "We create personalized campaigns that engage your audience and deliver measurable results.",
      ],
      features: [
        "Email template design",
        "Subscriber list management",
        "Automated email sequences",
        "Campaign analytics and optimization",
      ],
    },
  },
];

export default services_data;
