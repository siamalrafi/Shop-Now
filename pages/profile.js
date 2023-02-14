import { AuthContext } from "@/Context/AuthProvider";
import { useContext } from "react";

function profile() {

    const { user, logOut, valuCheck } = useContext(AuthContext);

  


    return (
        <div>
            <div className="grid my-36 mx-36 justify-items-center">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <h1>Name : {user?.displayName}</h1>
                <h1>Email : {user?.email}</h1>
            </div>
        </div>
    );
}

export default profile;