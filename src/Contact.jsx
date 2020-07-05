import React from 'react';
const Contact=()=>{
    return(
    <>
    <div class="container login-container ">
    <div class="col-md-12">
                <div class="col-md-12 login-form-1 ">
                    <h3><strong className='navbar-brand'>Contact Us</strong></h3>
                    
                        <div className="form-group ">
                            <input type="email" className="form-control" placeholder="Your Email" id="email" checked  required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password" id="password" checked required />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" checked required/>
                        </div>
                        <div className="form-group">
                            <a href="#" className="btn-get-started">Forget Password?</a>
                        </div>
                </div>
        </div>
        </div>



        
    </>
    );
};

export default Contact;