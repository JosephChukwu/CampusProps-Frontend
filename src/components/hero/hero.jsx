import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import classes from './hero.module.css';

const Hero = () => {
  const [type, setType] = useState("Single_room");
  const [location, setLocation] = useState("0");
  const [rent, setRent] = useState("0");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/api/lodge/filter?type=${type}&location=${location}&rent=${rent}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {/* <h2>Simmer down! Let's help you find the perfect lodge</h2>
        <h5>Use our filter to get yourself the right lodge</h5> */}
        <div className={classes.options}>
          <select
            onChange={(e) => setType(e.target.value)}
            className="h-10 min-w-[160px] max-w-[200px] border-none outline-none p-[0.25rem 0.75rem] bg-blue-500 text-white rounded-lg text-18 cursor-pointer"
          >
            <option disabled>Select type lodge</option>
            <option value="Single_room">Single Room</option>
            <option value="Room_in_a_flat">Room in a Flat</option>
            <option value="Self_contained">Self Contained</option>
          </select>
          <select
            onChange={(e) => setRent(e.target.value)}
            className="h-10 min-w-[160px] max-w-[200px] border-none outline-none p-[0.25rem 0.75rem] bg-blue-500 text-white rounded-lg text-18 cursor-pointer"
          >
            <option disabled>Select Rent Range</option>
            <option value="0">50,000-100,000</option>
            <option value="1">100,000-150,000</option>
            <option value="2">150,000-200,000</option>
            <option value="3">200,000-250,000</option>
            <option value="4">250,000-300,000</option>
          </select>
          <select
            onChange={(e) => setLocation(e.target.value)}
            className="h-10 min-w-[160px] max-w-[200px] border-none outline-none p-[0.25rem 0.75rem] bg-blue-500 text-white rounded-lg text-18 cursor-pointer"
          >
            <option disabled>Select Location</option>
            <option value="0">Maryland</option>
            <option value="1">College Road</option>
            <option value="2">Nkpokiti</option>
            <option value="3">Kenyetta</option>
            <option value="4">Lomalinda</option>
            <option value="5">Monarch</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
