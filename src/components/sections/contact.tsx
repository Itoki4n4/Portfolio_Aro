"use client";

import {
  User,
  Mail,
  ArrowRight,
  Github,
  Linkedin,
  Phone,
  Check,
  Copy,
  FileText,
} from "lucide-react";
import { FaWhatsapp, FaRegCommentDots } from "react-icons/fa6";
import { useState, ChangeEvent, FormEvent, ComponentType } from "react";
import { SOCIAL_LINKS, CONTACT_FORM_ENDPOINT, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";

// =============================================
// TYPE DEFINITIONS
// =============================================
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormFieldConfig {
  name: keyof FormData;
  type: string;
  icon: ComponentType<{ className?: string }>;
  rows?: number;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

type SetStateFunction<T> = (value: T | ((prev: T) => T)) => void;

// =============================================
// FORM CONFIGURATION
// =============================================
const FORM_FIELDS: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    icon: User,
  },
  {
    name: "email",
    type: "email",
    icon: Mail,
  },
  {
    name: "message",
    type: "textarea",
    icon: FaRegCommentDots,
    rows: 5,
  },
];

// =============================================
// HELPER FUNCTIONS
// =============================================
const submitForm = async (
  formData: FormData,
  setStatus: SetStateFunction<FormStatus>,
  setErrorMessage: SetStateFunction<string>,
  setFormData: SetStateFunction<FormData>
) => {
  setStatus("submitting");
  setErrorMessage("");

  try {
    const response = await fetch(CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      const errorData = await response.json();
      setErrorMessage(
        errorData.error || "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  } catch {
    setErrorMessage("An unexpected error occurred. Please try again.");
    setStatus("error");
  }
};

// =============================================
// INTERACTIVE CONTACT MODULES
// =============================================

// WhatsApp Terminal Decoder Module
function WhatsAppTerminal({ lang }: { lang: "en" | "fr" }) {
  const phone = "+261 34 09 00 852";
  const rawPhone = "261340900852";
  const [displayedPhone, setDisplayedPhone] = useState(phone);
  const [copied, setCopied] = useState(false);

  const startDecode = () => {
    const chars = "0123456789+ #$%&*";
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayedPhone(
        phone
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return phone[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= phone.length) {
        clearInterval(interval);
        setDisplayedPhone(phone);
      }
      iteration += 1 / 2;
    }, 30);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("+261340900852");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div
        className="p-4 rounded-xl bg-background/90 border border-emerald-500/30 font-mono text-xs shadow-[0_0_15px_rgba(57,211,83,0.08)] cursor-pointer group"
        onClick={startDecode}
      >
        <div className="flex items-center justify-between border-b border-dashed border-emerald-500/20 pb-2 mb-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 font-semibold">WHATSAPP_GATEWAY</span>
          </div>
          <span className="text-[10px] opacity-60">STATUS: ONLINE</span>
        </div>

        <div className="space-y-1">
          <p className="text-muted-foreground text-[11px]">
            user@aro-randria:~$ whatsapp --connect +261340900852
          </p>
          <div className="text-sm font-bold text-foreground tracking-wider py-1 flex items-center gap-1">
            <span>&gt;</span>
            <span className="text-emerald-400">{displayedPhone}</span>
            <span className="animate-ping text-emerald-500">█</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={`https://wa.me/${rawPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex-1 py-2 px-3 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer"
        >
          <FaWhatsapp className="w-4 h-4 text-emerald-500" />
          <span>{lang === "fr" ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}</span>
        </a>

        <button
          onClick={handleCopy}
          className="btn py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer"
          title="Copy phone number"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-muted-foreground" />
          )}
          <span>{copied ? (lang === "fr" ? "Copié !" : "Copied!") : (lang === "fr" ? "Copier" : "Copy")}</span>
        </button>
      </div>
    </div>
  );
}

// Email HUD Display Module
function EmailHUDDisplay({ lang }: { lang: "en" | "fr" }) {
  const email = "arorandria1@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/20 via-background to-background border border-emerald-500/40 font-mono text-xs relative overflow-hidden shadow-[0_0_20px_rgba(57,211,83,0.12)]">
        <div className="absolute top-0 right-0 p-2 text-[9px] text-emerald-500/40 font-mono select-none">
          [DIRECT_MAIL_NODE]
        </div>

        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Mail className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
            {lang === "fr" ? "Email de Contact Direct" : "Direct Email Contact"}
          </span>
        </div>

        <div className="py-2 px-3 rounded-lg bg-muted/40 border border-dashed border-border/80 flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-foreground tracking-tight select-all">
            {email}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={`mailto:${email}`}
          className="btn flex-1 py-2 px-3 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer"
        >
          <Mail className="w-4 h-4 text-emerald-500" />
          <span>{lang === "fr" ? "Envoyer un e-mail" : "Send Email"}</span>
        </a>

        <button
          onClick={handleCopy}
          className="btn py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-muted-foreground" />
          )}
          <span>{copied ? (lang === "fr" ? "Copié !" : "Copied!") : (lang === "fr" ? "Copier" : "Copy")}</span>
        </button>
      </div>
    </div>
  );
}

// =============================================
// MAIN COMPONENT
// =============================================
const Contact = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm(formData, setStatus, setErrorMessage, setFormData);
  };

  const getFieldLabels = (fieldName: keyof FormData) => {
    switch (fieldName) {
      case "name":
        return {
          label: UI_TEXT.sections.nameLabel[lang],
          placeholder: UI_TEXT.sections.namePlaceholder[lang],
        };
      case "email":
        return {
          label: UI_TEXT.sections.emailLabel[lang],
          placeholder: UI_TEXT.sections.emailPlaceholder[lang],
        };
      case "message":
        return {
          label: UI_TEXT.sections.messageLabel[lang],
          placeholder: UI_TEXT.sections.messagePlaceholder[lang],
        };
    }
  };

  return (
    <section id="contact">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border text-foreground">
        <h2 className="text-2xl font-semibold flex items-center">
          {UI_TEXT.sections.connect[lang]}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-border">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div>
            <div className="p-4 border-b border-dashed border-border">
              <h3 className="text-xl font-medium mb-1">
                {UI_TEXT.sections.sendMessage[lang]}
              </h3>
              <p className="text-sm text-muted-foreground">
                {UI_TEXT.sections.dropMessageSub[lang]}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="border-b border-dashed border-border divide-y divide-dashed divide-border">
                {FORM_FIELDS.map((field) => {
                  const Icon = field.icon;
                  const { label, placeholder } = getFieldLabels(field.name);
                  const commonClasses =
                    "flex-1 py-4 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200";

                  return (
                    <div
                      key={field.name}
                      className="flex items-start gap-4 px-4 group transition-colors focus-within:bg-muted/30"
                    >
                      <div className="py-4 flex items-center text-muted-foreground/60 transition-colors duration-200 group-focus-within:text-foreground">
                        <Icon className="w-5 h-5" />
                      </div>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required
                          aria-label={label}
                          placeholder={placeholder}
                          rows={field.rows}
                          className={`${commonClasses} resize-none`}
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required
                          aria-label={label}
                          placeholder={placeholder}
                          className={commonClasses}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`btn w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer group ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {status === "submitting" ? (
                    UI_TEXT.sections.sending[lang]
                  ) : (
                    <>
                      <span>{UI_TEXT.sections.sendMessageBtn[lang]}</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm text-center mt-2">
                    {UI_TEXT.sections.successMsg[lang]}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm text-center mt-2">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Sidebar - Me contacter & discuter */}
        <div className="lg:col-span-2 divide-y divide-dashed divide-border">
          {/* Direct Contact Modules */}
          <div className="flex flex-col items-start w-full">
            <div className="p-4 border-b border-dashed border-border w-full">
              <h3 className="text-xl font-medium mb-1">
                {UI_TEXT.sections.scheduleMeeting[lang]}
              </h3>
              <p className="text-sm text-muted-foreground">
                {UI_TEXT.sections.bookMeetSub[lang]}
              </p>
            </div>

            {/* Module 1: WhatsApp Direct Chat */}
            <div className="p-4 border-b border-dashed border-border w-full space-y-2">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-5 h-5 text-emerald-500" />
                <h4 className="text-base font-medium">
                  {lang === "fr" ? "WhatsApp Chat Direct" : "WhatsApp Direct Chat"}
                </h4>
              </div>
              <WhatsAppTerminal lang={lang} />
            </div>

            {/* Module 2: Direct Email Display */}
            <div className="p-4 w-full space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-500" />
                <h4 className="text-base font-medium">
                  {lang === "fr" ? "Adresse Email Directe" : "Direct Email Address"}
                </h4>
              </div>
              <EmailHUDDisplay lang={lang} />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start w-full">
            <div className="p-4 border-b border-dashed border-border w-full">
              <h3 className="text-xl font-medium mb-1">
                {UI_TEXT.sections.followConnect[lang]}
              </h3>
              <p className="text-sm text-muted-foreground">
                {UI_TEXT.sections.followSub[lang]}
              </p>
            </div>

            <div className="p-4 w-full flex justify-start">
              <div className="flex items-center gap-3 w-full max-w-[340px]">
                {/* GitHub */}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 btn flex items-center justify-center rounded-lg"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 btn flex items-center justify-center rounded-lg"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                {/* Wider CV / Resume Download Button */}
                <a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 btn rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer shadow-sm group"
                  title="Download CV / Télécharger mon CV"
                >
                  <FileText className="w-4 h-4 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                  <span>{lang === "fr" ? "Mon CV" : "My CV"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
