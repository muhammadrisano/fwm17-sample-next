'use client'
import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://fwm17-be-peword.vercel.app/v1/workers/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(async(res)=>{
      if(!res.ok){
       const result =  await res.json()
        throw result.message
      } 
      return res.json()
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button className="py-2 px-5 rounded bg-yellow-400">Regiter</button>
      </form>
    </div>
  );
};

export default RegisterPage;
