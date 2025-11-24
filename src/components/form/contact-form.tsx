'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';
import Loader from '../loader';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(async (data:FormData) => {
    setIsLoading(true);

    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', data);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);

    // Show success message
    setIsSubmitted(true);

    // Reset form
    reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  });
  return (
    <>
      {isSubmitted && (
        <div className="alert alert-success mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="cn-contactform-input mb-25">
          <label>Name</label>
          <input id='name' {...register("name")} type="text" placeholder="John Doe" />
          <ErrorMsg msg={errors.name?.message!} />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>Email</label>
          <input id='subject' {...register("subject")} type="text" placeholder="Your@email.com" />
          <ErrorMsg msg={errors.subject?.message!} />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>Message</label>
          <textarea id='message' {...register("message")} placeholder="Tell Us About Your Project"></textarea>
          <ErrorMsg msg={errors.message?.message!} />
        </div>
        <div className="cn-contactform-btn">
          <button
            className={`tp-btn-black-md rounded ${btnCls} w-100 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader size="sm" className="mr-2" />
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </>
  );
}