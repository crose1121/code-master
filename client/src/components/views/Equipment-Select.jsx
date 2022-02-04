import React, {useState} from "react";
import {Link} from 'react-router-dom';
import background from "../../imgs/forge.jpeg"

const Equipment=()=>{
    const [weapon, setWeapon]=useState(false)
    const [armor, setArmor]=useState(false)
    const clickHandler=(equipment)=>{
        if(equipment==='weapon'){
            setWeapon(true)
            setArmor(false)
        }
        if(equipment==='armor'){
            setWeapon(false)
            setArmor(true)
        }
    }
    return (
        <div className="forge" style={{ backgroundImage: `url(${background})` }}>
            <div>``
                <button className="button" onClick={()=>clickHandler('weapon')}><h1>Weapons</h1></button>
            </div>
            <div>
                <button className="button" onClick={()=>clickHandler('armor')}><h1>Armor</h1></button>
            </div>
            <div>
                <button className="button"><Link className="link" to={'/charms'}><h1>Charms</h1></Link></button>
            </div>
            {weapon?
            <div>
                <ul>
                    <button className="button"><Link className="link" to={`/weapons/great-sword`}>Great Sword</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/long-sword'}>Long Sword</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/sword-and-shield'}>Sword and Shield</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/dual-blades'}>Dual Blades</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/hammer'}>Hammer</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/hunting-horn'}>Hunting Horn</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/lance'}>Lance</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/gunlance'}>Gunlance</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/switch-axe'}>Switch Axe</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/charge-blade'}>Charge Blade</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/insect-glaive'}>Insect Glaive</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/light-bowgun'}>Light Bowgun</Link></button>
                    <button className="button"><Link className="link" to={'/weapons/heavy-bowgun'}>Heavy Bowgun</Link></button>
                    <button className="button"><Link className="link" to={'weapons/bow'}>Bow</Link></button>
                </ul>
            </div>
            :armor?
            <div>
                <ul>
                    <button className="button"><Link to={'/armors/head'} className="link">Helmet</Link></button>
                    <button className="button"><Link to={'/armors/chest'} className="link">Chestpiece</Link></button>
                    <button className="button"><Link to={'/armors/gloves'} className="link">Arms</Link></button>
                    <button className="button"><Link to={'/armors/waist'} className="link">Waist</Link></button>
                    <button className="button"><Link to={'/armors/legs'} className="link">Legs</Link></button>
                </ul>
            </div>
            :<></>
            }
        </div>
    )
}

export default Equipment;