import ProjectCard from "../features/ProjectCard";

function ProjectDiv() {
  const projects = [
    {
      id: 1,
      title: "Check-in Manager",
      description: "testing123",
      imageUrl: "/project_ss/hotel.png",
      github: "https://github.com/aungkham-naung/hotel-management-application",
      live: "https://hotel-management-application-mu.vercel.app/"
    },
    {
      id: 2,
      title: "YelpCamp",
      description: "testing123",
      imageUrl: "/project_ss/camp.png",
      github: "https://github.com/aungkham-naung/yelp-camp",
      live: "https://yelp-camp-01ps.onrender.com"
    },
    {
      id: 3,
      title: "MovieSearch",
      description: "testing123",
      imageUrl: "/project_ss/movies.png",
      github: "https://github.com/aungkham-naung/movie-list-application"
    },
    {
      id: 4,
      title: "Pizza Menu",
      description: "testing123",
      imageUrl: "/project_ss/menu.png",
      github: "https://github.com/aungkham-naung/pizza-menu"
    },
    {
      id: 5,
      title: "Travel Diary",
      description: "testing123",
      imageUrl: "/project_ss/travel.png",
      github: "https://github.com/aungkham-naung/travel-diary"
    },
    {
      id: 6,
      title: "ClearPolicy",
      description: "testing123",
      imageUrl: "/project_ss/paypal.png",
      github: "https://github.com/MitChaudhari/ClearPolicy"
    }
  ];
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h2 className="text-5xl">Personal Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-250">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDiv;
