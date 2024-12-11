import { BookOpen, BookPlus, Home, List, NotebookPen, PlusSquare, Users } from "lucide-react";

export const navbarLinks = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/admin/dashboard",
      },
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
