# AION2 Tier List 与裂缝规划工具

![网站 Logo](logo.svg)

正式域名：[aion2tierlist.org](https://aion2tierlist.org/)。面向英文玩家的独立职业选择与裂缝规划网站，不隶属于 NCSOFT。

![剑星人物参考](images/classes/gladiator-640.webp)

## 网站功能

- 首页署名展示 Game8 的 PvE/PvP 排名快照，结合本站职业取舍与入门建议；Solo 和没有来源覆盖的拳星不编造档位。
- 九职业图文指南、对应 SVG 标识、官方技能视频、可保存的练习清单、收藏和双职业对比。
- 台韩官方常规裂缝排期、国际五区社区参考计时；区服和显示时区可手选。
- 未来八场、3/24小时快捷填写及自定义在线时段筛选、固定场次分享、Discord 时间戳、ICS 日历及页面声音提醒。
- 独立来源、方法、更新记录和四个信任/法律页面；十九个正文路由可索引，对比工具保持 noindex。

## 数据与托管边界

排名是注明来源的观点，不是本站测得的区域强度；国际服计时没有被认证为官方排期。规则有明确的复核截止时间，过期后停止计时。游戏维护、入口容量及个人资格以游戏内实际情况为准。

本目录是 Next.js 静态构建产物。自动 IP 地区建议还需要单独随 Cloudflare Pages 部署源码的 `functions/api/region.ts`；仅上传静态文件不会启用此接口。界面会提供手动选择作为降级方式。

本地构建通过不代表部署、浏览器交互或游戏校时已通过。部署与运营记录维护在源码目录中，不随本目录公开。

AION 2 图片、名称及游戏商标归相关权利人所有。联系：[mooyuking@gmail.com](mailto:mooyuking@gmail.com)。

## 构建与更新

此仓库保存静态发布产物，不包含Next.js源码或node_modules。源码项目使用Next.js、React和TypeScript；在源码根目录执行：

```powershell
npm run dev
npm run typecheck
npm run lint
npm run test-time
node scripts/validate-content.cjs --release
npm run build-preserve-git
node scripts/audit-output.cjs
```

每次构建会备份并恢复out内的.git与README文件，校验保留文件的SHA256；构建命令不会自动提交或推送。需要发布时，在out内执行git add -A、git commit，再git push。仓库地址：https://github.com/mooyu-king/aion2tierlist 。GitHub仓库更新不等于已经启用网站托管或绑定域名。

统计脚本为https://data.1back.link/js/app.js，发送地址为https://data.1back.link/api/send，统计域名为aion2tierlist.org；具体处理方式见站点Privacy Policy。
