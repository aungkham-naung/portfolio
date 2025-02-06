import SocialIconDiv from "../features/SocialIconDiv";

function Home() {
  return (
    <div className="container mx-auto py-10 min-h-screen flex items-center flex-col text-center justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Hey there! I am <span className="text-slate-400">Aung Kham Naung</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 italic">
        Software Engineer | Full Stack Developer
      </h2>
      <SocialIconDiv size={"text-3xl  md:text-4xl lg:text-5xl"} />
    </div>
  );
}

export default Home;
