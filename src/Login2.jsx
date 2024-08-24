import React, { useEffect, useRef } from 'react';
import 'boxicons/css/boxicons.min.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Login2 = () => {
  const wrapperRef = useRef();
  const inputBoxRefs = useRef([]);
  const buttonRef = useRef();
  const registerLinkRef = useRef();

  useGSAP(() => {
    // GSAP Flip Card Animation from the top
    gsap.from(wrapperRef.current, {
      opacity: 0,
      y: -200,
      duration: 1,
      ease: 'power4.out',
    });

    // Staggered animation for input boxes and button
    gsap.from(inputBoxRefs.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.2,
      delay: 0.5,
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power4.out',
      delay: 1,
    });

    gsap.from(registerLinkRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power4.out',
      delay: 1.2,
    });

   
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('./src/background11.png')" }}>
      <div ref={wrapperRef} className="w-96 text-white p-4 sm:p-6 bg-gray-700 bg-opacity-30 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-sm">
        <form>
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
          <div className="relative w-full h-12 mb-6" ref={(el) => (inputBoxRefs.current[0] = el)}>
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full h-full bg-transparent border-none outline-none border-2 border-white border-opacity-20 rounded-full text-lg text-white p-4 transition ease-in-out duration-300 focus:border-cyan-500 focus:shadow-cyan-500 placeholder-white"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: 'none',
                transition: 'box-shadow 0.4s ease-in-out, border 0.4s ease-in-out',
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid rgba(15, 255, 255, 1.0)';
                e.target.style.boxShadow = '0 0 25px rgba(15, 255, 255, 1.0)';
              }}
              onBlur={(e) => {
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl"></i>
          </div>
          <div className="relative w-full h-12 mb-6" ref={(el) => (inputBoxRefs.current[1] = el)}>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full h-full bg-transparent border-none outline-none border-2 border-white border-opacity-20 rounded-full text-lg text-white p-4 transition ease-in-out duration-300 focus:border-cyan-500 focus:shadow-cyan-500 placeholder-white"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: 'none',
                transition: 'box-shadow 0.4s ease-in-out, border 0.4s ease-in-out',
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid rgba(15, 255, 255, 1.0)';
                e.target.style.boxShadow = '0 0 25px rgba(15, 255, 255, 1.0)';
              }}
              onBlur={(e) => {
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl"></i>
          </div>
          <div className="flex items-center justify-between text-sm mb-6" ref={(el) => (inputBoxRefs.current[2] = el)}>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              <label>Remember Me</label>
            </div>
            <a href="#" className="hover:border-b border-white">Forgot Password?</a>
          </div>
          <button
            ref={buttonRef}
            type="submit"
            className="w-full h-12 bg-transparent border border-white rounded-xl text-lg text-wheat transition ease-in-out duration-300 relative"
            style={{
              zIndex: 1,
              transition: 'background 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
            }}
            onMouseOver={(e) => {
              e.target.style.border = 'none';
              e.target.style.zIndex = 0;
              e.target.style.background = 'linear-gradient(to top right, #00fff7, #ff00f7)';
              e.target.style.boxShadow = '25px 0 100px #e100ff, -25px 0 100px #00f7ff';
            }}
            onMouseOut={(e) => {
              e.target.style.border = '1px solid whitesmoke';
              e.target.style.zIndex = 1;
              e.target.style.background = 'transparent';
              e.target.style.boxShadow = 'none';
            }}
          >
            Login
          </button>
          <div className="text-sm text-center mt-6" ref={registerLinkRef}>
            <p>Don't have an account? <a href="#" className="font-semibold text-white hover:underline">Register Here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;
