import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-700">
      <div className="w-10/12 mx-auto py-10">
        <div className="px-10 grid grid-cols-2 text-white">
          <div>
            <h1 className="font-bold text-2xl">GivMoney</h1>
            <ul className="flex gap-4 text-2xl mt-10">
              <li>
                <i className="fa-brands fa-linkedin" />
              </li>

              <li>
                <i className="fa-brands fa-facebook" />
              </li>
              <li>
                <i className="fa-brands fa-twitter" />
              </li>
              <li>
                <i className="fa-brands fa-instagram" />
              </li>
            </ul>
            <p className="font-light text-base mt-4">
              2021 All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <ul className="flex flex-col gap-2.5 text-lg font-light">
              <li className="font-semibold">Features</li>
              <li>Payments</li>
              <li>Collections</li>
              <li>Conversions</li>
            </ul>
            <ul className="flex flex-col gap-2.5 text-lg font-light">
              <li className="font-semibold">Resources</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Partnerships</li>
            </ul>
            <ul className="flex flex-col gap-2.5 text-lg font-light">
              <li className="font-semibold">Our Company</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>News & Media</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
