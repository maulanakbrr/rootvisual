'use client'

import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SignInForm = () => {
  const router = useRouter()
  const [ validated, setValidated ] = useState(false)
  const [ requesting, setRequesting ] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form  = e.currentTarget
    
    if (!form.checkValidity()) {
      e.stopPropagation()
    } else {
      setRequesting(true)
      router.push('/admin/dashboard')
    }
    console.log('submitted')

    setValidated(true)
  }

  return (
    <div>
      <h1>Sign In</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Control.Feedback type="invalid">
            email required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
          <Form.Control.Feedback type="invalid">
            password required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={requesting}>
          Sign In
        </Button>
      </Form>
    </div>
  )
}

export default SignInForm