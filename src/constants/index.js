import { BookOpen, BookPlus, List, NotebookPen, PlusSquare, Users } from "lucide-react";

export const navbarLinks = [
  {
    title: "Dashboard",
    links: [
      // {
      //   label: "Dashboard",
      //   icon: Home,
      //   path: "/admin/dashboard",
      // },
      {
        label: "Manage Users",
        icon: Users,
        path: "/admin/manage-users",
      },
    ],
  },
  {
    title: "Lessons",
    links: [
      {
        label: "Lessons",
        icon: BookOpen,
        path: "/admin/lessons",
      },
      {
        label: "Add Lessons",
        icon: BookPlus,
        path: "/admin/add-lesson",
      },
      {
        label: "Manage Lessons",
        icon: NotebookPen,
        path: "/admin/manage-lesson",
      },
    ],
  },
  {
    title: "Vocabularies",
    links: [
      {
        label: "Add Vocabularies",
        icon: PlusSquare,
        path: "/admin/add-vocabularies",
      },
      {
        label: "Manage Vocabularies",
        icon: List,
        path: "/admin/manage-vocabularies",
      },
    ],
  },
];

export const videoLink = [
  {
    vedioLink: "https://www.youtube.com/embed/rGrBHiuPlT0?si=7tM9NLdEOhLy7xBm",
    videoTitle: "Introduction - Japanese Lesson 1",
  },
  {
    vedioLink: "https://www.youtube.com/embed/bOUqVC4XkOY?si=ptkyQiBXecxfm6Hv",
    videoTitle: "How to count in Japanese - Japanese Lesson 2",
  },
  {
    vedioLink: "https://www.youtube.com/embed/JnoZE51WZg4?si=mHF_LIG_tBAWn3KO",
    videoTitle: "Days of the Week and Days of the Month - Japanese Lesson 3",
  },
  {
    vedioLink: "https://www.youtube.com/embed/k74yjmfFb_A?si=wremBUSp366lRN2X",
    videoTitle: "Going to a Destination - Japanese Lesson 4",
  },
  {
    vedioLink: "https://www.youtube.com/embed/KUIWRsVZZZA?si=qRG4AvX4C_VpDDUL",
    videoTitle: "4 Verbs (Nomimasu, Tabemasu, Mimasu, Kikimasu) - Japanese Lesson 5",
  },
  {
    vedioLink: "https://www.youtube.com/embed/ZGGufccTLso?si=z3JM7F4OpkPNPsLr",
    videoTitle: "To do (verb) - Japanese Lesson 6",
  },
  {
    vedioLink: "https://www.youtube.com/embed/W0n-ODPwtzA?si=Cn4L1XqM--NUDMiV",
    videoTitle: "To give & To Receive - Japanese Lesson 7",
  },
  {
    vedioLink: "https://www.youtube.com/embed/Pc86Xg2MX-U?si=h8Uz-NabkZ4S9ONM",
    videoTitle: "Telling Time - Japanese Lesson 9",
  },
];
