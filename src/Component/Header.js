const Header = ({clickHandler}) => {

  return (
    <div className="absolute w-full px-[110px] py-2 bg-gradient-to-b from-black flex text-white justify-between">
        <div>
            <img 
            className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        </div>
        <div>
            <select className="m-3 px-3 py-1 rounded-md border border-white hover:border-2 bg-transparent font-semibold">
                    <option value="English" className="text-black"> English</option>
                    <option value="Hindi" className="text-black">Hindi</option>
            </select>
            
            <button 
            className="m-2 px-3 rounded-md font-semibold py-1 bg-red-600"
            onClick={clickHandler}
            >Sign In</button> 
        </div>
        
    </div>
  )
}

export default Header