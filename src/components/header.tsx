
import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
    return (
        <header id="site-header" className="absolute top-6 w-full z-30">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between gap-3 h-14 rounded-md px-4 backdrop-blur-sm bg-white bg-opacity-80">
                    {/* Logo */}
                    <Link className="block" href="/" rel="home">
                        <img src="/assets/logo.png" alt="Suki Logo" className="h-10" />
                    </Link>

                    <div className="inline-flex items-center">
                        <div className='border-l border-dashed border-gray-200 pl-8 ml-6'>
                            <Button>Comece agora</Button>
                        </div>

                        {/* CTA button */}
                        <div className="ml-4">
                            <Button variant='ghost'>Fazer login</Button>
                        </div>

                        {/* Mobile Menu button */}
                        <div className="flex sm:hidden ml-2">
                            <button
                                id="header-nav-toggle"
                                className="group inline-flex w-8 h-8 text-gray-800 text-center items-center justify-center transition"
                                aria-controls="header-nav"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Menu</span>
                                <svg className="fill-current pointer-events-none" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:translate-x-0" y="7" width="9" height="2" rx="1"></rect>
                                    <rect className="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]" y="7" width="16" height="2" rx="1"></rect>
                                    <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:translate-y-0" y="7" width="9" height="2" rx="1"></rect>
                                </svg>
                            </button>

                            {/* Mobile Navigation */}
                            <nav id="header-nav" className="grid grid-rows-[0fr] rounded-xl [&.menu-is-open]:grid-rows-[1fr] [&.menu-is-open]:visible absolute inset-x-0 top-full mt-1 z-50 [&.menu-is-open]:bg-white [&.menu-is-open]:shadow-lg shadow-black/[.04] transition-all duration-300 [&>div]:opacity-0 [&.menu-is-open>div]:opacity-100">
                                <div className="overflow-hidden transition-opacity duration-300">
                                    <ul className="text-sm py-1.5 px-3 divide-y divide-gray-100">
                                        <li>
                                            <Link href='/login' className="flex text-gray-800 hover:underline py-2 px-2">
                                                Documentation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex text-gray-800 hover:underline py-2 px-2" href="/login">
                                                Sign In
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}