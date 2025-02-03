// Link to Project Github & Live
function LinkButton({ link, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = { link };
  };
  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-zinc-500 transition-colors"
    >
      {children}{" "}
    </button>
  );
}

export default LinkButton;
