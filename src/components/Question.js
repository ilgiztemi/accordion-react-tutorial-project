import React, { useState } from 'react'
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
    const [flag, setFlag] = useState(false);
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button onClick={() => setFlag(!flag)} className='btn'>
                {
                    !flag ? <AiOutlinePlus /> : <AiOutlineMinus />
                }
            </button>
        </header>
        <p>{flag && info}</p>
    </article>
  )
}

export default Question