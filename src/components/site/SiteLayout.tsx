import type { ReactNode } from "react";
import { ArrowUpRight, Facebook, Instagram, Menu, Phone, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brandAssets, navItems, siteName, siteTagline } from "@/data/siteData";
import { cn } from "@/lib/utils";

type SiteLayoutProps = {
  children: ReactNode;
};

const SocialFloat = () => (
  <div className="fixed left-3 md:left-6 top-1/2 z-40 -translate-y-1/2 flex flex-col gap-3 md:gap-5 animate-float">
    {[
      { icon: Instagram, href: "https://instagram.com", label: "Instagram", bg: "bg-pink-600", delay: "delay-1" },
      { icon: Youtube, href: "https://youtube.com", label: "YouTube", bg: "bg-red-600", delay: "delay-2" },
      { icon: Facebook, href: "https://facebook.com", label: "Facebook", bg: "bg-blue-700", delay: "delay-3" },
      { icon: Twitter, href: "https://twitter.com", label: "Twitter", bg: "bg-sky-500", delay: "delay-4" },
    ].map((item, i) => (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "group relative flex size-10 md:size-12 items-center justify-center rounded-xl md:rounded-2xl text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:shadow-primary/40 animate-reveal",
          item.bg,
          item.delay
        )}
      >
        <item.icon className="size-4 md:size-5 transition-transform duration-700 group-hover:rotate-[360deg] relative z-10" />

        {/* Attraction: Persistent Pulse Glow */}
        <span className={cn(
          "absolute inset-0 -z-10 rounded-xl md:rounded-2xl animate-soft-glow opacity-50",
          item.bg
        )} />

        {/* Hover Attraction Ping */}
        <span className="absolute inset-0 -z-10 rounded-xl md:rounded-2xl bg-white/40 opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-100" />

        {/* Tooltip */}
        <span className="absolute left-full ml-4 rounded-lg bg-foreground px-2 py-1 text-[10px] font-black tracking-wide text-background opacity-0 transition-all group-hover:ml-6 group-hover:opacity-100">
          {item.label}
        </span>
      </a>
    ))}
    <div className="mx-auto h-20 w-px bg-gradient-to-b from-border to-transparent mt-2" />
  </div>
);

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    // Ensure the scroll happens after React Router renders the new page
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      {/* ─── Header ─── */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 h-20 transition-all duration-500 flex items-center p-4",
        )}
      >
        <div
          className={cn(
            "container flex items-center justify-between transition-all duration-500 rounded-2xl border border-transparent",
            scrolled
              ? "bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl border-border/50 py-3 px-3"
              : "bg-transparent py-0 px-0"
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 focus-visible:ring-offset-4"
            aria-label="Home - TN-PVC Interiors"
          >
            <img
              src={brandAssets.tnPvcLogo}
              alt=""
              className="size-10 rounded-xl object-contain"
              loading="eager"
            />
            <div className="hidden sm:block">
              <p className="text-base font-black tracking-tight text-foreground">
                TN-PVC
              </p>
              <p className="text-[10px] font-bold tracking-wide text-muted-foreground">
                Interiors
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.slice(0, 7).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="group relative rounded-full px-4 py-2 text-[11px] font-black tracking-wide text-muted-foreground transition-all hover:text-primary"
                activeClassName="text-primary bg-primary/5"
                end={item.path === "/"}
              >
                <span className="relative z-10">{item.shortLabel ?? item.label}</span>
                {/* Subtle indicator for active state */}
                <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-[.active]:w-4" />
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="tel:+918870826404"
              className="primary-btn h-11 px-6 text-[13px]" // 44px height (WCAG)
            >
              <Phone className="mr-2 size-3.5" aria-hidden="true" />
              Contact us
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-11 lg:hidden" // 44px (WCAG)
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-border/40 bg-background p-0 flex flex-col">
              <SheetHeader className="border-b border-border/20 px-8 py-6 text-left shrink-0">
                <SheetTitle className="text-xl font-black tracking-tight">{siteName}</SheetTitle>
                <SheetDescription className="text-xs font-medium text-muted-foreground">{siteTagline}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-1 flex-col justify-between p-8 overflow-y-auto">
                <nav className="space-y-2" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        className={cn(
                          "flex h-12 items-center rounded-xl px-4 text-sm font-bold transition-all",
                          location.pathname === item.path
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-surface hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </nav>

                <div className="space-y-6 border-t border-border/20 pt-8">
                  <div className="flex items-center gap-4">
                    <img src={brandAssets.aiPvcLogo} alt="" className="size-12 rounded-xl" />
                    <p className="text-[10px] font-bold tracking-wide text-muted-foreground">
                      Powered by AI-PVC Groups
                    </p>
                  </div>
                  <a
                    href="tel:+918489143405"
                    className="primary-btn w-full py-4 text-sm"
                  >
                    <Phone className="mr-2 size-4" aria-hidden="true" />
                    Call leadership
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ─── Main ─── */}
      <SocialFloat />
      <main id="main-content" className="relative pt-20">
        {children}
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border/40 bg-surface">
        <div className="container grid gap-16 py-20 lg:grid-cols-[1fr_0.8fr]">
          {/* Brand block */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img src={brandAssets.tnPvcLogo} alt="" className="size-12" loading="lazy" />
              <img src={brandAssets.aiPvcLogo} alt="" className="size-12" loading="lazy" />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-black tracking-tight">TN-PVC Interiors</h2>
              <p className="max-w-md text-sm font-medium leading-relaxed text-muted-foreground">
                The leading PVC and UPVC trade community for Tamil Nadu. Connecting manufacturers, contractors, and labour teams through digital-first coordination.
              </p>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Facebook", href: "https://www.facebook.com/srinivasan.x", icon: (
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  )
                },
                {
                  label: "Instagram", href: "https://www.instagram.com/siranthan_siran", icon: (
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  )
                },
                { label: "Website", href: "https://www.dexaz.in", icon: <ArrowUpRight className="size-5" /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-11 items-center justify-center rounded-xl bg-background text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid gap-12 sm:grid-cols-2">
            <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-wide text-primary">Contact support</p>
              <div className="space-y-3">
                <a className="block text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="tel:+918870826404">
                  Srinivasan · +91 8870826404
                </a>
                <a className="block text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="tel:+918489143405">
                  Siranthan Siran · +91 8489143405
                </a>
                <a className="block break-all text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="mailto:siranthan.siran.sk.1@gmail.com">
                  siranthan.siran.sk.1@gmail.com
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-wide text-primary">Quick links</p>
              <nav className="space-y-3 flex flex-col" aria-label="Footer links">
                <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" to="/network">Our network</Link>
                <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" to="/benefits">Business benefits</Link>
                <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" to="/contractors">For contractors</Link>
                <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" to="/clients">For clients</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-border/20">
          <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="text-xs font-bold text-muted-foreground">
              © {new Date().getFullYear()} TN-PVC Interiors.
            </p>
            <p className="text-xs font-bold text-muted-foreground">
              Built by{" "}
              <a href="https://www.dexaz.in" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Dexaz Groups
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
