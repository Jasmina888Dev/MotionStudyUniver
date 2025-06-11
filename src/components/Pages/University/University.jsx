import axios from "axios";
import React, { useEffect, useState } from "react";
import inti from "../../../assets/img/inti.svg";

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
          </div>
          <div className="UniversityDetails--bottom__Description--apply"></div>
        </div>
      </div>
    </div>
  );
};

export default University;
