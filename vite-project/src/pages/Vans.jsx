import { useEffect,useState } from "react"

function Vans(){
    const [vans,setVans]=useState([]);
    useEffect(()=>{
        fetch("api/vans")
            .then(res=>res.json())
            .then(data=>setVans(data.vans))
    },[]);
    const vanElements = vans.map(van=>(
        <div className="van-til" key={van.id}>
            <img src={van.imageUrl} alt="" />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price} <span>/day</span> </p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))
    return(
        <>
            {vanElements}
        </>
    );
}
export default Vans
