export default function Home() {
  return (
    <div>
      <nav className="flex flex-wrap flex-row p-3 font-bold text-[24px] bg-white">
        <img src="/logo.png" alt="logo" width={100} height={100} />
        <ul className="md:flex flex md:flex-row justify-center items-center gap-4 text-gray-500 text-2xl pl-160">
          <a className="text-gray-500 text:hover-blue">Home</a>
          <a className="text-gray-500 text:hover-blue">Academics</a>
          <a className="text-gray-500 text:hover-blue">Placements</a>
          <a className="text-gray-500 text:hover-blue">Admission</a>
          <a className="text-gray-500 text:hover-blue">feedback</a>
        </ul>
      </nav>
    </div>
  );
}
