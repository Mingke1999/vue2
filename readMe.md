## VUE CLI install
vue install -g @vue/cli
vue create project-name
## Template Syntax
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
- global: main.js mixins
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

## Slot
``` 
Insert addtional element when calling a component, and diyplay it by slot.
Double close tags only.
Similar to react compose
```
- Compilation Scope
- declare value where the value passed from
- v-slot -> #
- edge case: grab variable from main.js by $root.name
- not recommend, passing :name="value" give from parent by $parent.name


