import React,{ useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { send, sendHover } from '../../assets';
import './InstaHandle.css'


const Insta = () => {  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'serviceID', // paste your ServiceID here (you'll get one when your service is created).
        'templateID', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'ERA IITK', // put your name here.
          from_email: form.email,
          to_email: 'eraiitk@gmail.com', //put your email here.
          message: form.message,
        },
        'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <>
    <div className='widget-hider1'></div>
    <div className='widget-hider2'></div>

    <div
        
      className="-mt-[0rem] xl:flex-col flex-col-reverse 
      flex gap-10 overflow-hidden">
        <div className="elfsight-app-bcdddf16-aa00-448f-8745-fb6762e5b41d"></div>
      
    </div>
    </>
  );
};

export default SectionWrapper(Insta, 'insta');
