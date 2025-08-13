export default function tags() {
  return (
    <div className="group relative w-fit">
      <div className="absolute -z-10 -inset-1 rounded-xl bg-gradient-to-r from-teal-500 via-gold to-green-500 opacity-10 blur-sm transition-all duration-500 group-hover:opacity-30 group-hover:blur-2xl" />
      <form className="flex bg-gray-900 border border-gray-700 text-white rounded-md shadow text-sm">
        <div aria-disabled="true" className="w-10 grid place-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <select id="currency" name="currency" aria-label="Currency" className="col-start-1 row-start-1 w-48 appearance-none rounded-md bg-gray-900 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-none">
          
        </select>
      </form>
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}