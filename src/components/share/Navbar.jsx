"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);
  const [isHovering, setIsHovering] = useState(null);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileSubMenu(null);
  };

  // Menu data
  const menuItems = [
    {
      label: "Home",
      href: "/",
      submenu: [
        { label: "Home Version 1", href: "/home-v1" },
        { label: "Home Version 2", href: "/home-v2" },
        { label: "Home Version 3", href: "/home-v3" },
      ],
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      label: "Workouts",
      href: "#training",
      submenu: [
        { label: "Cardio", href: "#cardio" },
        { label: "HIIT", href: "#hiit" },
        { label: "Strength Training", href: "#strength" },
        { label: "Flexibility", href: "#flexibility" },
      ],
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },

    {
      label: "Trainers",
      href: "#trainers",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      label: "Membership",
      href: "#membership",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },

    {
      label: "Pages",
      href: "#",
      submenu: [
        { label: "Services", href: "/services" },
        { label: "Trainers", href: "#trainers" },
        { label: "ContactUs", href: "/contactus" },
        { label: "Blogs", href: "/blogs" },
        { label: "Gallery", href: "/gallery" },
        { label: "Faqs", href: "/wrokouts" },
        { label: "Terms&Conditions", href: "/terms_and_conditions" },
      ],
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
  ];

  // Animation variants
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const NavLink = ({ item, isMobile = false }) => (
    <div className="relative">
      <motion.a
        href={item.href}
        className={`relative group flex items-center gap-2 ${
          isMobile
            ? "text-2xl py-4 px-6 rounded-xl hover:bg-[#E6533C] hover:bg-opacity-10 transition-all duration-300"
            : "py-2 px-3 rounded-lg hover:bg-[#E6533C] hover:bg-opacity-10 transition-all duration-300"
        }`}
        onMouseEnter={() => !isMobile && setIsHovering(item.label)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-[#E6533C]">{item.icon}</span>
        <span className="font-medium">{item.label}</span>
        {item.submenu && (
          <motion.svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isHovering === item.label ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        )}

        {/* Hover underline effect */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E6533C]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>

      {/* Desktop Dropdown */}
      {item.submenu && !isMobile && (
        <AnimatePresence>
          {isHovering === item.label && (
            <motion.div
              className="absolute top-full left-0 mt-2 w-48 bg-black bg-opacity-95 backdrop-blur-lg border border-[#E6533C] border-opacity-30 rounded-xl shadow-2xl overflow-hidden"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {item.submenu.map((subItem, index) => (
                <motion.a
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-3 text-white hover:bg-[#E6533C] hover:bg-opacity-20 transition-all duration-200 border-b border-white border-opacity-5 last:border-b-0"
                  whileHover={{ x: 5 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {subItem.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-black text-white p-3 w-full lg:block md:block hidden">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-5 h-5 bg-[#E6533C] rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </motion.div>
            <span className="text-sm">Mon - Fri: 09:00 AM - 09:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-5 h-5 bg-[#E6533C] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </motion.div>
            <span className="text-sm">info@fitnessclub.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className="w-full text-white transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={`backdrop-blur-lg border-b ${
            isScrolled
              ? "bg-black bg-opacity-90 border-[#E6533C] border-opacity-20"
              : "bg-[#E6533C] border-transparent"
          } transition-all duration-500`}
        >
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl font-bold"
            >
              <a href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#E6533C] font-black text-xl">F</span>
                </div>
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  FitnessClub
                </span>
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <NavLink key={item.label} item={item} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div className="hidden md:block">
              <motion.button
                onClick={() => (window.location.href = "/join_club")}
                className="px-6 py-2 bg-white text-[#E6533C] font-semibold rounded-full border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(230, 83, 60, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-[#E6533C] bg-opacity-20"
              onClick={toggleMobileMenu}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(230, 83, 60, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-black bg-opacity-95 backdrop-blur-xl z-50 md:hidden border-l border-[#E6533C] border-opacity-30"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6 border-b border-[#E6533C] border-opacity-20">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">Menu</div>
                  <motion.button
                    onClick={toggleMobileMenu}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-[#E6533C] bg-opacity-20"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              <div className="p-6 space-y-2">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={mobileMenuItemVariants}
                  >
                    <div className="mb-2">
                      <div
                        onClick={() =>
                          setOpenMobileSubMenu(
                            openMobileSubMenu === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between p-4 rounded-xl bg-white bg-opacity-5 hover:bg-[#E6533C] hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[#E6533C]">{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        {item.submenu && (
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                              rotate:
                                openMobileSubMenu === item.label ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        )}
                      </div>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {item.submenu && openMobileSubMenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-8 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.submenu.map((subItem) => (
                              <motion.a
                                key={subItem.label}
                                href={subItem.href}
                                onClick={toggleMobileMenu}
                                className="block p-3 rounded-lg bg-white bg-opacity-5 hover:bg-[#E6533C] hover:bg-opacity-20 transition-all duration-200"
                                whileHover={{ x: 5 }}
                              >
                                {subItem.label}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.button
                  onClick={() => (window.location.href = "/join_club")}
                  className="w-full py-4 bg-[#E6533C] text-white font-semibold rounded-xl mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Fitness Club
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
