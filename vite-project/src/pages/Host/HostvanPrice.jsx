import { useOutletContext } from "react-router-dom"

function HostVanPrice(){
    const { currentVan } = useOutletContext()
    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}

export default HostVanPrice