import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <section className="pt-32">
      <div className="flex flex-col-reverse lg:flex-row max-w-7xl px-4 mx-auto bg-contain text-center lg:text-start items-center">
        <div className="flex-1">
          <Badge variant="secondary" className="mb-4">
            <span className="text-xs font-medium">Feito com ❤️ por Henrique Silveira</span>
          </Badge>
          <h1 className="text-[3.5rem] md:text-[4.1rem] text-zinc-800 max-w-[850px] leading-[calc(1em+4px)] tracking-[-0.04em] font-medium mb-4">
            Acompanhe e crie uma rotina para o seu pet
          </h1>

          <p className="text-xl font-normal leading-[1.4] text-gray-400 mb-4 w-full max-w-[600px]">
            Crie lembretes, acompanhe hábitos e fortaleça o bem-estar do seu melhor amigo em um só lugar.
          </p>

          <div className="mb-6">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
              <button className="bg-orange-500 py-2 px-3.5 rounded-lg font-medium text-white">
                Comece agora
              </button>
              <p className="text-xs leading-[1.125rem] text-gray-400">
                O app que entende o amor entre você e seu pet.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/assets/vetor-pets.png"
          width={600}
          alt="Description of image"
          className="mt-8 mx-auto w-[320px] mb-10 lg:w-[600px]"
        />
      </div>
    </section>
  )
}
