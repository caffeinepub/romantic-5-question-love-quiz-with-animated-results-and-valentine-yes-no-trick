# Specification

## Summary
**Goal:** Update Q1’s answer options and correct answer date for the quiz.

**Planned changes:**
- In `frontend/src/data/quizContent.ts`, set Q1 options to exactly: `['14th Feb 2021','25th Nov 2021','26th Nov 2021','You were born knowing me']` in that order.
- In `frontend/src/data/quizContent.ts`, set Q1 `correctAnswer` to exactly `'25th Nov 2021'`.

**User-visible outcome:** The first quiz question shows the updated four options, and selecting “25th Nov 2021” is marked correct while the other three options are marked incorrect.
