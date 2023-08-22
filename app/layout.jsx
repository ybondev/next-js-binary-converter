import "bootstrap/dist/css/bootstrap.min.css"
import "@styles/globals.css"

export const metadata = {
    title: "Decimal to binary converter"
}

const layout = ({children}) => {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}

export default layout