import { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')

  const onClick = () => {
    
  }

  return (
    <div>
      <textarea value={input} onChange={e=> setInput(e.target.value)}/>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))