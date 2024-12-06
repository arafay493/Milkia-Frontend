// Note: Main root file...!

'use client'

// Note: Redux Integration...!
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "@/redux/store";

// Material UI Integration
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";

// Note: MDB Bootstrap integration...!
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Note: Semantic Ui integration...!
import 'semantic-ui-css/semantic.min.css';

// Note: React actuvity loader integration...!
import "react-activity/dist/library.css";

// Note: Snackbar Integration...!
import SnackbarProvider from "react-simple-snackbar";
import { Fragment, useState } from 'react';
import Login from './Login/page';
import Home from './page';
import AppLayout from './page';
import Builder from './builder/page';
import { Toaster } from 'react-hot-toast';


const RootLayout = ({ children }) => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <html lang="en">
              <body suppressHydrationWarning={true} style={{ backgroundColor: "#E3E3E3" }}>
                <Content children={children} />
              </body>
            </html>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

const Content = ({ children }) => {
  const { authenticatedUser } = useSelector(({ authStates }) => authStates);
  console.log("authenticatedUser", authenticatedUser);

  return authenticatedUser ? (
    <AppLayout>
      {children}
    </AppLayout>
  ) : (
    <Login />
  );
};

export default RootLayout;