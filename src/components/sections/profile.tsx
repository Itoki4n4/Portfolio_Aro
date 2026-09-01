"use client";

import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

import { ABOUT_ME, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";

// =============================================
// CUSTOM HOOKS
// =============================================
const useMadagascarTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("fr-FR", {
        timeZone: "Indian/Antananarivo",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

// =============================================
// MAIN COMPONENT
// =============================================
const Profile = () => {
  const { lang } = useLanguage();
  const currentTime = useMadagascarTime();
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  // Close Lightbox Modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowProfileModal(false);
      }
    };
    if (showProfileModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [showProfileModal]);

  return (
    <section className="px-4 py-3 sm:py-4">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Profile Image - Enlarged & Interactive Lightbox Modal */}
        <div className="flex-shrink-0 relative group">
          <div
            onClick={() => setShowProfileModal(true)}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-border shadow-md cursor-zoom-in hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            title={lang === "fr" ? "Cliquer pour agrandir la photo de profil" : "Click to view full size profile photo"}
          >
            {isHovering ? (
              <Image
                src={ABOUT_ME.profileGif}
                alt="Profile GIF"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                unoptimized // Keep GIF animation
              />
            ) : (
              <Image
                src={ABOUT_ME.profileImage}
                alt={ABOUT_ME.name}
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            )}
            
            {/* Zoom Overlay Indicator */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full text-white">
              <ZoomIn className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{ABOUT_ME.name}</h1>
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <MdVerified className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 cursor-pointer" />
              {showTooltip && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background text-foreground border border-border text-xs sm:text-sm px-2.5 py-1 rounded-lg whitespace-nowrap z-10 shadow-lg font-mono">
                  {UI_TEXT.sections.verifiedTooltip[lang]}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border"></div>
                </div>
              )}
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground font-medium">
            {ABOUT_ME.title[lang]}
          </p>
        </div>

        {/* Location & Time */}
        <div className="hidden md:block text-sm sm:text-base text-muted-foreground space-y-1 text-right">
          <div className="flex items-center gap-2 justify-end">
            <FaLocationCrosshairs className="w-4 h-4 text-emerald-500" />
            <span className="font-mono">{ABOUT_ME.location[lang]}</span>
          </div>
          <div className="font-mono">{currentTime} EAT</div>
        </div>
      </div>

      {/* Profile Photo Full-Size Lightbox Modal */}
      {showProfileModal && (
        <div
          onClick={() => setShowProfileModal(false)}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 select-none cursor-pointer"
        >
          {/* Top Bar with Close Button */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
            <button
              onClick={() => setShowProfileModal(false)}
              className="p-2.5 rounded-full bg-muted/40 border border-emerald-500/40 text-white hover:bg-emerald-500/20 hover:text-emerald-400 transition-all cursor-pointer shadow-lg"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Profile Photo Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[92vw] max-h-[85vh] flex flex-col items-center justify-center space-y-3 cursor-default"
          >
            <div className="relative max-w-full max-h-[80vh] overflow-hidden rounded-full border-4 border-emerald-500/50 shadow-2xl bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ABOUT_ME.profileGif || ABOUT_ME.profileImage}
                alt={ABOUT_ME.name}
                className="w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] object-cover rounded-full"
              />
            </div>

            {/* Profile Caption Badge */}
            <div className="px-4 py-2 rounded-xl bg-background/90 border border-dashed border-border text-center font-mono text-xs text-foreground max-w-md shadow-lg">
              <span className="text-emerald-400 font-semibold mr-1 font-mono">[PROFILE_PHOTO]</span>
              <span>{ABOUT_ME.name} — {ABOUT_ME.title[lang]}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
