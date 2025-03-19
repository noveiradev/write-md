import Logo from '../assets/images/logo.svg';
import logoGithub from '../assets/images/github.svg';
import Tabs from './Tabs';

function Header({ tabs, activeTabId, onContentChange, setActiveTabId, setTabs }) {
  return (
    <>
      <header className="flex items-center justify-center h-16 p-4 bg-[#090e21] gap-2">
        <img src={Logo} className="w-9" alt="Logo" />
        <h1 className="text-[#FFFFFFE3] text-3xl Poppins">
          Write<span className="text-[#687AFB]">MD</span>
        </h1>

        <section className="absolute right-[27px] top-[0.6rem] bg-[#24252d] px-4 py-2 hover:bg-[#383943] transition flex gap-1 justify-center items-center outline outline-2 outline-[#cbc9c9] rounded-[1.5rem] cursor-pointer">
         <img 
         src={logoGithub}
         />
        <a
          href="https://github.com/noveiradev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white tracking-wide"
        >
          Github
        </a>

        </section>
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

