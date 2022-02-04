import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import background from "../../../imgs/forge.jpeg"


const WeaponDetails = () => {
    const { equipment } = useParams();
    const [equipmentDetail, setEquipmentDetail] = useState({})
    const [monsters, setMonsters] = useState([])
    const [materials, setMaterials] = useState([])
    let lastMonster = '';
    useEffect(() => {
        axios.get(`https://mhw-db.com/weapons/${equipment}`)
            .then(res => {
                setEquipmentDetail(res.data)
                res.data.crafting.craftingMaterials.length ? setMaterials(res.data.crafting.craftingMaterials) : setMaterials(res.data.crafting.upgradeMaterials)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get('https://mhw-db.com/monsters')
            .then(res => {
                setMonsters(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="forge" style={{ backgroundImage: `url(${background})` }}>
            <h1 className="link">Building {equipmentDetail.name}</h1>
            <div>
                <h2 className="link">Required Mats:</h2>
                {materials.map((material, i) => {
                    return (
                        <div key={i}>
                            <ul className="link">
                                {material.quantity}x {material.item.name}: {material.item.description}
                            </ul>
                        </div>
                    )
                })}
                <h2 className="link">Monsters to hunt:</h2>
                {monsters.map((monster, i) => {
                    return (
                        <div key={i}>
                            {materials.map((material, j) => {
                                return (
                                    <div key={j}>
                                        {material.item.description.includes(monster.name) && lastMonster.includes(monster.name)===false
                                            ? <div onLoad={lastMonster += monster.name}>
                                                <h4 className="link">{monster.name}</h4>
                                                <h5 className="link">Resistances:</h5>
                                                {monster.resistances.map((resistance, l)=>{
                                                    return (
                                                        <p className="link" key={l}>{resistance.element[0].toUpperCase()}{resistance.element.slice(1)}</p>
                                                    )
                                                })}
                                                <h5 className="link">Weaknesses:</h5>
                                                {monster.weaknesses.map((weakness, k)=>{
                                                    return (
                                                        <p className="link" key={k}>{weakness.element[0].toUpperCase()}{weakness.element.slice(1)}-{weakness.stars} star weakness.</p>
                                                    )
                                                })}
                                                <h5 className="link">Location(s):</h5>
                                                {monster.locations.map((location, h)=>{
                                                    return (
                                                        <p className="link"key={h}>{location.name}</p>
                                                    )
                                                })}
                                            </div>
                                            : <></>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WeaponDetails;