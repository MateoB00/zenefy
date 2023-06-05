import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import '../../public/css/accueil.css'

export default function passwordField(
    //     props: {
    //     id: string | undefined;
    //     name: string | undefined;
    //     autoComplete: string | undefined;
    //     placeHolder: string | undefined;
    // }
) {
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const theme = createTheme({

    });

    return (
        // <><InputLabel htmlFor="outlined-adornment-password">Password</InputLabel><OutlinedInput
        //     id="outlined-adornment-password"
        //     type={showPassword ? 'text' : 'password'}
        //     value={password}
        //     onChange={(event) => {
        //         setPassword(event.target.value);
        //         // if (!PASSWORD_REGEX.test(e.target.value)) {
        //         //     setErrorMessage
        //         // }
        //     }}
        //     // error={passwordError}
        //     endAdornment={<InputAdornment position="end">
        //         <IconButton
        //             aria-label="toggle password visibility"
        //             onClick={handleClickShowPassword}
        //             onMouseDown={handleMouseDownPassword}
        //             edge="end"
        //         >
        //             {showPassword ? <VisibilityOff /> : <Visibility />}
        //         </IconButton>
        //     </InputAdornment>}
        //     label="Password" /></>

        <TextField
            color='primary'
            label="Password"
            id="outlined-start-adornment"
            type={showPassword ? 'text' : 'password'}
            InputLabelProps={{
                className: "label__color"
            }}
            sx={{
                fieldset: { borderColor: "rgb(207, 206, 206)" }
            }}
            value={password}
            onChange={(event) => {
                setPassword(event.target.value);
                // if (!PASSWORD_REGEX.test(e.target.value)) {
                //     setErrorMessage
                // }
            }}
            InputProps={{

                className: "label__color",
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}