import Logo from '@/assets/icons/logo.svg';
import logoGithub from '@/assets/icons/github.svg';
import Tabs from './Tabs';
import { Fade } from 'react-awesome-reveal';

function Header({ tabs, activeTabId, onContentChange, setActiveTabId, setTabs }) {
  return (
    <>
      <header className="flex items-center justify-start sm:justify-center h-16 p-2 sm:p-4 bg-[#090e21] gap-2 notranslate">
        <Fade>
          <img src={Logo} className="w-8 sm:w-9" alt="Logo" />
          <h1 className="text-[#FFFFFFE3] text-2xl sm:text-3xl Poppins">
            Write<span className="text-[#687AFB]">MD</span>
          </h1>
        </Fade>
 
          <a
            href="https://github.com/noveiradev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] text-xs sm:text-base tracking-wide absolute right-4 top-[0.6rem] bg-[#24252D] px-2 py-1 sm:px-4 sm:py-2 hover:bg-[#383943] transition flex gap-1 justify-center items-center outline-2 outline-[#CBC9C9] rounded-[1.5rem] cursor-pointer"
          >
            <img src={logoGithub} className="w-4 sm:w-5" alt="GitHub Logo" />
            Github
          </a>        
      </header>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onContentChange={onContentChange}
        setActiveTabId={setActiveTabId}
        setTabs={setTabs}
      />
    </>
  );
}

export default Header;

