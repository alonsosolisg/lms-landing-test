import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen">
      <section
        x-data="{ isOpen: false }"
        className="lg:px-6 xl:px-28 2xl:px-48 w-full min-h-screen bg-white dark:bg-gray-900"
      >
        <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
          <nav className="md:flex md:items-center md:justify-between"></nav>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex md:flex-row xs:flex-col-reverse items-center flex-1"
          >
            <Carousel />
            <div className="flex flex-col w-full md:justify-end md:align-end md:items-end xs:justify-center xs:align-center xs:items-center">
              <Image
                className=""
                src="lms_logo_narrow.svg"
                width={400}
                height={400}
                alt="logo"
              />

              <p className="xs:text-center items-end justify-end align-end max-w-3xl mt-6 text-lg md:text-end text-gray-800 dark:text-white md:text-xl font-serif">
                | BOLD | CLASSY | HAUTE | EXPENSIVE |
              </p>

              <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                <input
                  id="email"
                  type="text"
                  className="px-6 py-3 text-gray-800 bg-white border dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring font-serif "
                  placeholder="Email Address"
                />

                <button className="font-serif px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 hover:bg-gray-800 focus:bg-blue-600 focus:outline-none sm:mr-2">
                  Notify Me
                </button>
              </div>
            </div>
          </motion.section>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center sm:flex-row sm:justify-between"
          >
            <div></div>
            <div className="sm:mt-0 md:mt-4 mx-2 md:mt-0">
              <a
                href="#"
                className="px-4 text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-gray-600 dark:hover:text-blue-400"
              >
                {" "}
                <FontAwesomeIcon icon={faFacebook} className="scale-150" />
              </a>

              <a
                href="#"
                className="px-4 text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-gray-600 dark:hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faInstagram} className="scale-150" />
              </a>

              <a
                href="#"
                className="px-4 text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-gray-600 dark:hover:text-blue-400"
              >
                {" "}
                <FontAwesomeIcon icon={faTiktok} className="scale-150" />
              </a>
            </div>
          </motion.footer>
        </div>
      </section>
    </div>
  );
}
