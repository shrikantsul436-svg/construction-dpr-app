
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login(){

const navigate=useNavigate()
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [error,setError]=useState("")

const handleSubmit=(e)=>{
e.preventDefault()

if(!email || !password){
setError("Please enter email and password")
return
}

if(email==="test@test.com" && password==="123456"){
navigate("/projects")
}else{
setError("Invalid credentials")
}
}

return(
<div className="flex items-center justify-center h-screen">

<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">

<h2 className="text-xl font-bold mb-4 text-center">Login</h2>

<input type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<input type="password"
placeholder="Password"
className="border p-2 w-full mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

{error && <p className="text-red-500 text-sm">{error}</p>}

<button className="bg-blue-500 text-white w-full p-2 mt-3 rounded">
Login
</button>

</form>
</div>
)
}

export default Login
