---
title:  Superalgos Failed to Connect Via Websockets
summary: "If you are accessing the backend from another computer in the network, you need to configure the Network Node with the appropriate IP Address."
sidebar: suite_sidebar
permalink: suite-troubleshooting-superalgos-failed-to-connect-via-websockets.html
toc: false
---

When you create a [trading farm](suite-fundamental-trading-farms-concepts.html) set up by which you intend to access the backend services running on a machine from a remote computer in the network, you must configure the Network Node in the remote computer to use the IP Address of the machine where the backend services are running.

{% include /network/network-node.md heading="" icon="no" adding="" configuring="##" starting="" content="no" definition="no" table="no" more="no"%}

{% include note.html content="After configuring the network node refresh the page  with <kbd>F5</kbd> and the GIU should connect with the backend." %}