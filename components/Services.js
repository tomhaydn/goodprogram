import {
  AiOutlineEdit,
  AiOutlineCode,
  AiOutlineGlobal,
  AiOutlineDatabase,
  AiOutlineCloudServer,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineApi,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCluster,
  AiOutlineShop,
  AiOutlineDeploymentUnit,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaWordpressSimple } from "react-icons/fa";

export default {
  Development: [
    {
      name: "Web Design",
      sub: "Beautiful designs for all industries",
      ref: "/services/web-design",
      iconType: "icon",
      icon: <AiOutlineEdit />,
    },
    {
      name: "Web Development",
      sub: "Tailored solutions for all situations",
      ref: "/services/web-development",
      iconType: "icon",
      icon: <AiOutlineCode />,
    },
    {
      name: "Domain Names & DNS",
      sub: "Low-cost, effective DNS management",
      ref: "/services/domain-names-dns",
      iconType: "icon",
      icon: <AiOutlineGlobal />,
    },
    {
      name: "Content Management Systems",
      sub: "Simple, powerful and engaging CMS systems",
      ref: "/services/cms-systems",
      iconType: "icon",
      icon: <AiOutlineDeploymentUnit />,
    },
    {
      name: "E-Commerce",
      sub: "Scalable storefronts for any product",
      ref: "/services/e-commerce-systems",
      iconType: "icon",
      icon: <AiOutlineShop />,
    },
  ],
  Hosting: [
    {
      name: "Wordpress Hosting",
      sub: "Lightning fast Australian Wordpress Hosting",
      ref: "/services/wordpress-hosting",
      iconType: "icon",
      icon: <FaWordpressSimple />,
    },
    {
      name: "Cloud Hosting Solutions",
      sub: "Complex cloud hosting infrastructure and tools",
      ref: "/services/cloud-hosting-solutions",
      iconType: "icon",
      icon: <AiOutlineCloudServer />,
    },
    {
      name: "Database Hosting",
      sub: "Managed cloud-based database storage solutions",
      ref: "/services/database-hosting",
      iconType: "icon",
      icon: <AiOutlineDatabase />,
    },
    {
      name: "Third Party Hosting",
      sub: "You pick your host, let us do the wiring",
      ref: "/services/third-party-hosting",
      iconType: "icon",
      icon: <AiOutlineApi />,
    },
    {
      name: "E-mail Hosting Solutions",
      sub: "Intricate messaging systems tailored to your business",
      ref: "/services/email-hosting-solutions",
      iconType: "icon",
      icon: <AiOutlineMail />,
    },
  ],
  Business: [
    {
      name: "Search Engine Optimization",
      sub: "Packaged SEO solutions to generate more traffic",
      ref: "/services/seo",
      iconType: "icon",
      icon: <AiOutlineGoogle />,
    },
    {
      name: "Social Media Management",
      sub: "Use Facebook, Instagram, twitter to your advantage",
      ref: "/services/social-media",
      iconType: "icon",
      icon: <AiOutlineInstagram />,
    },
    {
      name: "Automation",
      sub: "Tell us what you need, and we'll connect the dots",
      ref: "/services/automation",
      iconType: "icon",
      icon: <AiOutlineCluster />,
    },
    {
      name: "General IT Consulting",
      sub: "Speak with an expert about anything online",
      ref: "/services/it-consulting",
      iconType: "icon",
      icon: <AiOutlineUser />,
    },
    {
      name: "Something Else?",
      sub: "We can probably take care of it! Speak to our team.",
      ref: "/contact",
      iconType: "icon",
      icon: <AiOutlineQuestionCircle />,
    },
  ],
};