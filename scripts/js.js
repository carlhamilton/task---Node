var task = {};

task.title = 'My task';
task.description = 'My Description';

console.log(task.title);

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: true,
    enumerable: true,
    configurable: true
});

function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function() {
        return this.param1 + ' ' + this.param2; //returns param1 & param2
    };
}

console.log(task.toString());