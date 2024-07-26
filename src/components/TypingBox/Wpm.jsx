import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowWindow from './ShowWindow/ShowWindow'
import { makeWpm } from '../../Store/ProjectSlice'
import { word } from '../../TextData/TextData'

export default function Wpm({ mistack, paralength,type }) {
    const wpm = useSelector(state => state.word)
    const dispatch = useDispatch()
    const isStop = useSelector(state => state.stopEvery)
    const reset = useSelector(state => state.reset)
    function CountWord(array) {
        let text = ""
        for (let i of array) {

            for (let j of i) {
                if (j !== " ") {
                    text += j
                }
            }
        }
        return text.length
    }
    function findAccuricy(mistack, length) {
        const perfect = length - mistack
        const acc = (perfect / length) * 100
        return Math.round(acc)
    }
    function AvaragewWordLength(arr) {
        if (arr) {
            let lenSum = 0
            arr?.forEach(element => {
                lenSum += element.length
            });

            return Math.floor(lenSum / arr?.length)
        }
    }
    function FindWpm(arr) {
        if (arr) {
            return Math.round(CountWord(arr)/AvaragewWordLength(arr))
        }
        // if (arr) {
        //     return Math.round(arr.length)
        // }
    }
   
    const [data, setData] = useState({
        wpm: FindWpm(wpm)||0,
        acc: findAccuricy(mistack, paralength),
        cpm: CountWord(wpm)
    })
    useEffect(() => { 
        if (isStop) {
            setData({
                wpm: FindWpm(wpm) || 0,
                acc: findAccuricy(mistack, paralength),
                cpm: CountWord(wpm)
            })
            
        }
        
    }, [isStop])
    if (data['wpm'] > 0) {
        
        dispatch(makeWpm(data))
    }
    return (
        <div className='text text-slate-500 flex gap-5 py-8'>
            
            <ShowWindow wpm={wpm} paralength={paralength} mistack={mistack} type={type} />
            <div>
                <div className="number text-4xl p-5 flex justify-center place-items-center rounded-lg bg-white">{FindWpm(wpm)||0}</div>
                words/min
            </div>
            <div>
                <div className="number text-4xl p-5 flex justify-center place-items-center rounded-lg bg-white">{CountWord(wpm)}</div>
                Charachter/min
            </div>
            <div>
                <div className="number text-4xl p-5 flex justify-center place-items-center rounded-lg bg-white">{reset?100:findAccuricy(mistack, paralength)}</div>
                Accuricy/%
            </div>
        </div>
    )
}
