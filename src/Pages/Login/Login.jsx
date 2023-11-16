import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {

    // const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location', location.state)


    useEffect( () => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from, {replace: true });
        })
    }


    const handleValidateCaptcha = (e) =>{
      const user_captcha_value = e.target.value;
      if(validateCaptcha(user_captcha_value)){
          setDisabled(false);
      }
      else{

         setDisabled(true)
      }
      

    }
    return (

      // <div className="hero min-h-screen bg-base-200">
      //           <div className="hero-content flex-col md:flex-row-reverse">
      //               <div className="text-center md:w-1/2 lg:text-left">
      //                   <h1 className="text-5xl font-bold">Login now!</h1>
      //                   <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      //               </div>
      //               <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      //                   <form onSubmit={handleLogin} className="card-body">
      //                       <div className="form-control">
      //                           <label className="label">
      //                               <span className="label-text">Email</span>
      //                           </label>
      //                           <input type="email" name="email" placeholder="email" className="input input-bordered" />
      //                       </div>
      //                       <div className="form-control">
      //                           <label className="label">
      //                               <span className="label-text">Password</span>
      //                           </label>
      //                           <input type="password" name="password" placeholder="password" className="input input-bordered" />
      //                           <label className="label">
      //                               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      //                           </label>
      //                       </div>
      //                       <div className="form-control">
      //                           <label className="label">
      //                               <LoadCanvasTemplate />
      //                           </label>
      //                           <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

      //                       </div>
      //                       <div className="form-control mt-6">
      //                           {/* TODO: apply disabled for re captcha */}
      //                           <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
      //                       </div>
      //                   </form>
      //                   <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
      //               </div>
      //           </div>
      //       </div>
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

          {/* <input type="text"  placeholder="type the captcha above" name="captcha" className="input input-bordered"  /> */}
          {/* <button onBlur={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2 '>Validate</button> */}
          
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
          {/* <input disabled={false} className="btn btn-primary" type="submit" value="Login" /> */}
        </div>
      </form>
      <p className='btn-link p-4'><small>New Here? <Link to={'/signUp'}>Create an account</Link></small></p>

      <SocialLogin></SocialLogin>

    </div>
  </div>
  

</div>
        </div>
    );
};

export default Login;