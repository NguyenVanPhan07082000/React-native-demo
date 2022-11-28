import { useState, useEffect } from 'react';
import io from 'Socket.IO-client';
export function useSocket(userIs: string, setOpenCallRtc: any, setdataCallRtc: any) {
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        // if (userID) {
        //     const socketIo = io(domain_url.SERVER_DOMAIN, {
        //         withCredentials: true,
        //         transports: ['websocket'],
        //     });
        //     socketIo.on('get-socket-id', (id: string) => {
        //         socketIo.emit('login', { userId: userID, socketId: id });
        //     });
        //     socketIo.on('open-member-call', (data) => {
        //         setdataCallRtc(data);
        //         setOpenCallRtc(true);
        //         // console.log('socket : start call');
        //     });
        //     socketIo.on('open-member-answer', (data) => {
        //         setdataCallRtc(data);
        //         setOpenCallRtc(true);
        //         // console.log('socket : answer call');
        //     });
        //     return function () {
        //         socketIo.disconnect();
        //     };
        // }
    }, []);
    // userID
    return socket;
}
