import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ReactButton, ReactNavItem } from '../shared/wrappers';
import { images } from '../../constants/images';
import { useNavigate, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/#hero' },
  { name: 'About Me', href: '/#about' },
  { name: 'Experience', href: '/#education' },
  { name: 'Projects', href: '/#projects' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home first
      navigate('/', { replace: true });
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const sectionId = href.split('#')[1];
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const sectionId = href.split('#')[1];
      scrollToSection(sectionId);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="section-container flex items-center justify-between py-3 sm:py-1" aria-label="Global">
        {/* Logo */}
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5" onClick={handleLogoClick}>
            <img className="h-16" src={images.logo} alt="Portfolio" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <ReactNavItem
                label={item.name}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
            <ReactButton
              variant="nav"
              label="Let's talk"
            />
          </a>
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
                  <div key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <ReactNavItem
                        label={item.name}
                      />
                    </a>
                  </div>
                ))}
              </div>
              <div className="py-4">
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  <ReactButton
                    variant="nav"
                    label="Let's talk"
                  />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
} 