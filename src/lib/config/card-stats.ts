import { Router, Server, House, TriangleAlert } from "@lucide/svelte";

export const adminStats = [
  {
    title: "Instalaciones",
    description: "Total de sedes configuradas",
    value: "12",
    icon: House,
    color: "text-purple-500"
  },
  {
    title: "Dispositivos",
    description: "Hardware activo en la red",
    value: "42",
    icon: Router,
    color: "text-blue-500"
  },
  {
    title: "Estado MQTT",
    description: "Conexión con el broker",
    value: "Conectado",
    icon: Server,
    color: "text-green-500"
  },
  {
    title: "Alertas",
    description: "Incidencias detectadas",
    value: "0",
    icon: TriangleAlert,
    color: "text-amber-500"
  }
];