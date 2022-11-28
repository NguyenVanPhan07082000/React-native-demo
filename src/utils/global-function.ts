import { localStore } from 'src/contant';
import { useAppDispatch } from 'src/hook/useRedux';
import { clearInitData } from 'src/redux';

export function hidePartialPhone(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') **** ' + phone.slice(7, 10);
    return newFormat;
}

export function hidePartialId(id: string) {
    if (id.length <= 0) return id;
    let newFormat = id.slice(0, 3) + ' ******* ' + id.slice(id.length - 4, id.length);
    return newFormat;
}

export function formatPhoneNumber(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 7) + ' - ' + phone.slice(7, 10);
    return newFormat;
}

export const getUserData = (idUser: string, listUser: any[]) => {
    const ids = listUser.map((u: any) => u.ID);

    const index = ids.indexOf(idUser);

    return listUser[index];
};

export function formatVND(amount: any) {
    if (amount.length <= 0) return;
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export function formatStringToCardNum(cardString: string) {
    if (cardString.length <= 0) return;
    return (
        cardString.slice(0, 4) +
        ' ' +
        cardString.slice(4, 8) +
        ' ' +
        cardString.slice(8, 12) +
        ' ' +
        cardString.slice(12, 16)
    );
}

export const downFile = (fullPath: string, fileName: string) => {
    fetch(fullPath)
        .then((resp) => resp.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want

            document.body.appendChild(a);
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('An error sorry'));
};

export const getCurrentHouse = (t: any) => {
    const comTime = new Date(t);
    let currentTime = new Date();

    const btwHour = currentTime.getHours() - comTime.getHours();
    const btwYear = currentTime.getFullYear() - comTime.getFullYear();
    const btwMonth = currentTime.getMonth() - comTime.getMonth(); // -1
    const btwDate = currentTime.getDate() - comTime.getDate();
    const btwMinutes = currentTime.getMinutes() - comTime.getMinutes(); // -1

    return btwYear !== 0
        ? `${btwYear} năm trước`
        : btwMonth !== 0
        ? `${btwMonth} tháng trước`
        : btwDate !== 0
        ? `${btwDate} ngày trước`
        : btwHour !== 0
        ? `${btwHour} giờ trước`
        : btwMinutes !== 0
        ? `${btwMinutes} phút trước`
        : 'gần đây';
};

export const getFileExtension = (fileName: string) => {
    const arr = fileName.split('.');
    const fileEx = arr[arr.length - 1];
    return fileEx;
};

export const getCookieValue = (name: string) =>
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

export const renderPriority = (pri: any) => {
    let data = {
        uri: require('../assets/icon/team/tool-task/low.png'),
        name: 'Thấp',
    };
    switch (pri) {
        case 'LOW':
            data = {
                uri: require('../assets/icon/team/tool-task/low.png'),
                name: 'Thấp',
            };
            return data;
        case 'MEDIUM':
            data = {
                uri: require('../assets/icon/team/tool-task/medium.png'),
                name: 'Trung bình',
            };
            return data;
        case 'IMPORTANCE':
            data = {
                uri: require('../assets/icon/team/tool-task/importance.png'),
                name: 'Quan trọng',
            };
            return data;
        case 'EMERGENCY':
            data = {
                uri: require('../assets/icon/team/tool-task/emergency.png'),
                name: 'Khẩn cấp',
            };
            return data;
        default:
            return data;
    }
};
