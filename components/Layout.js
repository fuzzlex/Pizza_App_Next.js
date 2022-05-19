import Features from './Features'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Features />
        {children}
        <Footer />
    </>
  )
}

export default Layout