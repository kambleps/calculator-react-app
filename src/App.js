import React,{useState} from 'react'

const App = () => {
    const[current,setCurrent]=useState('')
    const[previous,setPrevious]=useState('')
    const[operations,setOperations]=useState("")

    function appendValue (e){
        const value = e.target.getAttribute('data');
        setCurrent(current+value);
        if(value==='.' && current.includes('.')) return;
    }
    function deletehandler () {
         setCurrent(String(current).slice(0,-1))
    }
    function allclear (){
        setCurrent('')
        setOperations('')
        setPrevious('')
    }
    function compute (){
        let result;
        let currentNumber = parseFloat(current);
        let previousNumber = parseFloat(previous);
        switch(operations){
            case '/':
                result = previousNumber / currentNumber;
                break;
            case '*':
                result = previousNumber * currentNumber;
                break;
            case '+':
                result = previousNumber + currentNumber;
                break;
            case '-':
                result = previousNumber - currentNumber;
                break; 
            default: return ;       
        }
        return result;
    }
    function chooseoperation(e){
        if(current==='')return;
        if(previous !== ''){
            const value = compute();
            setPrevious(value)
        }else{
            setPrevious(current)
        }
        setCurrent('')
        setOperations(e.target.getAttribute('data'))
    }
    function equal (){
        const result=compute();
        if(result===undefined || result===null)return;
        setCurrent(result);
        setOperations("")
        setPrevious("")
    }
    
  return (
    <div className='main-div'>
      <div className='calculator-div'>
        <div className='display-div'>
                <div className='show-previous'>{previous}  {operations}</div>
                <div className='show-current'>{current}</div>
        </div>
        <div className='button-div'>
            <div>
            <button data={0} onClick={appendValue}>0</button>
            <button onClick={allclear} >AC</button>
            <button onClick={deletehandler} >DEL</button>
            <button data={'/'} onClick={chooseoperation}>/</button>
            </div>
            <div>
            <button data={7} onClick={appendValue}>7</button>
            <button data={8} onClick={appendValue}>8</button>
            <button data={9} onClick={appendValue}>9</button>
            <button data={'*'} onClick={chooseoperation}>*</button>
            </div>
            <div>
            <button data={4} onClick={appendValue}>4</button>
            <button data={5} onClick={appendValue}>5</button>
            <button data={6} onClick={appendValue}>6</button>
            <button data={'+'} onClick={chooseoperation}>+</button>
            </div>
            <div>
            <button data={1} onClick={appendValue}>1</button>
            <button data={2} onClick={appendValue}>2</button>
            <button data={3} onClick={appendValue}>3</button>
            <button data={'-'} onClick={chooseoperation}>-</button>
            </div>
            <div className='last-div'>
            <button data={'.'} onClick={appendValue}>.</button>
            <button data={'00'} onClick={appendValue}>00</button>
            <button id='equal' onClick={equal}>=</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
