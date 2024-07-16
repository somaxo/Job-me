 import {useState} from 'react'
import ProfileModal from './modals/ProfileModal';
import logout from '@/utils/logout';
import Image from 'next/image';
import LogoutUserModal from './modals/LogoutUserModal';


 const LoggedNav = () => {
    const [showUser, setshowUser] = useState(false)
    const [showLogout, setShowLogout] = useState(false);

    const showUserDetails = ()=>{
        setshowUser(true)
    }
    const showLogoutModal = ()=>{
        setShowLogout(true);
    }

   return (
     <div className="hidden lg:flex items-center justify-center">
       <ProfileModal show={showUser} setShow={setshowUser} />
       <LogoutUserModal show={showLogout} setShow={setShowLogout}/>

       <div className="grid md:grid-cols-3 justify-center items-center mx-auto border-[1px] border-black rounded-2xl w-24 p-2">
         <Image
           onClick={showUserDetails}
           src="/profile.png"
           alt="profile"
           className="mx-auto"
           width={20}
           height={20}
         />

         <Image
           src="/line.png"
           alt="profile"
           className="mx-auto bg-black"
           width={1}
           height={1}
         />

         <Image
           onClick={showLogoutModal}
           src="/logout-icon.png"
           alt="profile"
           className="mx-auto"
           width={20}
           height={20}
         />
       </div>
     </div>
   );
 }
 
 export default LoggedNav