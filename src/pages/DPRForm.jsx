
import {useState} from "react"
import projects from "../data/projects"

function DPRForm(){

const [form,setForm]=useState({
project:"",
date:"",
weather:"",
description:"",
workers:"",
images:[]
})

const [preview,setPreview]=useState([])

const handleImages=(e)=>{
const files=Array.from(e.target.files)
setPreview(files.map(file=>URL.createObjectURL(file)))
setForm({...form,images:files})
}

const handleSubmit=(e)=>{
e.preventDefault()

if(!form.project || !form.date || !form.weather || !form.description || !form.workers){
alert("Please complete all fields")
return
}

let reports=JSON.parse(localStorage.getItem("dprReports"))||[]
reports.push(form)
localStorage.setItem("dprReports",JSON.stringify(reports))

alert("DPR submitted successfully")
}

return(
<div className="max-w-xl mx-auto p-6">

<h2 className="text-xl font-bold mb-4">Daily Progress Report</h2>

<form onSubmit={handleSubmit} className="space-y-3">

<select className="border p-2 w-full"
onChange={(e)=>setForm({...form,project:e.target.value})}>

<option value="">Select Project</option>

{projects.map(p=>(
<option key={p.id}>{p.name}</option>
))}

</select>

<input type="date"
className="border p-2 w-full"
onChange={(e)=>setForm({...form,date:e.target.value})}/>

<select className="border p-2 w-full"
onChange={(e)=>setForm({...form,weather:e.target.value})}>

<option value="">Weather</option>
<option>Sunny</option>
<option>Cloudy</option>
<option>Rainy</option>

</select>

<textarea
placeholder="Work Description"
className="border p-2 w-full"
onChange={(e)=>setForm({...form,description:e.target.value})}
></textarea>

<input type="number"
placeholder="Worker Count"
className="border p-2 w-full"
onChange={(e)=>setForm({...form,workers:e.target.value})}/>

<input type="file" multiple onChange={handleImages}/>

<div className="flex gap-2 flex-wrap">
{preview.map((src,i)=>(
<img key={i} src={src} className="w-20 h-20 object-cover rounded"/>
))}
</div>

<button className="bg-green-600 text-white p-2 w-full rounded">
Submit DPR
</button>

</form>
</div>
)
}

export default DPRForm
