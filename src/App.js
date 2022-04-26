import Navbar from "./components/layouts/Navbar";
import Form from "./components/form/Form";
import { Fragment } from "react";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Fragment>
      <div className="w-full bg__nav">
        <div className="w-10/12 mx-auto">
          <section className="py-14">
            <Navbar />
            <div className="grid grid-cols-2">
              <div className="py-32">
                <h1 className="font-bold text-7xl tracking-wide leading-tight">
                  Simplifying <br />
                  Global <span className="text-blue-500">Finance</span>
                </h1>
                <div className="text-2xl mt-8 text-gray-600">
                  <p>
                    Faster, easier and cheaper cross <br /> border payment
                    starts here
                  </p>
                </div>
                <ul className="grid grid-cols-2 mt-20 w-10/12 gap-y-1 font-medium text-gray-600 text-base">
                  <li className="flex items-center gap-x-2">
                    <span>
                      <img src="/assets/icons/check.png" alt="" />
                    </span>
                    Licensed & Regulated
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <img src="/assets/icons/check.png" alt="" />
                    </span>
                    100% Transparent
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <img src="/assets/icons/check.png" alt="" />
                    </span>
                    Hassle-free
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <img src="/assets/icons/check.png" alt="" />
                    </span>
                    Across 180+ Countries
                  </li>
                </ul>
              </div>
              <div className="w-8/12 py-20 ml-16">
                <Form />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-slate-50">
        <section
          id="partner"
          className="w-10/12 mx-auto py-28 flex justify-between"
        >
          <img src="/assets/icons/slack.png" alt="" />
          <img src="/assets/icons/microsoft.png" alt="" />
          <img src="/assets/icons/google.png" alt="" />
          <img src="/assets/icons/airbnb.png" alt="" />
        </section>
      </div>
      <div className="w-10/12 mx-auto py-24">
        <div className="w-9/12 mx-auto">
          <h1 className="text-6xl font-bold text-center leading-tight">
            We Provide the Easiest Way to{" "}
            <span className="text-blue-500">Manage Your Finances</span>
          </h1>
        </div>
        <div className="grid grid-cols-3 mt-32 gap-x-32">
          <div>
            <img src="/assets/icons/secure.png" alt="" />
            <h1 className="font-bold text-xl mt-6">Great Trading</h1>
            <p className="text-gray-600 mt-2">
              We believe in the potential to provide groundbreaking solutions
              across <br />
              industries.
            </p>
          </div>
          <div>
            <img src="/assets/icons/core.png" alt="" />
            <h1 className="font-bold text-xl mt-6">Security First</h1>
            <p className="text-gray-600 mt-2">
              Security has been our top consideration because when choosing an
              exchange, trust matters.
            </p>
          </div>
          <div>
            <img src="/assets/icons/trade.png" alt="" />
            <h1 className="font-bold text-xl mt-6">Robust Technology</h1>
            <p className="text-gray-600 mt-2">
              To enhance the safety aspect of our products, our products are
              developed using the latest robust technology.
            </p>
          </div>
        </div>
      </div>
      <div className="bg__2 w-full">
        <div className="w-10/12 mx-auto py-24">
          <div className="w-8/12 mx-auto">
            <h1 className="text-6xl font-bold text-center leading-tight">
              Upgrade Your Accesibility with
              <span className="text-blue-500"> Professional Plan</span>
            </h1>
          </div>
          <div className="text-center mt-10 text-gray-500">
            <p>
              Choose plan that suits your budget. Every plan has their own
              <br />
              benefits so careful on your decision, its starts from here!
            </p>
          </div>
          <div id="card" className="mt-36 justify-center flex gap-x-10">
            <div
              id="card__1"
              className="rounded-xl w-80 h-[500px] shadow-sm bg-white p-8 mt-4"
            >
              <div className="text-center  font-semibold text-xl">
                <h1>Free</h1>
              </div>
              <div className="text-center text-xl mt-10">
                <h1 className="inline-block">
                  <span className="font-bold text-4xl">$0/</span>month
                </h1>
              </div>
              <div className="w-52 mx-auto text-center text-gray-500 mt-5">
                <p>
                  All the basic benefits and features of{" "}
                  <span className="text-blue-500">transwap</span>
                </p>
              </div>
              <ul className="mt-10 flex flex-col gap-y-4 text-lg text-gray-600">
                <li className="flex items-center gap-4">
                  <span>
                    <img src="/assets/icons/check-list.png" alt="" />
                  </span>
                  Personal Account
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="/assets/icons/check-list.png" alt="" />
                  </span>
                  Unlimited version history
                </li>
              </ul>
              <div className="text-center mt-16">
                <button className="rounded-full bg-gray-100 px-16 py-2.5 font-bold text-gray-600 hover:bg-gray-200">
                  Choose Free
                </button>
              </div>
            </div>
            <div id="card__2" className="relative w-80">
              <div className="relative z-10 top-0 text-center">
                <span className="bg-yellow-300 text-slate-800 text-sm font-bold mr-2 px-2.5 py-1.5 rounded">
                  Most Popular
                </span>
              </div>
              <div className="absolute z-0 top-4 p-8 w-full shadow-sm bg-gradient-to-t from-blue-700 to-blue-600 rounded-xl">
                <div className="text-center text-gray-100 font-medium text-xl">
                  <h1>Professional</h1>
                </div>
                <div className="text-center text-gray-100 text-xl mt-10">
                  <h1 className="inline-block">
                    <span className="font-bold text-4xl text-white">$49/</span>
                    month
                  </h1>
                </div>
                <div className="w-52 mx-auto text-center text-gray-200 mt-5">
                  <p>All the basic benefits and features of transwap</p>
                </div>
                <ul className="mt-10 flex flex-col gap-y-5 text-lg text-white">
                  <li className="flex items-center gap-4">
                    <span>
                      <img src="/assets/icons/check-white.png" alt="" />
                    </span>
                    Personal Account
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <img src="/assets/icons/check-white.png" alt="" />
                    </span>
                    Unlimited version history
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <img src="/assets/icons/check-white.png" alt="" />
                    </span>
                    Shareable data permission
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <img src="/assets/icons/check-white.png" alt="" />
                    </span>
                    Custom users and admin
                  </li>
                </ul>
                <div className="mt-16">
                  <button className="rounded-full w-full bg-green-500 py-2.5 font-bold text-white hover:bg-green-600">
                    Choose Professional
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg__3">
        <div className="w-10/12 mx-auto py-24">
          <div className="w-8/12 mx-auto">
            <h1 className="text-6xl font-bold text-center text-gray-900 leading-tight">
              Faster and Easier Financial Management Starts Here
            </h1>

            <div className="flex gap-10 mt-20 items-center justify-center">
              <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
                Contact Us
              </button>
              <button className="px-8 border-2 border-gray-300 font-semibold rounded-lg py-3 hover:bg-gray-200">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
