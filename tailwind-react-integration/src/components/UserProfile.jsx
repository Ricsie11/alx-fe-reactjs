function UserProfile() {
  return (
    <div className="user-profile hover:shadow-xl sm:p-4 md:p-8 bg-gray-100 p-8 md:max-w-sm mx-auto max-w-xs my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="sm:text-lg md:text-xl hover:text-blue-500 text-blue-800 my-4">John Doe</h1>
      <p className="sm:text-sm text-gray-600 md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
