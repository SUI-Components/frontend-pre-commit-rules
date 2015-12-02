# Frontend precommit rules for Javascript, SASS and ReactJS

### The main goal of this set of rules is to establish healthy boundaries where cleaner code will be easier to share, more scalable, more readable and easier to maintain for everyone.

----

These linting rules comes preconfigured as a [precommit hook](http://githooks.com/). This means it will not allow you nor anyone in your project to commit to the repository if any of these rules are invalid. Although it might look restrictive at the beginning offers many advantages later on as commented above.

In order to do so we decided to rely on [Eslint](http://eslint.org/), a great Javascript linter by [Nicholas C. Zakas](https://twitter.com/slicknet) and [SCSS-Lint](https://github.com/brigade/scss-lint) for... yes! SASS linting.

#### TL;DR
If you are wondering if this set of rules if for you here's a brief description. Keep reading to get a detailed description.

####**Your SASS code must:**
- Merge rules of same selector.
- Set properties to `0` instead of `none`.
- Match the selector format set in the [Naming Convention](#naming-convention)
- ...

####**Your Javascript code must**
- Be free of alert(), console.log() and Debugger.
- Avoid references to Prototype.
- Use dot notation, camel case and single quotes.
- ...

####**Your ReactJS code must**
- Include just one component per file.
- Always declare expected proptype.
- Use JSX.
- ...


In addition, ES6 syntax is fully supported thanks to BabelJS. Feel free to use the right transpiling level for your project. Set the [right value](https://babeljs.io/docs/usage/babelrc/) in `.babelrc` config file.

----

#### Index
* [Linter Installation](#linter-installation)
    - [Step 1 - Package Control](#step-1---package-control)
    - [Step 2 - Install plugin](#step-2---install-plugin)
    - [Step 3 - Ruby Gems dependencies](#step-3---ruby-gems-dependencies)
    - [Step 4 - Install SASS Linting plugin](#step-4---install-sass-linting-plugin)
    - [Step 5 - Install Eslint for JS Linting plugin](#step-5---install-eslint-for-js-linting-plugin)

----

# Linter Installation
This documentation is a step by step guide to add JS, SASS and React linter in **Sublime Text 3**. Feel free to use the code editor of your choice. Just make sure you can add *Eslint* and *SCSS-Lint* config files.

### Step 1 - Package Control
- Make sure you have Package Control installed in your copy of Sublime Text by pressing `cmd + Shift + p` and typing `Package Control: Install Package`.
- If doesn't show up check out this page and install it first: [packagecontrol.io](https://packagecontrol.io/installation).

### Step 2 - Install plugin
- Open Package Control and install: `SublimeLinter` [Sublime Linter Plugin](http://www.sublimelinter.com/en/latest/).
**Important Note: This plugin is no longer including linting files so you need to install them apart.**


### Step 3 - Ruby Gems dependencies
SASS and SCSS-Lint are Ruby Gems. You need to meet the following requeriments:

- Ruby 1.9.3+ Installed: Check out [Ruby install page](https://www.ruby-lang.org/en/).
- Sass 3.4.1+ Installed: Check out [SASS install page](http://sass-lang.com/install).
- Install `scss_lint` Gem:
```
gem install scss_lint
```

> **Note about Ruby Gems dependencies:** <br />
> The reason why we don't use Node `SASS-LINT` instead is the lack of support to *SelectorFormat* rule among others. Feel free to fork this repo and [convert](http://sasstools.github.io/make-sass-lint-config/) SCSS-LINT.YML file into SASS-LINT format to get rid of Ruby dependency.

- Files you wish to lint must be written in SCSS (not SASS) syntax.

### Step 4 - Install SASS Linting plugin

- Open Package control in Sublime Text by typing: `cmd + shift + p` and then search for `install package`
- Select `SublimeLinter-contrib-sass-lint`
- Reopen Sublime Text if necessary.
- SASS linting rules must be defined in a `.scss-lint.yml` file in the root directory.

### Step 5 - Install Eslint for JS Linting plugin

- Install the Eslint CLI from a global node package by typing `npm i -g eslint` in your terminal.
- Open Package control by typing: `cmd + shift + p` and then search for `install package`
- Select `SublimeLinter-contrib-eslint`
- Reopen Sublime Text if necessary
- Javascript linting rules must be defined in a `.eslintrc` file in the root directory.

----

* [SASS Syntax](#sass-syntax)
    - [BangFormat](#bangformat)
    - [BorderZero](#borderzero)
    - [ColorVariable](#colorvariable)
    - [Comment](#comment)
    - [DebugStatement](#debugstatement)
    - [DeclarationOrder](#declarationorder)
    - [DuplicateProperty](#duplicateproperty)
    - [ElsePlacement](#elseplacement)
    - [EmptyLineBetweenBlocks](#emptylinebetweenblocks)
    - [EmptyRule](#emptyrule)
    - [FinalNewline](#finalnewline)
    - [HexLength](#hexlength)
    - [HexNotation](#hexnotation)
    - [HexValidation](#hexvalidation)
    - [IdSelector](#idselector)
    - [ImportantRule](#importantrule)
    - [ImportPath](#importpath)
    - [Indentation](#indentation)
    - [LeadingZero](#leadingzero)
    - [MergeableSelector](#mergeableselector)
    - [NameFormat](#nameformat)
    - [NestingDepth](#nestingdepth)
    - [PlaceholderInExtend](#placeholderinextend)
    - [PropertySortOrder](#propertysortorder)
    - [PropertySpelling](#propertyspelling)
    - [SelectorDepth](#selectordepth)
    - [SelectorFormat](#selectorformat)
    - [Shorthand](#shorthand)
    - [SingleLinePerProperty](#singlelineperproperty)
    - [SingleLinePerSelector](#singlelineperselector)
    - [SpaceAfterComma](#spaceaftercomma)
    - [SpaceAfterPropertyColon](#spaceafterpropertycolon)
    - [SpaceAfterPropertyName](#spaceafterpropertyname)
    - [SpaceBeforeBrace](#spacebeforebrace)
    - [SpaceBetweenParens](#spacebetweenparens)
    - [StringQuotes](#stringquotes)
    - [TrailingSemicolon](#trailingsemicolon)
    - [TrailingZero](#trailingzero)
    - [UnnecessaryMantissa](#unnecessarymantissa)
    - [UnnecessaryParentReference](#unnecessaryparentreference)
    - [UrlFormat](#urlformat)
    - [UrlQuotes](#urlquotes)
    - [VendorPrefixes](#vendorprefixes)
    - [ZeroUnit](#zerounit)

----

* [JS Syntax](#js-syntax)
    - [no-alert](#no-alert)
    - [no-array-constructor](#no-array-constructor)
    - [no-caller](#no-caller)
    - [no-bitwise](#no-bitwise)
    - [no-catch-shadow](#no-catch-shadow)
    - [no-console](#no-console)
    - [no-control-regex](#no-control-regex)
    - [no-debugger](#no-debugger)
    - [no-div-regex](#no-div-regex)
    - [no-dupe-keys](#no-dupe-keys)
    - [no-else-return](#no-else-return)
    - [no-empty](#no-empty)
    - [no-empty-character-class](#no-empty-character-class)
    - [no-eq-null](#no-eq-null)
    - [no-eval](#no-eval)
    - [no-ex-assign](#no-ex-assign)
    - [no-func-assign](#no-func-assign)
    - [no-floating-decimal](#no-floating-decimal)
    - [no-implied-eval](#no-implied-eval)
    - [no-with](#no-with)
    - [no-fallthrough](#no-fallthrough)
    - [no-unreachable](#no-unreachable)
    - [no-undef](#no-undef)
    - [no-undef-init](#no-undef-init)
    - [no-underscore-dangle](#no-underscore-dangle)
    - [no-unused-expressions](#no-unused-expressions)
    - [no-octal](#no-octal)
    - [no-octal-escape](#no-octal-escape)
    - [no-multi-str](#no-multi-str)
    - [no-new-wrappers](#no-new-wrappers)
    - [no-new-object](#no-new-object)
    - [no-unused-vars](#no-unused-vars)
    - [no-script-url](#no-script-url)
    - [no-proto](#no-proto)
    - [no-redeclare](#no-redeclare)
    - [no-regex-spaces](#no-regex-spaces)
    - [no-extra-semi](#no-extra-semi)
    - [no-irregular-whitespace](#no-irregular-whitespace)
    - [no-multi-spaces](#no-multi-spaces)
    - [no-trailing-spaces](#no-trailing-spaces)
    - [no-use-before-define](#no-use-before-define)
    - [break-style](#break-style)
    - [block-scoped-var](#block-scoped-var)
    - [camelcase](#camelcase)
    - [comma-dangle](#comma-dangle)
    - [curly](#curly)
    - [dot-notation](#dot-notation)
    - [eqeqeq](#eqeqeq)
    - [guard-for-in](#guard-for-in)
    - [key-spacing](#key-spacing)
    - [max-depth](#max-depth)
    - [new-cap](#new-cap)
    - [new-parens](#new-parens)
    - [quotes](#quotes)
    - [quote-props](#quote-props)
    - [radix](#radix)
    - [semi](#semi)
    - [space-infix-ops](#space-infix-ops)
    - [strict](#strict)
    - [use-isnan](#use-isnan)
    - [valid-typeof](#valid-typeof)
    - [wrap-iife](#wrap-iife)
    - [wrap-regex](#wrap-regex)

----

* [JSX Syntax](#jsx-syntax)
    - [ReactJS](#reactjs)

* ReactJS Linting Rules
    - [react/display-name](#react/display-name)
    - [react/jsx-quotes](#react/jsx-quotes)
    - [react/jsx-no-undef](#react/jsx-no-undef)
    - [react/jsx-uses-react](#react/jsx-uses-react)
    - [react/jsx-uses-vars](#react/jsx-uses-vars)
    - [react/no-did-mount-set-state](#react/no-did-mount-set-state)
    - [react/no-did-update-set-state](#react/no-did-update-set-state)
    - [react/no-multi-comp](#react/no-multi-comp)
    - [react/prop-types](#react/prop-types)
    - [react/react-in-jsx-scope](#react/react-in-jsx-scope)
    - [react/self-closing-comp](#react/self-closing-comp)
    - [react/wrap-multilines](#react/wrap-multilines)

----

# SASS Syntax
Here you'll find a use case example for every SASS linting rule specified in this set:

### BangFormat

Defines the right use of  *the bang* `!` in `!default`, `!global`,  and `!optional` flags.

**Bad**

```scss
$c-bg-light: #ffffff!default
```

**Good**

```scss
$c-bg-light: #ffffff !default
```

### BorderZero

Set properties to `border: 0` over `border: none`.

**Bad**

```scss
border: none;
```

**Good**

```scss
border: 0;
```

### ColorVariable

To avoid colour entropy all arround the site is mandatory to set colour using SASS variables as shown in the example below. Colour parametrization ensures better maintainability and are more verbose than setting an hex value as `#bada55`

**Bad: literal color**

```scss
.sui-Card-title {
    color: green;
}
```

**Good: refer to color by variable name**

```scss
$body-color: #c0ffee;

...

.sui-Card-title {
    color: $body-color;
}
```

### Comment

Althoug comments are enabled consider using `//` comments over `/* ... */`. The former are more precise single line comments while the later tends to be multiple lines comments rendered in the final css file.

**Bad**

```scss
/* This is a multi line
comment that gets rendered
and tends to be too generic */
```

**Good**

```scss
// This is a one line concise non rendered comment
```

### DebugStatement

`@debug` statements are not allowed.

### DeclarationOrder

Place `@extend` and `@include` before properties so you can overwrite them later if needed.

**Bad**

```scss
.sui-Card-mediaContent {
p {
...
}

color: #bg-light;
@extend %sui-Card-boxContent;
@include message-box();
}
```

**Good**

```scss
.sui-Card-mediaContent {
    @extend %sui-Card-boxContent;
    @include message-box();
    color: #bg-light;

    p {
        ...
    }
}
```

### DuplicateProperty

Usually, if you set the same property twice inside the same selector is a mistake so you're not allowed to do so:

**Bad**

```scss
.sui-Card {
    float: left;
    text-transform: uppercase;
    float: right; // Second declaration
}
```

### ElsePlacement

Place `@else` statements on the same line as the preceding curly brace.

**Bad**

```scss
@if {
    ...
}
@else {
    ...
}
```

**Good**

```scss
@if {
...
} @else {
...
}
```

### EmptyLineBetweenBlocks

Ad extra separation line between every declaration block.
In nested declarations is also mandatory.


**Bad: no lines separating blocks**

```scss
.sui-Component {
  margin: 0;
  .sui-Subcomponent {
    ...
  }
}
a {
  ...
}
```

**Good: Use an empty separation line**

```scss
.sui-Component {
  margin: 0;

  .sui-Subcomponent {
    ...
  }
}

a {
  ...
}
```

One line declarations doesn't apply.

```scss
.sui-Icon    { &:before { content: "\e030"; } }
```

### EmptyRule

To avoid useless empty declarations in your code, this rule reports when you have an empty rule set:

```scss
.sui-Card {
}
```

### FinalNewline

Insert an empty final line of code in every file. This is helpful for better Git diffs.

### HexLength

Set always hexadecimal color values in long format

**Bad: no long format hex value**

```scss

$c-bg-light: #fe0:

.sui-Component {
    background-color: $c-bg-light;
}

```

**Good: Long format hex value applied to a SASS var**

```scss

$c-bg-light: #bada55:

.sui-Component {
    background-color: $c-bg-light;
}

```

### HexNotation

Reports uppercase hex color notation:

**Bad: Uppercase notation is not allowed**

```scss

$c-bg-light: #BADA55:

.sui-Component {
    background-color: $c-bg-light;
}

```

**Good: Lowercase hex notation value applied to a SASS var**

```scss

$c-bg-light: #bada55:

.sui-Component {
    background-color: $c-bg-light;
}

```

### HexValidation

Ensure hexadecimal colors are valid

**Bad: Hexadecimal color values must be 6 digits long, lowercase and only if contains these characters: 0123456789abcdef**

```scss

$c-bg-light: #bazh5:

.sui-Component {
    background-color: $c-bg-light;
}

```

**Good: Valid hex value applied to a SASS var**

```scss

$c-bg-light: #bada55:

.sui-Component {
    background-color: $c-bg-light;
}

```

### IdSelector

To avoid highly specific selectors ID's are not allowed to apply SASS styling:

**Bad: ID selector**

```scss

#sui-Component {
    background-color: $c-bg-light;
}

```

**Good: Apply Class selector instead**

```scss

.sui-Component {
    background-color: $c-bg-light;
}

```

### ImportantRule

In order to avoid specificity problems using `!important` in SASS properties is not allowed.

**Bad:**

```scss

.sui-Component {
    background-color: $c-bg-light !important;
}

```

**Good: Apply Class selector instead**

```scss

.sui-Component {
    background-color: $c-bg-light;
}

```

### ImportPath

An imported partials SASS file paths cannot have preceding underscores `_` but it must contain a `.scss` expension declared in path in order to be compatible with the `node-sass v.3.4.1`.

This update to `node-sass` is mandatory to execute this package under Node v.4.

**Bad**

```scss
@import "foo/_bar.scss";
@import "_bar.scss";
@import "_bar";
@import "bar.scss";
```

**Good**

```scss
@import "foo/bar";
@import "bar";
```

### Indentation

Default basic indentation is set to the followind value:

- Indentation 2 spaces.

##### Use Editorconfig instead

In the other hand, automatic **indentation** can be performed by Editorconfig to ensure a consistent coding style no matter what editor or IDE you use. Consists of a hidden file named `.editorconfig` and a plugin that needs to be installed in your code editor.

Also helps Github diffing tool to avoid incorrect file changes. The presets included in Editorconfig are:

- `[*]` - Applies the following rules to **all characters in files**.
- `indent_style = space` - Use *soft tabs* for indentation.
- `indent_size = 2` - 2 columns are used for each indentation.
- `end_of_line = lf` - Line ending are set to *line feed*
- `charset = utf-8` - Character encoding is set to utf-8.
- `trim_trailing_whitespace = true` - Whitespace preceding new lines is removed.
- `insert_final_newline = true` - An empty new line at the end of every file must to be added.

Markdown files has the following rule redefined:

- `indent_size = 4` - 4 columns are used for each indentation.

Make sure you install the right plugin for your code editor. Check out the [EditorConfig](http://editorconfig.org/#download) website to get the right one.

If you are using **Sublime Text**:

- open Package Control.
- Type `EditorConfig` .
- Press `enter` to Install it.

### LeadingZero

Don't write leading zeros for numeric values with a decimal point.

**Bad: unnecessary leading zero**

```scss
margin: 0.5em;
```

**Good: no leading zero**

```scss
margin: .5em;
```

### MergeableSelector

Reports when you define the same selector twice in a single sheet.

**Bad**

```scss
h1 {
  margin: 10px;
}

.baz {
  color: red;
}

// Second copy of h1 rule
h1 {
  text-transform: uppercase;
}
```

### NameFormat

Functions, mixins, variables, and placeholders should be declared with all
lowercase letters and hyphens instead of underscores.

**Bad: uppercase characters**

```scss
$myVar: 10px;

@mixin myMixin() {
  ...
}
```

**Good: all lowercase with hyphens**

```scss
$my-var: 10px;

@mixin my-mixin() {
  ...
}
```

### NestingDepth

The max nesting selectors in SASS files is: **4 levels**.

**Bad: descendent name anidation add overspecificity**

```scss

.sui-Component {
        …
    &-header {
    …
    }
    &-avatar {
    …
    }
    &-bodyText {
    …
    }
}
```

**Good: each descendent name is not anided with the parent**

```scss
.sui-Component {
… 
}
.sui-Component-header {
…
}
.sui-Component-avatar {
…
}
.sui-Component-bodyText {
…
}
```

### PlaceholderInExtend

Always use placeholder selectors in `@extend` to avoid generating more code than necessary.

**Bad: extending a class**

```scss
.fatal {
  @extend .error;
}
```

**Good: extending a placeholder**

```scss
.fatal {
  @extend %error;
}
```

### PropertySortOrder

Use alphabetical order in your declaration statements. If you are using Sublime Text select all the properties and press `F5` to automatic sorting. Note: No grouping or line spaces between property blocks are allowed.

**Bad: No alphabetically ordered properties**

```scss

.sui-Component {
    width: 100%;
    background-color: $c-bg-light;
    margin: 0 auto;
}

```

**Good: Alphabetically ordered properties**

```scss

.sui-Component {
    background-color: $c-bg-light;
    margin: 0 auto;
    width: 100%;
}

```

## PropertySpelling

Reports when you use an unknown CSS property (ignoring vendor-prefixed
properties).

```scss
diplay: none; // "display" is spelled incorrectly
```

### SelectorDepth

Max depth of selectors applicability is set to 3.

**Bad: selectors with depths of 4**

```scss
.one .two .three > .four {
  ...
}

.one .two {
  .three > .four {
    ...
  }
}
```

**Good: Max depth of 3**

```scss
.one .two .three {
  ...
}

.one .two {
  .three {
    ...
  }
}
```

### SelectorFormat

The selector format **naming convention** used here is based in [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

It must match the following RegEx:
`^(?:[a-zA-Z0-9]*)\-[A-Z]{1}[a-z][a-zA-Z0-9]*(?:\-[a-z][a-zA-Z0-9]*)?(?:\-\-[a-z][a-zA-Z0-9]*)?$`

Perhaps you prefer to see an example:

```
.pre-MyComponent {}
.pre-MyComponent.is-animating {}
.pre-MyComponent--modifier {}

.pre-MyComponent-element {}
.pre-MyComponent-anotherElement {}

```

### Shorthand

Shortest shorthand for properties that support it are mandatory.

**Bad: all 4 sides specified with same value**

```scss
margin: 1px 1px 1px 1px;
```

**Good: equivalent to specifying 1px for all sides**

```scss
margin: 1px;
```

### SingleLinePerProperty

Properties within rule sets should each reside on their own line.

**Bad**

```scss
p {
  margin: 0; padding: 0;
}
```

**Good**

```scss
p {
  margin: 0;
  padding: 0;
}
```

### SingleLinePerSelector

Split selectors onto separate lines after each comma, and have each individual
selector occupy a single line.

**Bad: comma-separated selectors not on their own lines**

```scss
.error p, p.explanation {
  ...
}
```

**Bad: descendent selector spread over multiple lines**

```scss
.error
  p,
  p.explanation {
  ...
}
```

**Good: each selector sequence is on its own individual line**

```scss
.error p,
p.explanation {
  ...
}
```

### SpaceAfterComma

Commas in lists should be followed by a space.

**Bad: no space after commas**

```scss
@include box-shadow(0 2px 2px rgba(0,0,0,.2));
color: rgba(0,0,0,.1);
```

**Good: commas followed by a space**

```scss
@include box-shadow(0 2px 2px rgba(0, 0, 0, .2));
color: rgba(0, 0, 0, .1);
```

### SpaceAfterPropertyColon

Properties should be formatted with a single space separating the colon from
the property's value.

**Bad: no space after colon**

```scss
margin:0;
```

**Bad: more than one space after colon**

```scss
margin:   0;
```

**Good: Just a single space after colon**

```scss
margin: 0;
```

### SpaceAfterPropertyName

Properties should be formatted with no space between the name and the colon.

**Bad: space before colon**

```scss
margin : 0;
```

**Good**

```scss
margin: 0;
```

### SpaceBeforeBrace

Opening braces should be preceded by a single space.

**Bad: no space before brace**

```scss
.sui-Button{
  ...
}
```

**Bad: more than one space before brace**

```scss
.sui-Button  {
  ...
}
```

**Good**

```scss
.sui-Button {
  ...
}
```

For **Single Line Blocks** extra spaces are allowed to better align code:

```scss
.sui-Arrow--up    { &:before { content: "\e030"; } }
.sui-Arrow--down  { &:before { content: "\e031"; } }
.sui-Arrow--left  { &:before { content: "\e032"; } }
.sui-Arrow--right { &:before { content: "\e033"; } }
```

### SpaceBetweenParens

Parentheses should not be padded with spaces.

**Bad**

```scss
@include box-shadow( 0 2px 2px rgba( 0, 0, 0, .2 ) );
color: rgba( 0, 0, 0, .1 );
```

**Good**

```scss
@include box-shadow(0 2px 2px rgba(0, 0, 0, .2));
color: rgba(0, 0, 0, .1);
```

### StringQuotes

String literals should be written with single quotes unless using double quotes
would save on escape characters.

The reason why we prefer single quotes is because are easier to type (no shift key needed) in most keyboards.

**Bad: double quotes**

```scss
content: "hello";
```

**Good: single quotes**

```scss
content: 'hello';
```

**Good: double quotes prevent the need for escaping single quotes**

```scss
content: "'hello'";
```

### TrailingSemicolon

All property values including; `@extend`, `@include`, and `@import` directives; and variable declarations should always end with a semicolon.
Although in CSS you can omit the semicolon if the statement is the last one it might lead to inconsistencies.

**Bad: no semicolon**

```scss
p {
  color: #fff
}
```

**Bad: space between value and semicolon**

```scss
p {
  color: #fff ;
}
```

**Good**

```scss
p {
  color: #fff;
}
```

### TrailingZero

Don't write trailing zeros for numeric values with a decimal point in order to save additional bytes in generated CSS files.

**Bad: unnecessary trailing zero**

```scss
margin: .500em;
padding: 0.5em
```

**Good: no trailing zero**

```scss
margin: .5em;
padding: .5em
```

### UnnecessaryMantissa

Numeric values should not contain unnecessary fractional portions. Otherwhise SASS will take that value as an unnecesary floating point unit reducing performance and increasing memory usage.

**Bad**

```scss
margin: 1.0em;
```

**Good**

```scss
margin: 1em;
```

### UnnecessaryParentReference

Do not use parent selector references (`&`) when they would otherwise be
unnecessary.

**Bad**

```scss
.sui-Card {
  & > .sui-Card-content {
    ...
  }
}
```

**Good**

```scss
.sui-Card {
  > .sui-Card-content {
  }
}
```

### UrlFormat

URLs should not contain protocols or domain names.

Including protocols or domains in URLs makes them brittle to change, and also
unnecessarily increases the size of your CSS documents, reducing performance.

**Bad: protocol and domain present**

```scss
background: url('https://example.com/assets/image.png');
```

**Good**

```scss
background: url('assets/image.png');
```

### UrlQuotes

In order to be consistent with other SASS asset helpers URLs should always be enclosed within quotes.

**Bad: no enclosing quotes**

```scss
background: url(example.png);
```

**Good**

```scss
background: url('example.png');
```

### VendorPrefix

Avoid vendor prefixes. Use `autoprefixer` tools. Don't write them yourself.

**Bad: vendor prefixes**

```scss
@-webkit-keyframes anim {
  0% { opacity: 0; }
}

```

**Good**

```scss
// Autoprefix later in pre/post SASS processing...
@keyframes anim {
  0% { opacity: 0; }
}
```

### ZeroUnit

Because zero is zero regardless of the units of length, omit length units on zero values.

**Bad: unnecessary units**

```scss
margin: 0px;
```

**Good**

```scss
margin: 0;
```

----

# JS Syntax
The following lines are a summary of the JS syntax and rules you must follow in order to be able to commit your changes. Every rule has its own level of acceptance:

- **Allowed** > You can use whatever is specified in this rule.
- **Warning** > If you don't follow this rule you'll get a warning alert in console.
- **Error** > You are not allowed to omit this rule.

### No Alert
**Error** > Alert is often used while debugging code, which should be removed before deployment to production.,

```javascript
alert("here!");
```

### No Array Constructor
**Error** > Use of the Array constructor to construct a new array is generally discouraged in favour of array literal notation because of the single-argument pitfall and because the Array global may be redefined.

```javascript
new Array(0, 1, 2)
```

### No Caller
**Error** > This rule is aimed at discouraging the use of deprecated and sub-optimal code, but disallowing the use of `arguments.caller` and `arguments.callee`.

You are not allow to do:

```javascript
function whoCalled() {
   if (arguments.caller == null)
      console.log('I was called from the global scope.');
   else
      console.log(arguments.caller + ' called me!');
}
```
### No Bitwise
**Allowed** > This rule is aimed at catching typos that end up as bitwise operators, but are meant to be the much more common `&&`, `||`, `<`, `>` operators. As Allowed rule, you must be carefull using them:

```javascript
// Wrong bitwise operator format:
var x = y | z;
var x = y & z;
var x = y ^ z;
var x = y ~ z;

// You should use this format instead:
var x = y || z;
var x = y && z;
var x = y > z;
var x = y < z;
x += y;
```

### No Catch Shadow
**Error** > Disallow Shadowing of Variables Inside of catch. In IE 8 and earlier, the catch clause parameter can overwrite the value of a variable in the outer scope, if that variable has the same name as the catch clause parameter.

```javascript
var err = 'x';

try {
    throw "problem";
} catch (err) {  /*error Value of 'err' may be overwritten in IE 8 and earlier.*/
    
    [...]
}
```

### No Console
**Error** > In JavaScript that is designed to be executed in the browser, it's considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client.

```javascript
console.log("Hello world!");
console.error("Something bad happened.");
```

### No Control Regex
**Error** > Control characters are special, invisible characters in the ASCII range 0-31. These characters are rarely used in JavaScript strings so a regular expression containing these characters is most likely a mistake.

```javascript
var pattern1 = /\\x1f/;
var pattern2 = new RegExp("\x1f");
```

### No Debugger
**Error** > The debugger statement is used to tell the executing JavaScript environment to stop execution and start up a debugger at the current point in the code. This has fallen out of favor as a good practice with the advent of modern debugging and development tools.

```javascript
debugger;
```

### No Div Regex
**Error** > Disallow Regexs That Look Like Division. This is used to disambiguate the division operator to not confuse users.

The following patterns are considered problems:

```javascript
function bar() { return /=foo/; } /*error A regular expression literal can be confused with '/='.*/
```

### No Dupe Keys
**Error** > Creating objects with duplicate keys in objects can cause unexpected behavior in your application. The `no-dupe-keys` rule flags the use of duplicate keys in object literals.

The following patterns are considered problems:

```javascript
var foo = {
    bar: "baz",
    bar: "qux"
};
```

### No Else Return
**Error** > If an if block contains a return statement, the else block becomes unnecessary. Its contents can be placed outside of the block.

```javascript
function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}
```

### No Empty
**Error** > Empty statements usually occur due to refactoring that wasn't completed, such as:

```javascript
if (foo) {
}
```

The following pattern is **not** considered a problem:

```javascript
if (foo) {
  // left empty on purpose
}
```
### No Empty Character Class
**Error** > Empty character classes in regular expressions do not match anything and can result in code that may not work as intended.

This rule is aimed at highlighting possible typos and unexpected behavior in regular expressions which may arise from the use of empty character classes.

The following pattern is considered a problem:

```javascript
var foo = /^abc[]/;
/^abc[]/.test(foo);
```

### No Eq Null
**Error** > Comparing to `null` without a type-checking operator (`==` or `!=`), can have unintended results as the comparison will evaluate to `true` when comparing to not just a `null`, but also an `undefined` value.

The `no-eq-null` rule aims reduce potential bug and unwanted behavior by ensuring that comparisons to `null` only match `null`, and not also `undefined`. As such it will flag comparisons to `null` when using `==` and `!=`.

The following patterns are considered problems:

```javascript
if (foo == null) {     /*error Use ‘===’ to compare with ‘null’.*/
  bar();
}

while (qux != null) {  /*error Use ‘===’ to compare with ‘null’.*/
  baz();
}
```

### No Eval
**Error** > JavaScript's `eval()` function is potentially dangerous and is often misused. Using `eval()` on untrusted code can open a program up to several different injection attacks. The use of `eval()` in most contexts can be substituted for a better, alternative approach to a problem.

```javascript
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
```

### No Ex Assign
**Error** > Disallow Assignment of the Exception Parameter. When an error is caught using a `catch` block, it's possible to accidentally (or purposely) overwrite the reference to the error.

This rule's purpose is to enforce convention. Assigning a value to the exception parameter wipes out all the valuable data contained therein and thus should be avoided. Since there is no `arguments` object to offer alternative access to this data, assignment of the parameter is absolutely destructive.

The following pattern is considered a problem:

```javascript
try {
    // code
} catch (e) {
    e = 10;   /*error Do not assign to the exception parameter.*/
}
```

### No Func Assign
**Error** > JavaScript functions can be written as a **FunctionDeclaration** `function foo() { ... }` or as a **FunctionExpression** `var foo = function() { ... };`. While a JavaScript interpreter might tolerate it, overwriting/reassigning a function written as a **FunctionDeclaration** is often indicative of a mistake or issue.

This rule is aimed at flagging probable mistakes and issues in the form of overwriting a function that was written as a FunctionDeclaration. As such it will warn when this issue is encountered.

The following patterns are considered problems:

```javascript
function foo() {}
foo = bar;        /*error 'foo' is a function.*/

function foo() {
    foo = bar;    /*error 'foo' is a function.*/
}
```

### No Floating Decimal
**Error** > Float values in JavaScript contain a decimal point, and there is no requirement that the decimal point be preceded or followed by a number. For example, the following are all valid JavaScript numbers:

```javascript
var num = .5;
var num = 2.;
var num = -.7;
```
Although not a syntax error, this format for numbers can make it difficult to distinguish between true decimal numbers and the dot operator. For this reason, some recommend that you should always include a number before and after a decimal point to make it clear the intent is to create a decimal number.

This rule is aimed at eliminating floating decimal points and will warn whenever a numeric value has a decimal point but is missing a number either before or after it.

The following patterns are considered problems:

```javascript
var num = .5;  /*error A leading decimal point can be confused with a dot.*/
var num = 2.;  /*error A trailing decimal point can be confused with a dot.*/
var num = -.7; /*error A leading decimal point can be confused with a dot.*/
```

### No Implied Eval
**Error** > It's considered a good practice to avoid using `eval()` in JavaScript. There are security and performance implications involved with doing so, which is why many linters (including ESLint) recommend disallowing `eval()`. However, there are some other ways to pass a string and have it interpreted as JavaScript code that have similar concerns.

The first is using `setTimeout()`, `setInterval()` or `execScript()` (Internet Explorer only), both of which can accept a string of JavaScript code as their first argument. For example:

```javascript
setTimeout("alert('Hi!');", 100);
```

This is considered an implied `eval()` because a string of JavaScript code is passed in to be interpreted. The same can be done with `setInterval()` and `execScript()`. Both interpret the JavaScript code in the global scope. For both `setTimeout()` and `setInterval()`, the first argument can also be a function, and that is considered safer and is more performant:

```javascript
setTimeout(function() {
    alert("Hi!");
}, 100);
```
The best practice is to always use a function for the first argument of `setTimeout()` and `setInterval()` (and avoid `execScript()`).


### No With
**Error** > The `with` statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to. Additionally, the `with` statement cannot be used in `strict mode`.

This rule is aimed at eliminating `with` statements.
The following patterns is considered a problem:

```javascript
with (foo) { /*error Unexpected use of 'with' statement.*/
    // ...
}
```

### No Fallthrough
**Error** > The `switch` statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to "fall through" from one case to the next. For example:

This rule is aimed at eliminating **unintentional fallthrough** of one case to the other. As such, it flags and fallthrough scenarios that are not marked by a comment.

The following pattern is considered a problem:

```javascript
switch(foo) {
    case 1:            /*error Expected a "break" statement before "case".*/
        doSomething();

    case 2:
        doSomething();
}
```
The following pattern is **not** considered a problem:

```javascript
switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}
```

### No Unreachable
**Error** > A number of statements unconditionally exit a block of code. Any statements after that will not be executed and may be an error. The presence of unreachable code is usually a sign of a coding error.

```javascript
function fn() {
    x = 1;
    return x;
    x = 3; // this will never execute
}
```

This rule is aimed at detecting unreachable code. It produces an error when a statements in a block exist after a `return`, `throw`, `break`, or `continue` statement. The rule checks inside the program root, block statements, and `switch` cases.

The following are considered problems:

```javascript
function foo() {
    return true;
    console.log("done");      /*error Found unexpected statement after a return.*/
}

function bar() {
    throw new Error("Oops!");
    console.log("done");      /*error Found unexpected statement after a throw.*/
}
```

### No Undef
**Error** > Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a `/*global ...*/` comment. This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for example, from forgetting the `var` keyword in a `for` loop initializer).

```javascript
var a = someFunction();  /*error "someFunction" is not defined.*/
b = 10;                  /*error "b" is not defined.*/
```

Explicitly checking an undefined identifier with typeof causes no warning:

```javascript
if (typeof UndefinedIdentifier === "undefined") {
    // do something ...
}
```

### No Undef Init
**Error** > In JavaScript, a variable that is declared and not initialized to any value automatically gets the value of `undefined`. For example:

```javascript
var foo;
console.log(foo === undefined);     // true
```
It's therefore unnecessary to initialize a variable to undefined, such as:

```javascript
var foo = undefined;
```

### No Underscore Dangle
**Allowed** > Dangling underscores are underscores at either the beginning or end of an identifier, such as:

```javascript
var _foo;
```
Using a single underscore prefix has become popular as a way to indicate "private" members of objects.

Whether or not you choose to allow dangling underscores in identifiers is purely a convention and has no effect on performance, readability, or complexity. It's purely a preference.

### No Unused Expressions
**Error** > Unused expressions are those expressions that evaluate to a value but are never used. For example:

```javascript
"Hello world";
```
By default the following patterns are considered problems:

```javascript
0         /*error Expected an assignment or function call and instead saw an expression.*/

if(0) 0   /*error Expected an assignment or function call and instead saw an expression.*/
```

The following patterns are **not** considered problems by default:

```javascript
a = 0
new C
delete a.b
```

### No Octal
**Error** > Octal literals are numerals that begin with a leading zero, such as:

```javascript
var num = 071;      // 57
```
The leading zero to identify an octal literal has been a source of confusion and error in JavaScript. ECMAScript 5 deprecates the use of octal numeric literals in JavaScript and octal literals cause syntax errors in strict mode.

It's therefore recommended to avoid using octal literals in JavaScript code.

### No Octal Escape
**Error** > As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated feature and should not be used. It is recommended that Unicode escapes be used instead.

The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal escape sequences. As such it will warn whenever an octal escape sequence is found in a string literal.

The following pattern in considered a problem:

```javascript
var foo = "Copyright \251"; /*error Don't use octal: '\251'.
```

The following pattern are **not** considered problems:

```javascript
var foo = "Copyright \u00A9";   // unicode
var foo = "Copyright \xA9";     // hexadecimal
```

