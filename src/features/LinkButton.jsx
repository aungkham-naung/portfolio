// Link to Project Github & Live
function LinkButton({ link, children }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 bg-zinc-800 text-indigo-500 rounded-md hover:bg-indigo-500 transition-colors cursor-pointer border-1 hover:text-white hover:border-none text-lg">
        {children}
      </button>
    </a>
  );
}

export default LinkButton;
