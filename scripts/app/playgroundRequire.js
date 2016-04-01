require.config({
	'baseUrl': 'scripts/',

    'paths': {
		'jquery': 'lib/jquery-2.1.4.min',
		'underscore': 'lib/lodash.min',
		'backbone': 'lib/backbone-min',
        'handlebars': 'lib/handlebars-v4.0.2',

        // hosted version
		'augmented': '/augmented/scripts/core/augmented',
        'augmentedPresentation': '/augmented/scripts/presentation/augmentedPresentation'

        // local version
		//'augmented': 'lib/augmented',
        //'augmentedPresentation': 'lib/augmentedPresentation'
	}
});

require(['augmented', 'augmentedPresentation', 'handlebars'], function(Augmented, Presentation, Handlebars) {
    "use strict";
    /*var app = new Augmented.Presentation.Application("Playground!");
    app.registerStylesheet("https://fonts.googleapis.com/css?family=Work+Sans:300,400");
    app.registerStylesheet("styles/main.css");
    app.start();*/

    var MyCollection = Augmented.Collection.extend({
        url: "data/examples.json"
    });

    var template = Handlebars.compile("{{#each apps}}<div class=\"app\"><figure><img src=\"{{image}}\" alt=\"{{name}}\" \\></figure><h1>{{title}}</h1><p>{{desciption}}</p><ul>{{#each patterns}}<li>{{pName}}</li>{{/each}}</ul></p><p class=\"try\"><a href=\"{{link}}\">Try it out!</a></p></div>{{/each}}");

    var collection = new MyCollection();

    var MainView = Augmented.View.extend({
        el: "#apps",
        template: template,
        collection: collection,
        render: function() {
            this.el.innerHTML = this.template({ "apps": this.collection.toJSON() });
        },
        fetchAndRender: function () {
            this.collection.fetch({
                success: function() {
                    view.render();
                },
                error: function(xhr, status) {
                    view.el.innerText = "Failed to retrieve data! - " + status.statusText;
                }
            });
        }
    });

    var view = new MainView();
    view.fetchAndRender();
});
