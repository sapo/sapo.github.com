--- 
layout: home
title: About - Open Source at SAPO 
---

## A brief history of Open Source software at SAPO

SAPO has an established Open Source tradition dating back to its origins in <a href="http://en.wikipedia.org/wiki/SAPO_(company)">1995</a>. All our critical infra-structure runs on Open Source software, and in the past 16 years we've contributed to Open Source in a number of ways, either by releasing our own code or by sponsoring a number of developments in projects we adopted.

Although it is impossible to keep tabs on all the various minor patches and contributions to everything, there are a few core projects that we've been involved with for a long time.

<hr>

### LibSAPO.js <small>taming JavaScript</small>

Our original foundation library for developing rich client-side user experiences, made available to the Open Source community to gather feedback and help those developing next generation websites and services. Now a part of [Ink][i], it spans over a hundred modules and provides unparalleled structure.


### XMPP <small>building bridges</small>

After using XMPP as the underpinnings of our IM service for a period of five years with excellent results, we felt the need to give back to the XMPP community and help consolidate what was then still a de facto standard in two fundamental aspects for non-technical users - desktop applications and interconnection with popular (incumbent) IM services such as MSN.

<br clear="all">
<img src="../imgs/psi128.png" class="about">

The [Psi][p] project stood out as the most complete client-side framework available at the time, and <span class="podium">sapo</span> [sponsored its founder](http://listas.apesol.org/pipermail/delta-affinix.com/2005-February/000371.html), Justin Karneges, to continue developing and consolidating it.

<br clear="all">

<img src="../imgs/pymsnt128.png" class="about">

As far as interconnection was concerned, the best available work at the time was being done in [PyMSNt][pm], a project headed by James Bunton, an Australian college student. With <span class="podium">sapo</span> sponsoring, [PyMSNt][pm] [gained avatar and file transfer support](http://delx.net.au/projects/pymsnt/news.html), allowing for easier and friendlier inter-operability between native XMPP clients and MSN.

<br clear="all"/>

<img src="../imgs/sapo128.png" class="about">

Finally, we made available [the full source code for the Mac version](https://github.com/sapo/sapo-messenger-for-mac) (which is the most up-to-date).


### Bricolage <small>massive-scale content management</small>

[Bricolage][b] is an open-source enterprise-class content management and publishing system that greatly simplifies creating, managing, and publishing the vast libraries of content available to <span class="podium">sapo</span>, and we adopted it as one of our CMS platforms from the very beginning - which meant both contributing to and sponsoring it in [a number of ways](http://comments.gmane.org/gmane.comp.db.postgresql.announce/156), such as:

* A complete internationalization and localization implementation.
* An overhaul of groups and permissions.
* The addition of a WebDAV distribution mover.

### PHP Sandwich <small>do you want ketchup with that?</small>

Another major contribution to [Bricolage][b] that stands on its own was to [sponsor the development][b2] of the [Perl][pl] module [PHP::Interpreter][cpan1], that loads a [PHP 5][ph] interpreter into [Perl][pl]. [PHP  templates in Bricolage then became pure PHP][b1] while allowing transparent access to the [Perl][pl]-based [Bricolage][b] environment.

[PHP::Interpreter][cpan1] is, of course, available on [CPAN][cpan2], allowing any [Perl][pl]-based application to leverage its functionality.

### Mail <small>open is better</small>

Our [sapo mail][m] service currently provides 10GB mailboxes to over 6 million users, and we proudly run it on a fully open software stack - which means contributing to a number of top-tier Open Source projects.

### Dovecot <small>there can be only one</small>

We adopted [Dovecot][d] as our IMAP and POP3 email server due to its excellent performance, its extensive set of features (such as indexing) and its emphasis on security. We are (very) active sponsors, and deeply involved in the development of its [dbox][db] mailbox format and single-instance storage.

### Horde <small>the smile on our front-ends</small>

[Horde][h] was the natural choice for our webmail front-ends, given its comprehensive suite of productivity, messaging, and project-management applications.

<span class="podium">sapo</span> has been [sponsoring][h1] its development for [a number of years][h2], mainly where it concerns [IMP][imp] (for multiple-language, web-based access to e-mail) and [Kronolith][kr] (for calendaring and mobile syncing).

### Shibboleth <small>keeping us safe</small>

<img src="../imgs/shibboleth128.png" class="about">

[Shibboleth][sh] is one of the underpinnings of <span class="podium">sapo</span>'s authentication and authorization infrastructure (both internal and [external][id]).

We contributed to the [Shibboleth][sh] SP by adding support for `memcached` session storage and `FastCGI`, which makes it easier for us to make available our <span class="podium">sapo</span> [ID][id] service to our entire network of partner sites.

### Miscellaneous <small>odds and ends</small>

We also submitted (and update as necessary) a few patches for other projects like

* `libmemcached`
* [libc](http://sourceware.org/bugzilla/show_bug.cgi?id=5541)
* The `MySQL` JDBC connector
* `openid4java`
* [Django](https://code.djangoproject.com/ticket/14032)
* Tomcat
* LiveJournal
* [nfcpy](https://code.launchpad.net/~andrefcruz/nfcpy/npp-1.0) (NPP support)

This is not an exhaustive list, but should give you an idea of how widespread our commitment is.

[cpan1]: http://search.cpan.org/search?query=php%3A%3Ainterpreter&mode=all
[cpan2]: http://search.cpan.org/~aff/PHP-Interpreter-1.0.2/lib/PHP/Interpreter.pm
[id]: http://id.sapo.pt
[i]: http://ink.sapo.pt
[d]: http://www.dovecot.org/
[db]: http://wiki2.dovecot.org/MailboxFormat/dbox
[h]: http://horde.org
[h1]: http://janschneider.de/news/25/252
[h2]: http://www.techworld.com.au/article/263744/open_source_identity_horde_lead_developer_jan_schneider/?pp=3
[imp]: http://www.horde.org/apps/imp/
[kr]: http://www.horde.org/apps/kronolith/
[l]: http://www.lighttpd.net/
[m]: http://mail.sapo.pt
[p]: http://psi-im.org/
[ph]: http://www.php.net
[pl]: http://www.perl.org
[pm]: http://delx.net.au/projects/pymsnt
[b]: http://bricolagecms.org/
[b1]: http://bricolagecms.org/news/announce/changes/bricolage-1.10.0/
[b2]: http://justatheory.com/bricolage/1.9.0.html
[s]: http://www.sapo.pt
[sh]: http://shibboleth.internet2.edu/
[sh1]: https://svn.shibboleth.net/cpp-sp/branches/REL_2/`FastCGI`/shibresponder.cpp
