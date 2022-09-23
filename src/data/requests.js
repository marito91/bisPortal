import users from "./users";

// Se busca el superadmin para asignarlo en el array de solicitudes
const superAdmin = users.find((sadmin) => sadmin.role === "Superadmin");

const requests = [
  {
    name: "Mario Andrés Gómez Vargas",
    role: "Integrador de tecnología",
    startDate: "02/08/2022",
    endDate: "21/06/2023",
    type: "Certificado Laboral",
    date: "20/09/2022",
    info: `A quién interese: El British International School certifica que ${superAdmin.name} se encuentra laborando en la institución educativa como ${superAdmin.job} desde el ${superAdmin.startDate} hasta el ${superAdmin.endDate}. Este certificado se radica el 20/09/2022. `,
  },
  {
    name: "Mario Andrés Gómez Vargas",
    role: "Integrador de tecnología",
    startDate: "02/08/2022",
    endDate: "21/06/2023",
    type: "Libranza",
    date: "15/09/2022",
    info: "No tiene solicitudes de Libranzas pendientes",
  },
  {
    name: "Mario Andrés Gómez Vargas",
    role: "Integrador de tecnología",
    startDate: "02/08/2022",
    endDate: "21/06/2023",
    type: "Permiso",
    date: "15/09/2022",
    info: `Su solicitud de permiso ha sido aprobada y será REMUNERADA.`,
  },
  {
    name: "Mario Andrés Gómez Vargas",
    role: "Integrador de tecnología",
    startDate: "02/08/2022",
    endDate: "21/06/2023",
    type: "Registro Beneficiario",
    date: "15/09/2022",
    info: `En el momento no cuenta con solicitud de Registro de beneficiarios.`,
  },
  {
    name: "Mario Andrés Gómez Vargas",
    role: "Integrador de tecnología",
    startDate: "02/08/2022",
    endDate: "21/06/2023",
    type: "Capacitación",
    date: "15/09/2022",
    info: `Su solicitud para capacitación ha sido negada.`,
  },
  {
    name: "Mario Andrés Gómez Vargas",
    role: "Integrador de tecnología",
    startDate: "02/08/2022",
    endDate: "21/06/2023",
    type: "Vacaciones",
    date: "15/09/2022",
    info: "No tiene solicitudes de Vacaciones pendientes",
  },
];

export default requests;
