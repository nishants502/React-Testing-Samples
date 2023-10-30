import { useEffect, useState } from "react"
import { SkillsProps } from "./skills.types"

export const Skills = ({ skills }: SkillsProps) => {
    
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    const handleLogin=()=>{
        setIsLoggedIn(true);
    }
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(true)
        },500)
    },[])
  return (
    <>
        <ul>
            {
                skills.map((skill)=>{
                    return <li key={skill}>{skill}</li>
                })
            }
        </ul>
        {
            isLoggedIn?(
                <button>Start learning</button>
            ):(
                <button onClick={handleLogin} className="login-button">Login</button>
            )
        }
    </>
  )
}
