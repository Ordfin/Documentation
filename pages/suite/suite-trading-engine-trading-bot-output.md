---
title:  Trading Bot Output
summary: "The trading bot stores every piece of information processed in files, making all data accessible to others, both online and offline."
sidebar: suite_sidebar
permalink: suite-trading-engine-trading-bot-output.html
toc: false
---

As explained elsewhere, the trading bot makes the information it processes available to users through the hierarchy of the trading engine, which may be visualized both on the design space and over the charts. It also makes it available to trading systems.

On top of that, the information is also stored in files, sorted by concept. These makes the runtime information available to other processes and external systems, to be accessed both online, that is, at runtime, of offline.

The trading bot outputs files on the node it runs on, particularly, in the following location:

```Data Storage > [Exchange] > [Market] > Masters-Trading > Low-Frequency > Output > [Session] > Concept > Multi-Period-[Daily/Market] > Time Frame```

{% include image.html file='trading-engine/trading-bot-output-01.png' url='yes' max-width='100' caption='One folder per concept, each with one Data.json file.' %}