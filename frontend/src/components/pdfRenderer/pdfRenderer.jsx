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
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const pdfRenderer = () => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>¡Hola Mundo!</Text>
          <Text>
            Una cartilla médica es un documento que contiene información detallada sobre la historia clínica de un paciente, incluyendo datos personales, antecedentes médicos, tratamientos recetados, resultados de exámenes médicos, entre otros. Es utilizado por los profesionales de la salud para llevar un registro completo de la salud de un paciente y proporcionar un mejor cuidado médico.
          </Text>
          <Image src="https://react-pdf.org/images/logo.png" />
        </View>
      </Page>
    </Document>
  );
}

export default pdfRenderer;