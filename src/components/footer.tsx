import { Typography, IconButton } from "@material-tailwind/react";

const LINKS = ["Company", "About Us", "Team", "Product", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 grid items-center justify-center gap-10">
          
          <p className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} {" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Desenvolvido por Noodle Software Solutions.
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
