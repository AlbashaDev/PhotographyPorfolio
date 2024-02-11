import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:min-h-screen p-5 sm:py-14 sm:px-10 bg-neutral-700">
      <section className="bg-stone-200 min-h-[84vh] sm:min-h-[85vh] p-10 rounded-lg">
        <nav className=" flex  justify-between">
          {/* Nav on SM Breakpoint = 640px */}
          <Image
            className="hidden sm:block -mt-11 -ml-5"
            src="/A.png"
            width={130}
            height={130}
            alt="logo"
          />
          <ul className="hidden sm:block justify-ends flex space-x-4 text-base font-burtons text-neutral-500">
            <li>
              <a
                href="https://calendly.com/albashafoto/30min"
                className="block hover:text-black
            "
              >
                Book
              </a>
            </li>
          </ul>
          {/* Nav For Phones */}
          <Image
            className=" sm:hidden -mt-11 -ml-5"
            src="/Name.png"
            width={130}
            height={130}
            alt="logo"
          />
        </nav>
        {/* Images Carousel */}
        <section className="pl-10">
          <div className="pb-4 text-neutral-500 font-burtons text-lg">
            <h1 className="hidden sm:block">Recent Work</h1>
          </div>
          <div
            class="carousel-container"
            className="overflow-scroll absolute h-[60vh] sm:h-[60vh] border-black border-4 "
          >
            <div class="carousel-slide" className="flex h-[100%] w-[100%] ">
              <Image
                className="mr-6"
                src="/DSC_1.jpeg"
                width={1000}
                height={1000}
                alt="slide"
              />
              <Image
                className="mr-6"
                src="/DSC_3.jpeg"
                width={1000}
                height={1000}
                alt="slide"
              />
              <Image
                className="mr-6"
                src="/DSC_3.jpeg"
                width={1000}
                height={1000}
                alt="slide"
              />
              <Image
                className=""
                src="/DSC_4.jpeg"
                width={1000}
                height={1000}
                alt="slide"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
