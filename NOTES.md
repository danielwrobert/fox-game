# Fox Game - Course Notes

Course notes from [Frontend Masters: Complete Front-End Project - Build A Game](https://frontendmasters.com/courses/front-end-game)

## Frontend Infastructure

### Build Process

https://btholt.github.io/project-fox-game-site/build-process

For a build process, we'll use Parcel. Webpack is a great tool - it's robust, configurable and really good for enterprise projects. However, it can be a bit difficult to get set up. Parcel, on the other hand, is quick and easy and we'll use it to get up and running quickly.

### Code Style

https://btholt.github.io/project-fox-game-site/code-style

Developers have a pure idea of how they want to solve problems in their head and anytime that you modify that, you're introducing friction, you're slowing them down, you're making them enjoy their job less. Like there's a bunch of stuff there, so make sure that any rule that you add to your code base is worth it.

This is why we have tests, this is why we have linting, this is why we have Prettier and code formatting - to automate a lot of these problems.

The problem with nitpicks, and PRs is that I wrote code, I finished writing the rest of the code, I committed it, I pushed it, I marked you on a PR and then like two days later, you look at the PR and you come back to it.

After that span of like five days since I wrote the code, I have to go regain all the context of what I wrote and then try and fix it. So it's a very, very inefficient and frustrating process.

### Code Formatting

https://btholt.github.io/project-fox-game-site/code-formatting

> Prettier allows you to define of how you code is formatted: tabs or spaces, two or four spaces, semi-colons or not, single or double quotes, etc. It then automatically formats your code for you, meaning you get to shut down the "thread" of your brain that worries about formatting your code and just focus on problem solving. Beyond that, you get to stop bikeshedding about these rules with your co-workers since the formatter works the same for everyone.

### Editor Setup

https://btholt.github.io/project-fox-game-site/editor-setup

> EditorConfig is a file that tells your editor how to set all the settings (indent, spacing, end-of-file characters, etc.) so your editor maintains a consistent setup. Prettier would ultimately fix all the problems upon save but it's just helpful to have it work continually and not have to fiddle with your editor.

### Linting

https://btholt.github.io/project-fox-game-site/linting

This is more into code style and this is a point of confusion for a lot of people because they don't understand why they need Prettier and they need ESLint. And they overlap, which makes it confusing, right? ESLint can take care of some of the things that Prettier takes care of.

And so people wonder, why do I need both tools? And the way that you should split these in your head is, Prettier is very mechanical. it's very syntactical. It's very much, is there a space here? Does this need parentheses? It's very focused on those details, Prettier does not care at all.

ESLint is about the style. It's about what the code does. And Prettier is about what how the code looks. So that's kind of the way that you can split it.

## Architecture

### Organizing Your Code

https://btholt.github.io/project-fox-game-site/organization

There is an endless ocean of ways you can organize your code, all with some trade-offs versus others. Some favor searchability, some favor being understandable from a file explorer, and most just end up being a junk drawer smattering of files.

When I write code I try to optimize for "deleteability". When I say deleteability, I mean that when a file / module is no longer useful, you can easily remove it from your code base.

Dead code is the enemy of trying to understand a code base.

In order for something to be deletable, it has to be modular, and so it kind of forces you into some good practices.

That being said - one importan takeaway is don't be such an idealogue to follow rules just because the rules. Always be thinking about always making the trade offs in your head. And if it doesn't make sense to follow one of the rules, then don't follow the rules.

### Init The Project

https://btholt.github.io/project-fox-game-site/init

>  I always try to have like one defined entry point to my app that the browser loads. And then everything else behind it, I try and make those modules. The reason being is that I can put all the garbage in this init.js that I'm not gonna test, right? Like a really good example of something that would go in this init.js would be like all this stuff setting up analytics, like Google Analytics or something like that. I'm not gonna test Google Analytics. I assume they test their own crap because that's their product. It's not my product, right? So all that kind of fluffy stuff goes here in init.js, I don't have to test init.js. I just know this is code that gets run in the browser and I can stop thinking about it.

"Screaming Case" is a pattern used to imply that a constant is not meant to change. JavaScript doesn't currently have the construct of an immutible const so setting the definition name of that const to Screaming Case indicates that. This pattern is also used in defining constants in other languages, such as PHP.

```
const TICK_RATE = 3000;
```

**Closures in `requestAnimationFrame`**

> We use the closure because this closure can refer to `nextTimeToTick` which is outside of its own scope. So it's going to survive it right? We're using closure to encapsulate that state. And so that way when we say `nextTimeToTick`, if this was inside of it this would get reset every single time this gets called. We don't want that. We want that to survive the calls of this. That's why we're using closures to advance the state here.

### State Machine

https://btholt.github.io/project-fox-game-site/state-machine

A Finite State Machine (FSM) is a methodology of writing code, and how to track variables that prevents a lot of styles of bugs. 

It let's you define various states of what you expect your app to look like and then all "derivative" state is … derived from that chief state.
