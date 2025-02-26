import ProjectCard from "../features/ProjectCard";

function ProjectDiv() {
  const projects = [
    {
      id: 1,
      title: "StoreIt",
      description:
        "StoreIt is a secure cloud storage solution designed to help individuals store, manage, back up, and share files seamlessly across all devices. With a user-friendly interface and robust functionality, StoreIt ensures smooth file organization and accessibility anytime, anywhere.",
      imageUrl: "/project_ss/drive.png",
      github: "https://github.com/aungkham-naung/storage-drive",
      live: "https://storage-drive-delta.vercel.app/sign-in"
    },
    {
      id: 2,
      title: "Check-in Manager",
      description:
        "Easily manage cabins, bookings, and guest data from one dashboard. Set up rooms, handle check-ins/check-outs, confirm payments, and monitor daily stats—all from a single, shareable link. A convenient way for hotel staff to stay on top of every reservation and guest detail.",
      imageUrl: "/project_ss/hotel.png",
      github: "https://github.com/aungkham-naung/hotel-management-application",
      live: "https://hotel-management-application-mu.vercel.app/"
    },
    {
      id: 3,
      title: "YelpCamp",
      description:
        "Discover and rate campgrounds, add your own with images, and share reviews—all in one place. An interactive map projects exploring locations, and secure user accounts keep your data private. Perfect for outdoor enthusiasts looking to find, create, and discuss the best camping spots.",
      imageUrl: "/project_ss/camp.png",
      github: "https://github.com/aungkham-naung/yelp-camp",
      live: "https://yelp-camp-01ps.onrender.com"
    },
    {
      id: 4,
      title: "usePopcorn",
      description:
        "An application built with dynamic and interactive platform for movie enthusiasts to explore, catalog, and manage their favorite films. It fetches real-time movie data from the OMDb API, offering users an engaging and responsive experience for browsing, reviewing, and tracking watched movies.",
      imageUrl: "/project_ss/movies.png",
      github: "https://github.com/aungkham-naung/movie-list-application"
    },
    {
      id: 5,
      title: "Pizza Menu",
      description:
        "Application that lets users easily browse, customize, and order pizzas from an online menu. It provides an interactive and user-friendly interface, allowing users to see real-time availability (sold out or available items), add pizzas to the cart, and prioritize items with a surcharge.",
      imageUrl: "/project_ss/menu.png",
      github: "https://github.com/aungkham-naung/pizza-menu"
    },
    {
      id: 6,
      title: "ClearPolicy",
      description:
        "ClearPolicy is a lightweight Chrome extension designed to simplify the way users interact with complex privacy policies and terms & conditions. It empowers users to make informed decisions about signing up for online services by identifying and summarizing problematic or concerning clauses.",
      imageUrl: "/project_ss/paypal.png",
      github: "https://github.com/MitChaudhari/ClearPolicy"
    }
  ];
  return (
    <div className="container mx-auto py-10 text-center sm:text-left">
      <div className="mb-8">
        <h2 className="lg:text-5xl md:text-4xl text-3xl">Personal Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-240">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDiv;
