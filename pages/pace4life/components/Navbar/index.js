const Navbar = () => {
  return (
    <div class="flex flex-row justify-between bg-blue-100 items-center w-16 w-screen p-4">
      <div class="bg-blue-500 text-bold">
        <span>PACE4LIFE</span>
      </div>
      <div class="flex flex-row space-x-4">
        <div class="flex">
          <input class="form-input rounded-sm bg-blue-200"></input>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div>blog</div>
        <div>about</div>
        <div>contact</div>
        <div class="button bg-blue-500 rounded-sm px-4">donate</div>
      </div>
    </div>
  );
};

export default Navbar;
