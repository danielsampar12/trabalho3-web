import React, {useEffect, useState} from 'react';
import api from './service/api';

import GlobalStyle from './global';
import {Container, Table, Form, Strong} from './styles'

function App() {
  const [employees, setEmployees] = useState([]);

  const[id, setId] = useState('');
  const[name, setName] = useState('');
  const[salary, setSalary] = useState('');
  const[age, setAge] = useState('');
  const[avatar, setAvatar] = useState('');


  useEffect(() => {
    
    async function loadEmployees(){
      const response = await api.get('/employees');
      //devido a estrutura do dado retornado tive q usar 2 .data
      setEmployees(response.data.data)
    }
    loadEmployees();
  }, [])

  
  async function handleEdit(data){
    setId(data.id);
    setName(data.employee_name);
    setSalary(data.employee_salary);
    setAge(data.employee_age);
    //setAvatar(data.profile_imagem);
  }

  async function handleUpdate(id){
    await api.put(`/update/${id}`);
  }

  async function handleDelete(id) {
    await api.delete(`/delete/${id}`);
    setEmployees(employees.filter(employee => employee.id !== id))
}

  async function handleSubmit(){
    const response = await api.post('/create', {
      name,
      salary,
      age,
      avatar
    });
    console.log(response.data)
    setEmployees([...employees, response.data]);
  }

  let options = [];
  for(let i =0; i <= 150; i++){
    options.push(<option value={i} key={i}>{i}</option>)
  }

  return (
    <Container>
      <GlobalStyle/>
        
          <Form onSubmit={handleSubmit}>
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
          </Form>
        
        <main>
          <Table>
          <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Salário</th>
                <th>Idade</th>
                <th>Avatar</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.employee_name}</td>
                  <td>{employee.employee_salary}</td>
                  <td>{employee.employee_age}</td>
                  {/*<td>{employee.profile_imagem}</td>*/}
                  <td></td>
                  
                  <td>
                    <button onClick={() => window.confirm(`Deseja deletar o funcionario com id: ${employee.id} e nome ${employee.employee_name}?`)
                                       ? handleDelete(employee.id) : ''}>Excluir</button>
                    <button onClick={() => handleEdit(employee)}>Editar</button>                     
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </main>
    </Container>
  );
}

export default App;
