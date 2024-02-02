"use client"
export default function time(){
    const d=new Date();

    return(
        <div id="time">
            {d.getHours()}<div id="colon"> : </div>{d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()}
        </div>
    )
    }