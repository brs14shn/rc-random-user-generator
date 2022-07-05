import { useState } from "react";
import {
  FaCalendarTimes,
  FaEnvelopeOpen,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import "./Card.css";

const Card = ({ user }) => {
  const [phones, setPhones] = useState(false);
  const [emails, setEmail] = useState(false);
  const [cities, setCities] = useState(false);
  const [regist, setRegist] = useState(false);
  // console.log(user);
  const {
    picture: { large },
    dob: { age },
    name: { title, first, last },
    email,
    phone,
    location: { country, city },
    registered: { date },
  } = user; //data.result[0]

  // useEffect(() => {
  //   setToggle();
  // }, []);

  return (
    <div>
      <div>
        <img className="rounded-circle mt-3" src={large} alt="" />
      </div>
      <p className="text-design">{`${title}.${first} ${last}`}</p>
      <p className="text-design">{`Age: ${age}`}</p>
      <p>{phones && <span className="text-design">{phone}</span>}</p>
      <p>{emails && <span className="text-design">{email}</span>}</p>
      <p>
        {" "}
        {cities && <span className="text-design">{`${country} ${city}`}</span>}
      </p>
      <p>
        {" "}
        {regist && <span className="text-design">{date.slice(0, 10)}</span>}
      </p>

      <div className="d-flex justify-content-evenly mt-4 mb-4">
        {" "}
        <button onClick={() => setPhones(!phones)} className="rounded-top">
          <FaPhone size={20} />
        </button>
        <button onClick={() => setEmail(!emails)} className="rounded-top">
          <FaEnvelopeOpen size={20} />
        </button>
        <button onClick={() => setCities(!cities)} className="rounded-top">
          <FaMap size={20} />
        </button>
        <button onClick={() => setRegist(!regist)} className="rounded-top">
          <FaCalendarTimes size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
