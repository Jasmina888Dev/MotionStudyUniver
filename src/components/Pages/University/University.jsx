import axios from "axios";
import React, { useEffect, useState } from "react";
import inti from "../../../assets/img/inti.svg";
import image1 from "../../../assets/img/applyImg1.svg";
import image2 from "../../../assets/img/applyImg2.svg";
import img1 from "../../../assets/img/icon1.svg"
import img2 from "../../../assets/img/icon2.svg"
import img3 from "../../../assets/img/icon3.svg";

const University = () => {
  const [univer, setUniver] = useState([]);

  async function addUniver() {
    let res = await axios("http://13.61.25.99/en/university_event/");
    setUniver(res.data);
  }

  console.log(univer, "univer");

  useEffect(() => {
    addUniver();
  }, []);
  return (
    <div id="UniversityDetails--bottom__Description">
      <div className="container">
        <div className="UniversityDetails--bottom__Description">
          <div className="UniversityDetails--bottom__Description--inti">
            <div className="UniversityDetails--bottom__Description--inti__text1">
              <img src={inti} alt="img" />
              <h1>INTI International University</h1>
            </div>
            <div className="UniversityDetails--bottom__Description--inti__text2">
              <div className="UniversityDetails--bottom__Description--inti__text2--title">
                <h3>Nominal duration: </h3>
                <h3>Awards:</h3>
              </div>
              <div className="UniversityDetails--bottom__Description--inti__text2--title2">
                <h4>4.5 years(240 ECTS)</h4>
                <h4>
                  <span>B.Sc.</span> (Professional Bachelor’s <br /> degree in
                  Business <br /> Management, qualification: <br /> Business
                  Manager or E- <br />
                  Business Manager)
                </h4>
              </div>
            </div>
            <div className="UniversityDetails--bottom__Description--inti__text3">
              <h3>Tuition fee:</h3>
              <h4>
                <span> €1,400 </span>
                per semester <br />
                <span>US$1,502.87</span>
              </h4>
            </div>
            <div className="UniversityDetails--bottom__Description--inti__text4">
              <h3>
                Application <br /> fee:
              </h3>
              <h4>
                €120 one-time <br /> US$128.83
              </h4>
            </div>
            <div className="UniversityDetails--bottom__Description--inti__text5">
              <h3>
                Registration <br />
                fee:
              </h3>
              <div className="UniversityDetails--bottom__Description--inti__text5--title">
                <h4>US$150 one-time</h4>
                <h4>
                  You need to choose student <br /> status: <br /> Base – 150
                  USD <br /> Standard – 500 USD <br /> VIP – 900 USD
                </h4>
              </div>
            </div>
            <div className="UniversityDetails--bottom__Description--inti__text6">
              <h3>Tuition fee:</h3>
              <h4>
                <span>
                  {" "}
                  High school / secondary <br /> education (or higher) <br />
                </span>
                Completed Secondary <br />
                Education ( 12 years, in some <br /> countries 11 years)
              </h4>
            </div>
            <div className="UniversityDetails--bottom__Description--inti__text7">
              <h3>Entry qualication:</h3>
              <h3>
                The entry qualification <br /> documents are accepted in <br />{" "}
                the following languages: <br /> English / Lithuanian.Often you{" "}
                <br />
                can get a suitable transcript <br /> from your school. If this
                is not <br /> the case, you will need official <br />{" "}
                translations along with <br />
                verified copies of the original.
              </h3>
            </div>
          </div>
          <div className="UniversityDetails--bottom__Description--apply">
            <div className="UniversityDetails--bottom__Description--apply__text1">
              <h2>
                Apply Now!!! <span>Fall semester 2023</span>
              </h2>
            </div>
            <div className="UniversityDetails--bottom__Description--apply__text2">
              <img src={image1} alt="img" />
              <div className="UniversityDetails--bottom__Description--apply__text2--title">
                <h1>Pre-deadline</h1>
                <h4>
                  20 Jun 2023, 23:59:59Eastern <br /> European Time <br />{" "}
                  Please ask your manager in <br /> Baltic Center about correct{" "}
                  <br />
                  deadline for your country
                </h4>
              </div>
            </div>
            <div className="UniversityDetails--bottom__Description--apply__text2">
              <img src={image1} alt="img" />
              <div className="UniversityDetails--bottom__Description--apply__text2--title">
                <h1>Application deadline</h1>
                <h4>
                  31 Aug 2023, 23:59:59Eastern <br /> European Time <br />{" "}
                  Autumn Intake
                </h4>
              </div>
            </div>
            <div className="UniversityDetails--bottom__Description--apply__text3">
              <img src={image2} alt="img" />
              <div className="UniversityDetails--bottom__Description--apply__text3--title">
                <h1>Studies commence</h1>
                <h4>4 Sept 2023</h4>
              </div>
            </div>
            <div className="UniversityDetails--bottom__Description--apply__text4">
              <h2>
                Apply Now!!! <span>Fall semester 2023</span>
              </h2>
            </div>
            <div className="UniversityDetails--bottom__Description--apply__text5">
              <button>!</button>
              <h2>Application period has ended</h2>
            </div>
            <div className="UniversityDetails--bottom__Description--apply__text6">
              <img src={image2} alt="img" />
              <div className="UniversityDetails--bottom__Description--apply__text6--title">
                <h1>Studies commence</h1>
                <h4>6 Feb 2023</h4>
              </div>
            </div>
            <div className="UniversityDetails--bottom__Description--apply__text7">
              <h4>Share on:</h4>
              <div className="UniversityDetails--bottom__Description--apply__text7--icons">
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
                <img src={img3} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;
