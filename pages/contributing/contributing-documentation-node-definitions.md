---
title:  Node Definitions
summary: "Node definitions are atomized into individual MD pages designed to be included in other pages."
sidebar: contributing_sidebar
permalink: contributing-documentation-node-definitions.html
---

The node definition is a set of information strictly focused on answering the questions:

* *What is this node?*

* *What role does the node play in the hierarchy?*

* *What is required for this node to function properly?*

{% include callout.html type="primary" content="The definition of a node does not include information about how to use the node. Instead, it focuses solely on the *What?* question." %}

The definition is structured in sections:

* **Short definition**: It is a sentence or a very short paragraph describing what the node represents and what it is used for. 

* **Content**: The content section may expand on the definition, add detail, or explain additional requirements for the node to function properly, like references to other nodes.

* **Adding**: Succinctly explains how to add the node. The language is standard across all nodes.

* **Configuring**: Succinctly explains the configuration of the node, defining each parameter, listing the possible values, and the effect each of the values has in the behavior of the node.

* **Starting**: A few nodes, particularly in the Network hierarchy, may be put to run. This section explains how to do that and the requirements that may exist to do it.

{% include callout.html type="primary" content="See, for example, how the node definition for the <a href='https://docs.superalgos.org/suite-hierarchy-network.html#live-trading-session' target='_blank'>Live Trading Session</a> node is structured" %}

## Technical Implementation

### Short Definition YAML Pages

Short definitions are stored in <a href='https://en.wikipedia.org/wiki/YAML' rel='nofollow' rel='noopener' target='_blank'>YAML files</a>, one per hierarchy, inside the ```_data``` folder. Each ```yml``` file stores the conceptual definition of every node in the hierarchy.

This allows us to call these short definitions from pages, for example, to build tooltips, or to be used as text blocks anywhere on the page.

The following is a fragment of ```_data/network.yml``` featuring the first three short definitions:

```
network: "The network hierarchy contains definitions regarding the physical location in which certain nodes live or function. For instance, a certain process my run and store data in your local machine or some other machine in the network."

network_node: "A network node represents a machine running Superalgos, on which processes run or data is stored."

network_of_nodes: "A network of nodes is an arrangement that allows distributing tasks among any number of network nodes, allowing for flexible and scalable trading operations."
```

To call one of these short definitions from within a page we use the <a href='https://shopify.github.io/liquid/basics/introduction/' rel='nofollow' rel='noopener' target='_blank'>Liquid</a> template language:

```
{% raw %}
{% site.data.network.network_of_nodes %}
{% endraw %}
```

### Node Definition MD Pages

The complete definition of each node&mdash;of which the short definition is a part&mdash;are stored in individual <a href='https://guides.github.com/features/mastering-markdown/' rel='nofollow' rel='noopener' target='_blank'>MD files</a> grouped by hierarchy, each hierarchy in a separate folder under the ```_includes``` folder. As may be inferred from the storage location, these MD files are designed to be included in other pages.

The information corresponding to node definitions is, therefore, atomized in individual pages. This is a design feature of the documentation that allows using these definitions as building blocks to build more elaborate pages. 

{% include callout.html type="primary" content="For example, the content of the pages corresponding to the *Hierarchies directory* section *(see <a href='https://docs.superalgos.org/suite-hierarchy-network.html' target='_blank'>Network</a> for example)* are mostly built with the graphical representation of the hierarchy set up in a <a href='https://www.w3schools.com/html/html_intro.asp' rel='nofollow' rel='noopener' target='_blank'>HTML</a> table, plus all the individual definitions of the nodes in the hierarchy." %}

The MD files are not plain markdown files, as would usually be assumed for MD files. Instead, they feature code in *Liquid* that allows receiving parameters from the include statement in the destination page. These parameters determine which section of the file is to be included and how.

As explained in the [Content](#content) section earlier, the page is structured in sections:

#### Title and Definition Section

The header section features Liquid code assigning values to several variables. Let's take ```_includes/network/live-trading-session.md``` as an example.

```
{% raw %}
{% assign title = "Live Trading Session" %}
{% assign definition = site.data.network.live_trading_session %}
{% assign preposition = "a" %}
{% assign plural = "s" %}
{% endraw %}
```
* ```title``` is the name of the node in title case, which is used as the main title of the page.

* ```definition``` is the Liquid reference to the ```network.yml``` file and the name of the short definition to be fetched from the file, in the case above *live_trading_session*.

* ```preposition``` is used to build some of the sentences in the page when referring to the node, in the case of the example above, *a Live Trading Session*.

* ```plural``` is used for a similar purpose, that is, to refer to the specific node in the plural form&mdashif applicable. In this case, *Live Trading Sessions*. If no plural form may be formed without modifying the title, then set the variable to "".

#### Content, Adding, Configuring, and Starting Sections

The rest of the sections are delimited by commented start and end tags such as:

```
<!--------------------------------------------- CONTENT starts -->

Your content goes here.

<!--------------------------------------------- CONTENT ends -->
```

{% include note.html content="Each of the sections supports the same kind of content used throughout the documentation." %}

#### Code In-Between Sections

The Liquid code featured in-between sections provides the functionality to output select pieces of content when included in a page. The regular documenting process does not require understanding or modifying the code.
