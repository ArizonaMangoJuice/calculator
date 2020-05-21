import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [zero] = useState(0)
  const [one] = useState(1)
  const [two] = useState(2)
  const [three] = useState(3)
  const [four] = useState(4)
  const [five] = useState(5)
  const [six] = useState(6)
  const [seven] = useState(7)
  const [eight] = useState(8)
  const [nine] = useState(9)
  const [current, setCurrent] = useState('')
  const [queue, setQueue] = useState([])
  const [mathS, setMathS] = useState(null)
  const [history, setHistory] = useState(null)
  const [result, setResult] = useState(false)

  useEffect(() => {
    if(queue.length === 2){
      console.log('two bro')
      if(mathS === '/') {
        let divide = parseFloat(queue[0]) / parseFloat(queue[1])
        setQueue(() => [divide])
        setHistory(divide.toString())
        setCurrent('')
        setMathS(null)
        setResult(false)
      }
      if(mathS === '+'){
        let add = parseFloat(queue[0]) + parseFloat(queue[1])
        setQueue(() => [add])
        setHistory(add.toString())
        setCurrent('')
        setMathS(null)
        setResult(false)
      }
      if(mathS === '*'){
        let multiply = parseFloat(queue[0]) * parseFloat(queue[1])
        setQueue(() => [multiply])
        setHistory(multiply.toString())
        setCurrent('')
        setMathS(null)
        setResult(false)
      }
      if(mathS === '-'){
        let minus = parseFloat(queue[0]) - parseFloat(queue[1])
        setQueue(() => [minus])
        setHistory(minus.toString())
        setCurrent('')
        setMathS(null)
        setResult(false)
      }

    }
  },[queue, result])
  return (
    <div className="App">
      <div className='calculator'>
        <div className='output-container'>
          <p className='history'>{queue.length > 0 ? queue[0] : ''}</p>
          <p className='text'>{current === '' ? history : current}</p>
        </div>
        
        <button onClick={() => {
          setCurrent('')
          setQueue([])
          setMathS(null)
          setHistory(null)
        }} className='clear center'>
          <p className='text'>AC</p>
        </button>
        <button onClick={() => {
          setMathS('/')
          if(current.length !== 0) setQueue((q) => q.length > 0 ? [...q, current] : [current])
          setCurrent('')
        }} className='divide center no-b-t'>
          <p className='text'>/</p>
        </button>
        <button onClick={() => {
          setMathS('*')
          if(current.length !== 0) setQueue((q) => q.length > 0 ? [...q, current] : [current])
          setCurrent('')
        }} className='multiply center'>
          <p className='text'>*</p>
        </button>
        
        
        <button onClick={() => setCurrent((num) => num += seven)} className='border center no-b-t no-b-l'>
          <p className='text'>7</p>
        </button>
        <button onClick={() => setCurrent((num) => num += eight)} className='border center no-b-t no-b-l'>
          <p className='text'>8</p>
        </button>
        <button onClick={() => setCurrent((num) => num += nine)} className='border center no-b-t no-b-l'>
          <p className='text'>9</p>
        </button>
        <button onClick={() => {
          setMathS('-')
          if(current.length !== 0) setQueue((q) => q.length > 0 ? [...q, current] : [current])
          setCurrent('')
        }} className='border center no-b-t no-b-l no-b-r minus'>
          <p className='text'>-</p>
        </button>        


        <button onClick={() => setCurrent((num) => num += four)} className='border center no-b-t no-b-l'>
          <p className='text'>4</p>
        </button>
        <button onClick={() => setCurrent((num) => num += five)} className='border center no-b-t no-b-l'>
          <p className='text'>5</p>
        </button>
        <button onClick={() => setCurrent((num) => num += six)} className='border center no-b-t no-b-l'>
          <p className='text'>6</p>
        </button>
        <button onClick={() => {
          setMathS('+')
          if(current.length !== 0) setQueue((q) => q.length > 0 ? [...q, current] : [current])
          setCurrent('')
        }} className='border center no-b-t no-b-l no-b-r plus'>
          <p className='text'>+</p>
        </button>   


        <button onClick={() => setCurrent((num) => num += one)} className='border center no-b-t no-b-l'>
          <p className='text'>1</p>
        </button>
        <button onClick={() => setCurrent((num) => num += two)} className='border center no-b-t no-b-l'>
          <p className='text'>2</p>
        </button>
        <button onClick={() => setCurrent((num) => num += three)} className='border center no-b-t no-b-l'>
          <p className='text'>3</p>
        </button>
        

        <button onClick={() => setCurrent((num) => num += zero)} className='zero border center no-b-t no-b-l no-b-b'>
          <p className='text'>0</p>
        </button>
        <button
          onClick={() => {
            if(!current.includes('.') && current.length !== 1) setCurrent((num) => num += '.')
          }}
          className='border center no-b-t no-b-l no-b-b'>
          <p className='text'>.</p>
        </button>   

        <button onClick={() => {
          if(current.length !== 0 && current !== '.'){
            setResult(true)
            console.log(current)
            setQueue((q) => q.length > 0 ? [...q, current] : [current])
          }
        }} className='equal center '>
          <p className='text'>=</p>
        </button>
      </div>

      <h1 className='author'>
        Designed and Coded By <a href='https://isaellizama.com'>Isael Lizama</a>
      </h1>
    </div>
  );
}

export default App;
