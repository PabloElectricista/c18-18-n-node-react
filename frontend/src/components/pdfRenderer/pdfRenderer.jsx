import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image
} from '@react-pdf/renderer';

function PDF() {

    return (
        <Document>
            <Page>
                <Text>¡Hola Mundo!</Text>
                <Text>
                Una cartilla médica es un documento que contiene información detallada sobre la historia clínica de un paciente, incluyendo datos personales, antecedentes médicos, tratamientos recetados, resultados de exámenes médicos, entre otros. Es utilizado por los profesionales de la salud para llevar un registro completo de la salud de un paciente y proporcionar un mejor cuidado médico.
                </Text>
                <Image src="https://react-pdf.org/images/logo.png" />
            </Page>
        </Document>
    );
}

export default PDF;