import axios from "axios";
import React, { useEffect, useState } from "react";

const University = () => {
  const [univer, setUniver] = useState([]);

  async function addUniver() {
    let res = await axios('http://13.61.25.99/en/university_event/');
    setUniver(res.data);
  }

  console.log(univer, "univer");

  useEffect(() => {
    addUniver();
  }, []);
  return (
    <div id="univer">
      <div className="container">
        <div className="univer"></div>
      </div>
    </div>
  );
};

export default University;
