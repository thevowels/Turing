'use client';

import {useContext} from "react";
import {ThemeContext} from "@/app/components/context/ThemeContext";

function Level1UI(){
    return(
        <div>
            Level 1 UI
            <Level2UI/>
        </div>
    )
}
function Level2UI(){
    return (
        <div>
            Level 2 UI
            <Level3UI/>
        </div>
    )
}
function Level3UI(){
    const theme = useContext(ThemeContext);
    return(
        <>
            <div style={{color: theme.color}}>
                Level 3 UI
            </div>
            <div style={{color: theme.color2}}>
                Level 3 UI
            </div>
            <div style={{color: theme.color3}}>
                Level 3 UI
            </div>

        </>
    )
}
export default function ContextDemo(){
    return (
        <ThemeContext value={{color:"blue",color2:"green",color3:"red"}}>
            <Level1UI/>
        </ThemeContext>
    )
}