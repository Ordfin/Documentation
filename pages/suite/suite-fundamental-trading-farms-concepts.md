---
title:  Trading Farms Fundamental Concepts
summary: "How to set up a flexible and scalable crypto-trading farm running Superalgos distributed on multiple machines."
sidebar: suite_sidebar
permalink: suite-fundamental-trading-farms-concepts.html
toc: false
---

Superalgos is designed for coordinated, flexible, and scalable trading operations. 

In its current version, the system may be deployed in multiple machines&mdash;as many as desired&mdash;and each machine may constitute a <a data-toggle="tooltip" data-original-title="{{site.data.network.network_node}}">node</a> in a <a data-toggle="tooltip" data-original-title="{{site.data.network.network_of_nodes}}">network of nodes</a>. In fact, different networks of nodes may live within the same computer network.

{% include callout.html type="success" content="Each node on a network may specialize in a single type of process or handle multiple processes of different types."%}

For example, you may have a set of nodes running <a data-toggle="tooltip" data-original-title="{{site.data.network.data_mining}}">data mining</a> operations extracting data from multiple markets and multiple exchanges. You may have a set of nodes specializing in processing indicators and technical studies. And you may have a set of nodes specializing in running <a data-toggle="tooltip" data-original-title="{{site.data.network.session}}">trading sessions</a>.

You may also use different criteria to arrange the network. For example, you may have a node running combined data mining, data processing, and trading operations on a single exchange or market, and other nodes running similar combined operations on other exchanges or markets.

Or you may have a network of nodes for your <a data-toggle="tooltip" data-original-title="{{site.data.network.testing_environment}}">testing environment</a> and another network of nodes for your <a data-toggle="tooltip" data-original-title="{{site.data.network.production_environment}}">production environment</a>.

{% include callout.html type="success" content="In other words, the system allows building any arrangement of networks of nodes responding to the organizational logic of your preference."%}

What is unique about Superalgos is that the system keeps track of the network arrangements you create and makes sure that all components and <a data-toggle="tooltip" data-original-title="{{site.data.concepts.structure_of_nodes}}">data structures</a> in the system can seamlessly track dependencies across the network. This means, for example, that trading sessions running on ```Node X``` may access data in ```Node Y``` and ```Node Z``` without requiring any sort of configuration.

{% include callout.html type="success" content="On top of that, the operation may be managed entirely from any node on the network. In fact, it may be managed from a computer in the network not running Superalgos, by pointing the browser to any of the nodes in the network to run the frontend."%}

The following explanations assume that you are familiar with the basic workings of Superalgos, and in particular, of the <a data-toggle="tooltip" data-original-title="{{site.data.network.network}}">Network hierarchy</a>. If that is not the case, then please read the [Network pages](suite-network.html) before diving into building a trading farm.

{% include warning.html content="At this stage, Superalgos does not implement any form of security measures, therefore, the system is to be used in the context of a restricted Local Area Network only." %}