# 达达呀果

个人静态小站。用 Vue 写益智童话和笑话，构建后是一组静态文件，可以直接放到 Vercel。

## 本地预览

```bash
npm install
npm run dev
```

## 部署到 Vercel

1. 把这个目录推到 Git 仓库。
2. 在 Vercel 里 Import 该仓库。
3. 框架选 Vite，构建命令保持 `npm run build`，输出目录保持 `dist`。
4. 部署即可。`vercel.json` 已处理前端路由刷新。

也可以在项目目录执行 `npx vercel`。

## 改内容

- 童话：`src/data/stories.js`
- 笑话：`src/data/jokes.js`

保存后重新构建，页面会一起更新。站点没有后端，也不含任何机构信息。
