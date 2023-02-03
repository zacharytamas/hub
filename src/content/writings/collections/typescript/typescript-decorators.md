---
title: 'Using Decorators in TypeScript'
slug: 'typescript--decorators'
tags:
  - typescript

date: 2023-02-02
evergreen: true
---

[TypeScript 5.0][1] introduces support for [ECMAScript Decorators][2], which are an upcoming feature
but which have existed in draft form for many years. For several major versions of TypeScript there
has been support for "experimental" decorators through a `--experimentalDecorators` flag and
`tsconfig.json` setting. It was not enabled by default but was required to use decorators in
TypeScript code that utilized them idiomatically (for example, [Nest.js][3]).

### Table of contents

## What are decorators for?

I was first exposed to decorators over ten years ago when using [Python][4]'s during my [Django][5]
days. Put simply, decorators are a way to hook into the assignment of a variable or a declaration of
a class or function, and mutate it at the point which it is created. Depending on what kind of value
you are decorating, you can execute code before or after a function executes, tweak the provided
arguments or the return value, or even completely replace the value.

## Using ES spec Decorators

asdf

## Using `experimental` decorators

asdf

[1]: http:// 'TypeScript 5.0 release notes'
[2]: https://github.com/tc39/proposal-decorators 'ECMAScript Decorators Proposal'
[3]: https://nestjs.com/ 'Nest.js website'
[4]: https:// 'TODO: Python'
[5]: https:// 'TODO: Django Project website'
