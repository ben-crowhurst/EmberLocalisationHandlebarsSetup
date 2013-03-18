Handlebars.registerHelper('localise', function(property, fn) {
  var str;

  if (fn.contexts && typeof fn.contexts[0] === 'string') {
    str = fn.contexts[0];
  } else if (property[0] === '_') {
    str = property;
  } else if (/[A-Z]/.test(property[0])) {
    str = Ember.get(window, property)
  } else {
    str = this.get(property)
  }

  return new Handlebars.SafeString((str || '').loc(''));
});