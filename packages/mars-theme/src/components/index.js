import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";

const globalStyles = css`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
a,
a:visited {
  color: inherit;
  text-decoration: none;
}
`;

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  const { mode } = state.theme;

  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <Global styles={ globalStyles} />
      <Global styles={ css`
        body {
            background-color: ${mode === 'light' ? '#fff': '#222'};
            color: ${mode === 'light' ? '#222': '#fff'}
        }` } />
      <HeadContainer isDark={ mode === 'dark'}>
        <Header />
      </HeadContainer>
      <Body>
        {data.isFetching && <Loading />}
        {data.isArchive && <List />}
        {data.isPostType && <Post />}
        {data.is404 && <Page404 />}
      </Body>
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({isDark}) => (isDark ? '#111' : '#1f38c5')};
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255,255,255, .15);
`;
