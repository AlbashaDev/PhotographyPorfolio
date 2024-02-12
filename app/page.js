import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:min-h-screen p-5 lg:py-14 lg:px-10 bg-neutral-700">
      <section className="bg-stone-200 min-h-[84vh] lg:min-h-[85vh] p-10 rounded-lg">
        <nav className=" flex  justify-between">
          {/* Nav on lg Breakpoint = 640px */}
          <Image
            className="hidden lg:block -mt-11 -ml-5"
            src="/A.png"
            width={130}
            height={130}
            alt="logo"
          />
          <ul className="hidden lg:block justify-ends flex space-x-4 text-base font-burtons text-neutral-500">
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
            className=" lg:hidden -mt-16 -ml-6"
            src="/Name.png"
            width={130}
            height={130}
            alt="logo"
          />
        </nav>
        {/* Images Carousel */}
        <section className="pl-10 -mt-4 lg:-mt-0">
          <div className="lg:pb-4 text-neutral-500 font-burtons text-lg">
            <h1 className="hidden lg:block">Recent Work</h1>
          </div>
          <div className="carousel-container overflow-scroll absolute h-[60vh] lg:h-[60vh] ">
            <div className="carousel-slider flex h-full w-full ">
              <Image
                className="mr-6 border-black border-2 object-cover"
                src="/DSC_1.jpeg"
                width={1000}
                height={1000}
                alt="slide"
              />
              <Image
                className="mr-6 border-black border-2 object-cover"
                src="/DSC_2.jpeg"
                width={1000}
                height={1000}
                alt="slide"
              />
              <Image
                className="mr-6 border-black border-2 object-cover"
                src="/DSC_3.jpeg"
                width={1000}
                height={1000}
                alt="slide"
              />
              <Image
                className="border-black border-2 object-cover"
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
