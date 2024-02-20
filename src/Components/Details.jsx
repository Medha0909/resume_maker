import React, {useState} from 'react';
import './Details.css';
import Validation from './Validation';
import {v4 as uuidv4} from "uuid";
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field,useFormik} from 'formik';
import {
  Flex,
  Container,
  Box,
  FormControl
} from '@chakra-ui/react'

	
function Details() {
  const [firstname, setFirstname]=useState("");
  const handleForm =(event) =>{
    console.log(event.target.value);
  };

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

    const [errors,setErrors]=useState({})

  function handleInputChange(event){
    const newObj= {...values,[event.target.name]:event.target.value}
    setValues(newObj)
    event.preventDefault();
    setErrors(Validation(values));
  }

  const [inviteMembers, setInviteMembers] = React.useState([
    {
      Title: "",
      Description: "",
      id: uuidv4(),
    },
  ])

  const addMemberRow = () => {
		//Todo generate random id

		let _inviteMembers = [...inviteMembers]
		_inviteMembers.push({
			Title: "",
			Description: "",
			id: uuidv4(),
		})
		setInviteMembers(_inviteMembers)
	}
  
  const removeMemberRow = (id) => {
		//Todo generate random id

		let _inviteMembers = [...inviteMembers]
		_inviteMembers = _inviteMembers.filter((member) => member.id !== id)
		setInviteMembers(_inviteMembers)
	}

  const [inviteMembers1, setInviteMembers1] = React.useState([
    {
      Title: "",
      Company: "",
      Location:"",
      StartDate:"",
      EndDate:"",
      Description: "",
      id: uuidv4(),
    },
  ])
  const addMemberRow1 = () => {
		//Todo generate random id

		let _inviteMembers1 = [...inviteMembers1]
		_inviteMembers1.push({
			Title: "",
      Company: "",
      Location:"",
      StartDate:"",
      EndDate:"",
      Description: "",
      id: uuidv4(),
		})
		setInviteMembers1(_inviteMembers1)
	}

  const removeMemberRow1 = (id) => {
		//Todo generate random id

		let _inviteMembers1 = [...inviteMembers1]
		_inviteMembers1 = _inviteMembers1.filter((member) => member.id !== id)
		setInviteMembers1(_inviteMembers1)
	}

  const [inviteMembers2, setInviteMembers2] = React.useState([
    {
      School: "",
      Degree: "",
      City:"",
      StartDate:"",
      EndDate:"",
      Description: "",
      id: uuidv4(),
    },
  ])
  const addMemberRow2 = () => {
		//Todo generate random id

		let _inviteMembers2 = [...inviteMembers2]
		_inviteMembers2.push({
			School: "",
      Degree: "",
      City:"",
      StartDate:"",
      EndDate:"",
      Description: "",
      id: uuidv4(),
		})
		setInviteMembers2(_inviteMembers2)
	}

  const removeMemberRow2 = (id) => {
		//Todo generate random id

		let _inviteMembers2 = [...inviteMembers2]
		_inviteMembers2 = _inviteMembers2.filter((member) => member.id !== id)
		setInviteMembers2(_inviteMembers2)
	}

  const [inviteMembers3, setInviteMembers3] = React.useState([
    {
      ProjectName: "",
      ProjectLink:"",
      Description: "",
      id: uuidv4(),
    },
  ])

  const addMemberRow3 = () => {
		//Todo generate random id

		let _inviteMembers3 = [...inviteMembers3]
		_inviteMembers3.push({
			ProjectName: "",
      ProjectLink:"",
			Description: "",
			id: uuidv4(),
		})
		setInviteMembers3(_inviteMembers3)
	}
  
  const removeMemberRow3 = (id) => {
		//Todo generate random id

		let _inviteMembers3 = [...inviteMembers3]
		_inviteMembers3 = _inviteMembers3.filter((member) => member.id !== id)
		setInviteMembers3(_inviteMembers3)
	}

  const [inviteMembers4, setInviteMembers4] = React.useState([
    {
      Skill: "",
      id: uuidv4(),
    },
  ])

  const addMemberRow4 = () => {
		//Todo generate random id

		let _inviteMembers4 = [...inviteMembers4]
		_inviteMembers4.push({
			Skill: "",
			id: uuidv4(),
		})
		setInviteMembers4(_inviteMembers4)
	}
  
  const removeMemberRow4 = (id) => {
		//Todo generate random id

		let _inviteMembers4 = [...inviteMembers4]
		_inviteMembers4 = _inviteMembers4.filter((member) => member.id !== id)
		setInviteMembers4(_inviteMembers4)
	}

  return (
    <Container shadow="0 5px 10px rgba(0,0,0,0.15)" borderRadius="7px" W='1500px' maxH='15000px' bg='#fff' center>
    <Flex>
    <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
      PERSONAL
    </Box>
    </Flex>
      <div className="container container-fluid">
        
        <Formik>
        <form action="">
          <Box ml="1rem" mr="1rem" className="row">
            <Box mt="1rem" className="col-lg-4">
            
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input className="form-control firstname" name="firstname" value={firstname}  onChange={handleForm} type="text" placeholder="Enter your username" />
              {errors.firstname && <p style={{color: "red"}}>{errors.firstname}</p>}
              
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Middle Name</label>
              <Field className="form-control middlename" name="middlename" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Last Name</label>
              <Field className="form-control lastname" name="lastname" type="text"/>
            </Box>
          </Box>
          <Box ml="1rem" mr="1rem" className="row">
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Your Image</label>
              <Field className="form-control image" name = "image" type = "file" accept = "image/*"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Designation</label>
              <Field className="form-control designation" name="designation" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Address</label>
              <Field className="form-control address" name="address" type="text"/>
            </Box>
          </Box>
          <Box ml="1rem" mr="1rem" className="row">
            <Box mt="1rem" className="col-lg-4">
              <label for="email" className="form-label">Email</label>
              <Field className="form-control email" name="email" onKeyUp={handleInputChange} type="text"/>
              {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Phone Number</label>
              <Field className="form-control phoneno" name="phoneno" type="number"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Summary</label>
              <Field className="form-control summary" name="summary" type="text"/>
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
      <div className="container container-fluid">
        
        <Formik>
        <Form>
        <div className="invite-member">
        {
          inviteMembers.map( (member) => (
            <Box ml='1px' mr='1px' className="row" key={member.id}>
              <Box mt="1rem" className="col-lg-6">
              <label className="form-label">Title</label>
              <Field className="form-control achieve_title" name="achieve_title" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-6">
              <label className="form-label">Description</label>
              <Field className="form-control achieve_description" name="achieve_description" type="text"/>
            </Box>
           
           {inviteMembers.length>1 &&(
           <Button onClick={()=>removeMemberRow(member.id)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
          
          </Box>
          ))
        }
        <Button onClick={addMemberRow} className="add-btn" type = "button" variant="primary" size="sm" value = "Add" >+ </Button>
        </div>
                
        </Form>
        </Formik>
        </div>

      <Flex>
      <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
        EXPERIENCE
      </Box>
      </Flex>
      <div className="container container-fluid">
        
        <Formik>
        <Form>
        <div className="invite-member1">
        {
          inviteMembers1.map( (member) => (
            <Box ml="1rem" mr="1rem" className="row" key1={member.id}>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Title</label>
              <Field className="form-control exp_title" name="exp_title" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Company/Organization</label>
              <Field className="form-control exp_organization" name="exp_organization" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Location</label>
              <Field className="form-control exp_location" name="exp_location" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Start Date</label>
              <Field className="form-control exp_start_date" name="exp_start_date" type="date"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">End Date</label>
              <Field className="form-control exp_end_date" name="exp_end_date" type="date"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Description</label>
              <Field className="form-control exp_description" name="exp_description" type="text"/>
            </Box>
            {inviteMembers1.length>1 &&(
           <Button onClick={()=>removeMemberRow1(member.id)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
            </Box>
          ))
          }
          </div>
          <Button onClick={addMemberRow1} className="add-btn" type = "button" variant="primary" size="sm" data-repeater-create value = "Add">+</Button>
        </Form>
        </Formik>
        </div>

        
        <Flex>
      <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
        EDUCATION
      </Box>
      </Flex>
      <div className="container container-fluid">
        
        <Formik>
        <Form>
        <div className="invite-member2">
        {
          inviteMembers2.map( (member) => (
            <Box ml="1rem" mr="1rem" className="row" key2={member.id}>
          <Box mt="1rem" className="col-lg-4">
              <label className="form-label">School</label>
              <Field className="form-control edu_school" name="edu_school" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Degree</label>
              <Field className="form-control edu_degree" name="edu_degree" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">City</label>
              <Field className="form-control edu_city" name="edu_city" type="text"/>
            </Box>
          <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Start Date</label>
              <Field className="form-control edu_start_date" name="edu_start_date" type="date"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">End Date</label>
              <Field className="form-control edu_end_date" name="edu_end_date" type="date"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
            <label className="form-label">Description</label>
              <Field className="form-control edu_description" name="edu_description" type="text"/>
            </Box>
            {inviteMembers2.length>1 &&(
           <Button onClick={()=>removeMemberRow2(member.id)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
          </Box>
          ))
        }
        </div>
          <Button onClick={addMemberRow2} className="add-btn" type = "button" variant="primary" size="sm" value = "Add">+</Button>
        </Form>
        </Formik>
        </div>

        <Flex>
    <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
      PROJECT
    </Box>
    </Flex>
      <div className="container container-fluid">
        
        <Formik>
        <Form>
        <div className="invite-member3">
        {
          inviteMembers3.map( (member) => (
            <Box ml="1rem" mr="1rem" className="row"  key3={member.id}>
        <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Project Name</label>
              <Field className="form-control proj_title" name="proj_title" type="text"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Project Link</label>
              <Field className="form-control proj_link" name="proj_link" type="url"/>
            </Box>
            <Box mt="1rem" className="col-lg-4">
              <label className="form-label">Description</label>
              <Field className="form-control proj_description" name="proj_description" type="text"/>
              </Box>
            {inviteMembers3.length>1 &&(
           <Button onClick={()=>removeMemberRow3(member.id)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
          </Box>
          ))
        }
        </div>
          <Button onClick={addMemberRow3} className="add-btn" type = "button" variant="primary" size="sm" value = "Add">+</Button>
        </Form>
        </Formik>
        </div>

        <Flex>
    <Box bg='linear-gradient(152deg, rgba(182,89,189,1) 0%, rgba(119,61,201,1) 41%, rgba(62,36,212,1) 100%)' w='97%' mr="20px" ml="20px" mt="30px" mb="20px" p={4} borderRadius="7px" letterSpacing="1px" fontWeight="500" fontSize="20px" color='#fff'>
      SKILLS
    </Box>
    </Flex>
      <div className="container container-fluid">
        <Formik>
        <Form>
        <div className="invite-member4">
        {
          inviteMembers4.map( (member) => (
            <Box ml="1rem" mr="1rem" className="row"  key4={member.id}>
            <Box mt="1rem" className="col-lg-12">
              <label className="form-label">Skill</label>
              <Field className="form-control skill" name="skill" type="text"/>
            </Box>
            {inviteMembers4.length>1 &&(
           <Button onClick={()=>removeMemberRow4(member.id)} variant="danger" size="sm" type = "button" className = "remove-btn ">-</Button>
          )}
          </Box>
          ))
        }
        </div>
          <Button onClick={addMemberRow4} className="add-btn" type = "button" variant="primary" size="sm" value = "Add">+</Button>
        </Form>
        </Formik> 
        </div>

      </Container>
      
    

  );
}


export default Details;
