var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signup', function(ctx, next) {
    title('Spirit Growth Network ~ Regístrarse');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})