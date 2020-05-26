import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from "@material-ui/icons/Add";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Dashboard } from "./views/pages/dashboard.page";
import { AddRevenue } from "./views/pages/add-revenue.page";
import { Register } from "./views/pages/register.page";
import { SFC } from "react";

interface IRoute {
  title: string;
  url: string;
  icon: any;
  component: SFC;
}

export const routes: IRoute[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    title: "Ajouter un revenu",
    url: "/ajouter-un-revenu",
    icon: AddIcon,
    component: AddRevenue,
  },
  {
    title: "Inscription",
    url: "/inscription",
    icon: PersonAddIcon,
    component: Register,
  },
];
