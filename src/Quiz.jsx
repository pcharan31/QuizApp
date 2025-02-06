import React,{useState} from 'react'
import {data} from './data'
import './style.css'
export default function Quiz() {
    let [option,setOption]=useState('')
    let [index,setIndex]=useState(0)
    let [finish,setFinish]=useState(false)
    let [score,setScore]=useState(0)
    const correctOption=['Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1']
    const handleNext = ()=>{
        if(index<data.length-1){
            if(correctOption[index]===option){
                setScore(score+1)
            }
            setIndex(++index)
            setOption('')
        }
        else{
            setFinish(true)
        }
    }
    if(finish){
        return(
            <div className='scorePage'>
                <h1>Quiz Finished</h1>
                <h3>Your Score: {score} / {data.length}</h3>
            </div>
        )
    }
    const handleSelect=(optn)=>{
        setOption(optn)
    }
    return(
        <>
        <div className="quiz">
            <h1>Quiz App</h1>
            <h3>{data[index].Question}</h3>
            <ul>
                <li className={option==='Option1'?'selected':''}
                onClick={()=>{handleSelect('Option1')}}>{data[index].Option1}</li>
                <li className={option==='Option2'?'selected':''}
                onClick={()=>{handleSelect('Option2')}}>{data[index].Option2}</li>
                <li className={option==='Option3'?'selected':''}
                onClick={()=>{handleSelect('Option3')}}>{data[index].Option3}</li>
                <li className={option==='Option4'?'selected':''}
                onClick={()=>{handleSelect('Option4')}}>{data[index].Option4}</li>
            </ul>
            <h5>Question {index+1} of {data.length}</h5>
            <button onClick={handleNext} disabled={!option}>Next</button>

        </div>
        </>
    )
}