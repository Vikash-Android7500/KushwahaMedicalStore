import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-end w-full h-[100px] shadow-amber-100 shadow-xl border bg-[#FFFDD0] text-blue-500">
      <p className="flex gap-x-1">
        <div>
          <Copyright color="blue" />
        </div>
        2025
        <span>
          <a
            href="https://www.vikashdev.com/"
            target="_blank"
            className="underline font-bold"
          >
            [Vikash S Developer]
          </a>
        </span>
        | Made in [India]
      </p>
    </footer>
  );
};

export default Footer;
