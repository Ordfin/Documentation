---
title:  Set Up a Network of Nodes
summary: "Install Superalgos on each machine, to then create and set up a network node for each machine."
sidebar: suite_sidebar
permalink: suite-set-up-a-network-of-nodes.html
toc: false
---

This page does not go through the process of setting up a computer network. Instead, it assumes the network is already set up. So, do verify the local area network setup and make sure your computer network is functioning properly before starting. 

In a <a data-toggle="tooltip" data-original-title="{{site.data.network.network_of_nodes}}">network of nodes</a>, each node has it's own web server, web sockets server, and task server.

{% include note.html content="The default web server and web sockets ports used by Superalgos are ```34248``` and ```8081``` respectively. If you wish to change these defaults, you must modify the ```.env``` file on the root folder, and also ```\TaskServer\.env```." %}

## Before You Begin

Make a quick list with the name you wish to give to each <a data-toggle="tooltip" data-original-title="{{site.data.network.network_node}}">node</a> and the corresponding IP address on the network. You will need those to configure each network node. 

Also, you may want to plan what your operation should look like. 

{% include callout.html type="success" content="First and foremost, you may want to decide on which node you will keep the workspace on which the network of nodes shall be configured. We call this, the home node." %}

This is not a requirement, as you may keep different workspaces in different nodes, and even set up different networks on different workspaces, but it's the most usual setup.

Also, you may want to plan which nodes in the network should run which data-mining tasks, which nodes should run which trading sessions, and so on. As hinted in the [fundamental concepts](suite-fundamental-trading-farms-concepts.html) page, possibilities are endless, so we are not going to cover alternatives here. If you know exactly what you want to do, it should be easy to implement. That said, you are free to explore and experiment as well.

## Start Here

**1. Set up Superalgos on each machine**. Once Superalgos is installed, run the system for the first time using the ```node run noBrowser``` command. The ```noBrowser``` parameter runs the backend without firing up the frontend. 

{% include tip.html content="On computers with less than 8 GB of RAM, such as minicomputers or single-board computers like the Raspberry Pi, use ```node run noBrowser minMemo``` to run the app. ```minMemo``` sets up the system to run with minimal RAM requirements." %}

Leave the machine online, with the backend running.

**2. Run the frontend to access the <a data-toggle="tooltip" data-original-title="{{site.data.concetps.home_node}}">home node</a>**. 

You may access the home node locally, that is, running the browser on the machine where the home node is running, or you may run the browser on any other machine in the physical network&mdash;even one not running Superalgos&mdash;by navigating to the home node's IP address.

{% include note.html content="If you are accessing the home node remotely, you need to configure the *My Computer* network node to use the machine's IP address instead of ```localhost``` in the ```host``` parameter. This enables the web sockets connection." %}

{% include tip.html content="For organizational purposes and to avoid confusion later on, it is recommended to clean up the home node's workspace uninstalling the markets that you don't need." %}

{% include /how_to/uninstall-an-existing-market.md heading="more" definition="yes" content="yes" extended="no" table="yes" more="yes"%}

**3. Add and configure a network node for each machine**.

{% include /network/network-node.md heading="" icon="no" adding="####" configuring="####" starting="" content="no" definition="no" table="no" more="yes"%}

Configure the first node and hit <kbd>F5</kbd> to refresh the page. Once the page reloads, a notice indicating the system is connecting with the new network node will show on the top of the screen. Repeat the process for each machine.

{% include image.html file='design-space/network-farm-01.PNG' url='yes' max-width='100' caption='The message dissapears when the system suceeds in establishing a connection with the new node. ' %}