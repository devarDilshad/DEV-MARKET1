import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#fff3f4] mt-10 pt-10 pb-5">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 justify-center items-center mb-6">
          <img src={Logo} alt="logo" />
          <h4 className="pt-4 text-primary text-2xl">
            Kurd Trainer
          </h4>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/devar-dilshad-81196a24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7%2BE12h%2BaTC2pvEZNM%2Bp4BQ%3D%3D" className='no-underline font-josefin mb-2'>
          by 👉 Devar
        </a>
      </div>
    </footer>
  )
}

export default Footer