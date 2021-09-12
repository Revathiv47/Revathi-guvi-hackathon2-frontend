import React from 'react'

function Login() {
    return (
        <div class="container">
	<div class="row">
		 <h1><i class="fa fa-lock" aria-hidden="true"></i> Login</h1>
       
        </div><br /><br />
         
        
                	<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user-tie"></i></span>
								</div>
								<input type="text" name="" class="form-control" placeholder="username or email"/>
							</div><br />
         
                	<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fa fa-key icon"></i></span>
								</div>
									<input type="Password" name="" class="form-control" placeholder="password"/>
							</div><br />
            <div class="checkbox">
              <label><input type="checkbox" value=""/> Remember me</label>
            </div><br />
              <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-off"></span> Login</button>
         
        <button type="submit" class="btn btn-info"><span class="glyphicon glyphicon-remove"></span>Login with Facebook </button><br />
               <br /> <center></center><br />
        <div class="footer">
                  <p>Don't have an Account! <a href="#">Sign Up Here</a></p>
          <p>Forgot <a href="#">Password?</a></p>
        </div>
 
	</div>
    )
}

export default Login;
