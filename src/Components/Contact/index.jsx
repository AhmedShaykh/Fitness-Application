import { SelectedPage } from "@/Shared/Types";
import HText from "@/Shared/HText";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/Assets/ContactUsPageGraphic.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Contact = ({ setSelectedPage }) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
        px-5 py-3 placeholder-white`;

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        message: ""
    });

    const setVal = (e) => {

        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const userData = async (e) => {
        e.preventDefault();

        const { name, email, message } = inpval;

        if (name === "") {
            toast.warning("Name Is Required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("Email Is Required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Includes @ In Your Email!", {
                position: "top-center"
            });
        } else if (message === "") {
            toast.error("Message Is Required!", {
                position: "top-center"
            });
        } else {
            toast.success("Your Message Successfully Sent!", {
                position: "top-center"
            });

            setInpval({ ...inpval, name: "", email: "", message: "" });
        }
    };

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >

                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>

                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >

                        <form>
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                name="name"
                                value={inpval.name}
                                onChange={setVal}
                            />

                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                name="email"
                                value={inpval.email}
                                onChange={setVal}
                            />

                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                name="message"
                                value={inpval.message}
                                onChange={setVal}
                            />

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                                onClick={userData}
                            >
                                SUBMIT
                            </button>
                        </form>
                        <ToastContainer />
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <img
                                className="w-full"
                                alt="contact-us-page-graphic"
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact;