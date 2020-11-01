var Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)
    }
    async initPackage() {
        let answer = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname
            }
        ])
        const pkgJson = {
            "name": answer.name,
            "version": "1.0.0",
            "description": "",
            "main": "generator/app/index.js",
            "scripts": {
                "build": "webpack",
                "test": "mocha --require @babel/register",
                "coverage": "nyc mocha --require @babel/register"
            },
            "author": "",
            "license": "ISC",
            "dependencies": {
            },
            "devDependencies": {
            }
        }
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson)
        this.npmInstall(["vue"], { 'save-dev': false })
        this.npmInstall([
            "babel-loader","webpack-cli",
            "webpack", "vue-loader", "vue-template-compiler",
            "vue-style-loader", "css-loader", "copy-webpack-plugin",
            "@babel/core", "@babel/preset-env", "@babel/register",
            "babel-plugin-istanbul", "@istanbuljs/nyc-config-babel",
            "mocha", "nyc"
        ], { 'save-dev': true })

        this.fs.copyTpl(
            this.templatePath('hello.vue'),
            this.destinationPath('src/hello.vue')
        )

        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js')
        )

        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        )

        this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc')
        )

        this.fs.copyTpl(
            this.templatePath('.nycrc'),
            this.destinationPath('.nycrc')
        )

        this.fs.copyTpl(
            this.templatePath('sample-test.js'),
            this.destinationPath('test/sample-test.js')
        )

        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            { title: answer.name }
        )
    }
}


