import MessageContainer from "../../components/sidebarComponents/messages/MessageContainer";
import Sidebar from "../../components/sidebarComponents/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      {/* Sidebar: Hide on mobile */}
      <div className="hidden sm:block sm:w-1/4">
        <Sidebar />
      </div>

      {/* Message container takes the rest of the space */}
      <div className="flex-1">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;


// import { useState } from "react";
// import MessageContainer from "../../components/sidebarComponents/messages/MessageContainer";
// import Sidebar from "../../components/sidebarComponents/Sidebar";

// const Home = () => {
//   const [sidebarWidth, setSidebarWidth] = useState(250); 

//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     const startX = e.clientX;

//     const onMouseMove = (moveEvent) => {
//       const newWidth = sidebarWidth + (moveEvent.clientX - startX);
//       if (newWidth > 100) {
//         setSidebarWidth(newWidth);
//       }
//     };

//     const onMouseUp = () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   return (
//     <div className="flex min-h-screen w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
//       <div
//         className="border-r border-slate-500 p-4 flex flex-col min-h-screen"
//         style={{ width: sidebarWidth }}
//       >
//         <Sidebar />
//       </div>
//       <div
//         className="cursor-col-resize bg-gray-300 w-2"
//         onMouseDown={handleMouseDown}
//       ></div>

//       <div className="flex-1 min-h-screen">
//         <MessageContainer />
//       </div>
//     </div>
//   );
// };

// export default Home;
