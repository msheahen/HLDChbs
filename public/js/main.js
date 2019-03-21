const source = document.getElementById('pageheader').innerHTML;

const template = Handlebars.compile(source);

const context = {
  headername: 'chocolate'
};

const compiledHtml = template(context);

const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
