---
title:  Operating a Trading Farm
summary: "Operate tasks in remote nodes pretty much as if they were running on the home node."
sidebar: suite_sidebar
permalink: suite-operating-a-trading-farm.html
toc: false
---

The operation of a trading farm is done from within the <a data-toggle="tooltip" data-original-title="{{site.data.concepts.home_node}}">home node</a>. There is no need to use the frontend application with any other node in the network, although you may if you wish.

Running or stopping tasks residing in any of the network nodes is a transparent operation, and works in the same way as if the tasks were in the home node. When a task is started, the process takes a snapshot of the state of the network at that point and traces all dependencies before starting the job at hand.

{% include callout.html type="success" content="This means that changes made in the distribution of tasks in the network at any point are recognized by each task upon starting." %}

However, entities that don't run in tasks&mdash;such as time machines and timeline charts in the charting space&mdash;function with the state of the network upon starting the frontend app. This means that, for example, if you move a data mining task to a different node, the associated chart will show the data in the former node until you refresh the browser.

Finally, when uninstalling a market, the system will attempt to uninstall the corresponding tasks on all network nodes. If you wish to uninstall markets on specific nodes only, you may delete data structures individually instead.