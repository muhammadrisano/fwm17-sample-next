"use client"
import Button from "@/components/base/Button";
import Link from "next/link";
import React, { useState } from "react";

const SayHi = () => {
  const [name, setName] = useState("RISANO");
  return (
    <div>
      <h1>halaman home</h1>
      <p>Selamat Datang di app FWM17, hii.. {name}</p>
      <Button title="Login" />
      <Link href="/main/profile">Profile</Link>
    </div>
  );
};

export default SayHi;
