import SocialIconDiv from "../features/SocialIconDiv";

function Home() {
  return (
    <div className="flex flex-col flex-wrap items-center text-center justify-center min-h-screen ">
      <h1 className="text-7xl">Hey there! I am Aung Kham Naung</h1>
      <h2 className="text-5xl mt-10">
        Software Engineer | Full Stack Developer
      </h2>
      <SocialIconDiv />
    </div>
  );
}

export default Home;
