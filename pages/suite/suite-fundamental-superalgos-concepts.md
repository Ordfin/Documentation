---
title:  "Fundamental Superalgos Concepts"
summary: "Superalgos breaks up complexity and describes the fundamental concepts that make up trading intelligence in hierarchies of nodes. Nodes may reference other nodes to access information in other hierarchies."
sidebar: suite_sidebar
permalink: suite-fundamental-superalgos-concepts.html
---

Algorithmic trading is a data-driven application. It is the superior ability to derive intelligence from data&mdash;above all&mdash;that gives automated trading an edge over trading manually.

However, it would be simplistic to assume that trading intelligence emerges from data alone.

{% include callout.html type="success" content="Trading intelligence emerges from harnessing the interactions of multiple complex concepts." %}

Superalgos is a software infrastructure that contributes to harnessing those concepts and interactions by breaking complexity into small units of information called nodes and arranging them into larger data structures called hierarchies.

{{site.data.concepts.hierarchy}} For example, <a data-toggle='tooltip' data-original-title='{{site.data.crypto_ecosystem.crypto_ecosystem}}'>crypto ecosystem</a>, <a data-toggle='tooltip' data-original-title='{{site.data.data_mine.data_mine}}'>data mines</a>, or <a data-toggle='tooltip' data-original-title='{{site.data.charting_space.charting_space}}'>charting space</a>.

{{site.data.concepts.node}}

{{site.data.design_space.design_space}}

{% include callout.html type="success" content="In other words, nodes arranged in hierarchical data structures describe the top-level concepts that make up trading intelligence in a way that helps users visualize and better understand them." %}

These top-level concepts described as hierarchies interact with other concepts, that is, with other hierarchies. Interactions among hierarchies are called references.

{{site.data.concepts.reference}}

To organize all of this information, Superalgos manages the concept of workspaces. {{site.data.concepts.workspace}}

{% include note.html content="The [Bots page](suite-bots.html) brings these conceptual definitions down to earth and offers an overview of how what these top-level concepts are and how they interact with each other." %}
