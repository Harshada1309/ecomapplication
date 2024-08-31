import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({setSearch,size,data,setData}) => {


  return (
    <div className='navbar'>
        <nav className='nav'>
        <article className='navart'>
            <div className='navdiv'>
                <Link style={{color:'white',textDecoration:'none'}} to='/'>
                   <h1>SHOPSY</h1>
                </Link>
            </div>
            <div className='navdiv'>
                <input onChange={((e)=>setSearch(e.target.value))} type="search" placeholder='Search your Products'/>
            </div>
            <div className='navdiv'>
                <Link style={{color:'white',textDecoration:'none'}} to='/cart'><h1>🛒<sup>{size}</sup></h1></Link>
            </div>
        </article>
        <article className='Artbtn'>

            <button onClick={()=>setSearch(`men's clothing`)}> Men</button>
            <button onClick={()=>setSearch(`women's clothing`)}>Women</button>
            <button onClick={()=>setSearch(`electronics`)}>Electronics</button>
            <button onClick={()=>setSearch(`jewelery`)}>Jewellery</button>
        </article>
        </nav>
    </div> 
  )
}

export default Navbar