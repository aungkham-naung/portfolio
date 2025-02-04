// Link to Project Github & Live
function LinkButton({ link, children }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-zinc-500 transition-colors cursor-pointer">
        {children}
      </button>
    </a>
  );
}

export default LinkButton;
