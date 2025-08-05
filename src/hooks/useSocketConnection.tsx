import {useEffect} from "react";
import {socket} from "../socket.ts";

const useSocketConnection = () => {
    useEffect(() => {
      socket.connect();
      socket.on("connection", (data) => {
          console.log(data);
      })
        socket.off("connection", (data) => {
            console.log(data);
        })
        socket

      return () => {
          socket.disconnect();
      }
    }, []);



    return(
        null
    )
}

export default useSocketConnection