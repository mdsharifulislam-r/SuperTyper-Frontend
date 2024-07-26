import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import Wpm from './Wpm'
import Time from './Time'
import { useDispatch, useSelector } from 'react-redux'
import { GetWord, makeWpm } from '../../Store/ProjectSlice'
import ChoseLevelandTime from './ShowChoseLevel/ChoseLevleOrTime'
import GiveParagraph from '../Helper/GiveParagraph'
import ArrayUpdater from '../Helper/ArrayUpdater'
import TextObject from './TextObject'

function TypingBox({ type2 }) {
    const dispatch = useDispatch()
    const myRef = useRef(null)
    const [activeId, setActiveId] = useState(0);
    const reset = useSelector(state => state.reset)
    const istop = useSelector(state => state.stopEvery)

    /**
     * 
     * @param {String} args 
     */
    const wpm = useSelector(state => state.word)
    const findSpace = (args) => {
        for (let i of args) {
            if (i === " ") {
                return true
            }
        }
        return false
    }

    const [MistakeWord, SetMistackWord] = useState(0)
    const [Index, SetIndex] = useState(1)
    const [startTimer, setStartTimer] = useState(false)

    const [letter, setLetter] = useState([])



    const [InputElementValue, SetInputElementValue] = useState({})

    const textString = useSelector(state => state.text)
    const [data, setData] = useState(textString)
    useEffect(() => {
        if (data.length !== textString?.length) {
            setData(textString)
        }
    }, [textString])

    const [arrayLength, setArrayLength] = useState(100)

    const [Value, setValue] = useState("")



    const [temp, setTemp] = useState(ArrayUpdater(data?.split(" "), arrayLength))
    useEffect(() => {
        if (temp !== data?.split(" ")) {
            setTemp(ArrayUpdater(data?.split(" "), arrayLength))
        }

    }, [data])

    if (wpm?.length > 100) {
        useEffect(() => {

            setArrayLength(prev => {
                if (arrayLength == (Index + 5)) {

                    prev = prev + 10

                }

                setTemp(ArrayUpdater(data.split(" "), prev))
                return prev

            })
        }, [Index])

    }
    const textbox = temp?.map((word, index) => {

        return {
            id: index,
            data: word,
            correct: true,
            word: word,
            fill: false,
            writeable: index != 0 ? true : false
        }
    })


    useEffect(() => {
        if (temp) {
            for (let i = 0; i < temp?.length;i++) {
                SetInputElementValue(prev => {
                    return {
                        ...prev,
                        [i]: ""
                    }
                })
            }
           
        }
    }, [temp])


    const [textObj, setTextObj] = useState(textbox)
    useEffect(() => {
        if (textObj[0].word !== textbox[0].word) {
            setTextObj(textbox)
        }
    }, [textbox])
    async function Check(id, value) {
        const index = textObj.findIndex(data => data.id == id)

        if (textObj[index].data !== Value) {
            SetInputElementValue(prev => {
                return {
                    ...prev,
                    [textObj[index].data]: Value
                }
            })
            SetMistackWord(prev => prev + 1)
            setTextObj(prev => {
                prev[index] = {
                    ...prev[index],
                    data: Value,
                    correct: false
                }

                return prev
            })
            setValue("")
        } else {
            setLetter(prev => prev ? [...prev, value] : [value])
            SetInputElementValue(prev => {
                return {
                    ...prev,
                    [textObj[index].data]: Value
                }
            })
            dispatch(GetWord(value))
            setTextObj(prev => {
                prev[index] = {
                    ...prev[index],
                    fill: true
                }

                return prev
            })
        }
        if (id == (textObj.length - 1)) {
            Stop()
        }

    }

    function Start() {
        setStartTimer(true)
    }

    function Stop() {

        setStartTimer(false)
    }


    function AddValue(e) {
        const { name, id, value } = e.target

        SetInputElementValue(prev => {
            return {
                ...prev,
                [id]: value
            }
        })

        if (id == 0) {
            Start()
        }
        setValue(value)
        if (value !== " ") {


            if (findSpace(value)) {
                Check(id, value)
                setActiveId(ai => ai + 1);


            }
        }

    }
    function resetInputElement() {
        let obj = {}
        SetInputElementValue(prev => {
            for (let i in prev) {
                obj[i] = ""
            }
            return obj
        })
        setTextObj(prev => {
            const arr = prev.map(data => {
                if (data.correct == false) {
                    return {
                        ...data,
                        correct: true,
                        data: data.word
                    }
                }
                else {
                    return data
                }
            })
            return arr
        })
    }
    useEffect(() => {
        if (istop) {


            resetInputElement()
            Stop();
            setActiveId(0)
        }

    }, [istop])
    useEffect(() => {
        if (reset == true) {
            setStartTimer(false)
         
            SetMistackWord(0)
            setActiveId(0)

        }

    }, [reset])



    const textData = textObj?.map(word => {
        return <TextObject key={word.id} value={InputElementValue[word.id]} addValue={AddValue} word={word} activeId={activeId} reset={reset} id={word.id} />
    })

    return (
        <div className={`w-full flex flex-col  place-items-center bg-dark-shade overflow-x-hidden`}>

            <Time start={startTimer} />
            <Wpm mistack={MistakeWord} paralength={temp.length} type={type2} />
            <div className="container">
                <ChoseLevelandTime />
                <div className=" overflow-hidden shadow-2xl bg-white rounded-md relative py-8 ">
                    <div className="textbox w-full h-full p-3 text-2xl text flex ">
                        {textData}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default memo(TypingBox)