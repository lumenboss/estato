import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const SignUp = () => {

  const [formValues, setValues] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e:any)=>{
    setValues({
      ...formValues,
      [e.target.id]: e.target.value
    });
  }
  // console.log(formValues);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
    setLoading(true);
    const res: any = await fetch("http://localhost:3000/auth/signup", {
      method: 'POST',
      headers:{
        'Content-Type': "application/json",
      },
      body: JSON.stringify(formValues)
    });
    const data = await res.json();
    console.log(data);
    if(data.success === false){
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(null);
    navigate("/signin")

    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  }
  return (
    <div >
      <h1 className="mt-6 mb-3 sm:mb-10 sm:mt-10 lg:mt-14 text-center text-blue-500 text-xl sm:text-2xl lg:text-3xl">Create an account</h1>
      <form onSubmit={handleSubmit} className="m-auto max-sm:w-4/5 sm:w-3/5 lg:[60%] flex flex-col gap-4">
        <input type="text" name="username" id="username" placeholder="Username" className="shadow-md border rounded-sm h-12 py-1 px-2 outline-none" onChange={handleChange}/>
        <input type="email" name="email" id="email" placeholder="Email" className="shadow-md border rounded-sm h-12 py-1 px-2 outline-none" onChange={handleChange}/>
        <input type="password" name="password" id="password" placeholder="Password" className="shadow-md border rounded-sm h-12 py-1 px-2 outline-none" onChange={handleChange}/>
        <button disabled={loading} className="shadow-md rounded-md h-12 bg-blue-400 text-white hover:bg-blue-300 disabled:bg-blue-200">{loading ? "Loading" : "Sign up"}</button>
      </form>
      <div className="mx-auto mt-9 w-max sm:text-lg sm:mt-6">
        <p className="text-md">Already have an account? <Link to="/signin" className="py-4 text-md text-blue-600 hover:text-blue-400"> Sign in</Link></p>      
      </div>
      {error && <p className=" text-center text-red-600 mt-5">{error}</p>}
    </div>
  )
}

export default SignUp