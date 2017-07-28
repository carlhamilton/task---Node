var task = function(name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        console.log('completing task: ' + task.name);
        this.completed = true;

    };
    this.save = function() {
        console.log('saving Task: ' + this.name);
    };

};

task.prototype.complete = function() {
    console.log('completing task: ' + task.name);
    this.completed = true;

};
task.prototype.save = function() {
    console.log('saving Task: ' + this.name);

};
module.exports = task;