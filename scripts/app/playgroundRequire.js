require.config({
	'baseUrl': 'scripts/',

    'paths': {
		'jquery': 'lib/jquery.min',
		'underscore': 'lib/lodash.min',
		'backbone': 'lib/backbone-min',
        'handlebars': 'lib/handlebars.runtime.min',

        // hosted version
		//'augmented': '/augmented/scripts/core/augmented',
        //'augmentedPresentation': '/augmented/scripts/presentation/augmentedPresentation'

        // local version
		'augmented': 'lib/augmented',
        'augmentedPresentation': 'lib/augmentedPresentation',
        'apps': 'app/apps',
        'data': '../data/data'
	}
});

require(['augmented', 'augmentedPresentation', 'handlebars', 'data', 'apps'],
    function(Augmented, Presentation, Handlebars, Data) {
    "use strict";
    var app = new Augmented.Presentation.Application("Playground!");
    app.registerStylesheet("https://fonts.googleapis.com/css?family=Work+Sans:300,400");
    app.start();

    var MainView = Augmented.View.extend({
        el: "#apps",
        progressEl: "#progress",
        render: function() {
            Augmented.D.setValue(this.el, Handlebars.templates.apps({ "apps": Data }));
            Augmented.D.hide(this.progressEl);
        }
    });

    var view = new MainView();
    view.render();
});
