import React, { useState } from "react";
import Swal from "sweetalert2";
import image from "../../assets/images/Hero.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

export default function PassangerSignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idCard, setIdCard] = useState(null);
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [step, setStep] = useState(1);
  const [emailError, setEmailError] = useState(false);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        icon: "error",
        title: "oops",
        text: "Enter all the details",
        timer: "2000",
      });
    } else if (!email.includes("@skcet.ac.in")) {
      setEmailError(true);
      Swal.fire({
        icon: "error",
        title: "oops",
        text: "Enter valid email",
        timer: "2000",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Data received successfully",
        timer: "2000",
      });
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Id Card:", idCard);
      console.log(department);
      console.log(year);
    }
  };

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
                        emailError ? "border-red-500" : ""
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
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="CSE">
                            &quot;Computer Science and Engineering&quot;
                          </SelectItem>
                          <SelectItem value="CSD">
                            &quot;Computer Science and Design&quot;
                          </SelectItem>
                          <SelectItem value="CSE_CYBER">
                            &quot;Computer Science and Engineering (Cyber
                            Security)&quot;
                          </SelectItem>
                          <SelectItem value="IT">
                            &quot;Information Technology&quot;
                          </SelectItem>
                          <SelectItem value="AI_DS">
                            &quot;Artificial Intelligence and Data Science&quot;
                          </SelectItem>
                          <SelectItem value="CSBS">
                            &quot;Computer Science and Business Systems&quot;
                          </SelectItem>
                          <SelectItem value="ECE">
                            &quot;Electronics and Communication
                            Engineering&quot;
                          </SelectItem>
                          <SelectItem value="EEE">
                            &quot;Electrical and Electronics Engineering&quot;
                          </SelectItem>
                          <SelectItem value="MECH">
                            &quot;Mechanical Engineering&quot;
                          </SelectItem>
                          <SelectItem value="MECHATRONICS">
                            &quot;Mechatronics Engineering&quot;
                          </SelectItem>
                          <SelectItem value="CIVIL">
                            &quot;Civil Engineering&quot;
                          </SelectItem>

                          <SelectItem value="ME_AE">
                            &quot;M.E. Applied Electronics&quot;
                          </SelectItem>
                          <SelectItem value="ME_CSE">
                            &quot;M.E. Computer Science and Engineering&quot;
                          </SelectItem>
                          <SelectItem value="ME_ED">
                            &quot;M.E. Engineering Design&quot;
                          </SelectItem>
                          <SelectItem value="MTECH_CSE">
                            &quot;M.Tech. Computer Science and Engineering&quot;
                          </SelectItem>
                          <SelectItem value="MBA">
                            &quot;Master of Business Administration&quot;
                          </SelectItem>

                          <SelectItem value="INTEGRATED_MTECH">
                            &quot;Integrated M.Tech.&quot;
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
                          <SelectItem value="I">I Year</SelectItem>
                          <SelectItem value="II">II Year</SelectItem>
                          <SelectItem value="III">III Year</SelectItem>
                          <SelectItem value="IV">IV Year</SelectItem>
                          <SelectItem value="V">V Year</SelectItem>
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
                    <button
                      type="submit"
                      className="px-4 py-1 bg-foreground text-white rounded"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>{" "}
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
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
  );
}
