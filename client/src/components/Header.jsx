import Logo from "../assets/graphql.png";

const Header = () => {
  return (
    <div className=" z-50 h-screen">
      <div className="w-screen p-2 bg-black h-20 flex justify-start">
        <a href=""></a>
        <div className="flex">
          <img src={Logo} alt="graphqlLogo" className="rounded-full mr-2" />
          <div>Al Mada</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
