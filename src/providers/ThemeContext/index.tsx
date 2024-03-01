import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface Props {
    children:any
}


export default function ThemeContext({children}:Props) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  React.useEffect(()=>{
    const theme = localStorage.getItem('theme');
    if(theme && theme=='light' || theme=='dark') setMode(theme);
  },[])
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const result = prevMode === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme',result);
          return result
        });
      },
    }),
    [],
  );
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary:{
              light:"#a8a6a6",
              main:"#FFFFFF",
              dark:"#e9ebf0"
            },
            common: {
                black: '#fff',
                white: '#000',
              },
            secondary: {
                light:"#FF7473",
                main:"#FF0000",
                dark:"#D90000"
            },
            divider: "#B0BAC3",
            text: {
              primary: "#252526",
            },
            background:{
              default:"#e9ebf0",
              paper:'#e9ebf0'
            }
          }
        : {
            primary:{
              light:"#726d6d",
              main:"#333131",
              dark:"#131314"
            },
            common: {
                black: '#000',
                white: '#fff',
              },
            secondary: {
                light:"#a8a6a6",
                main:"#FFFFFF",
                dark:"#E1E1E1"
            },
            divider: "#FFFFFF",
            text: {
              primary: "#FFFFFF",
            },
            background:{
              default:"#333131",
              paper:"#131314"
            }
          }),
    },
  });
  

  const theme = React.useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
