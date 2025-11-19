export const HeroSection = () => {
  return (
    <div className="relative w-full h-screen"> 
      <img
        src="protfolio.jpg"
        alt="portfolio"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-3">
        
        <p className="font-light text-2xl text-white">Hello, I'm</p>
        <h1 className="font-extrabold text-4xl text-white typewriter">
          Aayush Niroula
        </h1>
        <p className="font-light text-slate-400">AND THIS IS MY RESUME</p>
        </div>
      </div>
      <img src="ayush.png" alt=""
       className="absolute right-10 bottom-0 h-full object-contain drop-shadow-2xl"  />
    </div>
  );
};
