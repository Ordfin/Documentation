---
title:  Monitor the Data Mining Operation Progress
summary: The system started pulling data from exchanges the minute you ran it the first time. Read on to learn the details.
sidebar: suite_sidebar
permalink: suite-step-6.html
toc: false
---

Superalgos puts you in control of the market data you work with. To do that, the system uses a <a data-toggle="tooltip" data-original-title="{{site.data.concepts.sensor_bot}}">sensor bot</a> to pull 1-minute-candles data from exchanges and store it in your machine (it is also possible to pull raw trades data). As the data starts building up, the system uses <a data-toggle="tooltip" data-original-title="{{site.data.concepts.indicator_bot}}">indicator bots</a> to process the raw data into more elaborate <a data-toggle="tooltip" data-original-title="{{site.data.concepts.dataset}}">datasets</a> in the form of candles for all time frames, and all sorts of indicators.

The sensor bot fetches data starting from a configurable date. Once it reaches the present time, it continues connecting to the exchange once per minute, pulling data in a live stream. Indicators process data similarly and keep all your data up to date.

Depending on how you intend to use Superalgos, you may want to pull data from as far back as exchanges are willing to give. Such may be the case if you wish to backtest strategies.

On the other hand, if your interest lies in monitoring markets starting from the present time, then you most likely do not need historical data stretching that far in the past.

As mentioned earlier, for your convenience, the system starts pulling data from exchanges as soon as you start it the first time.

{% include default-markets-note.html %}

The following instructions teach you how to monitor the progress of the data mining operation. At a later time, you will learn how to work with other exchanges.

## Start Here

**1. Open the design space** by pulling the slider to the top of the screen.

**2. Go to the <a data-toggle="tooltip" data-original-title="{{site.data.network.network}}">network hierarchy</a>**. 

{% include /how_to/find-a-hierarchy.md heading="more" definition="yes" content="yes" extended="no" table="yes" more="yes"%}

**3. Hover the mouse over the network <a data-toggle="tooltip" data-original-title="{{site.data.concepts.node}}">node</a>** and click the {% include inline_image.html file="icons/menu'png12/expand.png" %} button on the menu. This action expands the <a data-toggle="tooltip" data-original-title="{{site.data.concepts.hierarchy}}">hierarchy</a>.

{% include image.html file='how-to/data-mining-progress-00.gif' url='yes' max-width='100' caption='The image illustrates points 3 to 5, showing the path to find the data mining node, and the indication of how many exchange tasks and task managers are running. In your case, it will be 1 out of 3.' %}

**4. Follow the <a data-toggle="tooltip" data-original-title="{{site.data.concepts.structure_of_nodes}}">structure of nodes</a> until you find the <a data-toggle="tooltip" data-original-title="{{site.data.network.data_mining}}">data mining</a> node**. Notice the sign below the node indicating how many <a data-toggle="tooltip" data-original-title="{{site.data.network.exchange_tasks}}">exchange tasks</a> are running.  In your case, it will be 1 out of 3.

**5. Notice the <a data-toggle="tooltip" data-original-title="{{site.data.network.exchange_tasks}}">exchange tasks</a> nodes** under the data mining node, named after different exchanges: Binance, Bitfinex, and Bittrex.

Each of those exchange tasks nodes control bots that you may run on your machine to process data from each of the exchanges.

**6. Expand the Binance exchange tasks node**.

Notice the different <a data-toggle="tooltip" data-original-title="{{site.data.network.task_manager}}">task managers</a>. Each task manager has a label that starts with the words <a data-toggle="tooltip" data-original-title="{{site.data.concepts.masters_data_mine}}">Masters</a> or <a data-toggle="tooltip" data-original-title="{{site.data.concepts.sparta_data_mine}}">Sparta</a>. Those are two <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.data_mine}}">data mines<a/> shipping with the system. The label continues with the name of the corresponding <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.market}}">market</a>.

Also, notice the sign below each task manager indicating how many <a data-toggle="tooltip" data-original-title="{{site.data.network.task}}">tasks</a> are running.

{% include image.html file='how-to/data-mining-progress-01.gif' url='yes' max-width='100' caption='The image illustrates point 6 above. The exact number of tasks running on each task manager may vary slightly.' %}

**7. Notice the *Masters BTC/USDT* task manager to the left**, the one that is expanded. 

See how each task controls either an <a data-toggle="tooltip" data-original-title="{{site.data.network.indicator_bot_instance}}">indicator bot instance</a> or a <a data-toggle="tooltip" data-original-title="{{site.data.network.sensor_bot_instance}}">sensor bot instance</a>. 

Also, notice the status information and indication of progress below each bot instance node. The messages include the activity being performed, the date that was last processed, and the percentage of the task that has been completed. 

Each of the Masters task managers has a similar configuration, but the indicators and sensors within work in different markets.

{% include image.html file='how-to/data-mining-progress-02.gif' url='yes' max-width='100' caption='The image illustrates point 7 above.' %}