"use strict"


function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    const keys = Object.keys(dictionary)
    for (let i = 0; i < keys.length; i++) {
        let regex = new RegExp('{{' + keys[i] + '}}', 'g')
        this.template = this.template.replace(regex, dictionary[keys[i]])
    }
    return this.template
}
