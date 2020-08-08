---
title:  Introduction to the Superalgos Documentation
summary: "Learn how the documentation is built, what resources you will use, and what the overall contribution workflow is like."
sidebar: contributing_sidebar
permalink: contributing-documentation-introduction.html
---

The documentation site is a <a href='https://en.wikipedia.org/wiki/Static_web_page' rel='nofollow' rel='noopener' target='_blank'>static site</a> created with <a href='https://jekyllrb.com/' rel='nofollow' rel='noopener' target='_blank'>Jekyll</a> and hosted by <a href='https://pages.github.com/' rel='nofollow' rel='noopener' target='_blank'>GitHub Pages</a> directly from the ```gh-pages``` branch of the <a href='https://github.com/Superalgos/Documentation' target='_blank'>Documentation repository</a>.

## Attribution

The site uses an adapted version of the <a href='https://idratherbewriting.com/documentation-theme-jekyll/' rel='noopener' target='_blank'>Jekyll Doc Theme 6.0</a> by <a href='https://idratherbewriting.com/documentation-theme-jekyll/' rel='noopener' target='_blank'>Tom Johnson</a>.

The authorship of each piece of content is indicated by the contributor's identity in the <a href='https://github.com/Superalgos/Documentation' rel='noopener' target='_blank'>Documentation repository</a>.

## Documentation Goals

The documentation must pursue the ultimate goal of making Superalgos usable by explaining what the system is, what it does, how it works, and how it may be used.

However, with a vast and complex system, the above is not enough. The documentation must also constantly evolve and innovate to substantially soften the learning curve and lower barriers of entry.

## Information Structure

Conceptually, information is structured in horizontal layers. The bottom layers of information provide the substance that layers built on top feed from by reusing content and further elaborating on it.

At a glance, these are the layers that make up the current documentation:

1. **Node definitions**: This layer of information provides an *atomized* explanation of what the system does. The adjective *atomized* refers to the narrow scope of the definitions, which are crafted on a per-node basis in each of the hierarchies. For example, the [Hierarchies Directory](suite-hierarchy-charting-space.html) pages feature a list of node definitions for all nodes in each hierarchy.

2. **Hierarchy definitions**: The scope of this layer of information extends to the hierarchy level, providing context on how nodes interact, integrating the definitions of each node, presenting them in a logical sequence, and explaining how each hierarchy interacts with the rest. Each hierarchy has its section in the documentation, with its top-level menu item.

3. **How to**: This layer features step-by-step tutorials for both specific and broad operations, many of which transcend a single hierarchy. This layer may include written guides and/or video tutorials. This layer is not related to a specific location on the navigation menu. Instead, *how to* pages are distributed throughout the documentation and are located wherever they fit best. For example, [How to find a hierarchy](suite-how-to-find-a-hierarchy.html) is one of the many *how to* pages in the Design Space section of the menu.

4. **Functionality**: This layer consists of content that provides extensive detail on certain system capabilities and their potential uses, for example, the pages about [Trading Farms](suite-fundamental-trading-farms-concepts.html) describe a very powerful set of features deriving from the infrastructure in the network hierarchy. However, it is not a description of the hierarchy *per se*, but a description of the functionality the hierarchy enables.

On top of these four layers, more layers may and should eventually be built to fulfill the goals declared earlier, such as:

5. **Use cases**: A layer of information that analyzes specific use cases and provides solutions for specific user needs. Many users usually get to Superalgos with a specific problem they wish to solve. *Use cases* pages should specifically address those problems and how Superalgos solves them.

## Resources

The following are the main resources you will use when collaborating:

* **<a href='https://github.com/' rel='nofollow' rel='noopener' target='_blank'>GitHub</a>**: We use GitHub as a content versioning system. Each contributor works on his or her fork of the docs and submits contributions to the upstream repository via *pull requests (PR)*.

* **<a href='https://desktop.github.com/' rel='nofollow' rel='noopener' target='_blank'>GitHub Desktop</a>**: Unless you are a GIT and CLI wizard, GitHub Desktop can help you handle the local clone of your fork and keep both clone and fork in sync. If you are not familiar with the app, you may want to go through a few <a href='https://www.youtube.com/results?search_query=basic+github+desktop+tutorial' rel='nofollow' rel='noopener' target='_blank'>GitHub Desktop tutorials</a>.

* **<a href='https://jekyllrb.com/' rel='nofollow' rel='noopener' target='_blank'>Jekyll</a>**: We use this static site generator because it allows building lightweight web pages while still providing rich, flexible features through <a href='https://en.wikipedia.org/wiki/YAML' rel='nofollow' rel='noopener' target='_blank'>YAML</a> and the <a href='https://shopify.github.io/liquid/basics/introduction/' rel='nofollow' rel='noopener' target='_blank'>Liquid</a> template language. But don't worry! You don't need to be a developer to contribute to the documentation! You will install Jekyll and use it to run a local website so that you may see the result of your work exactly as it will look on the official website.

* **<a href='https://code.visualstudio.com/' rel='nofollow' rel='noopener' target='_blank'>Visual Studio Code</a>**: Unless you have a preferred IDE, you may want to download and install Visual Studio Code to help navigate through and edit the documentation files. It works great with markdown and features a real-time preview panel. <a href='https://www.youtube.com/results?search_query=visual+studio+code+basics' rel='nofollow' rel='noopener' target='_blank'>Watch some tutorials</a> if you can't figure it out on your own.

## Fire Up Your Environment

If you followed the instructions on the [Contributing Documentation](contributing-documentation.html) page you must already have your fork of the docs repository, and may even have joined us on the <a href='https://t.me/superalgosdocs' rel='nofollow' rel='noopener' target='_blank'>Superalgos Documentation Telegram Group</a>. Good! This is what you need to do next:

**1. Clone the ```develop``` branch of your fork to your local machine**. The actual work is done in your machine, on a clone of your fork, more precisely on the ```develop``` branch. Use GitHub Desktop to make the clone, so that you may use the app to maintain both clone and fork in sync. Remember, do not clone the original Superalgos Documentation repository; you must clone your fork instead, and the ```develop``` branch in particular!

**2. Run Jekyll on your clone's folder**. After <a href='https://jekyllrb.com/docs/' rel='nofollow' rel='noopener' target='_blank'>installing Jekyll</a>, open your console application, go to the root folder of your documentation clone, and fire Jekyll up with the usual ```bundle exec jekyll serve``` command.

**3. Browse your local documentation website**. Once Jekyll does its initial processing of the files in your clone, the website becomes available at ```http://localhost:4000```.

**4. Make a change**. To test your set up, you may find the ```index.html``` page (the *Welcome!* page) on the root folder of your local documentation clone, make a random change, save the file, and check your console where Jekyll is running. It should take a few seconds for Jekyll to rebuild the site and show the changes you made. Check the site again and see if your change shows up on the page. If it does, you are all set up! Now revert the change, unless its a real improvement!

## Closing the Workflow Loop

You already know how to work on your local clone. You will now learn the steps you need to take to close the loop and submit your contributions.

**1. Commit and push to your fork**. This is how you keep your fork at GitHub in sync with your local clone. Use GitHub Desktop to commit the changes you have made or new pages you have created, and push the changes to the ```develop``` branch of your fork. 

**2. Submit a Pull Request to the ```develop``` branch of the upstream repository**. Think of your fork at GitHub as the melting pot between your local work and the work other contributors submit. When you submit a Pull Request to the original documentation repository, GitHub updates your fork with the work other people have contributed to the original repository, and, at the same time, pushes your work upstream to the original repository.

**3. Update your clone**. Every time you push work to your fork, GitHub Desktop fetches changes at the origin as well, so that your local clone gets updated. Whenever you submit a Pull Request from your fork to the upstream directory, you should then update your local clone, so that contributions from other authors reach your local clone too.
