export default function Testimonials() {
  return (
    <div className="text-center justify-center px-14 h-screen  flex flex-col items-center">
      <div className="font-montserrat font-bold text-3xl tracking-tight w-1/2">
        La gente habla de como ha cambiado su forma de gestionar sus finanzas
      </div>
      <div className="grid grid-cols-6 p-20 gap-7 grid-flow-row text-start">
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="bg-zinc-100 col-span-2 space-y-3 rounded-3xl p-5"
        >
          <section className="flex items-center gap-2">
            <img
              src="https://mighty.tools/mockmind-api/content/human/68.jpg"
              alt="profile-pic"
              width={50}
              height={50}
              className="rounded-full border-2 border-teal-500"
            />
            <span className="font-montserrat font-bold ">Micaela Jimenez</span>
          </section>
          <p className="font-montserrat font-medium text-sm">
            Esta app ha cambiado la forma en que gestiono mis finanzas. ¡Una
            herramienta esencial para trackear mis gastos y tener el control
            financiero que necesitaba !
          </p>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="600"
          className="bg-zinc-100 col-span-2 space-y-3 rounded-3xl p-5"
        >
          <section className="flex items-center gap-2">
            <img
              src="https://mighty.tools/mockmind-api/content/human/65.jpg"
              alt="profile-pic"
              width={50}
              height={50}
              className="rounded-full border-2 border-teal-500"
            />
            <span className="font-montserrat font-bold ">
              Roberto Altamirano
            </span>
          </section>
          <p className="font-montserrat font-medium text-sm">
            ¡Increíble app! La versión premium de Expense Tracker, he mejorado
            mi conciencia sobre los gastos que realizo, y así mantenerme dentro
            de mi presupuesto mensual.
          </p>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="700"
          className="bg-zinc-100 col-span-2 space-y-3 rounded-3xl p-5"
        >
          <section className="flex items-center gap-2">
            <img
              src="https://mighty.tools/mockmind-api/content/human/35.jpg"
              alt="profile-pic"
              width={50}
              height={50}
              className="rounded-full border-2 border-teal-500"
            />
            <span className="font-montserrat font-bold ">Alex Peña</span>
          </section>
          <p className="font-montserrat font-medium text-sm">
            Expense Tracker es una joya para el control financiero. La versión
            premium no solo me ayuda a rastrear mis gastos, sino que también me
            motiva a ahorrar con las metas personalizadas
          </p>
        </div>
        <div></div>
        <div
          data-aos="fade-in"
          data-aos-delay="800"
          className="bg-zinc-100 col-span-2 space-y-3 rounded-3xl p-5"
        >
          <section className="flex items-center gap-2">
            <img
              src="https://mighty.tools/mockmind-api/content/human/57.jpg"
              alt="profile-pic"
              width={50}
              height={50}
              className="rounded-full border-2 border-teal-500"
            />
            <span className="font-montserrat font-bold ">Javy Condezo</span>
          </section>
          <p className="font-montserrat font-medium text-sm">
            Expense Tracker ha simplificado mi vida financiera. La opción
            premium no solo me ayuda a controlar mis gastos, sino que también me
            incentiva a ahorrar!
          </p>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="900"
          className="bg-zinc-100 col-span-2 space-y-3 rounded-3xl p-5"
        >
          <section className="flex items-center gap-2">
            <img
              src="https://mighty.tools/mockmind-api/content/human/43.jpg"
              alt="profile-pic"
              width={50}
              height={50}
              className="rounded-full border-2 border-teal-500"
            />
            <span className="font-montserrat font-bold ">
              Romina Valladares
            </span>
          </section>
          <p className="font-montserrat font-medium text-sm">
            Como alguien que siempre luchó por seguir un presupuesto, Expense
            Tracker ha sido una revelación. ¡Ahora puedo ser capaz de regular
            mis gastos!"
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
