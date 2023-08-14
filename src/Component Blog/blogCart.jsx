import React from "react";
import {
  BlogCartContainer,
  BlogCartImage,
  BlogDescription,
  BlogDetailsCol1,
  BlogDetailsContainer,
  BlogImg,
  BlogMoneText,
  BlogNameText,
  BlogNumText,
  BlogTextDate,
  BlogSpan,
  BLogSlash,
  BlogDetailsText,
  BlogDetailsText2,
  IconeSpan,
} from "./blogCartElements";
import { HiArrowLongRight } from "react-icons/hi2";

const BlogCart = ({ num, mone, img, alt, text }) => {
  return (
    <>
      <BlogCartContainer>
        <BlogCartImage>
          <BlogTextDate>
            <BlogNumText>{num}</BlogNumText>
            <BlogMoneText>{mone}</BlogMoneText>
          </BlogTextDate>
          <BlogImg src={img} alt={alt} />
        </BlogCartImage>
        <BlogNameText href="#">{text}</BlogNameText>
        <BlogDescription>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
          sapien eu varius
        </BlogDescription>
        <BlogDetailsContainer>
          <BlogDetailsCol1>
            <BlogDetailsText>
              <BlogSpan>By</BlogSpan> Admin
            </BlogDetailsText>
            <BLogSlash>|</BLogSlash>
            <BlogDetailsText>StreetStyle, Fashion, Couple </BlogDetailsText>
            <BLogSlash>|</BLogSlash>
            <BlogDetailsText>8 Comments </BlogDetailsText>
          </BlogDetailsCol1>
          <BlogDetailsText2 href="#">
            CONTINUE READING
            <IconeSpan>
              <HiArrowLongRight />
            </IconeSpan>
          </BlogDetailsText2>
        </BlogDetailsContainer>
      </BlogCartContainer>
    </>
  );
};

export default BlogCart;
