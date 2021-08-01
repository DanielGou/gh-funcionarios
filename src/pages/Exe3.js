
import { useEffect, useState } from "react"
import data from "../data/funcionarios.json"

function Exe3(){

    const [ more, setMore ] = useState([])
    const [ less, setLess ] =  useState([])


    const areasCounting = [
        { area: "Desenvolvimento de Software", funcionarios: 0 },
        { area: "Gerenciamento de Software", funcionarios: 0 },
        { area: "Designer de UI/UX", funcionarios: 0 },
    ]

    for (const item of data.funcionarios){
        if (item.area === "SD"){
            areasCounting[0].funcionarios += 1
        }

        if (item.area === "SM"){
            areasCounting[1].funcionarios += 1
        }

        if(item.area === "UD"){
            areasCounting[2].funcionarios += 1
        }
    }

    function compare(a,b) {
        if (a.funcionarios < b.funcionarios)
          return -1;
        if (a.funcionarios > b.funcionarios)
          return 1;
        return 0;
      }
      
    const listOrderly = areasCounting.sort(compare)

    useEffect(()=>{
        setLess(listOrderly[0])

        setMore(listOrderly.at(-1))
    },[])


    return(
        <>
            <div>com_mais | {more.area} | {more.funcionarios}</div>
            <div>com_menos | {less.area} | {less.funcionarios}</div>
        </>
    )
}

export default Exe3;