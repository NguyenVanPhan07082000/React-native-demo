import { memo, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { SERVER_DOMAIN } from 'src/contant';
import { useAppSelector, useAppDispatch } from 'src/hook/useRedux';

export interface TestProps {}

const SocketCustom = (Props: TestProps) => {
    // socket newEventLog
    const currentUserId = useAppSelector((state) => state.common.currentUserOnline);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const s = io(SERVER_DOMAIN, { withCredentials: true, transports: ['websocket'] });

    //     if (currentUserId) {
    //         s.on('connect', () => {});
    //         s.on('join', (idSocket: any) => {
    //             s.emit('join', { SocketId: idSocket, UserId: currentUserId.ID });
    //         });

    //         s.on('sendNotify', async (data: any) => {
    //             console.log('-----------------------');
    //             // console.log('sendNotify: ', data);
    //         });
    //     }
    // }, []);

    return <></>;
};

export default SocketCustom;
