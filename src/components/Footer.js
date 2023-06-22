import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { navLinks } from "./Data";


function Footer() {
  return (
    <div className="mainFooter mt-lg-5  pt-5 px-3  mt-5 text-light overflow-hidden ">
      <Container className="container desktopFooter">
        <div className="row pb-lg-2 my-lg-3 m-auto">
          <div className="col-lg-6 col-12">
            <h3 className="footerHeader mb-3">Irayya Hiremath</h3>
            <div>
              <div className="footerContact mb-5 justify">
                I am a Software Engineer from Hubbali, Karnataka, specializing in
                creating web applications  with unique designs and excellent performance.
              </div>
            </div>
          </div>

          {/***************************************** column 1 **********************************************/}
          <div className="col-lg-3 col-6">
            <h3 className="footerHeader mb-3">
              <span className="halfBorder pb-3">Useful Links</span>
            </h3>
            <ul className="list-unstyled px-5">
            {navLinks.map((elm,ind)=>{
              return(
              <li key={ind}><Link  className='footerLink' href={elm.path}>{elm.link}</Link></li>
              )
            })}
              
            </ul>
          </div>

          {/***************************************** column 2 **********************************************/}
          <div className="col-lg-3 ps-lg-5 col-6">
            <h3 className="footerHeader ps-2 mb-3">
              <span className="halfBorder pb-3">Contact Info</span>
            </h3>
            <ul className="list-unstyled  px-5 ">
              <li className="footerLink">+91 8951629431</li>
              <li>
                <Link href="" className="footerLink">
                  ihiremath1991@gmail.com
                </Link>
              </li>
              <li>
                <Link href="" className="footerLink">
                  Hubballi
                </Link>
              </li>
              <li>
                <Link href="" className="footerLink">
                  Karnataka
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="footerCopyright row ">
        <div className="text-center py-1">
          Copyright &copy;{new Date().getFullYear()} Irayya Hiremath.All Rights
          Reserved | Designed by Irayya
        </div>
      </div>
    </div>
  );
}

export default Footer;
