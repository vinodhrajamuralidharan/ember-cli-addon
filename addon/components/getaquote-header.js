import Ember from 'ember';
 
export default Ember.Component.extend({
focus: false,
didInsertElement: function() {
console.log('did insert');
},
willDestroyElement: function() {
console.log('willdestroy');
},
keyUp: function() {
console.log('keyup');
}
}); 
