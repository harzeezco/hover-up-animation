const top10BooksWithColors = [
  {
    title: "1984",
    author: "George Orwell",
    bgColor: "#FFD700", // Gold
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    bgColor: "#ADD8E6", // Light blue
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    bgColor: "#FFB6C1", // Light pink
  },

  {
    title: "Moby Dick",
    author: "Herman Melville",
    bgColor: "#98FB98", // Khaki
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    bgColor: "#D3D3D3", // Light gray
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    bgColor: "#FE1", // Misty rose
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    bgColor: "#E0FF", // Light cyan
  },
];

const App = () => {
  return (
    <div class="flex flex-col  w-screen h-screen  ">
      <div class="flex flex-col text w-full h-full justify-center items-center  ">
        {top10BooksWithColors.map((book) => (
          <div
            class="w-full p-6 mb-[-3vw]  max-md:mb-[-6vw]  border-t-2 border-black cursor-pointer ease-out max-md:hover:translate-y-[-4vw] hover:translate-y-[-2vw] relative transition-all duration-300   "
            style={{
              backgroundColor: "white",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = book.bgColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            <h1 class="text-3xl xl:text-6xl ">{book.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
