"use client";
import { addSkill, getSkill } from "@/service/skills";
import React, { useEffect, useState } from "react";

const SkillPage = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const handleAddSkill = async () => {
    try {
      await addSkill(skill);
      alert("berhasi menambahkan skilll");
      handleGetSkill()
      setSkill("")
    } catch (error) {
      alert(error);
    }
  };

  const handleGetSkill = async () => {
    const response = await getSkill();
    setSkills(response.data);
  };
  useEffect(() => {
    handleGetSkill();
  }, []);
  return (
    <div>
      <h2 className="text-lg">skill saya :</h2>
      <ul>
        {skills.map((item) => (
          <li key={item.id}>{item.skill_name}</li>
        ))}
      </ul>
      <hr />
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <br />
      <button onClick={handleAddSkill}>Simpan Skill</button>
    </div>
  );
};

export default SkillPage;
