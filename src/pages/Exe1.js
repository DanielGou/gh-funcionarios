import { useEffect, useState } from 'react';
import "./style.css"

import data from "../data/funcionarios.json"

function Exe1() {

  const [ maxSalary, setMaxSalary ] = useState([])
  const [ minSalary, setMinSalary ] = useState([])
  const [ average, setAverage ] = useState()
  
  function compare(a,b) {
    if (a.salario < b.salario)
      return -1;
    if (a.salario > b.salario)
      return 1;
    return 0;
  }
  
  const listOrderly = data.funcionarios.sort(compare)

  const total = listOrderly.reduce((total, item)=> total + item.salario, 0)
  
  const media = total / listOrderly.length
  
  useEffect(()=>{
    setMaxSalary(listOrderly.filter(item => item.salario === listOrderly[listOrderly.length - 1].salario ))

    setMinSalary(listOrderly.filter(item => item.salario === listOrderly[0].salario ))

    setAverage(media.toFixed(2))
  },[listOrderly, media])


  return (
    <div className="App">
       {minSalary.map(item=>{
         return(<div> min | {item.nome} {item.sobrenome} | {item.salario}</div>)
       })}
       {maxSalary.map(item=>{
         return(<div> max | {item.nome} {item.sobrenome} | {item.salario}</div>)
       })}
       
       <div>Total | {average}</div>
    </div>
  );
}

export default Exe1;
