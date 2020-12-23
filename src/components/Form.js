import React, { useState } from 'react'

const Register = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    availability: '',
    flexiable: false
  })

  const { name, email, availability, flexiable } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })
  
  const onSubmit = e => {
    e.preventDefault()
    const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (name === '') {
      document.getElementById('name-error').innerHTML = "Mandatory Field!";
    } else if (name.length > 101) {
      document.getElementById('name-error').innerHTML = "Maximun length is 100.";
    } else if ( availability && !availability.match("^[0-9]+$")){
      document.getElementById('avai-error').innerHTML = "Must be a number.";
    } 
    else if ( email && !email.match(emailRegx)){
      document.getElementById('email-error').innerHTML = "There must be @ with proper format of email.";
    }
    else {
      window.alert('Your data has been saved to our database..')
      setUser({
        name: '',
        email: '',
        availability: '',
        flexiable: false
      });
      }
    }

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit} id='form'>
        <div className='form-group'>
          <label>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
          />
          <span id='name-error' className='text-danger'></span>

        </div>
        
        <div className='form-group'>
          <label>Email Address</label>
          <input
            id='email'
            type='text'
            name='email'
            value={email}
            onChange={onChange}
          />
          <span id='email-error' className='text-danger'></span>

        </div>

        <div className='form-group'>
          <label>Availability</label>
          <input
            id='availability'
            type='text'
            name='availability'
            value={availability}
            onChange={onChange}
          />
          <span id='avai-error' className='text-danger'></span>
        </div>

        <div className='form-group'>
        <label>Flexiable</label><br></br>
        <input type="checkbox" id='flexiable' name="Flexible" value={flexiable} onChange={onChange} />
        </div>

        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}

export default Register
