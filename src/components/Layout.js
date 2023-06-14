import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className='col-lg-12 layout' style={{height:"100vh",width:"screen",overflowX:"hidden",overflowY:"scroll"}}>
        <Navbar/>
        
        {children}
        
    </div>
  )
}

export default Layout