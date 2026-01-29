import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { navRoutes } from '@/const/routes';
import { DogPenNavButton, CurrentProfile, LanguageList } from '@/Components';
import { useMediaQuery } from 'usehooks-ts';
import { FaBars, FaX } from 'react-icons/fa6';
import './Header.scss';

gsap.registerPlugin(ScrollTrigger);

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (isOpen && content.current && backdrop.current) {
      const tl = gsap.timeline();
      
      // Fade in backdrop
      tl.to(backdrop.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        ease: 'power2.out',
      })
      // Slide in the menu
      .to(content.current, {
        right: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.2')
      // Animate close button
      .fromTo(closeButton.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
        },
        '-=0.4'
      )
      // Stagger in the navigation items
      .fromTo(navItemsRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    } else if (!isOpen && content.current && backdrop.current) {
      gsap.to(content.current, {
        right: '-100%',
        duration: 0.4,
        ease: 'power3.in',
      });
      gsap.to(backdrop.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  // Animate trigger button
  useGSAP(() => {
    if (trigger.current) {
      gsap.fromTo(trigger.current,
        { scale: 0, rotation: -180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 0.6, 
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      );
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="header__mobileHeader">
      <button 
        ref={trigger} 
        className="header__mobileHeader__trigger" 
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
        }}
      >
        <FaBars />
      </button>
      
      {/* Backdrop overlay */}
      <div 
        ref={backdrop}
        className="header__mobileHeader__backdrop"
        onClick={handleClose}
      />
      
      <div ref={content} className="header__mobileHeader__content">
        <button 
          ref={closeButton}
          className="header__mobileHeader__content__closeButton" 
          onClick={handleClose}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, { 
              scale: 1.1, 
              rotation: 90,
              duration: 0.3, 
              ease: 'power2.out' 
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, { 
              scale: 1,
              rotation: 0, 
              duration: 0.3, 
              ease: 'power2.out' 
            });
          }}
        >
          <FaX />
        </button>
        
        <nav className="header__mobileHeader__content__nav">
          {navRoutes.map((route, index) => (
            <Link 
              key={route.title} 
              to={route.path}
              ref={(el) => {
                if (el) navItemsRef.current[index] = el as any;
              }}
              onClick={handleClose}
            >
              <div className="header__mobileHeader__content__nav__links__icon">{route.icon}</div>
              <h3 className="header__mobileHeader__content__nav__links__title">{route.title}</h3>
            </Link>
          ))}
        </nav>
        <div ref={(el) => {
          if (el) navItemsRef.current[navRoutes.length] = el as any;
        }}>
          <DogPenNavButton />
        </div>
        <div ref={(el) => {
          if (el) navItemsRef.current[navRoutes.length + 1] = el as any;
        }}>
          <CurrentProfile path="/current-profile" />
        </div>
      </div>
    </div>
  )
}

function DesktopHeader() {
  const navRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<HTMLAnchorElement[]>([]);

  // Initial entrance animation
  useGSAP(() => {
    if (navItemsRef.current.length > 0) {
      gsap.fromTo(navItemsRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }
  }, []);

  // Magnetic hover effect
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const icon = target.querySelector('.header__nav__links__icon');
    const title = target.querySelector('.header__nav__links__title');

    gsap.to(target, {
      y: -3,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to([icon, title], {
      x: 5,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.05,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const icon = target.querySelector('.header__nav__links__icon');
    const title = target.querySelector('.header__nav__links__title');

    gsap.to(target, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to([icon, title], {
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <>
      <nav className="header__nav" ref={navRef}>
        {navRoutes.map((route, index) => (
          <Link
            key={route.title}
            to={route.path}
            className="header__nav__links"
            ref={(el) => {
              if (el) navItemsRef.current[index] = el;
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="header__nav__links__icon">{route.icon}</div>
            <h3 className="header__nav__links__title">{route.title}</h3>
          </Link>
        ))}
        <div ref={(el) => {
          if (el) navItemsRef.current[navRoutes.length] = el as any;
        }}>
          <DogPenNavButton />
        </div>
        <div ref={(el) => {
          if (el) navItemsRef.current[navRoutes.length + 1] = el as any;
        }}>
          <CurrentProfile path="/current-profile" />
        </div>
      </nav>
      <LanguageList />
    </>
  )
}

export default function Header() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoImageRef = useRef<HTMLImageElement>(null);
  const logoTitleRef = useRef<HTMLSpanElement>(null);

  // Initial logo animation
  useGSAP(() => {
    if (logoImageRef.current && logoTitleRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(logoImageRef.current,
        { 
          scale: 0, 
          rotation: -360,
          opacity: 0,
        },
        { 
          scale: 1, 
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }
      )
      .fromTo(logoTitleRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }
  }, []);

  // Scroll-based header animation
  useGSAP(() => {
    if (headerRef.current) {
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: '+=100',
        onUpdate: (self) => {
          const progress = self.progress;
          if (headerRef.current) {
            gsap.to(headerRef.current, {
              backgroundColor: `rgba(255, 136, 0, ${0.85 + progress * 0.15})`,
              padding: `${16 - progress * 4}px ${24}px`,
              duration: 0.3,
              boxShadow: progress > 0.5 ? '0 4px 20px rgba(0, 0, 0, 0.15)' : '0 0 0 rgba(0, 0, 0, 0)',
            });
          }
        },
      });
    }
  }, []);

  // Logo hover animation
  const handleLogoHover = (isHovering: boolean) => {
    if (logoImageRef.current) {
      gsap.to(logoImageRef.current, {
        rotation: isHovering ? 360 : 0,
        scale: isHovering ? 1.15 : 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
    if (logoTitleRef.current) {
      gsap.to(logoTitleRef.current, {
        x: isHovering ? 5 : 0,
        color: isHovering ? '#fff' : '#ffffff',
        textShadow: isHovering 
          ? '-2px -2px 2px rgba(255, 87, 34, 0.8), 4px 4px 4px rgba(109, 109, 109, 0.9)'
          : '-2px -2px 1px var(--third-color), 4px 4px 1px rgba(109, 109, 109, 0.7)',
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <Link 
        to="/" 
        className="header__homeLink" 
        ref={logoRef}
        onMouseEnter={() => handleLogoHover(true)}
        onMouseLeave={() => handleLogoHover(false)}
      >
        <img 
          ref={logoImageRef}
          className="header__homeLink__image" 
          src='/images/orangePawPrint.png' 
          alt="white paw" 
        />
        <span ref={logoTitleRef} className="header__homeLink__title">{t('nav.title')}</span>
      </Link>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
}