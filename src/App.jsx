import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online-coaching-class11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class12" element={<Class12Program />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout() {
  return <div style={{height: "100vh"}}>
      <Link to="/">Allen</Link>
      |
      <Link to="/neet/online-coaching-class11">Class 11</Link>
      |
      <Link to="/neet/online-coaching-class12">Class 12</Link>
      <div style={{height: "90vh"}}>
        <Outlet />
      </div>
      Footer
  </div>
}

function ErrorPage() {
  return <div>
    Sorry Page Not Found 
  </div>
}

function Landing() {
  return <div>
    Welcome to Allen 
  </div>
}

function Class11Program() {
  return <div>
    NEET programs for Class 11th
  </div>
}

function Class12Program() {
  return <div>
    NEET programs for Class 12th
  </div>
}

export default App
