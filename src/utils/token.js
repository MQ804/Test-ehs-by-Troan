import { theme } from "antd";

export default function token() {
    const {token} = theme.useToken();

    return token;
}
