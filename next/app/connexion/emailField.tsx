// import * as React from 'react';

// import '../../public/css/accueil.css'

// // const styles = styled(TextField)({
// //     '& .MuiInput-underline:hover:before':
// //     {
// //         border: 'none !important'
// //     },
// // })
// export default function emailField(
//     //     props: {
//     //     id: string | undefined;
//     //     name: string | undefined;
//     //     autoComplete: string | undefined;
//     //     placeHolder: string | undefined;
//     // }
// ) {
//     const [email, setEmail] = React.useState("");


//     return (
//         <TextField
//             label="Email"
//             id="outlined-start-adornment"
//             value={email}
//             sx={{
//                 "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
//                     borderColor: "rgb(207, 206, 206)"
//                 },
//                 "& .MuiOutlinedInput-root:focused .MuiOutlinedInput-notchedOutline": {
//                     backgroundColor: "blue"
//                 },
//                 fieldset: {
//                     background: 'none',
//                     borderColor: "rgb(207, 206, 206)",
//                     width: "100%",
//                 }
//             }}

//             InputLabelProps={{
//                 className: "label__color"
//             }}
//             onChange={(event) => {
//                 setEmail(event.target.value);
//                 // if (!EMAIL_REGEX.test(e.target.value)) {
//                 //     setErrorMessage
//                 // }
//             }}
//         />

//     );
// }