import { Button } from "@/components/ui/button";
import appStoreLogo from "@/assets/app-store-white.svg";
import googlePlayLogo from "@/assets/google-play.svg";
import Hero from "./hero";

export default function Home() {
  return (
    <div className="space-y-5 flex pt-20 lg:pt-36 flex-col justify-center items-center">
      <h1 className="font-montserrat lg:w-[600px] w-80 text-center font-black lg:text-6xl text-3xl tracking-tight">
        Controla tus gastos fácil y rápido
      </h1>

      <p className="text-lg text-center">
        La mejor app para controlar tus gastos.
      </p>
      <div className="flex gap-3 pt-7">
        <a
          //TODO: Add the correcct link to our app
          href="https://apps.apple.com/us/app/todoist-to-do-list-planner/id572688855"
          target="_blank"
        >
          <Button className="rounded-full  flex items-center gap-3 p-6 px-10">
            <img src={appStoreLogo} alt="app-store" className="w-5" />
            App Store
          </Button>
        </a>
        <a
          //TODO: Add the correcct link to our app
          href="https://play.google.com/store/apps/details?id=com.samsung.android.spay&hl=en&gl=US"
          target="_blank"
        >
          <Button className="rounded-full flex items-center gap-3 p-6 px-10">
            <img src={googlePlayLogo} alt="app-store" className="w-5" />
            Google Play
          </Button>
        </a>
      </div>
      <div className="bg-gradient-to-t from-zinc-800 to-white w-full">
        <Hero />
      </div>
    </div>
  );
}
