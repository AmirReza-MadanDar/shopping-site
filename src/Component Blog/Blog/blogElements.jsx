import styled from "styled-components";

export const BlogSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;
export const BlogBaner = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BanerText = styled.h3`
  color: #fff;
  font-size: 50px;
  position: absolute;
`;
export const BanerImage = styled.img`
  width: 100%;
  height: 240px;
`;
export const BlogContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
  padding-bottom: 150px;
`;
export const BlogCartViewContainer = styled.div`
  width: 825px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BlogePage1 = styled.p`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: #fff;
`;
export const BlogePage2 = styled.p`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;
export const BlogPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  margin-top: 16px;
`;
export const BlogCol2Container = styled.div`
  width: 280px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BlogInputCol = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
`;
export const BlogInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  font-size: 15px;
  padding-left: 28px;
`;
export const InputBLog = styled.button`
  width: 55px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  color: #999;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
export const BlogCategoryContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CategoryText = styled.h4`
  font-size: 22px;
  color: #333;
  font-weight: 550;
`;
export const CategoryItemsCol = styled.ul`
  width: 235px;
  height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  border-top: 1px solid #e6e6e6;
  margin-left: 45px;
`;
export const CategoryItem = styled.li`
  color: #666666;
  font-size: 15px;
  list-style: none;
  width: 100%;
  padding: 8px 4px;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #717fe0;
  }
`;
export const FeaturedProductsCol = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const ProductContentCol = styled.div`
  width: 235px;
  height: 390px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  margin-left: 45px;
`;
export const ProductContentCart = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
`;
export const ContentCartImg = styled.img`
  width: 90px;
  height: 110px;
`;
export const CartTextCol = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProText = styled.a`
  font-size: 15px;
  color: #555;
  text-decoration: none;
  width: 109px;
`;
export const ProPrize = styled.p`
  color: #888;
  font-size: 15px;
  margin-bottom: 0;
`;
export const ArchiveCol = styled.div`
  width: 100%;
  height: 325px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const ArchiveDateCol = styled.div`
  width: 235px;
  height: 265px;
  margin-left: 45px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const ArchiveDateText = styled.p`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin: 0;
  color: #888;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #717fe0;
  }
`;
export const ArchiveSpan = styled.span`
  font-size: 15px;
  color: #888;
`;
export const TagsCol = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const TagseItemCol = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
`;
export const TagsItem = styled.p`
  margin-bottom: 0;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 15px;
  color: #888;
  height: 30px;
  margin-right: 8px;
  padding: 5px 15px;
`;
