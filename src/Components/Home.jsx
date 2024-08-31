import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Data from "../Data";
import Card from './Card'
import './Home.css'

const Home = ({search,handleClick,data}) => {
  
    const filteredData = data.filter((item) => 
        item.category.toLowerCase().includes(search) || 
        item.title.toLowerCase().includes(search) || 
        item.description.toLowerCase().includes(search)
      );

  return (
    <div>
        <Carousel>
                {filteredData.map((item)=>
                    (
                        <header key={item.id} style={{height:'600px', width:'80%', margin:'auto'}}>
                            <div>
                                 <img src={item.image} />
                                 <p className="legend">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                    <p>{item.rating && item.rating.rate ? `${item.rating.rate}⭐` : 'No rating'}</p>
                                    <button onClick={()=>handleClick(item)}>Add Cart</button>
                                 </p>
                            </div>
                        </header>
                    )
                )}
    </Carousel>

    <article className="artc">
        <button className="bt1">ShopMore</button>
    </article>

        <section className="sec">
        {filteredData.map((item) => (
          <Card key={item.id} item={item} handleClick={handleClick} />
        ))}
        </section>
        </div>
  )
} 
export default Home