import { Link } from "react-router-dom";

function SideBar() {
    return <aside class="w-64 h-screen bg-[var(--primary-dark)] shadow-lg flex flex-col justify-between">
      <div>
        <div class="p-6 flex flex-col items-center border-b">
          <img src="/logo-white.png" className="scale-75"/>
          <span class=" text-lg font-semibold text-white">Research Dashboard</span>
        </div>
  
        <nav class="mt-6 px-6 space-y-2">
            <Link to={"/"} className="block text-white hover:text-[var(--secondary-light)] hover:scale-105 transition px-4 py-2 rounded-md">Dashboard</Link>
            <Link to={"/projects"} className="block text-white hover:text-[var(--secondary-light)] hover:scale-105 transition px-4 py-2 rounded-md">Projects</Link>
            <Link to={"/analytics"} className="block text-white hover:text-[var(--secondary-light)] hover:scale-105 transition px-4 py-2 rounded-md">Analytics</Link>
        </nav>
      </div>
  
      <div class="px-6 pb-6 text-white">
        <div class="flex justify-around ">
          <a href="https://github.com" target="_blank" class="hover:text-black">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.7.8 2 .9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1 0-.3-.5-1.3.1-2.8 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.1 2.5.1 2.8.7.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 0z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" class="hover:text-blue-700">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.4 2.4 4.4 5.6v6zM5.3 7.5a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.4H3.6V9h3.5v11.4zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20a2 2 0 002-2V2c0-1.1-.9-2-2-2z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  
  
}
export default SideBar;