'use client';

import clsx from "clsx";
import type { FC, ReactNode } from "react";
import ReactPlayer from "react-player";

interface HeroSectionProps {
  /** Tamanho da largura da seção */
  size: "full" | "middle";
  /** Título da seção */
  title?: string;
  /** Subtítulo da seção */
  subtitle?: string;
  /** Texto do botão */
  buttonText?: string;
  /** URL da imagem de fundo */
  backgroundImageLocalPath?: string;
  /** URL do vídeo de fundo (tem prioridade sobre a imagem de fundo) */
  backgroundVideoLocalPath?: string;
  /** Classes adicionais para customização da seção */
  sectionClassName?: string;
  /** Classes adicionais para customização do título */
  titleClassName?: string;
  /** Classes adicionais para customização do subtítulo */
  subtitleClassName?: string;
  /** Classes adicionais para customização do botão */
  buttonClassName?: string;
  /** Função chamada ao clicar no botão */
  onButtonClick?: () => void;
  /** Conteúdo adicional a ser renderizado dentro da seção */
  children?: ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({
  size,
  title,
  subtitle,
  buttonText,
  backgroundImageLocalPath,
  backgroundVideoLocalPath,
  sectionClassName,
  titleClassName,
  subtitleClassName,
  buttonClassName,
  onButtonClick,
  children,
}: HeroSectionProps) => {
  return (
    <section
      className={clsx(
        size === "full" ? "w-full" : "w-full max-w-7xl mx-auto",
        "relative flex flex-col items-center px-8 py-12",
        "bg-cover bg-center",
        sectionClassName
      )}
      style={
        !backgroundVideoLocalPath && backgroundImageLocalPath
          ? { backgroundImage: `url(${backgroundImageLocalPath})` }
          : undefined
      }
    >
      {backgroundVideoLocalPath && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ReactPlayer
            wrapper="div"
            src={backgroundVideoLocalPath}
            playing
            loop
            muted
            playsInline
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            className="!absolute !inset-0 !w-full !h-full !max-w-none !max-h-none pointer-events-none [&_video]:!object-cover"
          />
        </div>
      )}
      {title && (
        <h1
          className={clsx(
            "relative z-10 text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-2 text-foreground",

            titleClassName
          )}
        >
          {title}
        </h1>
      )}
      {subtitle && (
        <h2
          className={clsx(
            "relative z-10 text-base sm:text-lg  text-foreground/60 font-regular font-secondary text-center",
            subtitleClassName
          )}
        >
          {subtitle}
        </h2>
      )}
      {children && children}
      {buttonText && (
        <button
          className={clsx(
            "relative z-10 mt-4 bg-primary-500 rounded-md py-2 px-4",
            buttonClassName
          )}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}
    </section>
  );
};
