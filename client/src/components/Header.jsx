
import Logo from './assets/graphql.png'

const Header = () => {
  return (
    <div className='sticky top-0 z-50'>
      <div className='w-screen bg-black opacity-90 h-20 flex justify-start'>
        <a href=""></a>
        <div className='flex'>
          <img src={Logo} alt="graphqlLogo" className='mr-2'/>
        <div>Al Mada</div>
        </div>
      </div>
    </div>
  )
}
 
export default Header
