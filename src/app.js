import React, { useEffect } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { ScrollToTop } from './components/ScrollToTop'
import { HelmetTags } from './components/HelmetTags'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import "aos/dist/aos.css";
import AOS from "aos";

export const App = () => {
  const onlineStatus = useOnlineStatus()

    /****** Animation effect ******/
    useEffect(() => {
      AOS.init({
        // initialise with other settings
        duration: 500,
      });
    }, []);
  
    const handleScroll = () => {
      AOS.refresh({
        // initialise with other settings
        duration: 500,
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

  return (
    <>
      <Header />
      {onlineStatus && (
        <ScrollToTop>
          <HelmetTags />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      )}
      <Footer />
    </>
  )
}