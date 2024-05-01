import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/index.tsx'
import { Suspense } from "react"
function App() {

  return (
    <>
        <div>
          <BrowserRouter>
            <Suspense fallback={<></>} >
            <AppRoutes/>
            </Suspense>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
