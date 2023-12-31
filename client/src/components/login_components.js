import React, { Component } from 'react'

export default class LogIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("http://localhost:5000/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
                email,
                password
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data, "userRegister");
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className='mb-3'>
                    <label>Email Address</label>
                    <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email'
                    />
                </div>

                <div className='mb-3'>
                    <label>Password</label>
                    <input
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    />
                </div>

                <div className='mb-3'>
                    <div className='custom-control custom-checkbox'>
                        <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customeCheck1'/>
                        <label className='custom-control-label' htmlFor='customCheck1'>
                            Remember me
                        </label>
                    </div>
                </div>

                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </div>
                <p className='forgot-password text-right'>
                    <a href='/sign-up'>Sign Up</a>
                </p>
            </form>
            
        )
    }
}