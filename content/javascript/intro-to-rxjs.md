# Introduction to RxJS

```mdx
Date: 7th November, 2020
Description: Test Description
```

Since I've started working with Angular, RxJS has been one of those things that's baffled me and amazed me at the same time. At the start you will find that thinking in Reactive and digesting the plethora of concepts that it comes with can be a little challenging. You might be tempted to jump in and start using operators following the docs without fully understanding them. In my experience, this can lead you to a point where you have no clue what's happening in your system. In this article, I will try to break down what RxJS is and to understand basic concepts such as Observables, Observers and Subscriptions.

## What is RxJS?

Simply put, it's a programming paradigm. A programming paradigm is basically a way of thinking about code, or a way of writing code. You might have heard about and possibly used some popular programming paradigms such as imperative or procedural programming, object-oriented programming and functional programming. Like function, reactive is a declarative programming paradigm, which is basically a style where programs describe the logic of a particular computation rather than explicitly stating the control flow or sequence of steps that must be performed.

Reactive is primarily concerned with asynchronous data streams called Observables. A reactive application will "REACT" to events. For example, a user clicking a button is an event. Your application can react to this event. Observables are an alternative to promises, and in many ways they can be similar but also very different. I'm not planning on going into detail about the similarities and differences between the two in this article. Perhaps, in another one. In this one, I'm just gonna focus on explaining the core concepts of RxJS.

Before working with RxJS, you must get familiar with the following concepts. We will first look at Data Streams and Observables using real world examples. We will also try to understand Observers and Subscriptions in this context and how operators are used to manipulate data streams. We will look at these concepts in the form of Marble Diagrams which are a very popular way of representing and understanding the reactive programming model. In the end, we touch upon the notion of Hot & Cold observables briefly. In subsequent articles, I will go into depth about using the various operators with code examples to be on your way to mastering the topic.

## What are Observables / Data Streams?

![GCP Youtube Channel](https://s3.amazonaws.com/code-ninja.xyz/assets/intro-to-rxjs/gcp.png)
