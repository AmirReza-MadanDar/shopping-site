import React from "react";
import {
  ArchiveCol,
  ArchiveDateCol,
  ArchiveDateText,
  ArchiveSpan,
  BanerImage,
  BanerText,
  BlogBaner,
  BlogCartViewContainer,
  BlogCategoryContainer,
  BlogCol2Container,
  BlogContainer,
  BlogInput,
  BlogInputCol,
  BlogPageContainer,
  BlogSection,
  BlogePage1,
  BlogePage2,
  CartTextCol,
  CategoryItem,
  CategoryItemsCol,
  CategoryText,
  ContentCartImg,
  FeaturedProductsCol,
  InputBLog,
  ProPrize,
  ProText,
  ProductContentCart,
  ProductContentCol,
  TagsCol,
  TagsItem,
  TagseItemCol,
} from "./blogElements";
import blogImg from "../../images/blog-1.jpg";
import BlogCart from "../blogCart";
import BlogImg2 from "../../images/blog-2.webp";
import BlogImg3 from "../../images/blog-3.webp";
import BlogImg4 from "../../images/blog-4.webp";
import { CgSearch } from "react-icons/cg";
import pro1 from "../../images/pro-1.webp";
import pro2 from "../../images/pro-2.webp";
import pro3 from "../../images/pro-3.webp";
const BlogContent = () => {
  return (
    <>
      <BlogSection>
        <BlogBaner>
          <BanerText>Blog</BanerText>
          <BanerImage src={blogImg} alt="blog-img" />
        </BlogBaner>
        <BlogContainer>
          <BlogCartViewContainer>
            <BlogCart
              num="22"
              mone="Jan 2023"
              img={BlogImg2}
              text="8 Inspiring Ways to Wear Dresses in the Winter"
            />
            <BlogCart
              num="18"
              mone="Jan 2023"
              img={BlogImg3}
              text="The Great Big List of Men’s Gifts for the Holidays"
            />
            <BlogCart
              num="16"
              mone="Jan 2023"
              img={BlogImg4}
              text="5 Winter-to-Spring Fashion Trends to Try Now"
            />
            <BlogPageContainer>
              <BlogePage1>1</BlogePage1>
              <BlogePage2>2</BlogePage2>
            </BlogPageContainer>
          </BlogCartViewContainer>
          <BlogCol2Container>
            <BlogInputCol>
              <BlogInput placeholder="Search" type="text" />
              <InputBLog>
                <CgSearch />
              </InputBLog>
            </BlogInputCol>
            <BlogCategoryContainer>
              <CategoryText>Categories</CategoryText>
              <CategoryItemsCol>
                <CategoryItem>Fashion</CategoryItem>
                <CategoryItem>Beauty</CategoryItem>
                <CategoryItem>Street Style</CategoryItem>
                <CategoryItem>Life Style</CategoryItem>
                <CategoryItem>Dly & Crafts</CategoryItem>
              </CategoryItemsCol>
            </BlogCategoryContainer>
            <FeaturedProductsCol>
              <CategoryText>Featured Products</CategoryText>
              <ProductContentCol>
                <ProductContentCart>
                  <ContentCartImg src={pro1} />
                  <CartTextCol>
                    <ProText href="#">
                      White Shirt With Pleat Detail Back
                    </ProText>
                    <ProPrize>$19.00</ProPrize>
                  </CartTextCol>
                </ProductContentCart>
                <ProductContentCart>
                  <ContentCartImg src={pro2} />
                  <CartTextCol>
                    <ProText href="#">
                      Converse All Star Hi Black Canvas
                    </ProText>
                    <ProPrize>$39.00</ProPrize>
                  </CartTextCol>
                </ProductContentCart>
                <ProductContentCart>
                  <ContentCartImg src={pro3} />
                  <CartTextCol>
                    <ProText href="#">
                      Nixon Porter Leather Watcg In Tan
                    </ProText>
                    <ProPrize>$17.00</ProPrize>
                  </CartTextCol>
                </ProductContentCart>
              </ProductContentCol>
            </FeaturedProductsCol>
            <ArchiveCol>
              <CategoryText>Archive</CategoryText>
              <ArchiveDateCol>
                <ArchiveDateText>
                  July 2023 <ArchiveSpan>(9)</ArchiveSpan>
                </ArchiveDateText>
                <ArchiveDateText>
                  June 2023 <ArchiveSpan>(39)</ArchiveSpan>
                </ArchiveDateText>
                <ArchiveDateText>
                  May 2023 <ArchiveSpan>(29)</ArchiveSpan>
                </ArchiveDateText>
                <ArchiveDateText>
                  April 2023 <ArchiveSpan>(35)</ArchiveSpan>
                </ArchiveDateText>
                <ArchiveDateText>
                  March 2023 <ArchiveSpan>(22)</ArchiveSpan>
                </ArchiveDateText>
                <ArchiveDateText>
                  February 2023 <ArchiveSpan>(32)</ArchiveSpan>
                </ArchiveDateText>
                <ArchiveDateText>
                  January 2023 <ArchiveSpan>(21)</ArchiveSpan>
                </ArchiveDateText>
                <ArchiveDateText>
                  December 2023 <ArchiveSpan>(26)</ArchiveSpan>
                </ArchiveDateText>
              </ArchiveDateCol>
            </ArchiveCol>
            <TagsCol>
              <CategoryText>Tags</CategoryText>
              <TagseItemCol>
                <TagsItem>Fashion</TagsItem>
                <TagsItem>Lifestyle</TagsItem>
                <TagsItem>Denim</TagsItem>
                <TagsItem>Streetstyle</TagsItem>
                <TagsItem>Crafts</TagsItem>
              </TagseItemCol>
            </TagsCol>
          </BlogCol2Container>
        </BlogContainer>
      </BlogSection>
    </>
  );
};

export default BlogContent;
