import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer
        className="footer items-center p-4 bg-neutral text-neutral-content"
        id="footer"
      >
        <aside className="items-center flex justify-center ml-4 lg:ml-0">
          <p>Copyright © since 2015 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-self-center">
          <a
            href="https://wa.me/+16182304431"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 cursor-pointer"
          >
            <span>Contact</span>
            <img
              src="/whatsapp.svg"
              alt="whatsapp logo"
              width={30}
              height={30}
            />
          </a>
          <a href="mailto:john4booker@gmail.com" className="cursor-pointer">
            <img src="/gmail.svg" alt="gmail logo" width={30} height={30} />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
