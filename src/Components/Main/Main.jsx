import React, {useEffect} from 'react';
import './main.css';
import img from '../../Assets/img (1).jpg';
import img1 from '../../Assets/img (2).jpg';
import img2 from '../../Assets/img (3).jpg';
import img3 from '../../Assets/img (4).jpeg';
import { IoLocationSharp } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";

import Aos from 'aos';
import 'aos/dist/aos.css';

// array name data

const Data =[
  {
    id:1,
    imgSrc:img,
    destination:'Babara Alla',
    location:'Sigiriya',
    grade: 'Historical resorce',
    fees: '$500',
    description:'This is a antiont fortres built by king Kashapa. It has inomus tecnhology in tha ira could not  exist.'
  },

  {
    id:2,
    imgSrc:img1,
    destination:'Babara Alla',
    location:'Sigiriya',
    grade: 'Historical resorce',
    fees: '$500',
    description:'This is a antiont fortres built by king Kashapa. It has inomus tecnhology in tha ira could not  exist.'
  },

  {
    id:3,
    imgSrc:img2,
    destination:'Babara Alla',
    location:'Sigiriya',
    grade: 'Historical resorce',
    fees: '$500',
    description:'This is a antiont fortres built by king Kashapa. It has inomus tecnhology in tha ira could not  exist.'
  },

  {
    id:4,
    imgSrc:img3,
    destination:'Babara Alla',
    location:'Sigiriya',
    grade: 'Historical resorce',
    fees: '$500',
    description:'This is a antiont fortres built by king Kashapa. It has inomus tecnhology in tha ira could not  exist.'
  },
]

const Main = () => {

  // let's create a react hook to add a scroll animation..
  useEffect(() =>{
    Aos.init({duration: 2000})
},[])

  return (
    <section className='main container section'>

      <div data-aos ="fade-right" className="secTitle">
        <h3 className="title">
          Most visited destinations.
        </h3>
      </div>

      <div className="secContent grid">
        {/**we are going to use high order array method(map).to do that we shall use a 
         * list of object in one array.so create an array named data and from that we shall 
         * map() array to fetch each destination at once.
         */}

         {
            Data.map(({id,imgSrc,destination,location,grade,fees,description}) => {
              return(
                <div key={id} data-aos ="fade-up" className="singleDestination">
                    {/**here it will return single id from the map array */}
                    <div className="imageDiv">
                      <img src={imgSrc} alt={destination} />
                    </div>

                    <div className="cardInfo">

                      <h4 className="destTitle">{destination}</h4>
                      <span className="continent flex">
                        <IoLocationSharp className='icon'/>
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>

                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className="btn flex">
                        DETAILS<LuClipboardCheck className='icon'/>
                      </button>

                    </div>

                </div>
              )
           })
         }
      </div>

    </section>
  )
}

export default Main