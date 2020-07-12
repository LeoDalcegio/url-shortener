import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 75px;
  background-color: var(--dark-blue);
`;

export const Container = styled.div`
  width: 1280px;
  height: 100%;
	display: flex;
	margin: 0 auto;
	max-width: 100%;
  padding: 0px 18px;
  margin-bottom: 30px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const LogoImage = styled.img`
  height: 60px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const ItemList = styled.li`
  margin: 0 15px;
  transition: all ease .3s;
  a {
    font-size: 18px;
    font-weight: 700;
    color: var(--light-green);
  }
  >:hover {
    color: var(--light-blue);
  }
`;
