import React from "react";
import {
  ContentIconse,
  ContentText,
  FooterAddres,
  FooterCol2Container,
  FooterCol2Content,
  FooterColContainer,
  FooterContainer,
  FooterContentIcons,
  FooterInput,
  FooterInputButton,
  FooterInputColContainer,
  FooterSection,
  FooterTextContainer,
  FooterTextItem,
  FooterTextTittel,
  IconsContainer,
  Iconse,
} from "./footerElements";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterTextContainer>
            <FooterColContainer>
              <FooterTextTittel>CATEGORIES</FooterTextTittel>
              <FooterTextItem>Women</FooterTextItem>
              <FooterTextItem>Men</FooterTextItem>
              <FooterTextItem>Shoes</FooterTextItem>
              <FooterTextItem>Watches</FooterTextItem>
            </FooterColContainer>
            <FooterColContainer>
              <FooterTextTittel>HELP</FooterTextTittel>
              <FooterTextItem>Track Order</FooterTextItem>
              <FooterTextItem>Returns</FooterTextItem>
              <FooterTextItem>Shipping</FooterTextItem>
              <FooterTextItem>FAQs</FooterTextItem>
            </FooterColContainer>
            <FooterColContainer>
              <FooterTextTittel>GET IN TOUCH</FooterTextTittel>
              <FooterAddres>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </FooterAddres>
              <IconsContainer>
                <Iconse>
                  <FaFacebookF />
                </Iconse>
                <Iconse>
                  <FaInstagram />
                </Iconse>
                <Iconse>
                  <FaTwitter />
                </Iconse>
              </IconsContainer>
            </FooterColContainer>
            <FooterInputColContainer>
              <FooterTextTittel>NEWSLETTER</FooterTextTittel>
              <FooterInput
                placeholder="email@example.com
"
              />
              <FooterInputButton>SUBSCRIBE</FooterInputButton>
            </FooterInputColContainer>
          </FooterTextContainer>
          <FooterCol2Container>
            <FooterCol2Content>
              <FooterContentIcons>
                <ContentIconse>
                  <FaCcPaypal />
                </ContentIconse>
                <ContentIconse>
                  <FaCcVisa />
                </ContentIconse>
                <ContentIconse>
                  <FaCcPaypal />
                </ContentIconse>
                <ContentIconse>
                  <FaCcVisa />
                </ContentIconse>
              </FooterContentIcons>
              <ContentText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </ContentText>
            </FooterCol2Content>
          </FooterCol2Container>
        </FooterContainer>
      </FooterSection>
    </>
  );
};

export default Footer;
