import Theme from "./components";

import image from "@frontity/html2react/processors/image";

const before = ({ libraries }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  libraries.html2react.processors.push(image);
};

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      menu: [],
      mode: 'light',
      featured: {
        showOnList: false,
        showOnPost: false
      }
    },
  },
  actions: {
    theme: {
      beforeSSR: before,
      beforeCSR: before,
      setLightMode: ({state}) => {
        state.theme.mode = 'light';
      },
      setDarkMode: ({state}) => {
        state.theme.mode = 'dark';
      }
    }
  }
};

export default marsTheme;
