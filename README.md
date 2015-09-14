# AureliaTS
Sample DNX app with Aurelia and Typescript (work in progress)


- Ensure jspm-bower-endpoint is configured

```shell
npm install -g jspm-bower-endpoint
```

```shell
jspm registry create bower jspm-bower-endpoint
```

- Install nodejs dependencies

```shell
npm install
```

- Install jspm dependencies

```shell
jspm install
```

- Build client resources

```shell
gulp build
```

- Start web server via Visual Studio debugger, or, if using VSCode, bring up command pallette (`cmd` + `shift` + `P`), type "web", and choose the `dnx:web` command



### Run Unit Tests

```shell
gulp test
```


