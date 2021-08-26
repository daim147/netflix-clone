import "./App.css";
import Homesreen from "./Components/Homescreen/Homesreen";

function App() {
  return (
    <div className="App">
      <Homesreen />
    </div>
  );
}

export default App;

// {
//   <AnimateSharedLayout key="Animate" type="crossfade">
//         <motion.div
//           className="card"
//           initial={false}
//           layoutId="Hello"
//           onClick={() => setShow(!show)}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1629976002376-3bccae77037d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//             alt=""
//           />
//         </motion.div>
//         <AnimatePresence>
//           {show && (
//             <motion.div
//               onClick={() => setShow(false)}
//               className="banner"
//               initial={false}
//               layoutId="Hello"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1629976002376-3bccae77037d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt=""
//               />{" "}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AnimateSharedLayout>
// }
