interface UserInterface {
    ID: string;
    Email: string;
    Background: string | null;
    NumPad: number | null;
    Name: string;
    RoleGroupId: {
        ID: string;
        RoleGroupName: string;
        KeyShort: string;
        Description: string;
        IsCreateRole: boolean;
        IsReadRole: boolean;
        IsUpdateRole: boolean;
        IsDeleteRole: boolean;
        IsCreateUser: boolean;
        IsReadUser: true;
        IsUpdateUser: boolean;
        IsDeleteUser: boolean;
        IsCheckCustomer: boolean;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        DeleteAt: string | null;
    };
    IsActive: boolean;
    IsAccept: boolean;
    TwoFactorEnable: boolean;
    DOB: string | null;
    Phone: string;
    Gender: string;
    InviteCode: null | string;
    Avatar: null | string;
    FileSize: any;
    LastLogin: any;
    LastOnline: any;
    UserCreate: any;
    CreatedAt: string | null;
    UpdatedAt: string | null;
    DeleteAt: string | null;
    CompanyId: {
        ID: string;
        CompanyName: string;
        CompanyPhone: string;
        CompanyEmail: string;
        CompanyCode: string;
        CompanyDB: string;
        CompanySize: string;
        Fax: string;
        TaxNumber: string;
        WebsiteLink: string;
        Logo: string;
        LicenseId: string;
        IsActive: boolean;
        IsActivePerformance: boolean;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        DeleteAt: string | null;
    };
    AppRole?: any[];
}

interface Workspace {
    ID: string;
    Name: string;
}
export interface commonInterface {
    currentUserOnline: UserInterface | null;
    token: string | null;
    userList: UserInterface[];
    workspace: Workspace | null;
}
