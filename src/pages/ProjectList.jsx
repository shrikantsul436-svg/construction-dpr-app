
import projects from "../data/projects"
import {useNavigate} from "react-router-dom"
import {useState} from "react"

function ProjectList(){

const navigate=useNavigate()
const [search,setSearch]=useState("")

const filtered=projects.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))

return(
<div className="p-6 max-w-6xl mx-auto">

<h1 className="text-2xl font-bold mb-4">Projects</h1>

<input
placeholder="Search project"
className="border p-2 mb-4 w-full md:w-80"
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

{filtered.map(p=>(

<div key={p.id}
className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg"
onClick={()=>navigate("/dpr")}>

<h2 className="font-bold">{p.name}</h2>
<p>Status: {p.status}</p>
<p>Start: {p.startDate}</p>
<p>{p.location}</p>

</div>

))}

</div>
</div>
)
}

export default ProjectList
