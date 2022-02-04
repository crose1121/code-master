import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import background from "../../../imgs/forge.jpeg"


const CharmDetails = () => {
    const { equipment } = useParams();
    const [equipmentDetail, setEquipmentDetail] = useState({})
    const [monsters, setMonsters] = useState([])
    const [materials, setMaterials] = useState([])
    let lastMonster = '';
    useEffect(() => {
        axios.get(`https://mhw-db.com/charms/${equipment}`)
            .then(res => {
                setEquipmentDetail(res.data)
                setMaterials(res.data.ranks)
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
                {materials.map((rank, i) => {
                    return (
                        <div key={i}>
                            <h3 className="link">{rank.name}</h3>
                            {rank.crafting.materials.map((material, j) => {
                                return (
                                    <div>
                                        <div className="link" key={j}>
                                            {material.quantity}x {material.item.name}: {material.item.description}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <h2 className="link">Monsters to hunt:</h2>
                {monsters.map((monster, i) => {
                    return (
                        <div className="link" key={i}>
                            {materials.map((rank, j) => {
                                return (
                                    <div key={j}>
                                        {rank.crafting.materials.map((material, k) => {
                                            return (
                                                <div key={k}>
                                                    {material.item.description.includes(monster.name) && lastMonster.includes(monster.name) === false
                                                        ? <div onLoad={lastMonster += monster.name}>
                                                            <h4>{monster.name}</h4>
                                                            <h5>Resistances:</h5>
                                                            {monster.resistances.map((resistance, l) => {
                                                                return (
                                                                    <p key={l}>{resistance.element[0].toUpperCase()}{resistance.element.slice(1)}</p>
                                                                )
                                                            })}
                                                            <h5>Weaknesses:</h5>
                                                            {monster.weaknesses.map((weakness, k) => {
                                                                return (
                                                                    <p key={k}>{weakness.element[0].toUpperCase()}{weakness.element.slice(1)}-{weakness.stars} star weakness.</p>
                                                                )
                                                            })}
                                                            <h5>Location(s):</h5>
                                                            {monster.locations.map((location, h) => {
                                                                return (
                                                                    <p key={h}>{location.name}</p>
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
                    )
                })}
            </div>
        </div>
    )
}

export default CharmDetails;