export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Logo Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <span className="font-bold text-2xl text-slate-800">
                                LOKALOKE
                            </span>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-4">
                            Solutions
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Marketing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Analytics
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Automation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Commerce
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Insights
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Submit ticket
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Guides
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-slate-500 text-sm mb-4 md:mb-0">
                            © 2024 LokalOKE. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                            <a
                                href="#"
                                className="text-slate-500 hover:text-blue-600 text-sm transition-colors duration-200"
                            >
                                Terms of service
                            </a>
                            <a
                                href="#"
                                className="text-slate-500 hover:text-blue-600 text-sm transition-colors duration-200"
                            >
                                Privacy policy
                            </a>
                            <a
                                href="#"
                                className="text-slate-500 hover:text-blue-600 text-sm transition-colors duration-200"
                            >
                                License
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a
                                href="#"
                                className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                                </svg>
                            </a>

                            {/* Twitter/X */}
                            <a
                                href="#"
                                className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a
                                href="#"
                                className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="#"
                                className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
