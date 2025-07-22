import logoFull from "../assets/logo_full.png";

export default function Footer() {
  return (
    <footer className="bg-black py-10 px-6">
        
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto md:gap-x-8 ">

            <div>
                <div className="flex flex-col">
                    <img src={logoFull} alt="Easy Exam Academy Logo" className="w-12 mb-1" />
                    <h1 className="text-white text-2xl font-bold mb-6 kollektif-font">Easy Exam Academy</h1>
                </div>
                <p className="text-gray-400 mt-2">
                    Easy Exam Academy is a leading online tutoring platform that connects students with expert tutors to enhance learning experiences
                </p>
            </div>

            <div className="md:grid grid-cols-2">

            <div className="space-y-1 ">
                <h3 className="text-white font-semibold mb-3 md:mt-0 mt-3 kollektif-font">Important Links</h3>
                <ul>
                <li><a href="https://easyexamacademy.com/privacy-policy/" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="https://easyexamacademy.com/terms-conditions/" className="text-gray-400 hover:text-white transition-colors duration-200">Terms Conditions</a></li>
                <li><a href="https://easyexamacademy.com/refund_returns/" className="text-gray-400 hover:text-white transition-colors duration-200">Refund Returns</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-3 md:mt-0 mt-3 kollektif-font">Contact</h3>
                <p className="text-sm text-gray-400">
                    Email: <a href="mailto:admin@easyexamacademy.com" className="hover:underline text-white-500 hover:text-white">admin@easyexamacademy.com</a>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                    Phone: <a href="tel:+917708568206" className="hover:underline text-white-500 hover:text-white">+91 77085 68206</a>
                    </p>
                <p className="text-sm text-gray-400 mt-1">Location : Erode, India</p>
            </div>

            </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm ">
                © {new Date().getFullYear()} Thinkverse Technologies Private Limited
        </div>
        

    </footer>
  );
}
