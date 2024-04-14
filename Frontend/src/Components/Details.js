import './Details.css';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field,useFormik} from 'formik';
import React, { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaUser,FaHouseUser,FaPhoneAlt, FaEnvelope,FaBars,FaBriefcase,FaMouse,FaDownload} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import {
    Flex,
    Container,
    Box,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
	
const Details=(props)=> {
  let navigate=useNavigate();
  useEffect(()=>{
  if( !localStorage.getItem('token')){
   navigate("/login");
  }
  },[])
const {showAlert}=props;

  const [firstname, setFirstname]=useState("");
  const [middlename, setMiddlename] = useState("");
	const [lastname, setLastname] = useState("");
  const [image, setImage] = useState();
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [summary, setSummary] = useState("");
  
  const changeAddress= (event) => {
      setAddress(event.target.value);
  };

  const changeImage= (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));

}


  const changeEmail= (event) => {
    setEmail(event.target.value);
};

const changePhoneno = (event) => {
  setPhoneno(event.target.value);
};

const changeDesignation = (event) => {
  setDesignation(event.target.value);
};
const changeSummary = (event) => {
  setSummary(event.target.value);
};


	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'/', {
			method: "post",
			body: JSON.stringify({ firstname, middlename, lastname,image }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setFirstname("");
			setMiddlename("");
      setLastname("");
      setImage("");
		}
	}
  const [values, setValues] = useState(
    {
      firstname: "",
      middlename: "",
      lastname: "",
      designation: "",
      address: "",
      email: "",
      phoneno: "",
      summary: "",
    })

 const [fields, setFields] = useState([{
  id: 1,
  title: ""
}])


const handleChangeInput = (i, e) => {
  console.log(e.target.value);
  const values = [...fields]
  values[i][e.target.name] = e.target.value
  setFields(values)

}


const handleAdd = (id) => {
  setFields([...fields, { id: id + 2, title:" "}])
}

const handleSubtract = (i) => {
  const values = [...fields]
  values.splice(i, 1)
  setFields([...values])
}

const formValidation=(fields)=>{
  const data = [...fields]
  let valid = true

  for (let index = 0; index < data.length; index++) {
    // const element = data[index];
    if(data[index].title === "") {
      data[index].titleCheck = "Title required!"
      valid = false
    }
    else{
      data[index].titleCheck = ""
      valid = true
    } 
  }
  setFields(data)
  return valid
}

const [fields1, setFields1] = useState([{
  id: 1,
  Title: "",
  Company: "",
  Location:"",
  StartDate:"",
  EndDate:"",
  Description: "",
}])

const handleChangeInput1 = (i, e) => {
  console.log(e.target.value);
  const values = [...fields1]
  values[i][e.target.name] = e.target.value
  setFields1(values)
}


const handleAdd1 = (id) => {
  setFields1([...fields1, { id: id + 2,Title: "",
  Company: "",
  Location:"",
  StartDate:"",
  EndDate:"",
  Description: "" }])
}

const handleSubtract1 = (i) => {
  const values = [...fields1]
  values.splice(i, 1)
  setFields1([...values])
}

const [fields2, setFields2] = useState([{
  id: 1,
  School: "",
  Degree: "",
  City:"",
  StartDate:"",
  EndDate:""
}])

const handleChangeInput2 = (i, e) => {
  console.log(e.target.value);
  const values = [...fields2]
  values[i][e.target.name] = e.target.value
  setFields2(values)
}


const handleAdd2 = (id) => {
  setFields2([...fields2, { id: id + 2,
    School: "",
    Degree: "",
    City:"",
    StartDate:"",
    EndDate:""
 }])
}

const handleSubtract2 = (i) => {
  const values = [...fields2]
  values.splice(i, 1)
  setFields2([...values])
}
const [fields3, setFields3] = useState([{
  id: 1,
  ProjectName: "",
  ProjectLink:"",
  description:"",
}])

const handleChangeInput3 = (i, e) => {
  console.log(e.target.value);
  const values = [...fields3]
  values[i][e.target.name] = e.target.value
  setFields3(values)
}


const handleAdd3 = (id) => {
  setFields3([...fields3, { id: id + 2,
    ProjectName: "",
    ProjectLink:"",
    Description: []
 }])
}

const handleSubtract3 = (i) => {
  const values = [...fields3]
  values.splice(i, 1)
  setFields3([...values])
}
const [fields4, setFields4] = useState([{
  id: 1,
  Skill: ""
}])

const handleChangeInput4 = (i, e) => {
  console.log(e.target.value);
  const values = [...fields4]
  values[i][e.target.name] = e.target.value
  setFields4(values)
}


const handleAdd4 = (id) => {
  setFields4([...fields4, { id: id + 2,
    Skill: ""
 }])
}

const handleSubtract4 = (i) => {
  const values = [...fields4]
  values.splice(i, 1)
  setFields4([...values])
}
const printResume=()=>{
  window.print();
}

  return (
    <div className='body'>
    <Box bg= "linear-gradient(68deg, rgba(32,33,36,1) 1%, rgba(99,71,139,1) 7%, rgba(156,118,235,1) 92%, rgba(28,28,28,1) 99%)">
    <Container className="abc" mt="90px" shadow="0 5px 10px rgba(0,0,0,0.15)" borderRadius="7px" W='1500px' maxH='15000px' bg='#fff' center>
    <Flex>
    <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color="#fff" >
      PERSONAL {}
    </Box>
    </Flex>
      <div>
        
        <Formik
                    >
        <form action="">
          <Box ml="1rem" mr="1rem" className="row">
            <Box mt="1rem" className="col-lg-4">
            
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input className="form-control firstname" name="firstname" onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Enter your username"  />
              
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Middle Name</label>
              <Field className="form-control middlename" name="middlename" type="text" onChange={(e) => setMiddlename(e.target.value)}/>
            </Box>
            <Box  mt="1rem" className="col-lg-4">
            <label className="form-label">Last Name</label>
              <Field type="text" className="form-control lastname" name="lastname" onChange={(e) => setLastname(e.target.value)}/> 
            </Box>
          
        
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Your Image</label>
              <Field className="form-control image" name = "image" type = "file" onChange={changeImage} accept = "image/*" />
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Designation</label>
              <Field className="form-control designation" name="designation" value={designation} onChange={changeDesignation} type="text" />
            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Address</label>
              <Field className="form-control address" name="address" value={address} onChange={changeAddress}  type="text"/>
            </Box>
      
          
            <Box mt="1rem" className="col-lg-4">
              <label for="email" className="form-label">Email</label>
              <Field className="form-control email" name="email" value={email} onChange={changeEmail} type="text"/>

            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Phone Number</label>
              <Field className="form-control phoneno" name="phoneno" value={phoneno} onChange={changePhoneno} type="number"  />

            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Summary</label>
              <Field className="form-control summary" name="summary" value={summary} onChange={changeSummary} type="text"/>
            </Box>
          </Box>
        </form>
        </Formik>
        </div>

        <Flex>
    <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="50px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
      ACHIEVEMENTS
    </Box>
    </Flex>
      <div>
        
        <Formik>
        <Form>
        <div className="invite-member">
          {
            fields.map((field, i) => (
            <Box ml='1rem' mr='1rem' className="row" key={field.id}>
              <Box mt="1rem" className="col-lg-12">
              <label className="form-label">Title</label>
              <Field className="form-control achieve_title" name="title"  value={field.title}
                        onChange={e => handleChangeInput(i, e)} type="text" />
                <div className="text-error">{}</div>
            </Box>
            
            {fields.length>1 &&(
           <Button disabled={field.id === 1} onClick={() => handleSubtract(i)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
            )}
          </Box>
          ))}
        <Button onClick={() => handleAdd()} className="add-btn" type = "button" variant="primary" size="sm" value = "Add" >+ </Button>
      
        
        </div>
                
        </Form>
        </Formik>
        </div>

      <Flex>
      <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
        EXPERIENCE
      </Box>
      </Flex>
      <div>
        
        <Formik>
        <Form>
        <div className="invite-member1">
        {
          fields1.map((field1, i) => (
            <Box ml="1rem" mr="1rem" className="row" key1={field1.id}>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Title</label>
              <Field className="form-control exp_title" name="Title" type="text" value={field1.Title}
                        onChange={e => handleChangeInput1(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Company/Organization</label>
              <Field className="form-control exp_organization" name="Company" type="text" value={field1.Company}
                        onChange={e => handleChangeInput1(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Location</label>
              <Field className="form-control exp_location" name="Location" type="text" value={field1.Location}
                        onChange={e => handleChangeInput1(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Start Date</label>
              <Field className="form-control exp_start_date" name="StartDate" type="date" value={field1.StartDate}
                        onChange={e => handleChangeInput1(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">End Date</label>
              <Field className="form-control exp_end_date" name="EndDate" type="date" value={field1.EndDate}
                        onChange={e => handleChangeInput1(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Description</label>
              <Field className="form-control exp_description" name="Description" type="text" value={field1.Description}
                        onChange={e => handleChangeInput1(i, e)}/>
            </Box>
            {fields1.length>1 &&(
           <Button disabled={field1.id === 1} onClick={() => handleSubtract1(i)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
            </Box>
          ))
          }
          </div>
          <Button onClick={() => handleAdd1()} className="add-btn" type = "button" variant="primary" size="sm" data-repeater-create value = "Add">+</Button>
        </Form>
        </Formik>
        </div>

        
        <Flex>
      <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
        EDUCATION
      </Box>
      </Flex>
      <div>
        
        <Formik>
        <Form>
        <div className="invite-member2">
        {
          fields2.map((field2, i) => (
            <Box ml="1rem" mr="1rem" className="row" key2={field2.id}>
          <Box mt="1rem" className="col-lg-4">
              <label className="form-label">School</label>
              <Field className="form-control edu_school" name="School" type="text" value={field2.School}
                        onChange={e => handleChangeInput2(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Degree</label>
              <Field className="form-control edu_degree" name="Degree" type="text" value={field2.Degree}
                        onChange={e => handleChangeInput2(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">City</label>
              <Field className="form-control edu_city" name="City" type="text" value={field2.City}
                        onChange={e => handleChangeInput2(i, e)}/>
            </Box>
          <Box mt="1rem" className="col-lg-6">
              <label className="form-label">Start Date</label>
              <Field className="form-control edu_start_date" name="StartDate" type="date" value={field2.StartDate}
                        onChange={e => handleChangeInput2(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-6">
              <label className="form-label">End Date</label>
              <Field className="form-control edu_end_date" name="EndDate" type="date" value={field2.EndDate}
                        onChange={e => handleChangeInput2(i, e)}/>
            </Box>
            
            {fields2.length>1 &&(
           <Button disabled={field2.id === 1} onClick={() => handleSubtract2(i)}  variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
          </Box>
          ))
        }
        </div>
          <Button onClick={() => handleAdd2()} className="add-btn" type = "button" variant="primary" size="sm" value = "Add">+</Button>
        </Form>
        </Formik>
        </div>

        <Flex>
    <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
      PROJECT
    </Box>
    </Flex>
      <div>
        
        <Formik>
        <Form>
        <div className="invite-member3">
        {
          fields3.map((field3, i) => (
            <Box ml="1rem" mr="1rem" className="row"  key3={field3.id}>
        <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Project Name</label>
              <Field className="form-control proj_title" name="ProjectName" type="text" value={field3.ProjectName}
                        onChange={e => handleChangeInput3(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Project Link</label>
              <Field className="form-control proj_link" name="ProjectLink" type="url" value={field3.ProjectLink}
                        onChange={e => handleChangeInput3(i, e)}/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Description</label>
              <Field className="form-control proj_description" name="ProjectDescription" type="text" value={field3.ProjectDescription}
                        onChange={e => handleChangeInput3(i, e)}/>
              </Box>
              {fields3.length>1 &&(
           <Button disabled={field3.id === 1} onClick={() => handleSubtract3(i)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
          </Box>
          ))
        }
        </div>
          <Button onClick={() => handleAdd3()} className="add-btn" type = "button" variant="primary" size="sm" value = "Add">+</Button>
        </Form>
        </Formik>
        </div>

        <Flex>
    <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
      SKILLS
    </Box>
    </Flex>
      <div>
        <Formik>
        <Form>
        <div className="invite-member4">
        {
          fields4.map((field4, i) => (
            <Box ml="1rem" mr="1rem" className="row"  key4={field4.id}>
            <Box mt="1rem" className="col-lg-12">
              <label className="form-label">Skill</label>
              <Field className="form-control skill" name="Skill" type="text" value={field4.Skill}
                        onChange={e => handleChangeInput4(i, e)}/>
            </Box>
            {fields4.length>1 &&(
           <Button disabled={field4.id === 1} onClick={() => handleSubtract4(i)}   variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
          </Box>
          ))
        }
        </div>
        <Button onClick={() => handleAdd4()} className="add-btn" type = "button" variant="primary" size="sm" value = "Add">+</Button>
         
        </Form>
        </Formik> 
        </div> 
      

        <Box id = "preview-sc" className = "print_area">
        <Container shadow="0 5px 10px rgba(0,0,0,0.15)" borderRadius="7px" W='1500px' maxH='15000px' bg='#fff' center>
        <Box className = "preview-cnt" borderRadius='5px' display='grid' gridTemplateColumns= '32% auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px' overflow= 'hidden'>
          <Box className = "preview-cnt-l bg-green text-white" p='3rem 3rem 3rem 1.5rem' bgColor='#40679E'>
              <Box className = "preview-blk" mb='2rem'>
                  <Box className = "preview-image" w='120px' h='120px' borderRadius="50%" overflow='hidden' ml="auto" mr="auto" mt="1rem">
                      <img  mt="5rem" alt = "" src={image} id = "image_dsp"/> 
                  </Box> 
              </Box>

                <Box className = "preview-blk" p='1rem 0' mb="1rem">
                    <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
                      <h3 className="Personal">Personal</h3>
                    </Box>
                    <Box  className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon3'><FaUser /></span>Name</Box>
                    <div className = "preview-blk-list">
                    <Box className = "preview-item" fontSize='0.8rem' m='1rem 2.7rem 1rem 1.7rem' opacity='0.95'>
                    
                    <Box  className = "preview-item-val fw-6 green" pr='7px' id = "fullname1_dsp">{firstname +" "+ middlename + " "+ lastname}</Box>
                  
                    </Box>
                    <Box className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon3'><FaHouseUser /></span>Address</Box>
                    <Box className = "preview-item" fontSize='0.8rem' m='1rem 2.7rem 1rem 1.7rem' opacity='0.95'>
                      <Box className = "preview-item-val green" id = "address_dsp" pr='7px'>{address}</Box>
                    </Box>
                    <Box className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon3'><FaPhoneAlt /></span>Phone number</Box>
                    <Box className = "preview-item" fontSize='0.8rem' m='1rem 2.7rem 1rem 1.7rem' opacity='0.95'>
                          <Box className = "preview-item-val green" pr='7px' id = "phoneno_dsp">{phoneno}</Box>
                      </Box>
                      <Box className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon3'><FaEnvelope /></span>Email</Box>
                      <Box className = "preview-item email" fontSize='0.6rem' m='1rem 2.7rem 1rem 1.7rem' opacity='0.95'>
                          <Box className = "preview-item-val" id = "email_dsp">{email}</Box>
                      </Box>
                      
                      <Box className = "preview-item" fontSize='0.8rem' m='1rem 2.7rem 1rem 1.7rem' opacity='0.95'>
                          <Box className = "preview-item-val green" pr='7px' id = "summary_dsp">{summary}</Box>
                      </Box>
                  </div>
              </Box>
              </Box>

              <Box className = "preview-cnt-r bg-white" p= '5rem 3rem 3rem 2rem'>
            <Box className = "preview-blk" mb='1rem' ml='1.7rem'>

            <Box className = "preview-item preview-item-name" fontSize='2.4rem' fontWeight='600' position='relative' m='0.8rem 0 ' opacity='0.95'>
              <h2><Box className = "preview-item-val fw-6 " id = "fullname_dsp">{firstname +" "+ middlename + " "+ lastname}</Box></h2>
          </Box>
          <Box className = "preview-item" fontSize='0.8rem' m='1rem 2.7rem 1rem 0' opacity='0.95' mt="2rem" mb="2rem" >
              <h6 className = "preview-item-val fw-6 ls-1" id = "designation_dsp">{designation}</h6>
          </Box>
          <hr/>
        </Box>
        
        <Box className = "preview-blk" mb='1rem' ml="1.7rem" mt="3rem">
      <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
        <h3 className="Personal1"><span className='icon3'> <FaBriefcase /></span>Work Experience</h3>
      </Box>
        {fields1.map(field1 =>
        <div>
        <table>
          <tr>
            <td>
            <Box mt="1rem" fontSize="15px" className = "experiences-items preview-blk-list" id = "experiences_dsp">{"("+field1.StartDate + ")"+" to " + "("+field1.EndDate+")"}</Box>
            </td>
            <td>
            <Box ml="1rem" mt="1rem" fontSize="larger" letterSpacing="0rem" fontWeight="bold">{field1.Title}</Box>
            </td>
          </tr>
        </table>
        <Box ml="13.3rem" fontSize="medium" letterSpacing="0rem" fontWeight="medium" color="DodgerBlue">{field1.Company+", "+field1.Location}</Box>
        <Box ml="13.3rem" fontSize="medium" letterSpacing="0rem" fontWeight="medium" >{field1.Description}</Box>
         </div>
        )}
      </Box>

      <Box className = "preview-blk" mb='1rem' ml="1.7rem" mt="3rem">
        <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
           <h3 className="Personal1"><span className='icon3'> <HiAcademicCap /></span>Education and Qualifications</h3>
      </Box>
        {fields2.map(field2 =>
        <div>
        <table>
          <tr>
            <td>
            <Box mt="1rem" fontSize="15px" className = "experiences-items preview-blk-list" id = "experiences_dsp">{"("+field2.StartDate + ")"+" to " + "("+field2.EndDate+")"}</Box>
            </td>
            <td>
            <Box mt="1rem" ml="1rem" fontSize="larger" letterSpacing="0rem" fontWeight="bold">{field2.Degree}</Box>
            </td>
          </tr>
        </table>
        <Box ml="13.3rem" fontSize="medium" letterSpacing="0rem" fontWeight="medium" color="DodgerBlue">{field2.School+", "+field2.City}</Box>
       </div>
        )}
      </Box>


      <Box className = "preview-blk" mb='1rem' ml="1.7rem" mt="3rem">
      <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
        <h3 className="Personal1"><span className='icon3'> <FaBars /></span>Projects</h3>
      </Box>
      {fields3.map(field3 =>
      <div>
        <Box fontSize="medium" mt="3rem" letterSpacing="0rem" fontWeight="bold" className = "projects-items preview-blk-list" id = "projects_dsp">{field3.ProjectName}</Box>
        <Box fontSize="medium" className = "projects-items preview-blk-list" id = "projects_dsp" color="DodgerBlue">{field3.ProjectLink}</Box>
        <Box fontSize="medium" ml="1rem" className = "projects-items preview-blk-list" id = "projects_dsp">{field3.ProjectDescription}</Box>
        </div>
        )}
      </Box>

     <Box className = "preview-blk" mb='1rem' ml="1.7rem" mt="3rem">
      <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
        <h3 className="Personal1"><span className='icon3'> <FaMouse /></span>Skills</h3>
      </Box>
      {fields4.map(field4 =>
      <Box mt="1rem" classame = "skills-items preview-blk-list" id = "skills_dsp">{field4.Skill}</Box>
      )}
    </Box>
    
        <Box className = "preview-blk" mb='1rem' ml="1.7rem" mt="3rem">
          <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
          <h3 className="Personal1"><span className='icon3'> <FaBars /></span>Achievements</h3>
          </Box>
          {fields.map(field =>
          <ul>
          <li>
          <Box mt="1rem" className = "achievements-items preview-blk-list" id = "achievements_dsp">{field.title}</Box>
          </li>
          </ul>
        )}
        
        </Box>
    </Box> 
          
      </Box>
      </Container>
        </Box> 
        <table>
        <tr>
          <td>
          <button type = "button" className = "download-btn" onClick={printResume}><span className='icon3'> <FaDownload /> Export</span></button>
          </td>
          </tr>
          </table>
          </Container>
 </Box>
 </div>
  );

}


export default Details;