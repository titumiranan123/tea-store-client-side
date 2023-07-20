import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { FaShoppingBag, FaShoppingCart, FaSistrix } from "react-icons/fa";
import { HiMenuAlt1 ,HiOutlineArrowSmDown} from "react-icons/hi";
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';
import useCart from '../../Customhook/useCart';
import useAdmin from '../../Customhook/useAdmin';

const Navbar = () => {
  
  const [toggole, setToggole] = useState(false)
  const {user, logOut} = useContext(AuthContext)

  const navigate = useNavigate()
  const [, data] = useCart();
  
  const singOut=()=>{
    logOut()
    .then(res => {
      Swal.fire({
          icon: 'success',
          title: 'sing out in successful',
      })
      console.log(res)
      navigate('/')
  })
  .catch(err => {
      console.log(err)
      if (err) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
          })
      }
  })
  }
const [isAdmin,]= useAdmin();
// const isAdmin = false;
  
  const navItem = <>
    <Link to='/' className="text-white  hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"> Home </Link>
    <Link to='/shop' className="text-white  hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"> Shopping Now </Link>
    
    <Link to='/cart' className="text-white hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"> Cart </Link>
    <Link to='/about' className="text-white hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"> About </Link>
    <Link to='/contact' className="text-white hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"> Contact </Link>
    { isAdmin && <Link to='/dashbord' className="text-white hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"> Dhasbord </Link>}
    
  </>


  return (
    <nav className='shadow-2xl  rounded z-10'>
      <div className=" hidden  lg:flex px-10 items-center ">
        <div>
          <img src={logo} className='h-[50px] w-[70px] rounded-lg' alt="" />
        </div>
        <div className='flex mx-auto'>
          {navItem}
        </div>
        <div className='mx-auto flex gap-5 text-white'>
          <FaSistrix className='text-2xl' />
          <FaShoppingBag className='text-2xl' />
          <div className='flex gap-2'>
            {
              !user ? 
              <>
              <Link to='/login'>Login</Link>
            <span className='text-lg'>&#47;</span>
            <Link to='/singup'>Singup</Link>
              </>
              :<>
            <button onClick={singOut}>Log out</button>
            </>
            }
          </div>
        </div>
      </div>
      <div className='lg:hidden px-10'>
        <div className='flex items-center '>
          <div className='mt-5 text-2xl text-white'>
            {
              <button onClick={()=> setToggole(!toggole)}>
                {
                  !toggole ? <><HiMenuAlt1 className='text-white' /></>: <><HiOutlineArrowSmDown className='text-white' /></>
                }
              </button>
            }
          </div>
          <div className='mx-auto'>
            <img src={logo} className='h-[50px] w-[70px] rounded-lg' alt="" />
          </div>
          <div className=''>
            {
              toggole && <div className='absolute bg-slate-400  p-10  z-30 top-20 w-full text-center left-0 '>
              {navItem}
              {
              !user ? 
              <>
              <Link className='btn text-white bg-green-600 hover:bg-green-800' to='/login'>Login</Link>
            <span className='text-lg'>&#47;</span>
            <Link className='btn text-white bg-green-600 hover:bg-green-800' to='/singup'>Singup</Link>
              </>
              :<>
            <button className='btn text-white bg-red-600 hover:bg-red-800' onClick={singOut}>Log out</button>
            </>
            }
              </div>
            }
          </div>
          <div>
          <div className="relative">
      <FaShoppingCart className="text-white text-2xl" />
      <span className="absolute top-[-26px] left-[10px] flex items-center justify-center text-red-500 text-lg bg-white rounded-full h-6 w-6">
        {data?.length}
      </span>
    </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
//  Good morning thank you for the opportunity .my name is titumir anan. and i am studing in mathematics in govt. titumir College. 

//  i hove 1 years of experience working as a react devloper , specializing in building dynamic and interactive user interfaces for web applications. i have a strong command of Reat and its ecosystem , including react router and other related libraries. 

//  in addition to React , i am proficient in using modern web development tools and technologies such as html5, css3, jsvascript (ES 6) and packae managers like npm or Yarn. I have experience working with popular styling libraies / frameworks like css in js , or Tailwind css.

//  as a react devloper, I have a passion for continous learing and staying up to date with the latest industry trends and advancements. 

//  i am truly excited about the opportunity to contribute my skills and expertise as a react developer to your company . i am confident in my ability to create outstanding web applications using react and o look forward to being part of a dynamic team that shares the smae passion for innovation and quality.
