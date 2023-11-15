import {useState} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({submit, name, namePlaceholder, message, messagePlaceholder, emailPlaceholder}:any) => {
  const [form, setForm] = useState({name: "", email: "", message: ""});
  const [onSubmit, setOnSubmit] = useState(false);


  const handleChange = (event: any) => {
    const {name, value} = event.target;
    setForm((prevForm) => ({...prevForm, [name]: value}));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setOnSubmit(true)
    emailjs.send(
      "service_q83xcep",
      "template_0ajjj6d",
      {
        from_name: form.name,
        to_name: "Rodrigo",
        message: form.message,
        reply_to: form.email,
      },
      "CD4_HmmspjiSuWml6"
    ).then(() => {
      setForm({name: "", email: "", message: ""})
    }).finally(() => setOnSubmit(false));
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-[100%] lg:w-[50%] gap-10'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="name" className='font-semibold text-xl'>{name}:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required minLength={3} className='rounded-xl h-[3rem] w-[100%] lg:w-[75%] pl-[1rem] bg-button' placeholder={namePlaceholder} />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="email" className='font-semibold text-xl'>Email:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className='rounded-xl h-[3rem] w-[100%] lg:w-[75%] ps-[1rem] bg-button' placeholder={emailPlaceholder} />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="message" className='font-semibold text-xl'>{message}:</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} required minLength={3} className='rounded-2xl h-[9rem] w-[100%] lg:w-[75%] px-[1rem] py-[1rem] bg-button border-solid' placeholder={messagePlaceholder} />
      </div>
      <div className='flex justify-center  w-[100%] lg:w-[75%]'>
        <button type="submit" disabled={!!onSubmit} className='w-[10rem] h-[3rem] rounded-full text-xl font-semibold bt-submit disabled:opacity-75 hover:opacity-75'>{submit}</button>
      </div>
    </form>
  );
};

