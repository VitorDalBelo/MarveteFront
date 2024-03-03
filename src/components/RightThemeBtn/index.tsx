import { IconButton,styled,useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import { ColorModeContext } from '../../providers/ThemeContext';

const RightConnor = styled(IconButton)(()=>({
    position:"absolute",
    top:5,
    right:5
}))

export default function RightThemeBtn(){
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return(
        <RightConnor sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </RightConnor>
    )
}