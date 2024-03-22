import {useEffect, useRef, useState} from "react";
const TextArea = Input.TextArea
const Login = () => {
  const [value, setValue] = useState('')
  useEffect(()=>{
    fetch(`/api`,).then(res=>{
      return res.json()
    }).then(r=>{
      console.log(r)
      setValue(JSON.stringify(r))
    })
  })
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  function go() {
    console.log(usernameRef.current.input.value, passwordRef.current.input.value)
    fetch(`/api/p`,{
      method:'POST',
      body:JSON.stringify({
        username:usernameRef?.current?.input?.value,
        password:passwordRef?.current?.input?.value
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json()).then(r=>{
      console.log()
    })
  }
  return <div>
    <h1>Login</h1>
    <Input type="text" placeholder="username" ref={usernameRef} />
    <Input type="password" placeholder="password" ref={passwordRef} />
    <Button onClick={()=>{
      go()
    }}>Login</Button>

    <TextArea autoSize={{
        minRows: 20,
        maxRows: 20
    }} value={value}/>
  </div>
}

export default Login