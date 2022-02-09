export default function ProfileInfo() {
  return (
    <div className="absolute w-full flex flex-col items-center md:w-auto md:left-1/4 -bottom-56 text-center md:-bottom-28 md:text-left md:items-start">
      <h3 className="text-3xl dark:text-white font-medium text-center w-full">
        Harsh Mangalam
      </h3>

      <div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
          32 Friends
        </p>
      </div>

      <div class="-space-x-3">
        <img
          class="relative  inline object-cover w-10 h-10 border-2 border-white rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
        <img
          class="relative  inline object-cover w-10 h-10 border-2 border-white rounded-full"
          src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
        <img
          class="relative  inline object-cover w-10 h-10 border-2 border-white rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
        <img
          class="relative  inline object-cover w-10 h-10 border-2 border-white rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
        <img
          class="relative  inline object-cover w-10 h-10 border-2 border-white rounded-full"
          src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>
    </div>
  );
}
