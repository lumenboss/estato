import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Auth = () => {

  const [formValues, setValues] = useState({});
  const [error, setError] = useState(null);  // for tracking errors
  const [loading, setLoading] = useState(false); // tracking loading state of button while making login or sign in request
  const [isLogin, setLogin] = useState(true);  // tracking whether user is logging in or signing up so as to update UI 
  const navigate = useNavigate();

  const forsignup = "http://localhost:3000/auth/signup";   // url for signingup
  const forsignin = "http://localhost:3000/auth/signin";   // url for signing in

  const handleChange = (e:any)=>{   // tracking changes in form input fields
    setValues({
      ...formValues,
      [e.target.id]: e.target.value
    });
  }
  // console.log(formValues);

  const handleSubmit = async (e:any) => {   // handling form submission
    e.preventDefault();
    try {
    setLoading(true);
    const res: any = await fetch(isLogin? forsignin: forsignup, {
      method: 'POST',
      headers:{
        'Content-Type': "application/json",
      },
      body: JSON.stringify(formValues)
    });
    const data = await res.json();  // converting response to json
    console.log(data);
    if(data.success === false){
      setError(data.message);   // setting error to error message
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(null);
    navigate("/profile")

    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  }

  const toggleLogin = () => setLogin(!isLogin)

  return (
    <div >
      <h1 className="mt-6 mb-3 sm:mb-10 sm:mt-10 lg:mt-14 text-center text-blue-500 text-xl sm:text-2xl lg:text-3xl">{isLogin ? "Create an account": "Sign in"}</h1>
      <form onSubmit={handleSubmit} className="m-auto max-sm:w-4/5 sm:w-3/5 lg:[60%] flex flex-col gap-4">
        {isLogin? null :
        <input type="text" name="username" id="username" placeholder="Username" className="shadow-md border rounded-sm h-12 py-1 px-2 outline-none" onChange={handleChange}/>
        }
        <input type="email" name="email" id="email" placeholder="Email" className="shadow-md border rounded-sm h-12 py-1 px-2 outline-none" onChange={handleChange}/>
        <input type="password" name="password" id="password" placeholder="Password" className="shadow-md border rounded-sm h-12 py-1 px-2 outline-none" onChange={handleChange}/>
        <button disabled={loading} className="shadow-md rounded-md h-12 bg-blue-400 text-white hover:bg-blue-300 disabled:bg-blue-200">{loading ? "Loading" : isLogin ? "Sign in" : "Sign up"}</button>
      </form>
      <div className="mx-auto mt-9 w-max sm:text-lg sm:mt-6">
        <p className="text-md">{isLogin? "No account yet?" :"Already have an account?"} 
          <span  onClick={toggleLogin} className="p-4 text-md text-blue-600 hover:text-blue-400 hover:cursor-pointer"> {isLogin? "Sign up" : "Sign in"}</span></p>      
      </div>
      {error && <p className=" text-center text-red-600 mt-5">{error}</p>}
    </div>
  )
}

export default Auth