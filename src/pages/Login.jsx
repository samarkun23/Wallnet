import {useNavigate} from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        localStorage.setItem("wallnet-user", "true");
        navigate("/dashboard")
    }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#353535] via-[#0f172a] to-[#020617]">
      <form className="w-full max-w-md backdrop-blur-xl bg-black/30 border border-white/10 p-10 rounded-2xl shadow-2xl" onSubmit={handleLogin}>
        <div className="text-center font-extrabold text-3xl text-white mb-8 tracking-wider">
          WellNet
        </div>

        {/* Username */}
        <div className="mb-5">
          <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="janesmith"
            className="input input-bordered w-full bg-[#1e293b] text-white placeholder:text-gray-400 border-gray-700"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@gmail.com"
            className="input input-bordered w-full bg-[#1e293b] text-white placeholder:text-gray-400 border-gray-700"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full bg-[#1e293b] text-white placeholder:text-gray-400 border-gray-700"
          />
        </div>

        {/* Terms */}
        <div className="form-control mb-5">
          <label className="cursor-pointer label justify-start gap-3">
            <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" defaultChecked />
            <span className="label-text text-gray-300">Accept terms and conditions</span>
          </label>
        </div>

        {/* Login Button */}
        <button className="btn w-full bg-gradient-to-r from-blue-700 to-purple-800 text-white font-semibold hover:shadow-xl transition duration-300 hover:border-gray-500" type='submit'>
          Login
        </button>

        {/* Signup Link */}
        <div className="text-center mt-6 text-gray-300 text-sm">
          Don't have an account?{" "}
          <a href="#" className="underline text-blue-400 hover:text-blue-300">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
