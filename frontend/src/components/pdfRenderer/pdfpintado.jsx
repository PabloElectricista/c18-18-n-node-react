import PdfRenderer from "./pdfRenderer"
import { PDFDownloadLink } from "@react-pdf/renderer"

const Pdfpintado = () => {
  return (
    <div>
      <PDFDownloadLink document={<PdfRenderer />} fileName="example.pdf">
        {
          ({ loading, url, error, blob }) => loading ? 
          <button>Cargando...</button>
          : <button>Descargar</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

export default Pdfpintado;