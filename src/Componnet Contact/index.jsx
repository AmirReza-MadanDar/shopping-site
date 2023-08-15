import React from "react";
import {
  BanerImg,
  BanerText,
  ContactBaner,
  ContactContainer,
  ContactDetailsCol,
  ContactIcone,
  ContactInputCol,
  ContactSection,
  ContactTextCol1,
  ContactTextCol2,
  ContactTextContainer,
  Contactcol2,
  EmailIcone,
  InpoutText,
  InputBoutton,
  InputEmail,
  TextInpout,
  TextP,
  TextP2,
  TextTittel,
} from "./ctntactContentElements";
import img1 from "../images/about-1.jpg";
import { PiEnvelopeThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
const ContactContent = () => {
  return (
    <>
      <ContactSection>
        <ContactBaner>
          <BanerText>Contact</BanerText>
          <BanerImg src={img1}></BanerImg>
        </ContactBaner>
        <ContactContainer>
          <ContactInputCol>
            <InpoutText>Send Us A Message</InpoutText>
            <InputEmail
              type="email"
              placeholder="Your Email Address"
            ></InputEmail>
            <EmailIcone>
              <PiEnvelopeThin />
            </EmailIcone>
            <TextInpout />
            <InputBoutton>Submit</InputBoutton>
          </ContactInputCol>
          <Contactcol2>
            <ContactDetailsCol>
              <ContactTextCol1>
                <ContactIcone>
                  <TfiLocationPin />
                </ContactIcone>
                <ContactTextContainer>
                  <TextTittel>Address</TextTittel>
                  <TextP>
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </TextP>
                </ContactTextContainer>
              </ContactTextCol1>
              <ContactTextCol2>
                <ContactIcone>
                  <IoCallOutline />
                </ContactIcone>
                <ContactTextContainer>
                  <TextTittel>Lets Talk</TextTittel>
                  <TextP2>+1 800 1236879</TextP2>
                </ContactTextContainer>
              </ContactTextCol2>
              <ContactTextCol2>
                <ContactIcone>
                  <MdOutlineEmail />
                </ContactIcone>
                <ContactTextContainer>
                  <TextTittel>Sale Support</TextTittel>
                  <TextP2>contact@example.com</TextP2>
                </ContactTextContainer>
              </ContactTextCol2>
            </ContactDetailsCol>
          </Contactcol2>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default ContactContent;
