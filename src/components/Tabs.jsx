import React, { useState } from 'react';

const Tabs = () => {
    const options = ["Entradas", "Platos de Fondo", "Postres"]
    const imgEntradas = "./src/assets/entradas.jpg";
    const imgAlmuerzos = "./src/assets/almuerzos.jpg";
    const imgPostres= "./src/assets/postres.jpg";
    const descEntradas = " Entradas, ¡las mas ricas y frescas del dia! ";
    const descAlmuerzos = " Platos de fondo, ¡Deliciosos y contundentes! ";
    const descPostres = " Los mas ricos Postres, ¡para toda la familia! ";
    const [active, setActive] = useState("Postres");

    return (
        <>
            <div class="time-tab" id="menuss">
                <div className="times" style={{ display: "contents"}}>
                    {options.map(option => (
                        <button
                            // style={{ fontSize: "2rem" }}
                            type="button"
                            key={option}
                            classname={"menus"}
                            onClick={() => setActive(option) }
                            
                        >  
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div class="take-full" style={{display: "flex"}}>
                <div className="menu-times">
                    {active === "Entradas" && <Menus src={imgEntradas} description={descEntradas} />} 
                    {active === "Platos de Fondo" && <Menus src={imgAlmuerzos} description={descAlmuerzos}/>}
                    {active === "Postres" && <Menus src={imgPostres} description={descPostres} />}
                </div>
            </div>
            
        </>
        )
    }
 const Menus = ({ src, description }) => {
    
     return (
            <div className="current-menu-times" style={{display: "flex"}}>
                <div style={{maxWidth: "450px", maxHeight: "450px"}}> 
                    <img src={src} alt="" style={{ width: "450px", height: "450px", float: "right" }} />
                </div>
                <div className="wording" style={{ textAlign: "left", maxHeight: "450px"}}>
                    <h1 style={{ margin: "25px", maxHeight: "450px"}}>{description}</h1>
                </div>
            </div>
     )
 }
export default Tabs
