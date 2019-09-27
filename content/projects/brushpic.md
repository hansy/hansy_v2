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

My target group for this kind of app was amateur [Instagram](https://instagram.com) influencers. I figured these would be the folk who (a) don't have the same type of access to professional photo editors as do, say, magazine models and (b) generate tons more photos than their magazine counterparts.
