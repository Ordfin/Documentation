---
title:  "Bots"
summary: "Bots are a crucial concept in Superalgos, and a good thread to explain how hierarchies interact with each other."
sidebar: suite_sidebar
permalink: suite-bots.html
toc: false
---

**Before diving into an in-depth exploration of each hierarchy, a quick overview is in order. One of the most important underlying concepts in Superalgos is that of <a data-toggle='tooltip' data-original-title='{{site.data.concepts.bot}}'>bots</a>. Let's then use bots as the guiding thread to show you how the different hierarchies in Superalgos interact with each other.**

## Bot Definitions

In the pages describing <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.data_mine}}">data mines</a> and <a data-toggle="tooltip" data-original-title="{{site.data.trading_mine.trading_mine}}">trading mines</a> you will learn that bots are defined in such mines. That is, mines hold the source code and configuration&mdash;the complete set of definitions&mdash;of the three existing kinds of bots: <a data-toggle="tooltip" data-original-title="{{site.data.concepts.sensor_bot}}">sensors</a>, <a data-toggle="tooltip" data-original-title="{{site.data.concepts.indicator_bot}}">indicators</a>, and the <a data-toggle="tooltip" data-original-title="{{site.data.concepts.trading_bot}}">trading bot</a>. 

As a user, you may use all bots in data mines shipping with the system. As a developer, you may create your own mines to develop your own sensors, indicators, and even a new trading bot.

## Bot Instances

Using any of these bots entails creating an instance of the bot definition, so that this instance may run the bot's code. You will seldom need to create bot instances manually, as the process of installing a new <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.market}}">market</a> creates all necessary bot instances for your <a data-toggle="tooltip" data-original-title="{{site.data.network.data_mining}}">data mining</a> operation and for running <a data-toggle="tooltip" data-original-title="{{site.data.concepts.session}}">trading sessions</a> (by the way, markets are defined and installed from within the <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_ecosystem}}">crypto ecosystem</a> hierarchy).

A bot instance is a reference to a bot as defined in a data or trading mine. The instance of the bot runs the defined <a data-toggle="tooltip" data-original-title="{{site.data.concepts.process}}">processes</a> and generates the defined <a data-toggle="tooltip" data-original-title="{{site.data.concepts.data_product}}">data products</a>.

Bot instances are run from within the <a data-toggle="tooltip" data-original-title="{{site.data.network.network}}">network</a> hierarchy. You use <a data-toggle="tooltip" data-original-title="{{site.data.network.task_manager}}">task managers</a> and <a data-toggle="tooltip" data-original-title="{{site.data.network.task}}">tasks</a> to control bot instances, meaning, to start and stop them. Also in the network hierarchy lies the configurations about where the data they generate is to be stored.

## Bot Dependencies

Upon execution, bot instances run in a branched sequence determined by their <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.status_dependency}}">status</a> and <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.data_dependency}}">data dependencies</a>. For instance, if bot Alice depends on the data produced by bot Bob, then Alice is configured to run as soon as Bob finishes its execution. These configurations are already set up in the corresponding data mines for all existing bots. Therefore, you only need to worry about this if you develop new bots.

What you do need to understand as a user is that, if Alice depends on data Bob produces, then Bob needs to be running for Alice to do her job. If Bob is not running, then Alice can only sit and wait for Bob to do his part first.

A good example of such dependencies may be found when running a live trading session. In such a case, the trading bot depends on the sensor and all indicator bots used in the referenced <a data-toggle='tooltip' data-original-title='{{site.data.trading_system.trading_system}}'>trading system</a>. Indicators must process the data so that the trading bot may analyze it in realtime. Therefore, before running a live trading session, the data mining operation must be running and up to date.

## Bots Execution

Each bot runs for as long as it may require to perform its job, usually in the order of a few seconds, and remains asleep until the next cycle is due. That is, bots run for short bursts, in frequent cycles. The reason for this behavior is that bots are prepared to read live data feeds and process it online.

Bots need to know which market of which <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_exchange}}">exchange</a> they should work with. Exchanges and markets are defined in the <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_ecosystem}}">crypto ecosystem</a> hierarchy. Bots obtain that information by establishing <a data-toggle="tooltip" data-original-title="{{site.data.concepts.reference}}">references</a> with the appropriate markets in that hierarchy.

In the case of the trading bot, it also needs to know which type of <a data-toggle="tooltip" data-original-title="{{site.data.concepts.session}}">trading session</a> it should run, and what <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_system}}">trading system's</a> rules it should follow. For those reasons, trading bots are paired with a specific session, which in turn, <a data-toggle="tooltip" data-original-title="{{site.data.concepts.reference}}">references</a> a trading system.

Trading systems are themselves hierarchies. You may create a trading system by following a framework in which <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_strategy}}">strategies</a> are described in stages. You do not need to code to create a strategy, as the rules are written with simple mathematical statements. However, both basic and advanced knowledge of JavaScript will give you an edge. You may test and deploy your trading system by running trading sessions from within the network hierarchy.
