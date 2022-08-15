import CalendarIcon from "./components/react-icons/calenderIcon";
import PlanningIcon from "./components/react-icons/planningIcon";
import ReminderIcon from "./components/react-icons/reminderIcon";
import TodoIcon from "./components/react-icons/todoIcon";

export const menuItems = [

  {
    title: "Features",
    submenu: [
      {
        title: "Todo list",
        icon: <TodoIcon color={'#ba55d3'}/>
      },
      {
        title: "Calendar",
        icon: <CalendarIcon color={'#87ceeb'}/>

      },
      {
        title: "Reminders",
        icon: <ReminderIcon color={'#F0E68C'}/>

      },
      {
        title: "Planning",
        icon: <PlanningIcon color={'purple'}/>

      },
    ],
  },
  {
    title: "Company",
    submenu: [
      {
        title: "History",
      },
      {
        title: "Our Team",
      },
      {
        title: "Blog",
      },
    ],
  },

  {
    title: "Careers",
  },

  {
    title: "About",
  },
];
