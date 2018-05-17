---
title: "Brushpic"
date: 2016-03-01
description: "Text to touch up photos"
link: "https://brushpic.herokuapp.com"
tags: ["inactive"]
---

![Brushpic homepage](/images/projects/brushpic/homepage.png)

Brushpic was a fun, little marketplace I created that connected users to photo editing professionals via SMS. Users could text a photo to a special number, then be automatically connected with a pro. Every photo sent and touched up would cost $5.

From a usability standpoint, the goal was to eliminate as much friction as possible during the transaction process:

- SMS was the method of communication (everybody has text messaging)
- Automatic assignment to photo professional (prevent user analysis paralysis)
- Users and professionals can't see each other's numbers (used [Twilio](https://twilio.com) phone number as proxy to maintain privacy) 

Users could interact with the app with a number of SMS commands, so there was a rudimentary "chat bot" component as well.

My target group for this kind of app was [Instagram](https://instagram.com) models. I figured these would be the folk who (a) don't have the same type of access to professional photo editors as do, say, magazine models and (b) generate tons more photos than their magazine counterparts.

Boy was I wrong.

Turns out almost every IG model above a certain follower threshold has his/her own photo editing person. The ones below the threshold use photo editing apps to do their touch ups. Turns out, it's become insanely easy to do professional-level editing on your own. Technology ftw.

Maybe there exists a market for this kind of app, but after my Instagram hypotheses were debunked, I quickly saw this turning into a solution-looking-for-a-problem type of situation. I ended up scrapping the project just a few months after launch. 

I probably should have done more extensive market research before building the app, but I guess I was super excited to play with Twilio's API in some capacity. Nonetheless I had a ton of fun building this and I might reuse some of the core SMS functionality for an actual chat bot in the future.