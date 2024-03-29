import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Toggle from "./toggle";

const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink link="/">
        <Title>{state.frontity.title}</Title>
      </StyledLink>
      <Description>{state.frontity.description}</Description>
      <Toggle />  
    </Container>
    <Nav />
  </>
);

export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  margin-bottom: 16px;
  opacity: .7;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
