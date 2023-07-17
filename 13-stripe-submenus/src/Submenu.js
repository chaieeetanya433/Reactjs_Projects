import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
    const {isSubmenuOpen, location, page:{page, links}} = useGlobalContext();
    //we'll use useRef inorder to access the submenu
    const container = useRef(null)
    const [columns, setColumns] = useState('col-2');

    //every time the location value changes i would want to run the useEffect
    useEffect(()=>{
        setColumns('col-2')
        const submenu = container.current;
        const {center, bottom} = location;
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        
        if(links.length === 3) {
            setColumns('col-3');
        }
        if(links.length > 3) {
            setColumns('col-4');
        }

    },[location, links])

    return (
      <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
            {links.map((link, index)=> {
                const {label, icon, url} = link;
                return (
                    <a key={url}>
                        {icon}
                        {label}
                    </a>
                )
            })}
        </div>
      </aside>
    )
}

export default Submenu;