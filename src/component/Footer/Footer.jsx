import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-end w-full h-[100px] shadow-amber-100 shadow-xl border bg-[#FFFDD0] text-blue-500">
      <p className="flex gap-x-1 text-base">
        Copyright
        <div>
          <Copyright color="blue" />
        </div>
        2025 Made in
        <span>
          <a
            href="https://www.vikashdev.com/"
            target="_blank"
            className="underline font-bold hover:text-black duration-200"
          >
            [Vikash Kushwaha]
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
