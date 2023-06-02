import { notification } from "antd";

export const openNotification = () => {
  notification.open({
    message: "",
    description:
      "推荐按键盘上的 F11 将浏览器全屏后 F5 刷新页面查看获得最好效果",
    style: {
      // 添加自定义样式
      background: 'rgba(5, 19, 50, 0.7)',
      color: 'white',
      // 其他样式属性...
    },
  });
};