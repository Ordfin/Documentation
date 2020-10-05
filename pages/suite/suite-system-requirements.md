---
title:  System Requirements
summary: "The Superalgos Suite is a robust, cross-platform, browser-based system. It's capacity to run indefinite numbers of processes means that your hardware will set the limits of what you may or may not do with it."
sidebar: suite_sidebar
permalink: suite-system-requirements.html
---

## Deployment and Use Case Variability

Superalgos may run as a combo of backend and frontend, but may also run the backend alone, processing specific tasks, and be controlled from a different machine running the frontend, in a [trading farm](suite-fundamental-trading-farms-concepts.html) configuration.

The system requirements depend entirely on how you use the system. As a rule of thumb, the system is designed to not impose any artificial restrictions on the way it is used. Instead, the use is restricted mostly by the available hardware.

## Cross-Platform

Superalgos backend is a collection of Node.js servers and the frontend is a web app, therefore, Superalgos is cross-platform. The dev team is testing mostly on Windows systems, but users are running the system on Mac OS and Linux systems as well. A machine running solely the backend does not need a visual environment, but at least one machine running the frontend is required to control the application.

## Chrome is the Only Tested Browser

When running the frontend, Chrome is highly recommended so that you have a similar environment as the dev team in case you need help. We are not testing on any other browsers, and it is a well-known fact that browsers behave differently.

## Processing Power

One of the first and foremost design goals is to develop the most powerful trading automation and data processing system. There is no intention to limit or cut functionality short in an attempt to cope with less powerful hardware. It is a fact that your hardware will set the limits as of what you may or may not do with the system.

The system's processing capacity is based on running independent, specialized processes. No single process is as intensive as to require any special hardware. In fact, any one process may run on micro computers like the Raspberry Pi, or outdated laptop computers. 

However, micro computers and old laptops may have a hard time running the frontend along with a number of processes. That said, even old laptops should be able to launch the system and let you play with it.

What will vary depending on your hardware is the capacity to run a determinate number of processes simultaneoulsy. That is where you will find the limits of your hardware. In other words, you will find your system starts getting slow when it's doing many things at the same time. How many depends on your hardware.

The app has very little requirements for active, hands-on use, that is, for creating strategies, running backtests, or interacting with light-weight charts, for instance. We believe any cheap laptop should cope with such use.

Processing requirements increase in a roughly linear fashion with every process added to the mix. For instance processes that fetch data from exchanges and calculate indicators.

These are a few examples of use cases demanding significant processing power:

* Monitoring multiple markets in multiple exchanges, using multiple indicators on each chart, at the same time.  

* Backtesting multiple strategies in multiple exchanges or multiple periods, at the same time. 

* Running multiple live-trading sessions which depend on multiple indicators, at the same time. 

## RAM Memory

The system is not RAM-intensive. One dedicated gigabyte should be enough for intensive frontend use, and two gigabytes may be required for extreme charting. Those are ball-park, non-scientific figures.

## Graphics Processing Unit

The frontend benefits from a powerful GPU, as all of the visual experience Superalgos enables derives from the implementation of an HTML5 canvas animation. The more powerful your GPU, the more data you will be able to visualize at the same time, and the more fluid the visual experience becomes.

## Storage

The fresh system installation folder may take up to 500 MB of disk space, and another 500 MB are required for the data mining conducted during Welcome Tutorial getting started tour of the system.

How much storage space you will need in the long run depends entirely on how you use the system. For example, if you intend to backtest strategies, you may want to download and process the entire history for the select market. For your reference, two-and-a-half years of the BTC/USDT Binance market, processed with all currently available indicators, in all available time frames, weights around 10 GB.

The system requires only 48-hours of processed data to run a live trading session. However, the strategy may require a longer history to properly calculate the lagging indicators, such as moving averages. The Weak-hands Buster strategy requires at least one month of data, for example. 

Bear in mind that live trading sessions require a live data feed, therefore, the storage space increments as the session runs, on a daily basis.

The system allows full control over what data your process.

## Internet Connection

Superalgos does not require a high bandwidth Internet connection. The bandwidth used during a live trading session is quite small, orders of magnitude smaller than watching a Youtube video. The one time in which you may appreciate a high bandwidth-connection is during the initial download of data from the exchange, but even then, any ADSL connection should be more than enough.

Stability is certainly desirable. The system attempts to sort out network instability, but continuous network issues may affect the functioning of the system.

## Console/Command Line

Processes started from the system log their activity on the default console application, or the console used to fire up the app. Windows Command Prompt is particularly bad. It is recommended to install and use a decent application, such as <a href="https://cmder.net/" rel="nofollow" rel="noopener" target="_blank">Console Emulator Cmder<a/>. This will save you time and hassle in the long run.

## Deploying a Linux VPS to Trade Live

You may want to read an article about <a href="https://medium.com/superalgos/trading-live-from-a-cheap-linux-vm-3edbe0c7ca42" rel="nofollow" rel="noopener" target="_blank">Trading Live from a Cheap Linux VM</a>.

