import { Header } from "./Header"

export const Navbar:React.FC = () => {
    return <header className="shadow-md flex">
                <a className="m-4 font-bold font" href="index.tsx">Home</a>
               {/* <nav className="inline-block space-x-4 justify-end bg-red-600 ml-80 mx-40 ">
                    <ul className="mx-20 justify-end bg-yellow-400">
                        <li>Blog</li>
                        <li>About me</li>
                    </ul>
    </nav>*/}
    </header>
}