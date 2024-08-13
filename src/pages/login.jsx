import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import background from '../assets/images/login.jpg';
import panelBG from '../assets/images/panel.png';
import logo from '../assets/images/loginLogo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <form
            onSubmit={submitHandler}
            className="h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div
                className="md:w-1/2 max-w-sm p-10 bg-opacity-30 rounded-lg shadow-lg bg-cover bg-center bg-no-repeat h-[535px] "
                style={{
                    backgroundImage: `url(${panelBG})`,
                }}
            >
                <div className="text-center md:text-left p-8">
                    <img src={logo} alt="logo" />
                </div>

                <div className="flex justify-center ">
                    <p className="text-white font text-center text-[33px] border-b-2 border-solid border-b-white mb-[75px] h-[58px] w-[250px]">
                        Sign in
                    </p>
                </div>

                <input
                    className="text-sm w-full px-4 py-2 border-2 border-solid border-white rounded-lg bg-transparent placeholder-white placeholder:font-semibold text-white"
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={''}
                />
                <input
                    className="text-sm w-full px-4 py-2 border-2 border-solid border-white rounded-lg mt-4 bg-transparent placeholder-white placeholder:font-semibold text-white"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue={''}
                />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    {/* <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input
                            className="mr-1 opacity-0 border-solid border-2 border-white"
                            type="checkbox"
                        />
                        <span className="text-white">Remember Me</span>
                    </label> */}
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="hidden peer" />
                        <span className="flex items-center justify-center w-[14px] h-[14px] border-[1px] border-white bg-transparent rounded-sm peer-checked:bg-white">
                            <svg
                                className="w-1 h-1 text-transparent peer-checked:text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </span>
                        <span className="text-white font-thin ml-2">
                            Remember Me
                        </span>
                    </label>
                    <a
                        className="text-white hover:text-purple-200 hover:underline hover:underline-offset-4 font-thin"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className="text-center md:text-left flex justify-center ">
                    <button
                        className="mt-4 bg-white hover:bg-purple-200 px-4 py-2 text-black uppercase rounded text-xs tracking-wider font-bold"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                {/* <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Don't have an account?{' '}
                    <Link
                        to="/register"
                        className="text-red-600 hover:underline hover:underline-offset-4"
                    >
                        Sign up
                    </Link>
                </div> */}
            </div>
        </form>
    );
};

export default Login;
