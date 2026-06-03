import './App.css';
import { useState } from 'react';
import { DeleteOutlined, EditOutlined,CheckOutlined, RollbackOutlined } from '@ant-design/icons';
import { Button, Input,Col, Row,Space } from 'antd';
function Todo({todo,index,completedItem,removeItem,modifyItem}) {
  return (
    <>
    <Row style={{ margin: 8, backgroundColor:"white",padding:8,borderRadius:8 }} >
      <Col span={16} style={{textAlign: 'left', lineHeight:"32px"}}> 
        <span style={{textDecoration:todo.iscompleted?"line-through":'none',paddingLeft:8, color:todo.iscompleted?"gray":"black"}}> 
          {todo.text}
        </span>
      </Col>  
      <Col span={8} style={{textAlign: 'right',paddingRight:8}}>
      <Space>
        <Button variant="filled" shape="circle" color={todo.iscompleted?"default":"primary"}  icon={todo.iscompleted?<RollbackOutlined />:<CheckOutlined />} onClick={()=>{completedItem(index)}}></Button>
        <Button variant="filled" shape="circle" color="cyan" icon={<EditOutlined />}  onClick={()=>{modifyItem(index)}}></Button>
        <Button variant="filled" shape="circle" color='danger' icon={<DeleteOutlined />} onClick={()=>{removeItem(index)}}></Button>
        </Space>
      </Col>
    </Row>
    </>
  )
}
function InputSet({addTodo}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value) return ( alert("请输入内容") )
    addTodo(value)
    setValue("")
  }
  const [value,setValue] = useState("")
  return (
    <form onSubmit={handleSubmit} >
      <Input placeholder='请输入待办事项' size="large" style={{ width: "50%" }} type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
    </form>
  )
}

function App() {
  const [todos,setTodo] = useState([
    {text:"123",iscompleted:true},
    {text:"456",iscompleted:false},
    {text:"789",iscompleted:false},
  ])
  todos.sort((a,b)=>a.iscompleted-b.iscompleted)
/**
 * 添加新的待办事项函数
 */
  const addTodo = (value) => {
    const newtodos = [{text:value,iscompleted:false},...todos]      
    setTodo(newtodos)
  }
  const completedItem = (index) => {
    const newtodos = [...todos]
    newtodos[index].iscompleted =!newtodos[index].iscompleted
    newtodos.sort((a,b)=>a.iscompleted-b.iscompleted)
    setTodo(newtodos)
  }
  const removeItem = (index) => {
    if(!window.confirm("确定删除吗？")) return    
    const newtodos = [...todos]
    newtodos.splice(index,1)
    setTodo(newtodos)
  }
  const modifyItem = (index) => {
    const newtodos = [...todos]
    const newtext = prompt("请输入新的内容",newtodos[index].text)
    if(!newtext) return
    newtodos[index].text =    newtext
    setTodo(newtodos)
  }
  return (
    <div className="App" style={{backgroundColor:"lightblue",width:"100%",height:"100vh"}}>
      <div></div>
      <h1 style={{ margin: 0  , padding: '16px 0' }}>TodoLists</h1>
      <InputSet addTodo={addTodo} ></InputSet>  
      <div style={{width:"50%",margin:"auto"}}  >{
          todos.map((v,i)=>{
            return <Todo todo={v} key={i} index={i} completedItem={completedItem} removeItem={removeItem} modifyItem={modifyItem}></Todo> 
          })
        }
      </div>
    </div>
  );
}

export default App;
