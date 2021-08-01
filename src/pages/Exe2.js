
import { useEffect, useState } from "react";
import data from "../data/funcionarios.json"

function Exe2(){

    const [ SD_max, setSD_max ] = useState([])
    const [ SD_min, setSD_min ] = useState([])

    const [ SM_max, setSM_max ] = useState([])
    const [ SM_min, setSM_min ] = useState([])

    const [ UD_max, setUD_max ] = useState([])
    const [ UD_min, setUD_min ] = useState([])

    const [ SD_avg, setSD_avg ] = useState()
    const [ SM_avg, setSM_avg ] = useState()
    const [ UD_avg, setUD_avg ] = useState()


    function compare(a,b) {
        if (a.salario < b.salario)
          return -1;
        if (a.salario > b.salario)
          return 1;
        return 0;
      }
      
    const listOrderly = data.funcionarios.sort(compare)

    const SD_list = listOrderly.filter(item => item.area === "SD")

    const SM_list = listOrderly.filter(item => item.area === "SM")

    const UD_list = listOrderly.filter(item => item.area === "UD")


    const SD_average = SD_list.reduce((SD_average, item)=> SD_average + item.salario, 0) / SD_list.length
    
    const SM_average = SM_list.reduce((SM_average, item)=> SM_average + item.salario, 0) / SM_list.length

    const UD_average = UD_list.reduce((UD_average, item)=> UD_average + item.salario, 0) / UD_list.length


    useEffect(()=>{

        setSD_max(SD_list.filter(item=> item.salario === SD_list[SD_list.length - 1].salario))
        setSD_min(SD_list.filter(item=> item.salario === SD_list[0].salario))

        setSM_max(SM_list.filter(item=> item.salario === SM_list[SM_list.length - 1].salario))
        setSM_min(SM_list.filter(item=> item.salario === SM_list[0].salario))

        setUD_max(UD_list.filter(item=> item.salario === UD_list[UD_list.length - 1].salario))
        setUD_min(UD_list.filter(item=> item.salario === UD_list[0].salario))

        setSD_avg(SD_average.toFixed(2))
        setSM_avg(SM_average.toFixed(2))
        setUD_avg(UD_average.toFixed(2))

    },[])

    return(
        <>
            {SD_max.map(item=>{
                return <div> SD_max | Desenvolvimento de Software | {item.nome} {item.sobrenome} | {item.salario} </div>
            })}

            {SM_max.map(item=>{
                return <div> SM_max | Gerenciamento de Software | {item.nome} {item.sobrenome} | {item.salario} </div>
            })}

            {UD_max.map(item=>{
                return <div> UD_max | Designer de UI/UX | {item.nome} {item.sobrenome} | {item.salario} </div>
            })}

            {SD_min.map(item=>{
                return <div> SD_min | Desenvolvimento de Software | {item.nome} {item.sobrenome} | {item.salario} </div>
            })}

            {SM_min.map(item=>{
                return <div> SM_min | Gerenciamento de Software | {item.nome} {item.sobrenome} | {item.salario} </div>
            })}

            {UD_min.map(item=>{
                return <div> UD_min | Designer de UI/UX | {item.nome} {item.sobrenome} | {item.salario} </div>
            })}
            <div>SD_avg | Desenvolvimento de Software | {SD_avg}</div>
            <div>SM_avg | Gerenciamento de Software | {SM_avg}</div>
            <div>UD_avg | Designer de UI/UX | {UD_avg}</div>
        </>    
    )
}

export default Exe2;