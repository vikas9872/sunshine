import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { HiMiniBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

const navigation = [
    { name: 'Home', path: '/', current: false },
    { name: 'About Us', path: '/aboutus', current: false },
    { name: 'Our Services', path: '/services', current: false }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
            console.log("User Logged Out")
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    };

    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Left: Navigation Links */}
                    <div className="flex flex-1 items-center justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        onClick={() => navigate(item.path)}
                                        className='text-black hover:bg-[#dedcff] p-4 cursor-pointer'
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <img src="/Images/sunshine.png" className='h-[64px] w-[64px]' alt="logo" />
                    </div>

                    {/* Right: Sign In / Log Out Button */}
                    <div className='flex flex-1 items-center justify-end'>
                        {user ? (
                            <button onClick={handleLogout} className='text-black cursor-pointer bg-red-300 pt-4 pb-4 pr-8 pl-8'>
                                Log Out
                            </button>
                        ) : (
                            <button onClick={() => navigate('/ngoanduser')} className='text-black cursor-pointer bg-[#dedcff] pt-4 pb-4 pr-8 pl-8'>
                                Sign In
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <HiMiniBars3CenterLeft aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <HiXMark aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="button"
                            onClick={() => navigate(item.path)}
                            className={classNames(
                                item.current ? 'bg-gray-900 black' : 'text-black hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
