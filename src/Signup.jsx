import React from 'react'

const SignUp=()=> {
    return(
        
        <div className="my-5">
            <h1 className="text-center">
                SignUp here 
            </h1>
            
            <div className="container sign_up">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form>
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"  placeholder="Enter your password "/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
                </div>

                   
            </div>

            </div>
        </div>

    );

};

export default SignUp;
