import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[75vh] flex flex-col justify-between bg-gray-300 bg-hero bg-cover bg-center rounded-b-[48px] shadow-md">
      <nav className="relative z-10 flex w-full px-8 py-4 justify-between text-white">
        <h1 className="text-xl">
          <b>davis banks</b>
        </h1>
        <div className="flex flex-col text-end sm:flex-row gap-2 sm:gap-4">
          <Link href="#work" className="text-xl hover:underline">
            <b>work</b>
          </Link>
          <Link
            href="https://github.com/d5vis"
            target="_blank"
            className="text-xl hover:underline"
          >
            <b>github</b>
          </Link>
          <Link
            href="https://linkedin.com/in/d5vis"
            target="_blank"
            className="text-xl hover:underline"
          >
            <b>linkedin</b>
          </Link>
          {/* <Link
            href="https://docs.google.com/document/d/1gN_Eksicl5UHZw_tF7JI5SArSFH-Ex3Yp_4FYe6eotE/pub"
            target="_blank"
            className="text-xl hover:underline"
          >
            <b>resume</b>
          </Link> */}
          {/* <Link
            href="mailto:davisjbanks@gmail.com"
            className="text-xl hover:underline"
          >
            <b>email</b>
          </Link> */}
        </div>
      </nav>
      <div className="flex flex-col sm:flex-row items-center justify-center text-white p-8 gap-2 sm:gap-8">
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <b>los angeles, california</b>
        </div>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
          <b>loyola marymount university</b>
        </div>
      </div>
    </div>
  );
};

export default Hero;
