// import Image from "next/image";

// export default function Home() {
  // return (
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
  //   </div>
  // );
  
// }
"use client";

import { useEffect, useState } from "react";
import  {socket}  from "../libs/socket";
import Chat from "./components/chat";

export default function Home() {
  // const [isConnected, setIsConnected] = useState(false);
  // const [transport, setTransport] = useState("N/A");

  // useEffect(() => {
  //   if (socket.connected) {
  //     onConnect();
  //   }

  //   function onConnect() {
  //     setIsConnected(true);
  //     setTransport(socket.io.engine.transport.name);
      
  //     console.log("✅ Connecté au serveur WebSocket !");
  //     socket.io.engine.on("upgrade", (transport) => {
  //       setTransport(transport.name);
  //     });
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //     setTransport("N/A");
  //   }


  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //   };
  // }, []);

  return (
    <div>
      {/* <p>Status: { isConnected ? "connected" : "disconnected" }</p>
      <p>Transport: { transport }</p> */}
      <Chat />
    </div>
  );
}
