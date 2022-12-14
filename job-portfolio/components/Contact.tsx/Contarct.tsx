import React from "react";
import { NextPage } from "next";
import axios from "axios";
import { GrToast } from "react-icons/gr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeProvider } from "../../context/ThemeProvider";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      Sending email &nbsp;
      <svg
        role="status"
        className="mr-3 inline h-4 w-4 animate-spin text-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

const Contact: NextPage = () => {
  const [{ theme }] = useThemeProvider();

  // states
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  // an sleep(ms)

  const sleepFor = (): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  // now i shoudl check the given values
  // make sure that they are a valid one.
  const validateMessage = (): boolean => {
    let flag: boolean = false;

    // re for email
    if (email.length) {
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) flag = true;
      else toast.error("input a valid email address.", { theme: theme ? "dark" : "light"});
    }
    // for every length
    if (!email.length) {
        toast.error("email address can't be empty", { theme: theme ? "dark" : "light"});
        flag = false;
    }
    if (!description.length) {
        toast.warning("provied a description.", { theme: theme ? "dark" : "light"});
        flag = false;
    }
    if (!subject.length) {
        toast.warning("provied a subject.", { theme: theme ? "dark" : "light"});
        flag = false;
    }

    return flag;
  }
  const handleSendEmail = async (): Promise<void> => {
    if (!validateMessage()) return;

    setLoading((previous) => !previous);

    const response = await axios.post("/api/email", {
      email,
      subject,
      description,
    });

    // for loading icon
    console.log(response.data);
    if (response.data.message === "done") {
      // set the loader
      toast.promise(
        sleepFor,
        {
          // pending: <h1>&#128530; sending email ... </h1>,
          // success: <h1>&#128513; email sent</h1>,
          // error: <h1>&#128545;failed to send email</h1>
          pending: {
            render() {
              return <h1>&#128530; sending email ... </h1>;
            },
          },
          success: {
            render() {
              return <h1>&#128513; email sent</h1>;
            },
          },
          error: {
            render() {
              return <h1>&#128545;failed to send email</h1>;
            },
          },
        },
        {
            theme: theme ? "dark" : "light"
        }
      );
    } else {
      toast.error("failed");
    } // one part of promise be empty
    // this is fucking working
    setTimeout(() => setLoading((previous) => !previous), 2000);
  };
  return (
    <section className="mt-10">
      <div
        id={"contact"}
        className="mx-auto max-w-screen-md py-8 px-4 lg:py-16"
      >
        <h2
          style={{ color: theme ? "" : "black" }}
          className="mb-4 text-center text-4xl font-extrabold tracking-tight"
        >
          Contact Me
        </h2>
        <p
          style={{ color: theme ? "" : "black" }}
          className="mb-8 text-center font-light sm:text-xl lg:mb-16"
        >
          Want to build something great? Let&apos;s build it together.
        </p>
        <form className="space-y-8">
          <div>
            <label
              style={{ color: theme ? "" : "black" }}
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Your email
            </label>
            <input
              style={{
                color: theme ? "" : "black",
                backgroundColor: theme ? "" : "#FBFAF2",
              }}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500  dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm  dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div>
            <label
              style={{ color: theme ? "" : "black" }}
              htmlFor="subject"
              className="mb-2 block text-sm font-medium "
            >
              Subject
            </label>
            <input
              style={{
                color: theme ? "" : "black",
                backgroundColor: theme ? "" : "#FBFAF2",
              }}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="What you want to build"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              style={{ color: theme ? "" : "black" }}
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Project Description
            </label>
            <textarea
              style={{
                color: theme ? "" : "black",
                backgroundColor: theme ? "" : "#FBFAF2",
              }}
              onChange={(e) => setDescription(e.target.value)}
              id="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm  dark:border-gray-600 dark:bg-gray-700"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            style={{ color: theme ? "gray" : "white" }}
            onClick={handleSendEmail}
            type="button"
            className=" menu rounded-lg py-3 px-5 text-center text-sm font-medium text-white  sm:w-fit"
          >
            {loading ? "Send message" : <Loading />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
