import React, { useState } from "react";
import "../App.css";
import Faqs from "./Faqs";
import DropdownForm from "./DropdownForm";
// import { FiLink } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCopy,
  FaHandScissors,
} from "react-icons/fa";
import { db } from "./config/config";
import { collection, addDoc } from "firebase/firestore";
const tinyid = require("tiny-unique-id");

const Home = () => {
  const [input, setInput] = useState("");
  const [shorten, setShorten] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleDb = async () => {
    const slug = tinyid.unique();
    await addDoc(collection(db, "urls"), {
      url: input,
      slug: slug,
    });
    setShorten(slug);
  };

  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.value = shorten;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className="App-header">
        <div>
          <FaPaperclip className="icon" /> <span>|</span>{" "}
          <span className="logo">Klippr</span>
        </div>
        <div>
          <ul className="menu">
            <li>
              <button onClick={() => scrollToSection("Klippr")}>
                KlipIt
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("features")}>
                Features
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("pricing")}>
                Pricing
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")}>FAQs</button>
            </li>
          </ul>
        </div>
        <div className="Login">
          <DropdownForm />
        </div>
      </header>
      <main className="main">
        <h1 className="title">Klippr</h1>
        <div className="geturl">
          <div className="shortLinkContainer">
            <input
              type="text"
              disabled
              value={shorten ? shorten : ""}
              className="shortLink"
              onClick={() => {
                if (shorten) {
                  window.location.href = shorten;
                }
              }}
            />
            {shorten && (
              <a className="copyButton" onClick={copyToClipboard}>
                <FaCopy className="copyIcon" />
              </a>
            )}
          </div>
          {isCopied && <p className="copySuccess">Link copied to clipboard!</p>}

          <input
            type="url"
            value={input}
            placeholder="Enter Your URL Here"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleDb}>Klip</button>
          <div className="description">
            <p>
              {" "}
              Klippr is a fast and convenient URL management tool. <br />{" "}
              Enter your long URLs here and instantly generate shortened links.{" "}
              <br />
            </p>
          </div>
        </div>
        <div id="features" className="featuresSection">
          <div className="possibilities">
            <h1>
              One Stop.
              <br />
              Four Posibilities.
            </h1>
            <div className="stats">
              <span className="stat">
                <h1>3M</h1>
                <br />
                Active Users
              </span>
              <span className="stat">
                <h1>60M</h1>
                <br />
                Links & QR codes generated
              </span>
              <span className="stat">
                <h1>1B</h1>
                <br />
                Clicked & Scanned connections
              </span>
              <span className="stat">
                <h1>300k</h1>
                <br />
                App Integrations
              </span>
            </div>
          </div>
          <div className="functions">
            <span>
              <h1>URL Shortening</h1> <br />
              Klippr allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects
            </span>
            <span>
              <h1>QR Code Generator</h1> <br />
              Klippr allows you to generate QR codes for your business,
              events. Bring your customers and audience to your doorstep with
              this scan and go solution
            </span>
            <span>
              <h1>Custom URL</h1> <br />
              Klippr allows you to customize your URL to your preference. Make
              your URL memorable and recognizable
            </span>
            <span>
              <h1>URL Analytics</h1> <br />
              Klippr allows you to track your URL performance. Track your URL
              clicks, location, device, browser, and more
            </span>
          </div>
        </div>
        <div id="pricing" className="pricingSection">
          <h1>
            A price perfect for your needs
          </h1>
          <p>
            From catering to your personal, business, events, social needs, you
            can be rest assured we have you in mind with our pricing
          </p>
          <div className="prices">
            <div className="first">
              <h1>Basic</h1>
              <h2>Free</h2>
              <h3>Free plan for all users</h3>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Unlimited URL
                shortening
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Basic Link Analytics
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Customizable Short
                Links
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Standard Support
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Ad-supported
              </span>
            </div>
            <div className="second">
              <h1>Professional</h1>
              <h2>$15/month</h2>
              <h3>Ideal for business creators</h3>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Enhanced Link Analytics
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Custom Branded Domains
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Advanced Link
                Customization
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Priority Support
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Ad-free Experience
              </span>
            </div>
            <div className="third">
              <h1>Teams</h1>
              <h2>$25/month</h2>
              <h3>Share with up to 10 users</h3>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Team Collaboration
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> User Roles And
                Permissions
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Enhanced Security
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> API Access
              </span>
              <span>
                <BsCheck2Circle className="PlanIcons" /> Dedicated Account
                Manager
              </span>
            </div>
          </div>
          <div className="PriceBtn">
            <button>Select Pricing</button>
          </div>
        </div>
        <div id="faq" className="faqSection">
          <Faqs />
        </div>
      </main>
      <footer>
        <div className="logoSocials">
          <div>
            <FaPaperclip className="icon" /> <span>|</span>{" "}
            <span className="logo">Klippr</span>
          </div>
          <div className="socials">
            <FaFacebookF className="facebook" />
            <FaTwitter className="twitter" />
            <FaInstagram className="instagram" />
            <FaLinkedinIn className="linkedin" />
          </div>
        </div>
        <div className="SecondDetails">
          <div>
            <div className="Why">
              <h4>Why Klippr</h4>
              <ul className="whySnap">
                <li>
                  <a href="#">Klippr 101</a>
                </li>
                <li>
                  <a href="#">Integrations & API</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="solutions">
            <div>
              <h4>Solutions</h4>
              <ul className="solutionsList">
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
                <li>
                  <a href="#">For Developers</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h4>Products</h4>
              <ul className="products">
                <li>
                  <a href="#">Links Management</a>
                </li>
                <li>
                  <a href="#">Qr Codes</a>
                </li>
                <li>
                  <a href="#">Link-In-Bio</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="company">
              <li>
                <a href="#">About Klippr</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul className="resources">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Resource Library</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">App Connections</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Trust Center</a>
              </li>
              <li>
                <a href="#">Browser Extension</a>
              </li>
              <li>
                <a href="#">Mobile App</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul className="featuresList">
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Mobile Links</a>
              </li>
              <li>
                <a href="#">Campaign</a>
              </li>
              <li>
                <a href="#">Management & Analytics</a>
              </li>
              <li>
                <a href="#">Qr Code Generation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul className="legal">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Terms Of Service</a>
              </li>
              <li>
                <a href="#">Acceptable Use Policy</a>
              </li>
              <li>
                <a href="#">Code Of Conduct</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
