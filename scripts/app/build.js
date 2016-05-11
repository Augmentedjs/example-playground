({
    baseUrl: ".",
    paths: {
        backbone: "../lib/backbone-min",
        underscore: "../lib/lodash.min",
        jquery: "../lib/jquery.min",
        handlebars: "../lib/handlebars",
        augmented: "../lib/augmented",
        augmentedPresentation: "../lib/augmentedPresentation",
        data: "../../data/data"
    },
    include: [],
    name: "playgroundRequire",
    out: "playgroundRequire-built.js",
    optimize: "uglify2",
    preserveLicenseComments: false,
    generateSourceMaps: true,
    useStrict: true
})
