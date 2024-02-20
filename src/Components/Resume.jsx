import React from 'react';
import './resume.css';
import { FaUser,FaHouseUser,FaPhoneAlt, FaEnvelope,FaBars,FaBriefcase,FaMouse} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import {
    Flex,
    Container,
    Box,
    img,
    Section
  } from '@chakra-ui/react'
  
  function Resume () {
  
    return(
        <Box id = "preview-sc" className = "print_area">
        <Container shadow="0 5px 10px rgba(0,0,0,0.15)" borderRadius="7px" W='1500px' maxH='15000px' bg='#fff' center>
        <Box className = "preview-cnt" borderRadius='5px' display='grid' gridTemplateColumns= '32% auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px' overflow= 'hidden'>
          <Box className = "preview-cnt-l bg-green text-white" p='3rem 3rem 3rem 1.5rem' bgColor='black'>
              <Box className = "preview-blk" mb='1rem'>
                  <Box className = "preview-image" w='140px' h='140px' borderRadius="50%" overflow='hidden' ml="auto" mr="auto">
                      <img src = "" alt = "" id = "image_dsp"/> 
                  </Box> 
              </Box>

                <Box className = "preview-blk" p='1rem 0' mb="1rem">
                    <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
                      <h3 className="Personal">Personal</h3>
                    </Box>
                    <Box  className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon'><FaUser /></span>Name</Box>
                    <div className = "preview-blk-list">
                    <Box className = "preview-item" fontSize='0.8rem' m='2.5rem 3rem 2.5rem 3.4rem' opacity='0.95'>
                      <Box  className = "preview-item-val fw-6 green" pr='7px' id = "fullname1_dsp"> </Box>
                    </Box>
                    <Box className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon'><FaHouseUser /></span>Address</Box>
                    <Box className = "preview-item" fontSize='0.8rem' m='2.5rem 3rem 2.5rem 3.4rem' opacity='0.95'>
                      <Box className = "preview-item-val green" id = "address_dsp" pr='7px'></Box>
                    </Box>
                    <Box className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon'><FaPhoneAlt /></span>Phone number</Box>
                    <Box className = "preview-item" fontSize='0.8rem' m='2.5rem 3rem 2.5rem 3.4rem' opacity='0.95'>
                          <Box className = "preview-item-val green" pr='7px' id = "phoneno_dsp"></Box>
                      </Box>
                      <Box className="personalheading" letterSpacing='1px' fontWeight='bold' fontSize='small'><span className='icon'><FaEnvelope /></span>Email</Box>
                      <Box className = "preview-item email" fontSize='0.6rem' m='2.5rem 3rem 2.5rem 3.4rem' opacity='0.95'>
                          <Box className = "preview-item-val" id = "email_dsp"></Box>
                      </Box>
                      
                      <Box className = "preview-item" fontSize='0.8rem' m='2.5rem 3rem 2.5rem 3.4rem' opacity='0.95'>
                          <Box className = "preview-item-val green" pr='7px' id = "summary_dsp"></Box>
                      </Box>
                  </div>
              </Box>
              </Box>

              <Box className = "preview-cnt-r bg-white" p= '5rem 3rem 3rem 2rem'>
            <Box className = "preview-blk" mb='1rem'>

            <Box className = "preview-item preview-item-name" fontSize='2.4rem' fontWeight='600' position='relative' m='1.8rem 0' opacity='0.95'>
              <Box className = "preview-item-val fw-6 " id = "fullname_dsp"></Box>
          </Box>
          <Box className = "preview-item" borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' fontSize='0.8rem' m='2.5rem 3rem 2.5rem 3.4rem' opacity='0.95'>
              <span className = "preview-item-val text-uppercase fw-6 ls-1" id = "designation_dsp"></span>
          </Box>
        </Box>
        
        <Box className = "preview-blk" mb='1rem'>
          <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
          <h3 className="Personal1"><span className='icon'> <FaBars /></span>Achievements</h3>
          </Box>
          <Box className = "achievements-items preview-blk-list" id = "achievements_dsp"></Box>
        </Box>

      <Box className = "preview-blk" mb='1rem'>
        <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
           <h3 className="Personal1"><span className='icon'> <HiAcademicCap /></span>Education and Qualifications</h3>
      </Box>
      <div className = "educations-items preview-blk-list" id = "educations_dsp"></div>
      </Box>

      <Box className = "preview-blk" mb='1rem'>
      <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
        <h3 className="Personal1"><span className='icon'> <FaBriefcase /></span>Work Experience</h3>
      </Box>
        <div className = "experiences-items preview-blk-list" id = "experiences_dsp"></div>
      </Box>

      <Box className = "preview-blk" mb='1rem'>
      <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
        <h3 className="Personal1"><span className='icon'> <FaBars /></span>Projects</h3>
      </Box>
        <div className = "projects-items preview-blk-list" id = "projects_dsp"></div>
      </Box>

     <Box className = "preview-blk" mb='1rem'>
      <Box className = "preview-blk-title" textTransform='uppercase' pb='0.5rem' borderBottom=' 0.5px solid rgba(0, 0, 0, 0.08)' mb="1rem">
        <h3 className="Personal1"><span className='icon'> <FaMouse /></span>Skills</h3>
      </Box>
      <div classame = "skills-items preview-blk-list" id = "skills_dsp"></div>
    </Box>
    </Box> 
          
      </Box>

      </Container>
        </Box>
    );
}


export default Resume;