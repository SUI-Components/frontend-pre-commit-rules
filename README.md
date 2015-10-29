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
- Match the selector format to the [Naming Convention](#naming-convention)
- ...

####**Your Javascript code must**
- Be free of alert(), console.log() and Debugger.
- Avoid references to Prototype.
- Use dot notation, camel case and single quotes.

####** Your ReactJS code must**
- Include just one component per file.
- Always declare expected proptype.
- Use JSX.

In addition, ES6 syntax is fully supported thanks to BabelJS. Feel free to use the right transpiling level for your project. Set the [right value](https://babeljs.io/docs/usage/babelrc/) in `.babelrc` config file.

----

#### Index
* [Linter Installation](#linter-installation)
    - [Step 1 - Package Control](#step-1---package-control)
    - [Step 2 - Install plugin](#step-2---install-plugin)
    - [Step 3 - Ruby Gems dependencies](#step-3---ruby-gems-dependencies)
    - [Step 4 - Install SASS Linting plugin](#step-4---install-sass-linting-plugin)
    - [Step 5 - Install Eslint for JS Linting plugin](#step-5---install-eslint-for-js-linting-plugin)


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
    - [SpaceAfterPropertyColon](#spaceafterPpropertycolon)
    - [SpaceAfterPropertyName](#spaceafterpropertyname)
    - [SpaceBeforeBrace](#spacebeforebrace)
    - [SpaceBetweenParens](#spacebetweenparens)
    - [StringQuotes](#stringquotes)
    - [TrailingSemicolon](#trailingsemicolon)
    - [TrailingZero](#trailingzero)
    - [TrailingZero](#trailingzero)
    - [UnnecessaryMantissa](#unnecessarymantissa)
    - [UnnecessaryParentReference](#unnecessaryparentreference)
    - [UrlFormat](#urlformat)
    - [UrlQuotes](#urlquotes)
    - [VendorPrefixes](#vendorprefixes)
    - [ZeroUnit](#zerounit)

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
- Files you wish to lint must be written in SCSS (not SASS) syntax.


### Step 4 - Install SASS Linting plugin

- Open Package control by typing: `cmd + shift + p` and then search for `install package`
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

An imported partials SASS file paths cannot have preceding underscores `_` and `.scss` expensions declared in path.

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