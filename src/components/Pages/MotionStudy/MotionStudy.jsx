import React, { useEffect, useState } from 'react';
import "./MotionStudy.scss"
import Study from "../../../assets/img/homeimg.svg"
import Ellipse4 from "../../../assets/img/Ellipse 4.svg"
import Ellipse6 from "../../../assets/img/Ellipse 6.svg"
import Ellipse7 from "../../../assets/img/Ellipse 7.svg"
import Ellipse5 from "../../../assets/img/aboutMe-5 1.svg"
import group2 from "../../../assets/img/Group 2.svg"
import group1 from "../../../assets/img/Group 1.svg"
import axios from 'axios';

const MotionStudy = () => {
 const [data, setData] = useState([]);
async function getData() {
  try {
const res = await axios('/api/en/home/');
    console.log("Response:", res.data);
    setData(res.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

console.log(data,"d");

    useEffect(() => {
        getData();
    }, []);

    return (
       <div id="Study">
        <div className="container">
            <div className="Study">
            {
                data.map((el) => (
                    <>
                           <div className="Study--block">
                 <div className="Study--block__left">
                    <h1>{el.title}</h1>
                    <p>{el.description}</p>
                </div>
                <div className="Study--block__rigth">
                    <img src={Study} alt="img" className='bg'/>
                    <img src={el.image2} alt="img" className='Ellipse4'/>
                    <img src={el.image1} alt="img" className='Ellipse6'/>
                    <img src={el.image4} alt="img" className='Ellipse7'/>
                    <img src={el.image3} alt="img" className='Ellipse5'/>
                </div>
               </div>
               <div className="Study--contact">
                <div className="Study--contact__name">
                    <img src={group2} alt="img" />
                    <div className="Study--contact__name--text">
                        <p>NAME </p>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                </div>
                <div className="Study--contact__phone">
                    <img src={group1} alt="img" />
                    <div className="Study--contact__phone--text">
                        <p>PHONE</p>
                        <input type="text" placeholder='Enter your phone' />
                    </div>
                </div>
                <button>Contact</button>
               </div>
                    </>
                ))
            }
            </div>
        </div>
       </div>
    );
};

export default MotionStudy;
