import React, { useState } from 'react'
import Swal from 'sweetalert2'
import image from '../../assets/images/Hero.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function PassangerSignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [idCard, setIdCard] = useState(null)
  const [department, setDepartment] = useState('')
  const [year, setYear] = useState('')
  const [step, setStep] = useState(1)
  const [open, setopen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [emailError, setEmailError] = useState(false)

  const navigate = useNavigate()

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e);
    
    const data = new FormData(e.currentTarget)
    
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !idCard ||
      !department ||
      !year
    ) {
      Swal.fire({
        icon: 'error',
        title: 'oops',
        text: 'Enter all the details',
        timer: '2000',
      })
    } else if (!email.includes('@skcet.ac.in')) {
      setEmailError(true)
      Swal.fire({
        icon: 'error',
        title: 'oops',
        text: 'Enter valid email',
        timer: '2000',
      })
    }
    data.append('firstName', firstName)
    data.append('lastName', lastName)
    data.append('email', email)
    data.append('password', password)
    data.append('image', idCard)
    data.append('department', department)
    data.append('yearOfStudy', year)
    data.append('phoneNumber', phoneNumber)

    let formValues = {}
    for (let [key, value] of data.entries()) {
      formValues[key] = value
    }
    console.log(formValues)
    await axios
      .post('http://localhost:8080/signup', data)
      .then((Response) => {
        if (Response.status === 201) {
          console.log(Response)
        }
      })
      .catch((error) => {
        console.error("Axios error in Backend => ",error)
      })
  }

  const handleOtpVerification = async (event) => {
    event.preventDefault()
    axios
      .get(`http://localhost:8080/verify/${otp}`)
      .then((Response) => {
        if (Response.status === 202) {
          setopen(false)
          navigate('/passangerSignin')
        } else {
          setOtpError('Invalid OTP. Please try again.')
          setopen(true)
        }
      })
      .catch((error) => {
        setOtpError('Invalid OTP. Please try again.')
        console.error(error)
      })
  }

  return (
    <div className=" slide-in-from-corner h-[80vh]  flex justify-center items-center  ">
      <div className="flex justify-evenly  items-center gap-20">
        <div className=" max-w-sm ">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto  bg-white rounded"
            >
              {step === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4 grid gap-2">
                      <label className=" text-foreground">First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-1 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4 grid gap-2">
                      <label className=" text-foreground">Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-1 border rounded"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className=" text-foreground">Email</label>
                    <input
                      type="email"
                      value={email}
                      placeholder="must contain @skcet.ac.in"
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3 py-1 border rounded ${
                        emailError ? 'border-red-500' : ''
                      } `}
                    />
                  </div>
                  <div className="mb-4">
                    <label className=" text-foreground">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-1 border rounded"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-4 py-1 bg-foreground text-white rounded"
                  >
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="mb-4">
                    <label className="block text-foreground">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-3 py-1 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-foreground">ID Card</label>
                    <input
                      type="file"
                      onChange={(e) => setIdCard(e.target.files[0])}
                      className="w-full px-3 py-1 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    {/* <label className="block text-foreground">Department</label> */}
                    <Select
                      value={department}
                      onValueChange={(value) => setDepartment(value)}
                      className="w-full"
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Computer Science and Engineering">
                            Computer Science and Engineering
                          </SelectItem>
                          <SelectItem value="Computer Science and Design">
                            Computer Science and Design
                          </SelectItem>
                          <SelectItem
                            value="Computer Science and Engineering (Cyber
                            Security)"
                          >
                            Computer Science and Engineering (Cyber Security)
                          </SelectItem>
                          <SelectItem value="Information Technology">
                            Information Technology
                          </SelectItem>
                          <SelectItem value="Artificial Intelligence and Data Science">
                            Artificial Intelligence and Data Science
                          </SelectItem>
                          <SelectItem value="Computer Science and Business Systems">
                            Computer Science and Business Systems
                          </SelectItem>
                          <SelectItem
                            value="Electronics and Communication
                            Engineering"
                          >
                            Electronics and Communication Engineering
                          </SelectItem>
                          <SelectItem value="Electrical and Electronics Engineering">
                            Electrical and Electronics Engineering
                          </SelectItem>
                          <SelectItem value="Mechanical Engineering">
                            Mechanical Engineering
                          </SelectItem>
                          <SelectItem value="Mechatronics Engineering">
                            Mechatronics Engineering
                          </SelectItem>
                          <SelectItem value="Civil Engineering">
                            Civil Engineering
                          </SelectItem>

                          <SelectItem value="M.E. Applied Electronics">
                            M.E. Applied Electronics
                          </SelectItem>
                          <SelectItem value="M.E. Computer Science and Engineering">
                            M.E. Computer Science and Engineering
                          </SelectItem>
                          <SelectItem value="M.E. Engineering Design">
                            M.E. Engineering Design
                          </SelectItem>
                          <SelectItem value="M.Tech. Computer Science and Engineering">
                            M.Tech. Computer Science and Engineering
                          </SelectItem>
                          <SelectItem value="Master of Business Administration">
                            Master of Business Administration
                          </SelectItem>

                          <SelectItem value="INTEGRATED_MTECH">
                            Integrated M.Tech.
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-4">
                    {/* <label className="block text-foreground">Year</label> */}
                    <Select
                      value={year}
                      onValueChange={(value) => setYear(value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Year of Studying" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="I Year">I Year</SelectItem>
                          <SelectItem value="II Year">II Year</SelectItem>
                          <SelectItem value="III Year">III Year</SelectItem>
                          <SelectItem value="IV Year">IV Year</SelectItem>
                          <SelectItem value="V Year">V Year</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-between pt-3`11">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="px-4 py-1 border border-gray-950 text-black font-semibold rounded "
                    >
                      Previous
                    </button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button
                          type="submit"
                          className="px-4 py-1 bg-foreground text-white rounded"
                        >
                          Submit
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>OPT Verification</AlertDialogTitle>
                          <AlertDialogDescription>
                            You're at the final step. Enter the OTP sent to your
                            mail <b>{email}</b> to complete the registration.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full px-3 py-1 border rounded"
                        />
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleOtpVerification}>
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </>
              )}
            </form>{' '}
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link to="/passangerSignIn" className="underline">
                Sign In
              </Link>
            </div>
          </CardContent>
        </div>
        <div className="">
          <img src={image} className="h-[49dvh]" />
        </div>
      </div>
    </div>
  )
}
