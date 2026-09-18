# React Todo List

基于 React 19 + Ant Design 的待办事项应用（Todo List）。

在线预览：https://react-todo-list-eta-six.vercel.app

## 功能

- 新增待办事项
- 标记完成 / 撤销完成
- 编辑待办内容
- 删除待办（删除前二次确认）
- 未完成事项自动置顶排序

## 技术栈

- React 19
- Ant Design 6 + @ant-design/icons
- Create React App（react-scripts 5）
- React Testing Library（单元测试）

## 快速开始

```bash
npm install
npm start        # 开发模式，访问 http://localhost:3000
npm run build    # 生产构建
npm test         # 运行测试
```

## 项目结构

```
├── src/
│   ├── App.js          # 主组件（待办增删改查、排序逻辑）
│   ├── App.css
│   └── index.js        # 入口
└── public/
```
