import PDF from "./pdfRenderer"
import { PDFDownloadLink } from "@react-pdf/renderer"

const pdfpintado = () => {
  return (
    <div>
      <PDFDownloadLink document={<PDF />} fileName="example.pdf">
        {
          ({ loading, url, error, blob }) => loading ? 
          <button>Cargando...</button>
          : <button>Descargar</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

export default pdfpintado