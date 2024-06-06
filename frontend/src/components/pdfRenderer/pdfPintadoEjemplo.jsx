import PdfRenderer from "./PdfRenderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from 'react';

const paciente = {
  name: "Omar",
  last_name: "Rodriguez",
  patient_dni: 114560247
};

const medico = {
  name: "Michaela",
  last_name: "Quinn",
  specialty: "Medicina general",
};

const clinica = {
  name_clinic: "Clínica Sandia",
  room_number: "101",
}

const fechaDeLaCita = "12-12-3012"; 

const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
const fileName = `${paciente.name}-${paciente.last_name}_${fecha}.pdf`;

const PdfPintadoEjemplo = () => {
  return (
    <div>
      <PDFDownloadLink
        document={<PdfRenderer
          paciente={paciente}
          medico={medico}
          clinica={clinica}
          fechaCita={fechaDeLaCita}
        />}
        fileName={fileName}
      >
        {({ loading }) => loading ? 
          <button>Cargando...</button> : 
          <button>Descargar</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

export default PdfPintadoEjemplo;
