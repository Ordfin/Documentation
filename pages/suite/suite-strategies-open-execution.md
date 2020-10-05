---
title:  "Trading Strategies &mdash; Open Stage: Execution"
summary: "Learn about the Open Execution, Execution Algorithm, Market Buy Order, Market Sell Order, Limit Buy Order, Limit Sell Order, Create Order Event, Simulated Exchange Events, Simulated Partial Fill, Simulated Actual Rate, Simulated Fees Paid, and Order Rate"
sidebar: suite_sidebar
permalink: suite-strategies-open-execution.html
toc: false
---

{% include /trading_system/open-execution.md more="no" heading="##" icon="150" definition="bold" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include note.html content="This page describes the open execution section of the open stage. Make sure you also learn about the [initial targets](suite-strategies-open-targets.html) section." %}

<table class='hierarchyTable'><thead><tr><th><a href='#open-stage' data-toggle='tooltip' data-original-title='{{site.data.trading_system.open_stage}}'><img src='images/icons/nodes/png50/open-stage.png' /><br />Open Stage</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#initial-targets' data-toggle='tooltip' data-original-title='{{site.data.trading_system.initial_targets}}'><img src='images/icons/nodes/png50/initial-targets.png' /><br />Initial Targets</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#open-execution' data-toggle='tooltip' data-original-title='{{site.data.trading_system.open_execution}}'><img src='images/icons/nodes/png50/open-execution.png' /><br />Open Execution</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#execution-algorithm' data-toggle='tooltip' data-original-title='{{site.data.trading_system.execution_algorithm}}'><img src='images/icons/nodes/png50/execution-algorithm.png' /><br />Execution Algorithm</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#market-buy-order' data-toggle='tooltip' data-original-title='{{site.data.trading_system.market_buy_order}}'><img src='images/icons/nodes/png50/market-buy-order.png' /><br />Market Buy Order</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#market-sell-order' data-toggle='tooltip' data-original-title='{{site.data.trading_system.market_sell_order}}'><img src='images/icons/nodes/png50/market-sell-order.png' /><br />Market Sell Order</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#limit-buy-order' data-toggle='tooltip' data-original-title='{{site.data.trading_system.limit_buy_order}}'><img src='images/icons/nodes/png50/limit-buy-order.png' /><br />Limit Buy Order</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#limit-sell-order' data-toggle='tooltip' data-original-title='{{site.data.trading_system.limit_sell_order}}'><img src='images/icons/nodes/png50/limit-sell-order.png' /><br />Limit Sell Order</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#order-rate' data-toggle='tooltip' data-original-title='{{site.data.trading_system.order_rate}}'><img src='images/icons/nodes/png50/order-rate.png' /><br />Order Rate</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/nodes/png50/formula.png' /><br />Formula</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#create-order-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.create_order_event}}'><img src='images/icons/nodes/png50/create-order-event.png' /><br />Create Order Event</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#cancel-order-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.cancel_order_event}}'><img src='images/icons/nodes/png50/cancel-order-event.png' /><br />Cancel Order Event</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#simulated-exchange-events' data-toggle='tooltip' data-original-title='{{site.data.trading_system.simulated_exchange_events}}'><img src='images/icons/nodes/png50/simulated-exchange-events.png' /><br />Simulated Exchange Events</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#simulated-partial-fill' data-toggle='tooltip' data-original-title='{{site.data.trading_system.simulated_partial_fill}}'><img src='images/icons/nodes/png50/simulated-partial-fill.png' /><br />Simulated Partial Fill</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#simulated-actual-rate' data-toggle='tooltip' data-original-title='{{site.data.trading_system.simulated_actual_rate}}'><img src='images/icons/nodes/png50/simulated-actual-rate.png' /><br />Simulated Actual Rate</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/nodes/png50/formula.png' /><br />Formula</a></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#simulated-fees-paid' data-toggle='tooltip' data-original-title='{{site.data.trading_system.simulated_fees_paid}}'><img src='images/icons/nodes/png50/simulated-fees-paid.png' /><br />Simulated Fees Paid</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#close-stage-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.close_stage_event}}'><img src='images/icons/nodes/png50/close-stage-event.png' /><br />Close Stage Event</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>



{% include /trading_system/execution-algorithm.md more="yes" heading="###" icon="150" definition="bold" table="yes" content="yes" adding="" configuring="####" starting="" %}

{% include /trading_system/market-buy-order.md more="yes" heading="####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="######" starting="" %}

{% include /trading_system/market-sell-order.md more="yes" heading="####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="######" starting="" %}

{% include /trading_system/limit-buy-order.md more="yes" heading="####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="######" starting="" %}

{% include /trading_system/limit-sell-order.md more="yes" heading="####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="######" starting="" %}

{% include /trading_system/order-rate.md more="no" heading="#####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include /trading_system/create-order-event.md more="no" heading="#####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include /trading_system/cancel-order-event.md more="no" heading="#####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include /trading_system/simulated-exchange-events.md more="no" heading="#####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include /trading_system/simulated-partial-fill.md more="yes" heading="#####" icon="no" definition="yes" table="no" content="yes" adding="" configuring="######" starting="" %}

{% include /trading_system/simulated-actual-rate.md more="no" heading="#####" icon="no" definition="yes" table="no" content="yes" adding="" configuring="" starting="" %}

{% include /trading_system/simulated-fees-paid.md more="yes" heading="#####" icon="no" definition="yes" table="no" content="yes" adding="" configuring="######" starting="" %}