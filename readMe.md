# Template Syntax
```
Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data.
npm run serve
```
## Interpolations
- Text {{}}
- Raw HTML v-html=""
- Attributes v-bind:attribute=""
- Using Single JavaScript Expressions not Statement
```
var a = 10; 
10 > 5 ? 'ok' : 'no';
```
## Directives
## Arguments
## Dynamic Arguments
## Modifiers
## Shorthands
- v-bind -> :
- v-on -> @
- v-if make sense but v-show hide elements by css display
- v-else

## array change detection
- detectable: push(), pop(),shift(),unshift(),splice(),sort(),reverse()
- replacable: filter(), concat(), slice() need to assign value again

## object change detection two methods
- Vue.set(this.Commander,"damage","frostbite")
- this.$set(this.Commander,"damage","frostbite")

## From
- v-model get input while typing
- v-model.lazy after pressing enter or confirm then show input
- v-model.trim no space
- v-model.number