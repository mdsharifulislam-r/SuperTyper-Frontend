import { useEffect, useRef } from "react"
import { useSelector } from "react-redux";

export default function TextObject({ value, word, activeId, id, addValue, reset }) {
    const inputRef = useRef();

    // console.log(`word id ${word.id}, activeId : ${activeId}, word: ${value}`)
    // console.log(`readOnly : ${activeId !== word.id}`);


    useEffect(() => {

        if (activeId === word.id) {

            inputRef.current.focus();

        }

    }, [activeId])



    return (<div  key={word.id} className={`relative inline-block ml-2 ${word.correct === false ? "text-slate-900 line-through" : ""} w-full  text-4xl transition duration-300`}>
        <div className="text text-slate-400" title="it span">
            {word.data}
        </div>
        <div className=" absolute top-0 left-0 bg-transparent transition duration-300"  >
            <input
                aria-autocomplete='none'
                type="text"
                autoComplete='false'
                spellCheck={false}
                value={value}
                ref={inputRef}
                onChange={addValue}
                id={word.id}
                name={word.data}
                readOnly={activeId !== word.id}
                className='bg-transparent border-none focus:outline-none absolute left-0 text-4xl text-color-gold ' />
        </div>
    </div>
    )
}