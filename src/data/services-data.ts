import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";

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
    slug: "logos-and-branding",
    img: ser_img_1,
    subtitle: "Design Studio",
    title: "Logos and branding",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Logo Design",
      "Graphic identity",
      "Business communication",
      "Web design",
    ],
    details: {
      description: [
        "Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience.",
        "Great user experience design lets users focus on the task they have to complete and evokes emotion without distracting them.!"
      ],
      features: [
        "Graphic research and production",
        "Presentation of your logo on different media",
        "Advice on the graphic orientation of your logo or its redesign",
        "Delivery of your logo in professional formats"
      ]
    }
  },
  {
    id: 2,
    slug: "web-design",
    img: ser_img_2,
    subtitle: "Design Studio",
    title: "Web Design",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Responsive Design",
      "UI/UX Design",
      "User Experience",
      "Modern Interfaces",
    ],
    details: {
      description: [
        "Your website is your digital storefront. We design modern, responsive web experiences that engage users and drive conversions.",
        "Great user experience design lets users focus on the task they have to complete and evokes emotion without distracting them.!"
      ],
      features: [
        "Responsive design",
        "User experience optimization",
        "Modern UI/UX principles",
        "Cross-browser compatibility"
      ]
    }
  },
  {
    id: 3,
    slug: "motion-design",
    img: ser_img_3,
    subtitle: "Design Studio",
    title: "Motion-Design",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "2D Animation",
      "3D Animation",
      "Video Production",
      "Brand Storytelling",
    ],
    details: {
      description: [
        "Motion design brings your brand to life through animated elements that capture attention and convey your message dynamically.",
        "Great user experience design lets users focus on the task they have to complete and evokes emotion without distracting them.!"
      ],
      features: [
        "2D/3D animation",
        "Video production",
        "Interactive elements",
        "Brand storytelling"
      ]
    }
  },
  {
    id: 4,
    slug: "web-analytics",
    img: ser_img_4,
    subtitle: "Design Studio",
    title: "Web Analytics",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Traffic Analysis",
      "Conversion Tracking",
      "User Behavior",
      "Performance Optimization",
    ],
    details: {
      description: [
        "Data-driven insights help optimize your web presence. We analyze user behavior and provide actionable recommendations.",
        "Great user experience design lets users focus on the task they have to complete and evokes emotion without distracting them.!"
      ],
      features: [
        "Traffic analysis",
        "Conversion tracking",
        "User behavior insights",
        "Performance optimization"
      ]
    }
  },
];

export default services_data;