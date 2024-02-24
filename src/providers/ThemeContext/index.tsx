import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { PaletteMode } from '@mui/material';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

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
            common: {
                black: '#000',
                white: '#fff',
                inputBackground: '#e9ebf0',
                socialLogin: "#7C838A"
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
            background:{default:"#FFFFFF"}
          }
        : {
            common: {
                black: '#000',
                white: '#fff',
                inputBackground: '#010103',
                socialLogin: "#7C838A"
              },
            secondary: {
                light:"#484848",
                main:"#1B1B1B",
                dark:"#000000"
            },
            divider: "#FFFFFF",
            text: {
              primary: "#FFFFFF",
            },
            background:{default:"#333131"}
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
