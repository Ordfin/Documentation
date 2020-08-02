---
title:  Network Hierarchy
summary: "The network provides the tools to set up your testing and live-trading environments, as well as the definitions on where on the network processes run, and where data is stored."
sidebar: suite_sidebar
permalink: suite-hierarchy-network.html
toc: false
---

{% include note.html content="Hover your mouse over a node for a tooltip definition, and click to get all the details." %}

<table class='hierarchyTable'><thead><tr><th><a href='#network' data-toggle='tooltip' data-original-title='{{site.data.network.network}}'><img src='images/icons/nodes/png50/network.png' /><br />Network</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#network-node' data-toggle='tooltip' data-original-title='{{site.data.network.network_node}}'><img src='images/icons/nodes/png50/network-node.png' /><br />Network Node</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#data-storage' data-toggle='tooltip' data-original-title='{{site.data.network.data_storage}}'><img src='images/icons/nodes/png50/data-storage.png' /><br />Data Storage</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#session-based-data' data-toggle='tooltip' data-original-title='{{site.data.network.session_based_data}}'><img src='images/icons/nodes/png50/session-based-data.png' /><br />Session Based Data</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#session-reference' data-toggle='tooltip' data-original-title='{{site.data.network.session_reference}}'><img src='images/icons/nodes/png50/session-reference.png' /><br />Session Reference</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#single-market-data' data-toggle='tooltip' data-original-title='{{site.data.network.single_market_data}}'><img src='images/icons/nodes/png50/single-market-data.png' /><br />Single Market Data</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#data-product' data-toggle='tooltip' data-original-title='{{site.data.network.data_product}}'><img src='images/icons/nodes/png50/data-product.png' /><br />Data Product</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#session-independent-data' data-toggle='tooltip' data-original-title='{{site.data.network.session_independent_data}}'><img src='images/icons/nodes/png50/session-independent-data.png' /><br />Session Independent Data</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#single-market-data' data-toggle='tooltip' data-original-title='{{site.data.network.single_market_data}}'><img src='images/icons/nodes/png50/single-market-data.png' /><br />Single Market Data</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#data-product' data-toggle='tooltip' data-original-title='{{site.data.network.data_product}}'><img src='images/icons/nodes/png50/data-product.png' /><br />Data Product</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#data-mining' data-toggle='tooltip' data-original-title='{{site.data.network.data_mining}}'><img src='images/icons/nodes/png50/data-mining.png' /><br />Data Mining</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task-manager' data-toggle='tooltip' data-original-title='{{site.data.network.task_manager}}'><img src='images/icons/nodes/png50/task-manager.png' /><br />Task Manager</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task' data-toggle='tooltip' data-original-title='{{site.data.network.task}}'><img src='images/icons/nodes/png50/task.png' /><br />Task</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#sensor-bot-instance' data-toggle='tooltip' data-original-title='{{site.data.network.sensor_bot_instance}}'><img src='images/icons/nodes/png50/sensor-bot-instance.png' /><br />Sensor Bot Instance</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#sensor-process-instance' data-toggle='tooltip' data-original-title='{{site.data.network.sensor_process_instance}}'><img src='images/icons/nodes/png50/sensor-process-instance.png' /><br />Sensor Process Instance</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-reference' data-toggle='tooltip' data-original-title='{{site.data.network.market_reference}}'><img src='images/icons/nodes/png50/market-reference.png' /><br />Market Reference</a></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#key-instance' data-toggle='tooltip' data-original-title='{{site.data.network.key_instance}}'><img src='images/icons/nodes/png50/key-instance.png' /><br />Key Instance</a></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#indicator-bot-instance' data-toggle='tooltip' data-original-title='{{site.data.network.indicator_bot_instance}}'><img src='images/icons/nodes/png50/indicator-bot-instance.png' /><br />Indicator Bot Instance</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#indicator-process-instance' data-toggle='tooltip' data-original-title='{{site.data.network.indicator_process_instance}}'><img src='images/icons/nodes/png50/indicator-process-instance.png' /><br />Indicator Process Instance</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-reference' data-toggle='tooltip' data-original-title='{{site.data.network.market_reference}}'><img src='images/icons/nodes/png50/market-reference.png' /><br />Market Reference</a></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#testing-environment' data-toggle='tooltip' data-original-title='{{site.data.network.testing_environment}}'><img src='images/icons/nodes/png50/testing-environment.png' /><br />Testing Environment</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task-manager' data-toggle='tooltip' data-original-title='{{site.data.network.task_manager}}'><img src='images/icons/nodes/png50/task-manager.png' /><br />Task Manager</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task' data-toggle='tooltip' data-original-title='{{site.data.network.task}}'><img src='images/icons/nodes/png50/task.png' /><br />Task</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-bot-instance' data-toggle='tooltip' data-original-title='{{site.data.network.trading_bot_instance}}'><img src='images/icons/nodes/png50/trading-bot-instance.png' /><br />Trading Bot Instance</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-process-instance' data-toggle='tooltip' data-original-title='{{site.data.network.trading_process_instance}}'><img src='images/icons/nodes/png50/trading-process-instance.png' /><br />Trading Process Instance</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#market-reference' data-toggle='tooltip' data-original-title='{{site.data.network.market_reference}}'><img src='images/icons/nodes/png50/market-reference.png' /><br />Market Reference</a></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#backtesting-session' data-toggle='tooltip' data-original-title='{{site.data.network.backtesting_session}}'><img src='images/icons/nodes/png50/backtesting-session.png' /><br />Backtesting Session</a></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#paper-trading-session' data-toggle='tooltip' data-original-title='{{site.data.network.paper_trading_session}}'><img src='images/icons/nodes/png50/paper-trading-session.png' /><br />Paper Trading Session</a></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#parameters' data-toggle='tooltip' data-original-title='{{site.data.network.parameters}}'><img src='images/icons/nodes/png50/parameters.png' /><br />Parameters</a></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#base-asset' data-toggle='tooltip' data-original-title='{{site.data.network.base_asset}}'><img src='images/icons/nodes/png50/base-asset.png' /><br />Base Asset</a></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#quoted-asset' data-toggle='tooltip' data-original-title='{{site.data.network.quoted_asset}}'><img src='images/icons/nodes/png50/quoted-asset.png' /><br />Quoted Asset</a></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#time-range' data-toggle='tooltip' data-original-title='{{site.data.network.time_range}}'><img src='images/icons/nodes/png50/time-range.png' /><br />Time Range</a></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#time-frame' data-toggle='tooltip' data-original-title='{{site.data.network.time_frame}}'><img src='images/icons/nodes/png50/time-frame.png' /><br />Time Frame</a></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#slippage' data-toggle='tooltip' data-original-title='{{site.data.network.slippage}}'><img src='images/icons/nodes/png50/slippage.png' /><br />Slippage</a></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#fee-structure' data-toggle='tooltip' data-original-title='{{site.data.network.fee_structure}}'><img src='images/icons/nodes/png50/fee-structure.png' /><br />Fee Structure</a></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#production-environment' data-toggle='tooltip' data-original-title='{{site.data.network.production_environment}}'><img src='images/icons/nodes/png50/production-environment.png' /><br />Production Environment</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task-manager' data-toggle='tooltip' data-original-title='{{site.data.network.task_manager}}'><img src='images/icons/nodes/png50/task-manager.png' /><br />Task Manager</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task' data-toggle='tooltip' data-original-title='{{site.data.network.task}}'><img src='images/icons/nodes/png50/task.png' /><br />Task</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-bot-instance' data-toggle='tooltip' data-original-title='{{site.data.network.trading_bot_instance}}'><img src='images/icons/nodes/png50/trading-bot-instance.png' /><br />Trading Bot Instance</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-process-instance' data-toggle='tooltip' data-original-title='{{site.data.network.trading_process_instance}}'><img src='images/icons/nodes/png50/trading-process-instance.png' /><br />Trading Process Instance</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#market-reference' data-toggle='tooltip' data-original-title='{{site.data.network.market_reference}}'><img src='images/icons/nodes/png50/market-reference.png' /><br />Market Reference</a></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#key-instance' data-toggle='tooltip' data-original-title='{{site.data.network.key_instance}}'><img src='images/icons/nodes/png50/key-instance.png' /><br />Key Instance</a></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#forward-testing-session' data-toggle='tooltip' data-original-title='{{site.data.network.forward_testing_session}}'><img src='images/icons/nodes/png50/forward-testing-session.png' /><br />Forward Testing Session</a></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#live-trading-session' data-toggle='tooltip' data-original-title='{{site.data.network.live_trading_session}}'><img src='images/icons/nodes/png50/live-trading-session.png' /><br />Live Trading Session</a></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#parameters' data-toggle='tooltip' data-original-title='{{site.data.network.parameters}}'><img src='images/icons/nodes/png50/parameters.png' /><br />Parameters</a></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#base-asset' data-toggle='tooltip' data-original-title='{{site.data.network.base_asset}}'><img src='images/icons/nodes/png50/base-asset.png' /><br />Base Asset</a></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#quoted-asset' data-toggle='tooltip' data-original-title='{{site.data.network.quoted_asset}}'><img src='images/icons/nodes/png50/quoted-asset.png' /><br />Quoted Asset</a></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#time-range' data-toggle='tooltip' data-original-title='{{site.data.network.time_range}}'><img src='images/icons/nodes/png50/time-range.png' /><br />Time Range</a></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#time-frame' data-toggle='tooltip' data-original-title='{{site.data.network.time_frame}}'><img src='images/icons/nodes/png50/time-frame.png' /><br />Time Frame</a></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#slippage' data-toggle='tooltip' data-original-title='{{site.data.network.slippage}}'><img src='images/icons/nodes/png50/slippage.png' /><br />Slippage</a></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#fee-structure' data-toggle='tooltip' data-original-title='{{site.data.network.fee_structure}}'><img src='images/icons/nodes/png50/fee-structure.png' /><br />Fee Structure</a></td></tr></tbody></table>


{% include /network/network.md heading="##" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/network-node.md heading="##" icon="150" adding="####" configuring="####" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/data-mining.md heading="##" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/exchange-tasks.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/task-manager.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/task.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/sensor-bot-instance.md heading="##" icon="150" adding="####" configuring="####" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/sensor-process-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/indicator-bot-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/indicator-process-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/market-reference.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/key-instance.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/testing-environment.md heading="##" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/trading-bot-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/trading-process-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/backtesting-session.md heading="##" icon="150" adding="####" configuring="####" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/paper-trading-session.md heading="##" icon="150" adding="####" configuring="####" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/production-environment.md heading="##" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/forward-testing-session.md heading="##" icon="150" adding="####" configuring="####" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/live-trading-session.md heading="##" icon="150" adding="####" configuring="####" starting="####" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/parameters.md heading="##" icon="150" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/base-asset.md heading="##" icon="150" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/quoted-asset.md heading="##" icon="150" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/time-frame.md heading="##" icon="150" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/time-range.md heading="##" icon="150" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/slippage.md heading="##" icon="150" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/fee-structure.md heading="##" icon="150" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/data-storage.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/session-based-data.md heading="##" icon="150" adding="####" configuring="" starting="" content="no" definition="bold" table="yes" more="no"%}

{% include /network/session-reference.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/single-market-data.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/data-product.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /network/session-independent-data.md heading="##" icon="150" adding="####" configuring="" starting="" content="no" definition="bold" table="yes" more="no"%}










