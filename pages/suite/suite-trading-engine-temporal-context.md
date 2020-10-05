---
title:  Temporal Context
summary: "Much of the information provided by the trading engine may be accessed for the current instance of the object as well as for the last instance that was open, at any point in time."
sidebar: suite_sidebar
permalink: suite-trading-engine-temporal-context.html
toc: false
---

The trading engine hierarchy is organized by *context*. That is, the main offspring nodes&mdash;current, last, and exchange orders&mdash;describe the context in which their respective offspring live.

For example, the concept of an episode&mdash;a whole run of the trading bot&mdash; exists only in the context of the *current* episode, as the system keeps track of one episode at the time only. 

However, the concept of a position is tracked both as the *current position* and the *last position*. This is possible because the system keeps track of all positions occurring within an episode. 

{% include callout.html type="success" content="Superalgos developers thought it was worth it to provide certain information, positions, for example, in both contexts, as this allows you&mdash;visually&mdash;and your trading system&mdash;using simple syntax&mdash;to access information about the current position and the last position at any given point in time." %}

The two concepts that describe a temporal context are current and last, and are covered in the following pages.