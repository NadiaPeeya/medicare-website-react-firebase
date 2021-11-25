import  { useEffect, useState } from 'react';

const useAchievements = () => {
    const [achievements, setAchievements] = useState([]);
    useEffect(()=>{
        fetch('./achievements.json')
        .then(res => res.json())
        .then(data => setAchievements(data))
    })
    return [achievements];
}

export default useAchievements;