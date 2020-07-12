import React from 'react';
import { Link } from 'react-router-dom';

import { Container, List, ItemList, LogoImage, Wrapper, ImageWrapper } from './styles';
import Logo from '../../images/logo.svg';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>

          <ImageWrapper>
            <Link to="/" className="logo">
              <LogoImage src={Logo} alt="Logo" />
            </Link>
          </ImageWrapper>

          <List>

            <ItemList>
              <Link to="/">
                Home
              </Link>
            </ItemList>

            <ItemList>
              <Link to="/register">
                Register
              </Link>
            </ItemList>

            <ItemList>
              <Link to="/login">
                Login
              </Link>
            </ItemList>

          </List>
          
      </Container >
    </Wrapper>
  );
}

export default Header;