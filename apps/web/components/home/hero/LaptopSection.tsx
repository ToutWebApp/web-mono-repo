import Image from "next/image";

export default function LaptopSection() {
  return (
    <section className="relative z-30 h-screen flex items-center justify-center px-6 md:px-16">
      <div className="relative w-[600px] h-[400px]">
        {/* Centered Image */}
        <Image
          src="/laptop.svg"
          alt="Dashboard"
          fill
          className="object-contain drop-shadow-xl rounded-xl transition-transform duration-300 hover:scale-105"
        />

        {/* Text at top-right of image */}
        <div className="absolute top-0 right-[-10rem] p-4 rounded-lg animate-fade-in-right">
          <h3 className="text-base font-bold text-black">Easy Management</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            You can track and manage all <br />
            your purchased services from <br />
            the dashboard
          </p>
        </div>
      </div>
    </section>
  );
}
