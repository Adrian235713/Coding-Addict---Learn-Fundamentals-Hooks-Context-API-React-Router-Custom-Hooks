import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(1);
  const reset = () => {
    setValue((prevState)=> 0);
  }

  // -------------------------------------------
  const [value2, setValue2] =  useState(10)
  const complexIncresae = () => {setValue2((prevState)=>prevState+1)}
  const complexReset = () => {setValue2((prevState)=>0)}
  const complexDecrese = () => {setValue2((prevState)=>prevState-1)}

  return <>
  <section style={{margin:'4rem 0'}}>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=> setValue(value - 1)}>decreser</button>
    <button className='btn' onClick={reset}>reset</button>
    <button className='btn' onClick={()=> setValue(value + 1)}>increase</button>
  </section>

    <section style={{margin:'4rem 0'}}>
    <h2>More complex counter</h2>
    <h1>{value2}</h1>
    <button className='btn' onClick={complexIncresae}>
      increse later
    </button>
    <button className='btn' onClick={complexReset}>
      reset
    </button>
    <button className='btn' onClick={complexDecrese}>
      decise
    </button>
  </section>
  </>;
};

export default UseStateCounter;
