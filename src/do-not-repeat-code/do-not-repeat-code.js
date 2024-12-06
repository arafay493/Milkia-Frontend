/***** All do not repeat code, functions, configurations are defined here *****/

const apiCallMethods = {
    post: "POST",
    get: "GET",
    put: "PUT",
    delete: "DELETE"
};

// Note: Snackbar options...!
const snackBarOptions = {
    position: 'bottom-center',
    style: {
        backgroundColor: "#6754CC",
        border: "1px solid #6754CC",
        color: "white",
        fontFamily: 'Menlo, monospace',
        fontSize: "16px",
        textAlign: "center",
        textTransform: "capitalize",
        zIndex: 1
    },

    closeStyle: {
    },
};

export {
    apiCallMethods,
    snackBarOptions
};