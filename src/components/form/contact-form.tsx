'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';
import Loader from '../loader';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(async (data:FormData) => {
    setIsLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("access_key", "594b1d84-c2bf-40b2-9762-15c47bd36275");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const responseData = await response.json();

    setIsLoading(false);

    if (responseData.success) {
      setResult("Success! Your message has been sent.");
      reset();
    } else {
      setResult("Error: Something went wrong. Please try again.");
    }

    // Hide message after 5 seconds
    setTimeout(() => {
      setResult("");
    }, 5000);
  });
  return (
    <>
      {result && (
        <div className={`alert mb-4 p-3 rounded ${result.includes("Success") ? "bg-green-100 border border-green-400 text-green-700" : "bg-red-100 border border-red-400 text-red-700"}`}>
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
          <input id='email' {...register("email")} type="email" placeholder="Your@email.com" />
          <ErrorMsg msg={errors.email?.message!} />
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