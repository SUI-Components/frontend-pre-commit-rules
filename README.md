# Frontend precommit rules for Javascript, SASS and ReactJS

### The main goal of this set of rules is to establish healthy boundaries where cleaner code will be easier to share, more scalable, more readable and easier to maintain for everyone.

----

In order to do so we decided to rely on [Eslint](http://eslint.org/), a great Javascript linter by [Nicholas C. Zakas](https://twitter.com/slicknet) and [SCSS-Lint](https://github.com/brigade/scss-lint) for... yes! SASS linting.

#### TL;DR
If you are wondering if this set of rules if for you here's a brief description. Keep reading to get a detailed description.

####**SASS Linting won't let you:**
- Leave empty declarations or duplicate properties.
- Add comments
- Add color values directly to a property. You must use **variables** instead.
- Set short #hex values.
- Use of `!important`
- Nest properties beyond 4 levels.
- Write a selector in a single line.
- ...

####**in SASS linting you must:**
- Leave a space after colon.
- Leave an empty line between blocks.
- Merge rules of same selector.
- Set properties to `0` instead of `none`.
- Match the selector format to the [Naming Convention](#naming-convention)
- ...

----

#### Index
* [Linter Installation](#linterinstallation)
    - [Step 1 - Package Control](#step1-packagecontrol)
    - [Step 2 - Install plugin](#step2-installplugin)
    - [Step 3 - Ruby Gems dependencies](#step3-rubygemsdependencies)
    - [Step 4 - Install SASS Linting plugin](#step4-installsasslintingplugin)
    - [Step 5 - Install Eslint for JS Linting plugin](#step5-installeslintforjslintingplugin)


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

### PropertySortOrder

Use alphabetical order in your declaration statements. If you are using Sublime Text select all the properties and press `F5` to automatic sorting. Note: No grouping or line spaces between property blocks are allowed.

### Naming Convention
Based in [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

Example:
```
.pre-MyComponent {}
.pre-MyComponent.is-animating {}
.pre-MyComponent--modifier {}

.pre-MyComponent-element {}
.pre-MyComponent-anotherElement {}
```
