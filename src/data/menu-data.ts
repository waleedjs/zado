import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Services',
    link: '/service',
    dropdown_menus: [
      { title: 'Services Detail Page', link: '/service-details' },
    ]
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-modern',
    dropdown_menus: [
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact',
  }
];



export default menu_data;

// mobile menus
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id:1,
    title: 'Home',
    link: '/',
    dropdown_menus:[]
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about',
    dropdown_menus:[]
  },
  {
    id: 3,
    title: 'Services',
    link: '/service',
    dropdown_menus:[
      { title: 'Services Detail Page', link: '/service-details' },
    ]
  },
  {
    id: 4,
    title: 'Modern Blog',
    link: '/blog-modern',
    dropdown_menus:[]
  },
  {
    id: 5,
    title: 'Services Detail Page',
    link: '/service-details',
    dropdown_menus:[]
  },
  {
    id: 6,
    title: 'Contact Us',
    link: '/contact',
    dropdown_menus:[]
  }
]