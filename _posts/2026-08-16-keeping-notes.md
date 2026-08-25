---
layout: post
title: "Why I'm keeping these notes"
date: 2026-08-16
tags: [personal, cp]
description: "A first post to set the pattern: short write-ups of problems I solved, things I broke, and what I'd do differently."
---

AI gave me this idea, will keep notes of a problem i am currently solving or am unable to solve, keep what i found, so when i come back later, i can start right from where i left

## The format

Each note tries to answer three questions:

1. **What was actually being asked?**.
2. **What did I try first, and why was it wrong?**.
3. **What's the one-line takeaway?**.

The following example is AI generated, keeping it for future reference.

## An example

A scheduling problem I lost half an hour to: given intervals, pick the largest set that
doesn't overlap. My first instinct was to sort by start time, which feels natural and is
wrong — it lets one long early interval eat the whole line.

```cpp
// sort by END time, not start
sort(v.begin(), v.end(), [](auto &a, auto &b) {
    return a.second < b.second;
});

int count = 0, last = INT_MIN;
for (auto &[start, end] : v) {
    if (start >= last) { ++count; last = end; }
}
```

Takeaway: for interval scheduling, greedy on the earliest finish time. Finishing early
is what buys room for everything after it.

---

*This post is a seed — delete it once you have real notes, or keep it as a format reference.
New posts go in `_posts/` as `YYYY-MM-DD-title.md`.*
