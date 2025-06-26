import { useEffect, useState } from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const Header: React.FC = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderComponent isTopOfPage={isTopOfPage} />
  )
}

export default Header;