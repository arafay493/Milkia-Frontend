0/***** Material UI Theme || App Theme *****/

import { createTheme } from "@mui/material"

const theme = createTheme({
    colors: {
        transparent: 'transparent',
        red: 'red',
        blue: 'blue',
        yellow: 'yellow',
        black: 'black',
        white: 'white',
        gray: 'gray',
        lightgray: "lightgray",
        whitesmoke: "whitesmoke",
        _1558ac: "#1558ac",
        _1792c8: "#1792c8",
        _58c3ea: "#58c3ea",
        _FEC200: "#FEC200",
        _FCCC2C: "#fccc2c",
        _F4F4F4: "#F4F4F4",
        _63C2C7: "#63C2C7"
    },

    sizeInPixels: {
        _1px: "1px",
        _2px: "2px",
        _3px: "3px",
        _4px: "4px",
        _5px: "5px",
        _6px: "6px",
        _7px: "7px",
        _8px: "8px",
        _9px: "9px",
        _10px: "10px",
        _12px: "12px",
        _14px: "14px",
        _15px: "15px",
        _16px: "16px",
        _17px: "17px",
        _20px: "20px",
        _50px: "50px",
        _100px: "100px",
        _185px: "185px"
    },

    sizeInPercent: {
        size_10: '10%',
        size_20: '20%',
        size_30: '30%',
        size_40: '40%',
        size_50: '50%',
        size_60: '60%',
        size_70: '70%',
        size_80: '80%',
        size_90: '90%',
        size_100: '100%',
        size_auto: 'auto'
    },

    handleFontWeight: {
        bold: "bold"
    },

    handleDirection: {
        row: 'row',
        column: 'column',
    },

    handleAlignment: {
        center: "center",
        right: "right",
        left: "left"
    },

    handlePosition: {
        relative: 'relative',
        absolute: 'absolute'
    },

    handleTextTransform: {
        capitalize: "capitalize",
        uppercase: "uppercase",
        lowercase: "lowercase",
        none: "none"
    }
})

export default theme