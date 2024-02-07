"use client";

import Button from "@/components/base/Button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {login} from '@/service/auth'

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };
  

  const handleSubmit = async(e)=>{
    try {
      e.preventDefault()
      await login(form)
      router.push('/main/worker')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              value={form.email}
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="passoword"
              value={form.password}
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </li>
        </ul>
        <Button title="login" />
      </form>
    </div>
  );
};

export default LoginPage;
