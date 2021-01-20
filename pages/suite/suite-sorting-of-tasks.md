---
title:  Sorting of Tasks
summary: "The network hierarchy supports a multi-exchange, multi-market, and multi-mine deployment, and tasks are organized by those criteria."
sidebar: suite_sidebar
permalink: suite-sorting-of-tasks.html
toc: false
---

Before diving into the workings of each of the operations that you may define and control from within the Network hierarchy, it is worth pointing out a certain commonality among them.

Because Superalgos supports deploying data mining and trading operations on multiple exchanges, multiple markets, and using bots originating in multiple data and trading mines, the organization of the different data structures under the network node follows the same pattern in each of them: 

{% include callout.html type="success" content="Type of operation > Exchange Reference > Market Reference > Mine involved in the operation." %}

For example, this is the data structure under data mining:

<table class='hierarchyTable'><thead><tr><th><a href='#data-mining' data-toggle='tooltip' data-original-title='{{site.data.network.data_mining}}'><img src='images/icons/nodes/png50/data-mining.png' /><br />Data Mining</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#exchange-data-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.exchange_data_tasks}}'><img src='images/icons/nodes/png50/exchange-data-tasks.png' /><br />Exchange Data Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-data-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.market_data_tasks}}'><img src='images/icons/nodes/png50/market-data-tasks.png' /><br />Market Data Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#data-mine-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.data_mine_tasks}}'><img src='images/icons/nodes/png50/data-mine-tasks.png' /><br />Data Mine Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Notice how the pattern repeats under the testing environment node:

<table class='hierarchyTable'><thead><tr><th><a href='#testing-environment' data-toggle='tooltip' data-original-title='{{site.data.network.testing_environment}}'><img src='images/icons/nodes/png50/testing-environment.png' /><br />Testing Environment</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#exchange-trading-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.exchange_trading_tasks}}'><img src='images/icons/nodes/png50/exchange-trading-tasks.png' /><br />Exchange Trading Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-trading-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.market_trading_tasks}}'><img src='images/icons/nodes/png50/market-trading-tasks.png' /><br />Market Trading Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-mine-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.trading_mine_tasks}}'><img src='images/icons/nodes/png50/trading-mine-tasks.png' /><br />Trading Mine Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

The production environment is virtually the same:

<table class='hierarchyTable'><thead><tr><th><a href='#production-environment' data-toggle='tooltip' data-original-title='{{site.data.network.production_environment}}'><img src='images/icons/nodes/png50/production-environment.png' /><br />Production Environment</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#exchange-trading-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.exchange_trading_tasks}}'><img src='images/icons/nodes/png50/exchange-trading-tasks.png' /><br />Exchange Trading Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-trading-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.market_trading_tasks}}'><img src='images/icons/nodes/png50/market-trading-tasks.png' /><br />Market Trading Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-mine-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.trading_mine_tasks}}'><img src='images/icons/nodes/png50/trading-mine-tasks.png' /><br />Trading Mine Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

The case of data storage is slightly different because there is a split in the structure into data mines data and trading mines data; however, each of the resulting structures of nodes bare a similarity with the organizational criteria explained above:

<table class='hierarchyTable'><thead><tr><th><a href='#data-storage' data-toggle='tooltip' data-original-title='{{site.data.network.data_storage}}'><img src='images/icons/nodes/png50/data-storage.png' /><br />Data Storage</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#data-mines-data' data-toggle='tooltip' data-original-title='{{site.data.network.data_mines_data}}'><img src='images/icons/nodes/png50/data-mines-data.png' /><br />Data Mines Data</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#exchange-data-products' data-toggle='tooltip' data-original-title='{{site.data.network.exchange_data_products}}'><img src='images/icons/nodes/png50/exchange-data-products.png' /><br />Exchange Data Products</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-data-products' data-toggle='tooltip' data-original-title='{{site.data.network.market_data_products}}'><img src='images/icons/nodes/png50/market-data-products.png' /><br />Market Data Products</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#data-mine-products' data-toggle='tooltip' data-original-title='{{site.data.network.data_mine_products}}'><img src='images/icons/nodes/png50/data-mine-products.png' /><br />Data Mine Products</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-mines-data' data-toggle='tooltip' data-original-title='{{site.data.network.trading_mines_data}}'><img src='images/icons/nodes/png50/trading-mines-data.png' /><br />Trading Mines Data</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#exchange-trading-products' data-toggle='tooltip' data-original-title='{{site.data.network.exchange_trading_products}}'><img src='images/icons/nodes/png50/exchange-trading-products.png' /><br />Exchange Trading Products</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-trading-products' data-toggle='tooltip' data-original-title='{{site.data.network.market_trading_products}}'><img src='images/icons/nodes/png50/market-trading-products.png' /><br />Market Trading Products</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#session-reference' data-toggle='tooltip' data-original-title='{{site.data.network.trading_session_reference}}'><img src='images/icons/nodes/png50/session-reference.png' /><br />Session Reference</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

This kind of organization helps keeping a logical grouping of tasks, and helps avoid mixing up tasks from different exchanges, markets, or mines.





