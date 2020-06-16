import React, {useState} from 'react';

import { FormStyled, Strong } from './styles';


function Form({ onSubmit, emp }) {
  const[id, setId] = useState(emp.id);
  const[name, setName] = useState(emp.employee_name);
  const[salary, setSalary] = useState(emp.employee_salary);
  const[age, setAge] = useState(emp.employee_age);
  const[avatar, setAvatar] = useState('');

  let options = [];
  for(let i =0; i <= 150; i++){
    options.push(<option value={i} key={i}>{i}</option>)
  }

  async function handleSubmit(e){
      e.preventDefault();
      await onSubmit({
        id,
        name,
        salary,
        age,
        avatar
      })
      setId('');
      setName('');
      setSalary('');
      setAge('');
      setAvatar('');
  }

  return (
      
          <FormStyled onSubmit={handleSubmit}>
              <Strong>Adicionando novo Empregado</Strong>
                <label>Nome:</label>
                <input className="string" id="name" required value={name} onChange={e => setName(e.target.value)}></input>
                <label>Salario:</label>
                <input className="number" id="salary" required value={salary} onChange={e => setSalary(e.target.value)}></input>
                <label>Idade:</label>
                <select>
                <option value={age}>{age}</option>
                {options}

                </select>
                <label>Avatar:</label>
                <input className="string" id="avatar" value={avatar} onChange={e => setAvatar(e.target.value)}></input>
                <button type="submit">Salvar</button>
          </FormStyled>
      
  );
}

export default Form;
