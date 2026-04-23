import { LayoutDashboard, ShieldCheck, House } from "@lucide/svelte";

export const navigation = [
  {
    title: "Inicio",
    url: "/",
    icon: House,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: ShieldCheck,
  },
];