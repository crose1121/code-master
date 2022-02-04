import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import background from "../../imgs/forge.jpeg"

const ArmorView = () => {
    const [equipmentID, setEquipmentID] = useState(null)
    const history = useHistory()
    const [search, setSearch] = useState('')
    const [recipeName, setRecipeName] = useState('')
    const [materialsObj, setMaterialsObj] = useState({})
    const [equipment, setEquipment] = useState([])
    const { armor_type } = useParams();
        useEffect(() => {
            axios.get(`https://mhw-db.com/armor`)
                .then(res => {
                    setEquipment(res.data)
                })
                .catch(err => console.log(err))
        }, [])
    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/recipes`, {
            recipeName,
            materialsObj
        })
            .then(res => {
                console.log('Progress posted to our mongoDB')
                history.push(`/armor/${equipmentID}`)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const clickHandler = (equipment) => {
        setRecipeName(equipment.name)
        setEquipmentID(equipment.id)
        setMaterialsObj(equipment.crafting.materials)
        setSearch(equipment.name)
    }
    return (
        <div  className="forge" style={{ backgroundImage: `url(${background})` }}>
            <div>
                <form onSubmit={submitHandler}>
                    <p>
                        <label className="label" htmlFor="">Search for your equipment:</label><br />
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                    </p>
                    {equipment.map((equipment, i) => {
                        return (
                            <div key={i}>
                                {search === equipment.name && equipment.type === `${armor_type}`
                                    ? <input type="submit" value="Build" />
                                    : <></>
                                }
                            </div>
                        )
                    })}
                </form>
            </div>
            <div>
                {equipment.map((equipment, i) => {
                    return (
                        <div key={i}>
                            {
                                equipment.name.toLowerCase().includes(search.toLowerCase()) && equipment.type === `${armor_type}`
                                    ? <button onClick={(e) => clickHandler(equipment)}>{equipment.name}</button>
                                    : <></>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArmorView;