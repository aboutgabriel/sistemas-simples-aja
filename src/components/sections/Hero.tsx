import { ArrowRight, Zap, Settings2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FunnelIllustration from "@/components/ui/FunnelIllustration";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tags = [
    { icon: Zap, title: "Entrega Rápida" },
    { icon: Settings2, title: "100% Sob Medida" },
    { icon: Sparkles, title: "Inteligência Artificial" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy text-white">
      {/* Background decoration (glow + gradiente sutil) */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente “hero” */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/10" />

        {/* glows */}
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-primary/25 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-28 -right-28