# ng-warn-on-unload

AngularJS directive to triggger `window.onbeforeunload()` based on a specified condition passed as the value of an attribute

## Installation

`bower install ng-warn-on-unload`

## Note

The module name has been changed to `ngWarnOnUnload`. You may need to update the name in your application dependencies as otherwise this is a breaking change.

Modified 2021-02-12 to solve issue on Safari macOS giving a warning when specifically closing the window (not navigating away) triggered the 'you have entered text...' warning in some cases. Returning `undefined` in the case of the warn state being `false` appears to solve it.


## Attributes

* ngWarnOnUnload - Required with value set to a property that can evaluate to a boolean value. Defines the scope property to be evaluated in order to determine whether the user should be warned on unload
* ~~ngWarnOnUnloadMsg - Optional. Defines the message to be returned from `onbeforeunload`~~ No longer supported by major web browsers



## Usage

Here is a [demo page](https://cdn.rawgit.com/aderowbotham/ng-warn-on-unload/master/demo/index.html)

HTML:

    <div
      ng-app="app"
      ng-warn-on-unload="{{ !productForm.$pristine }}">

      <h1>ngWarnOnUnload demo</h1>

      <form name="productForm">
          <input type="text" ng-model="product.name">
          <input type="submit">
      </form>

    </div>
