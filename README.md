# Frontend precommit rules for Javascript, SASS and ReactJS

### The main goal of this set of rules is to establish healthy boundaries where cleaner code will be easier to share, more scalable, more readable and easier to maintain for everyone.

----

In order to do so we decided to rely on [Eslint](http://eslint.org/), a great Javascript linter by [Nicholas C. Zakas](https://twitter.com/slicknet) and [SCSS-Lint](https://github.com/brigade/scss-lint) for... yes! SASS linting.

#### Index
* [Linter Installation](#linterinstallation)
- [SublimeLinter SASS](#sublimeLinter-sass)
- [Eslint for JS Linting](#eslint-for-js-linting)

* [SASS Syntax](#sass-syntax)
- [BangFormat](#bangformat)
- [BorderZero](#borderzero)
- [ColorVariable](#colorvariable)
- [Comment](#comment)
- [DebugStatement](#debugstatement)
- [DeclarationOrder](#declarationorder)
- [DuplicateProperty](#duplicateproperty)
- [ElsePlacement](#elseplacement)

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

####**in SASS linting you must:
- Leave a space after colon.
- Leave an empty line between blocks.
- Merge rules of same selector.
- Set properties to `0` instead of `none`.
- Match the selector format to the [Naming Convention](#naming-convention)
- ...

----

# Linter Installation
We use Sublime Text 3 running [Sublime Linter Plugin](http://www.sublimelinter.com/en/latest/). This plugin is no longer including linting files so you need to install them apart:

#### SublimeLinter SASS
- Open Package control by typing: `cmd + shift + p` and then search for `install package`
- Select `SublimeLinter-contrib-sass-lint`
- Reopen Sublime Text if necessary.
- SASS linting rules must be defined in a `.scss-lint.yml` file in the root directory.

#### Eslint for JS Linting
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

## BorderZero

Set properties to `border: 0` over `border: none`.

**Bad**
```scss
border: none;
```

**Good**
```scss
border: 0;
```

## ColorVariable

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

## Comment

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

## DebugStatement

`@debug` statements are not allowed.

## DeclarationOrder

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

## DuplicateProperty

Usually, if you set the same property twice inside the same selector is a mistake so you're not allowed to do so:

**Bad**
```scss
.sui-Card {
float: left;
text-transform: uppercase;
float: right; // Second declaration
}
```

## ElsePlacement

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

## PropertySortOrder

Use alphabetical order in your declaration statements. If you are using Sublime Text select all the properties and press `F5` to automatic sorting. Note: No grouping or line spaces between property blocks are allowed.

## Naming Convention
Based in [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

Example:
```
.pre-MyComponent {}
.pre-MyComponent.is-animating {}
.pre-MyComponent--modifier {}

.pre-MyComponent-element {}
.pre-MyComponent-anotherElement {}
```
