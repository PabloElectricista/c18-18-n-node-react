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

const PdfRenderer = ({ pacientePDF, medicoPDF, clinicaPDF, fechaCitaPDF }) => {
  return (
    <Document>
      <Page size={{ width: 480, height: 480 }} style={styles.page}>
        <View style={styles.section}>
          <Text style={[styles.text, styles.centered]}>Agenda Salud</Text>
          <Image style={styles.image} src="https://res.cloudinary.com/dqh2illb5/image/upload/v1717548343/login/logo_mdd2jm.png" />
          <View style={styles.divider} />
          <Text style={styles.text}>Nombre: {pacientePDF.name} {pacientePDF.last_name}</Text>
          <Text style={styles.text}>DNI: {pacientePDF.patient_dni}</Text>
          <View style={styles.divider} />
          <Text style={styles.boldText}>Clínica: {clinicaPDF.name_clinic}</Text>
          <Text style={styles.boldText}>Sala: {clinicaPDF.room_number}</Text>
          <Text style={styles.boldText}>Fecha de la Cita: {fechaCitaPDF}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Médico: {medicoPDF.name} {medicoPDF.last_name}</Text>
          <Text style={styles.text}>Especialidad: {medicoPDF.specialty}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfRenderer;

