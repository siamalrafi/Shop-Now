import { AuthContext } from "@/Context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

function Navbar() {
    const { user, logOut } = useContext(AuthContext);


    return (
        <div>
            <div className="navbar bg-neutral">
                <div className="flex-1">
                    <Link href={'/'}>
                        <p className="  text-white normal-case text-xl">Shop Now</p>
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user?.displayName} src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link href={'/profile'} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/register'}>Register</Link></li>

                            <li><Link href='/login'>Login</Link></li>
                            <li><Link onClick={() => logOut()} href={'/'}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;