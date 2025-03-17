import Logo from '../assets/images/logo.svg'

function Header() {
  return (
    <>
      <header className='flex items-center p-4 bg-[#090e21] gap-2'>
        <img src={Logo} className='w-9' alt='Logo'/>
        <h1 className='text-[#FFFFFFE3] text-3xl Poppins'>Write<span className='text-[#687AFB]'>MD</span></h1>
        <div className="border-l border-[#3a425e] h-9 mx-3"></div>
      </header>
      
      <section className="bg-[#111935] text-white p-1 flex justify-around">
        <span>Markdown</span>
        <span>Preview</span>
      </section>
    </>
  )
}

export default Header
