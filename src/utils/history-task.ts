export const mapHistoryContent = (item: any) => {
    switch (true) {
        case item.IsCreateTask:
            return {
                Icon: require('../assets/icon/team/history/create.png'),
                description: 'Tạo công việc ',
            };
        case item.IsChangeComplete:
            return {
                Icon: require('../assets/icon/team/history/like.png'),
                description: 'Thay đổi trạng thái công việc từ ',
                sub: item.OldData === 'true' ? 'hoàn thành' : 'chưa hoàn thành',
                sub2: item.NewData === 'true' ? 'hoàn thành' : 'chưa hoàn thành',
            };
        case item.IsChangeCompleteSubTask:
            return {
                Icon: require('../assets/icon/team/history/done.png'),
                description: 'Thay đổi trạng thái công viêc con từ  ',
                sub: item.OldData === 'true' ? 'hoàn thành' : 'chưa hoàn thành',
                sub2: item.NewData === 'true' ? 'hoàn thành' : 'chưa hoàn thành',
            };
        case item.IsComment:
            return {
                Icon: require('../assets/icon/team/history/comment.png'),
                description: 'Thêm bình luận',
                sub: item.NewData,
            };
        case item.IsDeleteComment:
            return {
                Icon: require('../assets/icon/team/history/delete-cmt.png'),
                description: 'Xoá bình luận',
                sub: item.NewData,
            };
        case item.IsChangeTaskName:
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Thay đổi tên công việc',
                sub: item.OldData,
                sub2: item.NewData,
            };
        case item.IsChangeDescription:
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Thay đổi mô tả công việc',
                sub: item.OldData === '' ? 'rỗng' : item.OldData,
                sub2: item.NewData,
            };
        case item.IsCreateSubTask:
            return {
                Icon: require('../assets/icon/team/history/add.png'),
                description: 'Tạo công việc con',
                sub: item.NewData,
            };
        case item.IsDeleteSubTask:
            return {
                Icon: require('../assets/icon/team/history/delete.png'),
                description: 'Xoá công viêc con',
                sub: item.NewData,
            };
        case item.IsUpdateTitleSubTask:
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Đổi tên công việc con',
                sub: item.OldData,
                sub2: item.NewData,
            };
        case item.IsUpdateDescrpitionSubTask:
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Cập nhật mô tả công việc con',
                sub: item.OldData,
                sub2: item.NewData,
            };
        case item.IsUpdateUserProcessSubTask:
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Cập nhật người thực hiện công việc con',
                sub: item.OldData,
                sub2: item.NewData,
            };
        case item.IsUpdateEndDateSubTask || item.IsUpdateStartDateSubTask:
            const d1_Subtask = new Date(item.OldData);
            const d2_Subtask = new Date(item.NewData);

            const old_Date_Subtask: string =
                item.OldData === 'null'
                    ? 'chưa có'
                    : `${d1_Subtask.getDate()}-${
                          d1_Subtask.getMonth() + 1
                      }-${d1_Subtask.getFullYear()}`;

            const new_Date_Subtask: string =
                item.NewData === 'null'
                    ? 'chưa có'
                    : `${d2_Subtask.getDate()}-${
                          d2_Subtask.getMonth() + 1
                      }-${d2_Subtask.getFullYear()}`;

            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Thay đổi thời gian công việc con',
                sub: old_Date_Subtask,
                sub2: new_Date_Subtask,
            };
        case item.IsChangeStartDate || item.IsChangeEndDate:
            const d = new Date(item.OldData);
            const d2 = new Date(item.NewData);

            const old222: string =
                item.OldData === 'null'
                    ? 'chưa có'
                    : `${d2.getDate()}-${d2.getMonth() + 1}-${d2.getFullYear()}`;
            const old1: string =
                item.OldData === 'null'
                    ? 'chưa có'
                    : `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

            return {
                Icon: require('../assets/icon/team/history/calendar.png'),
                description: 'Thay đổi thởi gian công việc',
                sub: old1,
                sub2: old222,
            };
        case item.IsChangeUserProcess:
            const old2: string = item.OldData === '' ? 'Chưa xác định' : item.OldData;
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Thay đổi người thực hiện',
                sub: old2,
                sub2: item.NewData,
            };
        case item.IsDeleteFile:
            console.log('history test: ', item);
            return {
                Icon: require('../assets/icon/team/history/delete.png'),
                description: 'Xoá tệp tin đính kèm',
                sub: item.NewData,
            };
        case item.IsAddFile:
            return {
                Icon: require('../assets/icon/team/history/add.png'),
                description: 'Thêm file',
                sub: item.NewData,
            };
        case item.IsComment:
            return {
                Icon: require('../assets/icon/team/history/comment.png'),
                description: 'Thêm bình luận',
            };
        case item.IsChangeColumn:
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Thay đổi vị trí công việc',
                sub: item.OldData,
                sub2: item.NewData,
            };
        case item.IsChangePriority:
            const oldPriority: string = item.OldData === '' ? 'Low' : item.OldData;
            const renderLevel = (level: any) => {
                switch (level) {
                    case 'LOW':
                        return 'Thấp';
                    case 'MEDIUM':
                        return 'Trung bình';
                    case 'EMERGENCY':
                        return 'Khẩn cấp';
                    case 'IMPORTANCE':
                        return 'Quan trọng';
                    default:
                        return 'Thấp';
                }
            };
            return {
                Icon: require('../assets/icon/team/history/edit.png'),
                description: 'Thay đổi độ ưu tiên',
                sub: renderLevel(oldPriority),
                sub2: renderLevel(item.NewData),
            };
        default:
            return {
                Icon: require('../assets/icon/team/history/system.png'),
                description: 'unknow',
            };
    }
};
