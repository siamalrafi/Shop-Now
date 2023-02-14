import { AuthContext } from "@/Context/AuthProvider";
import { useRouter } from "next/router";
import { useContext } from "react";
import { toast } from "react-hot-toast";

function Register() {
    const { user, createUser, updateUser, valuCheck } = useContext(AuthContext);
    const router = useRouter();


    const handleSubmit = (event) => {
        event.preventDefault();

        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;

        createUser(email, password)
            .then((result) => {
                console.log(result);
                toast.success('user created successfully.');
                updateUser(name)
                    .then((result) => {
                        console.log('result');
                        router.push('/')
                    })
                    .catch((error) => {
                        console.log('error');
                    })


            })
            .catch((error) => {
                toast.error(`${error.message}`)
            })


    }

    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-200 sm:px-6">
                <div className="w-full max-w-sm p-4 bg-white rounded-md shadow-md sm:p-6">
                    <div className="flex items-center justify-center">
                        <span className="text-xl font-medium text-gray-900">Register</span>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <label htmlFor="name" className="block">
                            <span className="text-sm text-gray-700">Name</span>
                            <input type="name" id="name" name="name" placeholder="username"
                                className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                                required />
                        </label>
                        <label htmlFor="email" className="block">
                            <span className="text-sm text-gray-700">Email</span>
                            <input type="email" id="email" name="email" placeholder="username"
                                className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                                required />
                        </label>
                        <label htmlFor="password" className="block mt-3">
                            <span className="text-sm text-gray-700">Password</span>
                            <input type="password" id="password" name="password" placeholder="current-password"
                                className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                                required />
                        </label>
                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="text-indigo-600 border form-checkbox" />
                                    <span className="mx-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>
                            <div>
                                <a className="block text-sm text-indigo-700 fontme hover:underline" href="#">Forgot your password?</a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Register;