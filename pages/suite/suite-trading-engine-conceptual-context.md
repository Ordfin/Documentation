---
title:  Conceptual Context
summary: "Track the properties within each of the major concepts handled by the trading bot, such as episodes, strategies, positions, strategy stages, and exchange orders."
sidebar: suite_sidebar
permalink: suite-trading-engine-conceptual-context.html
toc: false
---

Episodes, strategies, positions, strategy stages, exchange orders, and other concepts may be seen as different contexts too, although not of the temporal kind.

For instance, you may want to know what the ROI is in the context of the episode&mdash;that is, the ROI after several positions have passed&mdash;or the ROI of the current position only.

{% include callout.html type="success" content="In other words, many properties such as performance metrics&mdash;like ROI, or profit loss&mdash;or market data&mdash;like the begin and end datetimes or any of these concepts&mdash;exist in more than one conceptual context. " %}

The following pages describe each of these major conceptual contexts, which, in turn, may exist in more than one temporal context.

{% include note.html content="From the perspective of systems design, each of these concepts is handled as an object that may be open or closed, thus has a lifespan. The same object may be open more than once, but only after the previous *instance* has been closed." %}

