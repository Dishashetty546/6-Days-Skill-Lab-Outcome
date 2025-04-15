import Image from "next/image";
function Header() {
  return (
    <div className="bg-amber-100 text-black flex items-center justify-between p-4">
      <div>
        <h1 className=" font-bold">Disha Shetty</h1>
        <h4 className="text-lg">Tech Enthusiast | Web Developer</h4>
      </div>
      <Image
        src="/about.png"
        alt="Disha"
        width={100}
        height={100}
        className="rounded-full "
      />
    </div>
  );
}

function Education() {
  return (
    <div className="bg-amber-200 p-4 ">
      <h3 className=" font-semibold">Education</h3>
      <ul>
        <li>
          <b>BE in Computer Science</b> - Sahyadri College of Engineering,
          Mangalore
        </li>
        <li>
          <b>College:</b> Physics, Chemistry, Maths
        </li>
        <li>
          <b>School:</b> Secondary education
        </li>
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-amber-300">
      <h3 className=" font-semibold">Skills</h3>
      <ul className="list-disc pl-6 grid grid-cols-2 gap-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Express.js</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
}

function Courses() {
  return (
    <div className="bg-amber-500 p-4 rounded-lg">
      <h3 className="text-xl font-semibold">Courses</h3>
      <ul className="list-disc pl-6">
        <li>Data Structures and Algorithms</li>
        <li>Object-Oriented Programming</li>
        <li>Operating Systems</li>
        <li>Computer Networking Basics</li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div className="bg-amber-600 p-4">
      <h3 className="text-xl font-semibold">Projects</h3>
      <ul>
        <li>
          <b>Mediflow</b> - A full-stack web app for doctor appointment and
          patient record management.
        </li>
        <li>
          <b>Health Track</b> - A patient record management system built with
          the MERN stack.
        </li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-amber-900 p-4 rounded-lg text-white">
      <h3 className="text-xl font-semibold">Contact</h3>
      <p>
        Email:{" "}
        <a
          href="mailto:disha@example.com"
          className="text-yellow-300 underline"
        >
          disha@example.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/dishashetty546"
          target="_blank"
          className="text-yellow-300 underline"
        >
          github.com/dishashetty546
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/disha"
          target="_blank"
          className="text-yellow-300 underline"
        >
          linkedin.com/in/disha
        </a>
      </p>
    </div>
  );
}
