import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ReactButton, ReactNavItem } from '../shared/wrappers';
import { images } from '../../constants/images';
import { useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#education' },
  { name: 'Projects', href: '#projects' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="section-container flex items-center justify-between py-3 sm:py-1" aria-label="Global">
        {/* Logo */}
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5" onClick={handleNavClick}>
            <img className="h-16" src={images.logo} alt="Portfolio" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          {navigation.map((item) => (
            <ReactNavItem
              key={item.name}
              href={item.href}
              label={item.name}
            />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ReactButton
            variant="nav"
            label="Let's talk"
            href="#contact"
          />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center p-2 text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-sm px-6 py-4">
          <div className="flex items-center justify-between">
            <a className="-m-1.5 p-1.5">
              <img className="h-8" src={images.logo} alt="Portfolio" />
            </a>
            <div className="flex">
              <button
                type="button"
                className="-m-2 p-2 text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-1 py-4">
                {navigation.map((item) => (
                  <div key={item.name} onClick={handleNavClick}>
                    <ReactNavItem
                      href={item.href}
                      label={item.name}
                    />
                  </div>
                ))}
              </div>
              <div className="py-4">
                <ReactButton
                  variant="nav"
                  label="Let's talk"
                  href="#contact"
                  onClick={handleNavClick}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
} 