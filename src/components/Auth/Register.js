import React, { useState } from 'react'
import registerImage from '../../assets/images/register.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../store/actions/auth'
import './Auth.scss'

const Register = ({ history }) => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordSec, setPasswordSec] = useState('')
    const [notMatchPass, setNotMatchPass] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(register({ name, email, password }, history))
    }
    const confirmPass = (e) => {
        e.preventDefault()
        setPasswordSec(e.target.value)
        setNotMatchPass(password !== e.target.value)
    }

    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='Register' />
                    </div>

                    <div id='form-section'>
                        <h2>Create an account</h2>

                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    required='required'
                                    type='text'
                                    placeholder='Name' />
                            </div>

                            <div className='input-field mb-1'>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    required='required'
                                    type='text'
                                    placeholder='Email' />
                            </div>
                            <div className='input-field mb-2'>
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    required='required'
                                    type='password'
                                    placeholder='Password' />
                            </div>
                            {notMatchPass && <span>Password mismatch</span>}
                            <div className='input-field mb-2'>
                                <input
                                    onChange={confirmPass}
                                    value={passwordSec}
                                    required='required'
                                    type='password'
                                    placeholder='Confirm password' />
                            </div>

                            <button>REGISTER</button>
                        </form>

                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register
