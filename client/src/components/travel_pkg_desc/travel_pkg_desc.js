import React from 'react';
import './travel_pkg_desc.css';
import DetailsThumb from './DetailsThumb';
import Navbar from "../../components/navbar/Navbar";

class TravelPkgDesc extends React.Component{
    
    state = {
      products: [
        {
          "_id": "1",
          "title": "Singapore",
          "src": [
              "https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg",
              "https://imageio.forbes.com/specials-images/imageserve/6318c4e68e730bf017b586d2/974x548.jpg?format=jpg&height=548&width=974&fit=bounds",
              "https://www.frasershospitality.com/en/locations/sg/singapore/_jcr_content/root/container/column_controller/column-2-wrapper/image.coreimg.jpeg/1635271370727/singapore-merlion-night.jpeg",
              "https://lp-cms-production.imgix.net/2022-05/Singapore-Lazarus-Island-Sami-Peltokangas-shutterstock_2154698247-RFC.jpg?auto=format&q=40&w=870&dpr=1"
            ],
          "description": "2 nights stay at Singapore, 1 person",
          // eslint-disable-next-line no-multi-str
          "content": "Singapore, officialy the Republic of Singapore, is a very nice city. Known as the microcosm of modern Asia and a melting pot of culture and history, Singapore is one of the best-visited tourist destinations in the world. So whether you are looking for a Singapore package for a cultural getaway or just a Singapore holiday package with family and friends, pick the best one at Holidify. Offering customisable \
          packages to suit every kind of traveller from Bali, Kuala Lumpur, Bangkok, Bintan Island, and other parts of the world, Holidify’s Singapore tour packages are an excellent way to experience the best of this beautiful destination.\
          With its two Merlion statues squirting water out of their mouths, Merlion Park is an iconic sight, especially at nighttime against the backdrop of the brightly lit Marina Bay. And, of course, the Singapore Flyer, a 165-meter high observation wheel, is perfect for catching breathtaking views of the city. The 55-storey Marina Bay Sands is an iconic hotel that features a massive infinity pool and SkyPark at the very top.",
          
          "price": 45000,
          
          "count": 1
        }
      ],
      index: 0
    };
  
    myRef = React.createRef();
  
    handleTab = index =>{
      this.setState({index: index})
      const images = this.myRef.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    };
  
    componentDidMount(){
      const {index} = this.state;
      this.myRef.current.children[index].className = "active";
    };
  
  
    render(){
      const {products, index} = this.state;
      return (
        <>
          <Navbar />
          <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>

              <div className="titlebox">
                <div className="titlePrice">
                  <h1>{item.title}</h1>
                  <span>BDT {item.price}</span>
                </div>
                
                <p>{item.description}  </p>
                <p>{item.content}</p>

                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div></>
        
      );
    };
}
  
export default TravelPkgDesc;