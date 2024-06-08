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
  centered: {
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 'auto',
    marginBottom: 10,
    alignSelf: 'center',
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});

// 1 cm = 28.35 pt
const PdfRenderer = ({ paciente, medico, clinica, fechaCita }) => {
  return (
    <Document>
      <Page size={{ width: 480, height: 480 }} style={styles.page}>
        <View style={styles.section}>
          <Text style={[styles.text, styles.centered]}>Agenda Salud</Text>
          <Image style={styles.image} src="https://res.cloudinary.com/dqh2illb5/image/upload/v1717548343/login/logo_mdd2jm.png" />
          <View style={styles.divider} />
          <Text style={styles.text}>Nombre: {paciente.name} {paciente.last_name}</Text>
          <Text style={styles.text}>DNI: {paciente.patient_dni}</Text>
          <View style={styles.divider} />
          <Text style={styles.boldText}>Clínica: {clinica.name_clinic}</Text>
          <Text style={styles.boldText}>Sala: {clinica.room_number}</Text>
          <Text style={styles.boldText}>Fecha de la Cita: {fechaCita}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Médico: {medico.name} {medico.last_name}</Text>
          <Text style={styles.text}>Especialidad: {medico.specialty}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfRenderer;
