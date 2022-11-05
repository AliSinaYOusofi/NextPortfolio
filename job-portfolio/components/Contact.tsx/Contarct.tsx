import React from "react";
import { NextPage } from "next";
import axios from "axios";
import { GrToast } from "react-icons/gr";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Contact : NextPage = () => {

    // states
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [description, setDescription] = React.useState("");


    // an sleep(ms)

    const sleepFor = () : Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    const handleSendEmail = async () : Promise<void> => {
        const response = await axios.put("/api/email", {
            email,
            subject, 
            description
        });
        
        response.data.message === 'done' ? toast.promise(sleepFor, {
            // pending: <h1>&#128530; sending email ... </h1>,
            // success: <h1>&#128513; email sent</h1>,
            // error: <h1>&#128545;failed to send email</h1>
            pending: {
                render() {
                    return <h1>&#128530; sending email ... </h1>
                }
            },
            success: {
                render() {
                    return <h1>&#128513; email sent</h1>
                }
            },
            error: {
                render() {
                    return <h1>&#128545;failed to send email</h1>
                }
            },
            
        }, {}) : toast.error("failed") // one part of promise be empty
    }


    return(
        <section className="mt-10">
            <div id={"contact"} className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to build something great? Let&apos;s build it together.</p>
                <form className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input onChange={(e) => setSubject(e.target.value)} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="What you want to build" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Project Description</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button onClick={handleSendEmail} type="button" className="menu py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;