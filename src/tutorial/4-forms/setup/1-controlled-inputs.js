import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firastName, setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [people, setPeople] =useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (firastName && email){
      const person = { firastName:firastName,email:email}
      setPeople((pople)=>{
        return [...people,person];
      });
      setFirstName('');
      setEmail('');
    }
    else{
      console.log('empty values');
    }
  }

  return <h1>
    <article>
      <form action="" className='from' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="firstName">Name :</label>
          <input type="text" id='firstName' name='firstName' value={firastName}
          onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email :</label>
          <input type="text" id='firastName' name='email' value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="firstName">Name :</label>
          <input type="text" id='firstName' name='firstName' value={firastName}
          onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>

        <button type='submit'>add person</button>
      </form>
      {
        people.map((person)=>{
          const {id,firastName,email} = person
          return <div>
              <h4>{firastName}</h4>
              <p>{email}</p>
          </div>
        })
      }
    </article>
  </h1>;
};

export default ControlledInputs;
