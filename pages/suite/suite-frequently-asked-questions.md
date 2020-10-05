---
title:  Frequently Asked Questions
summary: "The most common questions asked by newcomers and users getting started with Superalgos."
sidebar: suite_sidebar
permalink: suite-frequently-asked-questions.html
---

## Before you begin

### Do I need to be a technical person to use Superalgos?

At this stage, it is rather easy to get started with Superalgos.

There is extensive documentation and a step by step [getting started guide](suite-step-1.html) to download and install the system. When you run the app for the first time, an interactive tutorial takes you by the hand and walks you around while you learn how to use all the basic tools.

That said, Superalgos is in an open beta-stage, still under development. The early-stage pre-release intends to gather feedback from early adopters, who may help shape the software and evolve it into a robust product. We try our best to make installation and operation easy. At this point, the system is directed at tech-savvy individuals with a knack for learning a few PC operator tricks while installing and using the system.

If you don't consider yourself an early adopter and usually go to your 10-year-old for advice on using your PC, you may still give it a shot. Developers and users in the <a href="https://t.me/superalgoscommunity" rel="nofollow" rel="noopener" target="_blank">Community</a> will be happy to give you a hand and help you get up and running.

### Will Superalgos work on my computer?

Superalgos may run in most computers. Please, read the [system requirements](suite-system-requirements) for the details.

### Is Superalgos a web-based service?

No. What you will get is a client application that runs entirely on users' machines. This is to fulfill the design principle of a trustless deployment: you don't need to trust any third party with your strategies, exchange API keys, personal information, or funds.

There is a thorough description of system features and functionality <a href="https://superalgos.org/" target="_blank">on the website</a>.

### Why is such an amazing piece of software open-source?

Because the Superalgos Project is about building a Collective Trading Intelligence, and the Superalgos software is the backbone of the technology that enables creating such intelligence, while collaborating. Please find the full explanation in this <a href="https://medium.com/superalgos/why-we-open-sourced-superalgos-55a5cbf83922?source=friends_link&sk=68755ad373cc64c3a90318405f6c9a65" rel="nofollow" rel="noopener" target="_blank">Medium post</a>. You may also find more information about the project's long-term vision <a href="https://superalgos.org/about-project.shtml" target="_blank">on the web site</a>.

### Is it safe to use Superalgos? Will I be spied, robbed, or scammed?

We do our best to make Superalgos as safe as it gets. This is how:

1. **The software is open-source**. This means that any developer or technical person out there may read and audit the code and verify if there is hidden malware or anything of the sort. There are many developers in the Community, many of them conducting deep reviews of the code. Developers tend to engage with interesting code like regular people would engage with a piece of literary work. They do this to fully understand how the software is built so that the may figure out how to best build on top of it. This is the true spirit of open-source software. Developers ask questions and engage with the core team all the time.  

1. **Do not mistake open-source with software given away for free**. While Superalgos is both open-source and free software, it is not the same as free software, period. Free software that is not open-source is shipped as a black-box. That is, no one knows what it does. It is the open-source nature of software that makes it transparent, therefore trustworthy.

1. **The system runs on uncompiled code**, that is, all of the code may be easily read by any programmer. There are no binary files which are much harder to interpret and audit.

1. **The code is maintained on GitHub**, in a public repository, using <a href="https://en.wikipedia.org/wiki/Git" rel="nofollow" rel="noopener" target="_blank">GIT technology</a> by which every single change made over the years is recorded and may be audited at any point. This process guarantees transparency in all stages of development.

1. **The software runs in your computer, under your control**. This means that when you set up your exchange API keys to trade live, the keys remain in your computer. Web-based services require you to upload your API keys, therefore, trusting them to the service provider. Always remember the teachings of the wise man... *"Your keys, your coins. Not your keys, not your coins"*.

1. **No third parties are involved in network communications**. The software runs on your computer and connects directly to the exchange using your API key to access your account, trading directly from within your account. No third party is involved in any of your transactions. You do not need to trust your API keys, your funds, your personal information, or your strategies with anyone. No communication is established or data is sent to any party other than the exchange. This may be easily verified by people knowledgeable in networks, who may monitor the transfer of packets sent and received from and by the system.

1. **Alignment of interests**. The software is free and open-source because it is the backbone of the project. The project will succeed if the software gets adopted. Thus, the interest of the project is perfectly aligned with the interest of users. The better the software, the more people will use it, and the larger the Collective Trading Intelligence the project may achieve.

1. **Community-built strategies are open-source too** and maintained on GitHub using GIT technology, as well. The documentation explains how strategies work, and we encourage users to educate themselves as much as they can. 

1. **We do not make irresponsible claims regarding the performance of strategies**. There is no "get-rich-quick approach" in Superalgos. We simply report backtesting results, and we report the live performance since the day they where released. You may backtest strategies, verify their performance, set your parameters, and even modify them and produce your versions if you wish. We urge users to take all possible precautions and to try to understand what strategies do and how they work before they start trading live.

1. **Strategies are easy to read too** and are stored in a file in the ```JSON``` format. All of the rules are written using simple mathematical statements. You may easily change the rules and test how the changes affect the results from within the system, or by reading the ```JSON``` file in a text editor.

1. **The team behind Superalgos is not anonymous**. On the contrary, <a href="https://superalgos.org/about-team.shtml" target="_blank">the team is introduced on the website</a>, and we all deal in all media using our real names, taking responsibility for everything we do. Our reputations are on the line.

### How may I minimize the risks inherent in trading using software?

There are many things you&mdash;as a user&mdash;may do to bring the risk down to a minimum. The following is the most conservative or cautious approach a user may have to get started trading with Superalgos. It is up to you how much or little risk you wish to take, and to manage the risk to suit your style, personality, and goals:

1. **Create a specific exchange account or sub-account to use with Superalgos**. In this way, when you create an API key to access the account from within Superalgos, the key has access only to that sub-account. 

1. **Deposit a minimal amount**. In your new sub-account with the exchange, deposit the minimum amount required to make a transaction. In the case of Binance, the minimum transaction amount is about 10 USD or its equivalent in crypto. In this way, your whole risk is limited to that amount.

1. **Give the API key transaction rights only**. When you create a new API key to access the new sub-account from within Superalgos, make sure you grant the key transaction rights only. Do not grant withdrawal rights. In this manner, if for some reason your keys fall on the wrong hands, an attacker would not be able to withdraw funds.

1. **Get started with a paper trading session**. Before starting trading live, you may get acquainted with the system running paper trading sessions instead of live trading sessions. Paper trading sessions are live simulations running with real-time data feeds from the exchange, without actually placing orders. They allow you to understand how strategies work and analyze their live performance without actually placing orders at the exchange. Paper trading sessions do not require setting up your exchange account keys in Superalgos. These types of sessions may also be used to get signals over Telegram and acting on them discretionarily instead of letting the system trade in an automated fashion.

1. **Before you commit to trading live** study and learn as much as you can, both about how Superalgos work, and, in case you intend to use open-source strategies, about how your strategies of choice work. Ideally, you would understand which strategy may be used to achieve your own goals at trading, and which conforms to the level of risk you are willing to take. The more you know, the more educated the decisions you will make.



## Trading

### What exchanges may I work with?

{% include /reuse/tested-exchanges.md heading="no" icon="no" extended="no" content="yes" definition="bold" table="no" more="no"%}

### Do I need to have an account with an exchange to use Superalgos?

You will need an account with a [supported exchange](#what-exchanges-may-i-work-with) and an exchange API key if you decide to trade live. You may use Superalgos to get started, to download data from exchanges, to build and to test trading strategies without an exchange account.

### Do I need to trust my API keys to someone?

No. The software runs in your machine, and you set your API keys in your machine only. The system running in your machine connects with the exchange only; no third parties intervene in any way in your transactions with the exchange.

### Is trading fully automated?

Yes. It may be if you choose to run a live <a data-toggle="tooltip" data-original-title="{{site.data.network.session}}">trading session</a>.

### Do I need to have my machine and the system running to trade live?

Yes. The backend application must be running a live <a data-toggle="tooltip" data-original-title="{{site.data.network.session}}">trading session</a> to place orders at the exchange. If you turn your computer off or stop Superalgos, the system will not trade live during that time. 

You may close the fronted application running on the browser at any time. Only the backend application running on the console needs to be running at all times when trading live.

Once you are proficient with running and operating the system, you may set up the backend in a separate or dedicated computer, and control it from the fronted running on your every-day machine. In this manner, the machine running the backend is the only one required to run continuously, while the one running the frontend may be turned off and on at will.

### What happens if Superalgos or the machine shuts down unexpectedly?

In case the system is stopped or stops unexpectedly after a position has been taken, the system does not resume the transaction once it comes back online. In such a case, the position must be managed and closed manually.



## Strategies

### May I create my own strategies? Do I need to write computer-code?

Yes and no! Building, testing, and deploying strategies is the core competency of Superalgos. You don't need to write computer code... only simple statements with a specific [syntax](suite-syntax-overview.html) to create conditions and formulas, following a framework that guides you in the process of setting up a [trading system](suite-trading-systems.html).

However, if you can code you may have an edge building more complex logic in JavaScript.

### May I get a ready-to-use strategy and use it to trade live?

Yes. The strategies available to use in Superalgos are the ones you may create yourself and those open-sourced by the Community. If you intend to use a strategy you didn't create yourself, it is highly recommended that you study the strategy, test it, and understand how it works before committing to trading live with it.

Superalgos ships with a few example strategies and the Welcome Tutorial teaches you how to run them in Superalgos.

{% include live-trading-warning.html %}

### How do the strategies shipping with Superalgos work? Are they profitable?

We try our best to educate users on how strategies work. At the moment, two open-source strategies are available:

* [Weak-hands Buster](suite-community-weak-hands-buster.html)

* [BB Top Bounce](suite-community-bb-top-bounce.html)

The documentation discusses the strategies' performance in live trading and backtesting contexts and explains their goal, approach, trading idea, and trading frequency. Please take the time to educate yourself so that you may make informed decisions as to how to use these strategies.

You must adjust your expectations to reality. Trading strategies are not "get-rich-quick" schemes. Please, bear in mind the following well-known facts about trading strategies in general:

1. **Performance in backtesting is not an indication of live trading performance**. Live performance may vary in relation to performance in backtesting, for better or for worse, most likely for worse. This happens because the design of trading strategies is done after the fact, with the hindsight of what happened in a certain range of the market. Patterns upon which strategies may be based on may keep occurring or not. Strategies attempt to interpret patterns and predict what may follow, but they are far from being perfect or accurate. The best-case scenario is a strategy being right more times than it is wrong.

1. **Live performance is not an indication of future performance**. Similarly, even when a strategy has delivered a certain performance trading live, there is no guarantee of what performance the strategy may achieve in the future. Live performance results are certainly more valuable than backtesting or simulated performance but still can't predict the future.

1. **Strategies lose effectiveness with time**. How much time? No-one knows. Markets evolve, change, go through different cycles, both long and short-term, some of which may not have been tested. That is true for all markets, let alone crypto, which is a very young market, still in its very early stages. Crypto markets change dramatically fast, as the market cap increases, more pro-traders enter the space, more smart money pours larger capitals, more bots take over operations of ever-increasing volumes, more complexity is added to the ecosystem with the availability of derivative markets, and so on.

{% include live-trading-warning.html %}

### May I configure the open-source strategies to my liking?

Definitely. You should!

A live trading session has a few [parameters](suite-parameters.html) that you must configure before running it.

And you may also review, test, and modify the rules within the trading system.

{% include live-trading-warning.html %}

### How risky is it to trade with open-source strategies?

Trading crypto-assets is an inherently risky activity. You may lose all of your capital. We can not asses the risks of trading for you. Please, study the strategies you wish to use, do your own research, and consult your financial advisor.

{% include live-trading-warning.html %}



## Support

### What if I need help? Do you have customer support?

Superalgos is on open Community of people pursuing a common goal. The Community is thrilled to have more people joining the cause and is happy to answer questions and help new users get started with Superalgos. It is kindly suggested to read these FAQs, the troubleshooting section in the documentation, and to closely follow the instructions on the getting started guide. That said, please feel free to ask questions in the <a href="https://t.me/superalgoscommunity" rel="nofollow" rel="noopener" target="_blank">Community Telegram</a>.

Superalgos is not commercial software, therefore, there is no such thing as a customer or customer support for that matter.

### May I ask for features I may be missing?

Yes. We keep a wish list for new features in the form of <a href="https://github.com/Superalgos/Platform/issues" rel="nofollow" rel="noopener" target="_blank">issues in the Superalgos repository</a>. If you are missing a key feature, feel free to open an issue starting the subject with the word ```Improvement:```. Please be thorough on your explanation about what you wish and how you envision the feature should work, and make sure you follow the thread so that you may answer questions the developers may have.

We make no promises as of what features may be developed when, but we do our best to keep up with the Community's requests.
