# Demo Application
这个是使用Ionic+Angular构建的Hybrid APP，基本的框架结构是这样，通过cordova能够编译到不同的平台

## 使用说明

安装必须模块
```
npm install
```
或者
```
yarn install
```
安装ionic
```
npm install -g ionic
```
在网页端浏览APP
```
ionic serve --devapp
```
整体结构
```
.
├── angular.json
├── browserslist
├── capacitor.config.json
├── config.xml
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── ionic.config.json
├── karma.conf.js
├── package.json
├── package-lock.json
├── README.md
├── resources
│   ├── icon.png
│   ├── README.md
│   └── splash.png
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── components
│   │   │   └── majors
│   │   │       ├── majors.component.html
│   │   │       ├── majors.component.scss
│   │   │       ├── majors.component.spec.ts
│   │   │       └── majors.component.ts
│   │   ├── componets.module.ts
│   │   ├── pages
│   │   │   ├── computer
│   │   │   │   ├── computer.module.ts
│   │   │   │   ├── computer.page.html
│   │   │   │   ├── computer.page.scss
│   │   │   │   ├── computer.page.spec.ts
│   │   │   │   └── computer.page.ts
│   │   │   ├── information
│   │   │   │   ├── information.module.ts
│   │   │   │   ├── information.page.html
│   │   │   │   ├── information.page.scss
│   │   │   │   ├── information.page.spec.ts
│   │   │   │   └── information.page.ts
│   │   │   └── tab2
│   │   │       └── dial-number
│   │   │           ├── dial-number.module.ts
│   │   │           ├── dial-number.page.html
│   │   │           ├── dial-number.page.scss
│   │   │           ├── dial-number.page.spec.ts
│   │   │           └── dial-number.page.ts
│   │   ├── services
│   │   │   ├── catogory-fetch.service.spec.ts
│   │   │   └── catogory-fetch.service.ts
│   │   ├── tab1
│   │   │   ├── tab1.module.ts
│   │   │   ├── tab1.page.html
│   │   │   ├── tab1.page.scss
│   │   │   ├── tab1.page.spec.ts
│   │   │   └── tab1.page.ts
│   │   ├── tab2
│   │   │   ├── tab2.module.ts
│   │   │   ├── tab2.page.html
│   │   │   ├── tab2.page.scss
│   │   │   ├── tab2.page.spec.ts
│   │   │   └── tab2.page.ts
│   │   ├── tab3
│   │   │   ├── tab3.module.ts
│   │   │   ├── tab3.page.html
│   │   │   ├── tab3.page.scss
│   │   │   ├── tab3.page.spec.ts
│   │   │   └── tab3.page.ts
│   │   ├── tab4
│   │   │   ├── tab4.module.ts
│   │   │   ├── tab4.page.html
│   │   │   ├── tab4.page.scss
│   │   │   ├── tab4.page.spec.ts
│   │   │   └── tab4.page.ts
│   │   └── tabs
│   │       ├── tabs.module.ts
│   │       ├── tabs.page.html
│   │       ├── tabs.page.scss
│   │       ├── tabs.page.spec.ts
│   │       ├── tabs.page.ts
│   │       └── tabs.router.module.ts
│   ├── assets
│   │   ├── banner.jpg
│   │   ├── icon
│   │   │   ├── address-book.svg
│   │   │   ├── aircraft.svg
│   │   │   ├── android.svg
│   │   │   ├── cocktail.svg
│   │   │   ├── command-line.svg
│   │   │   ├── compass.svg
│   │   │   ├── favicon.png
│   │   │   ├── folder.svg
│   │   │   ├── hotel.svg
│   │   │   ├── like.svg
│   │   │   ├── map.svg
│   │   │   ├── news.svg
│   │   │   ├── porter.svg
│   │   │   └── tickets.svg
│   │   ├── jobs.jpg
│   │   ├── jordan.png
│   │   └── shapes.svg
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── test.ts
│   ├── theme
│   │   └── variables.scss
│   └── zone-flags.ts
├── structure.txt
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json

22 directories, 102 files
```
