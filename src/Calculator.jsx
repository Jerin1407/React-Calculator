import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value)
  }

  const handleClear = () => {
    setInput('')
    setResult('')
  }

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      setResult(eval(input))
    } catch (error) {
      setResult('Error')
    }
  }

  return (
    <>
      <div className='calc'>
        <p style={{ fontSize: '60px', marginBottom: '50px' }}>Calculator</p>
        <div className='text'>{input}
        </div>
        <p style={{ fontSize: '40px', color: '#e6f800' }}>{result}</p>
        <div>
          <button onClick={handleDelete} className='button1'>DEL</button>
          <button onClick={handleClear} className='button2'>AC</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('9')} className='button'>9</button>
          <button onClick={() => handleButtonClick('8')} className='button'>8</button>
          <button onClick={() => handleButtonClick('7')} className='button'>7</button>
          <button onClick={() => handleButtonClick('/')} className='button'>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('6')} className='button'>6</button>
          <button onClick={() => handleButtonClick('5')} className='button'>5</button>
          <button onClick={() => handleButtonClick('4')} className='button'>4</button>
          <button onClick={() => handleButtonClick('-')} className='button'>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('3')} className='button'>3</button>
          <button onClick={() => handleButtonClick('2')} className='button'>2</button>
          <button onClick={() => handleButtonClick('1')} className='button'>1</button>
          <button onClick={() => handleButtonClick('+')} className='button'>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('.')} className='button'>.</button>
          <button onClick={() => handleButtonClick('0')} className='button'>0</button>
          <button onClick={handleCalculate} className='button'>=</button>
          <button onClick={() => handleButtonClick('*')} className='button'>*</button>
        </div>
      </div>
    </>
  )
}

export default Calculator