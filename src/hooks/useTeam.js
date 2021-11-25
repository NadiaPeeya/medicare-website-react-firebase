import { useEffect, useState } from "react"

const useTeam = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('./team.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return [doctors]
}
export default useTeam;