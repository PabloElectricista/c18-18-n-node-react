import {
  Document,
  Text,
  View,
  Page,
  StyleSheet,
  Image
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 'auto',
    marginBottom: 10,
  }
});

// 1 cm = 28.35 pt
const PdfRenderer = ({ paciente, medico, clinica, fechaCita }) => {
  return (
    <Document>
      <Page size={{ width: 567, height: 425.25 }} style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Agenda Salud</Text>
          <Image style={styles.image} src="https://res.cloudinary.com/dqh2illb5/image/upload/v1717548343/login/logo_mdd2jm.png" />
          <Text style={styles.text}>DNI: {paciente.patient_dni}</Text>
          <Text style={styles.text}>Nombre: {paciente.name} {paciente.last_name}</Text>
          <Text style={styles.text}>Clínica: {clinica.name_clinic}</Text>
          <Text style={styles.text}>Sala: {clinica.room_number}</Text>
          <Text style={styles.text}>Fecha de la Cita: {fechaCita}</Text>
          <Text style={styles.text}>Médico: {medico.name} {medico.last_name}</Text>
          <Text style={styles.text}>Especialidad: {medico.specialty}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfRenderer;
