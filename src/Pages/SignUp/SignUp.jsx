// import { useForm } from "react-hook-form"

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {
  const { register, handleSubmit, reset,  formState: { errors } } = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser =result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then( () => {
      console.log('user profile updated')
     reset();
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'User created successfully.',
      showConfirmButton: false,
      timer: 1500
  });
  navigate('/');
      })
      .catch(error => console.log(error))
    })
  }
    // console.log(watch("example"))

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  

    return (
      <>
      <Helmet><title>Bistro Boss | SignUp</title></Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">sign up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered"  />

                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })}  className="input input-bordered"  />

                {errors.name && <span className="text-red-600">Photo url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered"  />
                {errors.email && <span className="text-red-600">email is required</span>}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" {...register("password", { required: true, 
                   minLength: 6, 
                   maxLength: 20 ,
                   pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                   })} className="input input-bordered" />
                
                {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>}

                {errors.password?.type === 'maxLength' && <span className="text-red-600">password must be less 20 character</span>}

                {errors.password?.type === 'minLength' && <span className="text-red-600">password must be 6 character</span>}

                {errors.password?.type === 'pattern' && <span className="text-red-600">password must have uppercase lower one upper character</span>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='sign Up'/>
                {/* <button className="btn btn-primary">Sign Up</button> */}
              </div>
            </form>
            <p className='btn-link'><small><Link to={'/login'}>already have  an account</Link></small>login</p>
          </div>
        </div>
      </div>
      </>
    );
};

export default SignUp;