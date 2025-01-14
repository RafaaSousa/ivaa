import React from "react";

import Image from "next/image";
import logo from "@/app/public/images/logoBege.png";
import Button from "@/app/components/ui/Button";
import Cards from "@/app/components/ui/Cards";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="bg-background">
        <section className="p-8">
          <div className="min-h-screen flex flex-col items-center justify-start gap-8">
            <div className="flex flex-col items-center justify-center py-6">
              <Image src={logo} className="py-8" alt="Logo" />
              <span className="text-primary text-4xl text-center font-adventures">
                Sua consultoria de carreira e desenvolvimento
              </span>
            </div>
            <div className="flex flex-col font-brandon text-lg text-center text-primary py-6">
              <span className="">Te ajudo com:</span>
              <span>✓Mentoria personalizada</span>
              <span>✓Desenvolvimento de lideranças</span>
              <span>✓Programas sob medida para sua organização</span>
            </div>
            <div className="py-8">
              <Button
                className={
                  "bg-accent font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                }
              >
                Bora conversar?
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-primary p-6">
          <div className="flex flex-col items-center justify-start gap-8">
            <div>
              <Image
                className="h-max"
                src="/mobileCamilaOneSvg.svg"
                alt="Next.js logo"
                width={1090}
                height={1416}
                quality={100}
                priority
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/logoCamilaPedra.png"
                alt="Next.js logo"
                width={252}
                height={86}
                quality={100}
                object-fit="cover"
                priority
              />
              <h1 className="font-brandon text-2xl text-primaryRed font-semibold">
                Atuo há mais de 15 anos em RH,
                <br /> com passagens na Votorantim,
                <br />
                Grupo Zap, Ambev entre outras.
              </h1>
            </div>
            <div className="flex flex-col items-center font-brandon text-lg text-center text-accent font-medium gap-8">
              <span>
                Desenvolvi projetos reconhecidos, como o case Willbank, focado
                evolução e transformação cultural.
              </span>
              <span>
                Criei programas de liderança com alto engajamento e satisfação
                das equipes e líderes.
              </span>
              <span>
                Participei do podcast Jornada da Liderança para explorar os
                desafios da primeira liderança.
              </span>
              <span>
                Formação em Administração, Psicologia, MBA em RH (IBMEC) e
                certificações em DISC®, MBTI® e HUMANGUIDE®.
              </span>
            </div>
            <div>
              <Button
                className={
                  "bg-accent font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                }
              >
                Bora conversar?
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center p-6">
            <Image
              src="/nossaMissao.png"
              alt="Next.js logo"
              width={252}
              height={86}
              quality={100}
              object-fit="cover"
              priority
            />
            <p className="font-brandon text-lg text-center text-primary">
              Impulsionar o protagonismo, especialmente de mulheres, para que
              através de um profundo autoconhecimento possam se desenvolver,
              ocupar os lugares que desejam com confiança, deixando um impacto
              positivo e poderoso nas empresas onde atuam.
            </p>
          </div>
        </section>

        <section className="bg-accent p-6">
          <div className="flex flex-col items-center">
            <Image
              src="/nossasSolucoes.png"
              alt="Next.js logo"
              width={252}
              height={86}
              quality={100}
              object-fit="cover"
              priority
            />
            <div>
              <Cards />
            </div>
            <div>
            <Button
                className={
                  "bg-background font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                }
              >
                Bora conversar?
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-accent p-6">
          <div className="flex flex-col items-center">
            <div className="bg-primary border rounded-md p-44 py-3 mb-10 flex flex-col items-center text-center">teste</div>
            <div className=""></div>

          </div>
        </section>
      </main>
    </div>
  );
}