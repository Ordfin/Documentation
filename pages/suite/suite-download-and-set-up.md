---
title:  "Download and Set Up"
summary: Install Node.JS, download Superalgos, and run the software right then and there!
sidebar: suite_sidebar
permalink: suite-download-and-set-up.html
toc: true
---

{% include important.html content="All procedures are the same for Windows, Linux, or Mac OS. The GUI is tested on Google Chrome only." %}

## 1. Install Dependencies

### Install Node JS

Please install Node JS, an open-source server environment required to run Superalgos. 

**1. Go to the <a href="https://nodejs.org/en/download/" rel="nofollow" rel="noopener" target="_blank">Node JS downloads page</a>**.

**2. Download your system's installer**. Select *LTS Recommended for Most Users* and click the big Windows or MacOS Installer button. If you are on Linux, the installer is listed further down.

**3. Run the installer** with the default configuration&mdash;just click *Next* until Node.JS is fully installed.

### Install Git

Please install Git, an open-source distributed version control system required to download and stay up to date with Superalgos.

**1. Go to the <a href="https://git-scm.com/downloads" rel="nofollow" rel="noopener" target="_blank">Git downloads page</a>**.

**2. Download the version for your Operating System**

**3. Run the installer** and go through the process until Git is fully installed.

### Use Chrome, the Only Tested Browser

Before you begin, it is highly recommended that you <a href="https://www.google.com/chrome/" rel="nofollow" rel="noopener" target="_blank">install Chrome</a> and set it up as your default browser.

{% include important.html content="Use Chrome so that you have a similar environment as the dev team in case you need help. We are not testing on any other browsers, and it is a well-known fact that browsers behave differently." %}

## 2. Download Superalgos

**1. Open a console/terminal/command line** and go to the folder where you wish Superalgos to run from. 

{% include /how_to/change-directories-in-the-console.md heading="more" definition="yes" content="yes" extended="no" table="yes" more="yes"%}

{% include important.html content="Make sure you have <code>write</code> permissions on the chosen location or start the console/terminal/command line app as a system admin." %}

**2. Type the following command** and hit *Enter* to download the software:

```
git clone https://github.com/Superalgos/Superalgos
```

{% include note.html content="The command downloads the software into a new ```Superalgos``` folder." %}

{% include image.html file='how-to/run-the-system-00.gif' url='yes' max-width='100' caption='Type the ```git clone https://github.com/Superalgos/Superalgos``` command and hit Enter.' %}

## 3. Run Superalgos

**1. Go to the ```Superalgos``` folder** created on the previous step. Usually, the following command should suffice:

```
cd Superalgos
```

{% include /how_to/change-directories-in-the-console.md heading="more" definition="yes" content="yes" extended="no" table="yes" more="yes"%}

**2. Type the following command** and hit *Enter* to run the software:

```
node run
```

{% include note.html content="The command starts the backend servers and fires up the default browser to run the frontend." %}

{% include tip.html content="If your computer has less than 8 GB of RAM, use ```node run minMemo``` to run the system with minimal RAM memory requirements." %}

{% include image.html file='how-to/run-the-system-01.gif' url='yes' max-width='100' caption='Type the ```node run``` command and hit Enter.' %}

{% include note.html content="To uninstall Superalgos, simply delete the ```Superalgos``` folder. No files are actually installed in your system." %}

### The Welcome Tutorial

Once the app finishes loading, an interactive tutorial takes you by the hand and walks you all around the system, while you learn the basic skills required to use the interface, mine data, backtest strategies, and event run a live trading session. It is highly recommended you follow the tutorial until the end, as it is carefully crafted to make your onboarding as easy as possible.

{% include image.html file='how-to/tutorial-welcome-00.png' url='yes' max-width='100' caption='Follow the tutorial until the end!' %}

{% include note.html content="The tutorial uses Binance as the exchange of choice. If you don't have an account with Binance, you will still be able to follow 85% of the tutorial. The remaining 15% involves running a live trading session, which requires an account with the exchange. You may learn how to work with other exchanges later on." %}


