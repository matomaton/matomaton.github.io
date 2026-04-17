The Three Things AI Actually Does
AI isn't one thing. Once you understand the three different ways it behaves, you'll design with it — not around it.

The mistake everyone makes first
Most designers starting out treat AI like a single tool — a magic black box you put a question into and get an answer out of. That's the mistake.

AI actually behaves in three distinct ways, and each one creates a completely different design challenge. When you don't know which mode you're working with, you end up designing the wrong interface for the job. Think of it like trying to design a car dashboard without knowing whether the car is electric, manual, or self-driving — the controls are totally different.

The three modes are: Generated (AI makes something new), Curated (AI ranks and filters what already exists), and Surfaced (AI decides when to show you something). Let's walk through each one.

Mode 1: AI-Generated — the AI creates something new
This is when the AI writes, draws, codes, or summarises something that didn't exist before. ChatGPT writing an email for you. Midjourney producing an image. Copilot suggesting a function.

The AI isn't retrieving a stored answer — it's constructing one on the spot. That's genuinely impressive, but it comes with a real problem: it can get things wrong in a very confident-sounding way. Designers call this "hallucination," and it's the core risk of this mode.

Your two design responsibilities here
When you're designing an interface that generates content, you're responsible for two things.

First, trust. Because the AI is essentially making things up (in the best possible sense), users need to be able to verify the output. That means showing sources, surfacing confidence levels, or making it easy to fact-check. A medical app summarising a patient's history needs to make those receipts visible. A social media caption tool probably doesn't.

Second, tone. The voice of generated content has to feel like it belongs in your product. A warm, chatty tone in a grief counselling app is a disaster. A robotic tone in a consumer food app feels cold and off-brand. You — the designer — are responsible for defining what "right" sounds like.

A harder problem: what happens to junior designers?
Here's something worth sitting with. Historically, junior designers learned their craft by doing the tedious work — the wireframes, the pixel-pushing, the component libraries. It was apprenticeship through repetition. AI is now doing a lot of that execution work faster and cheaper than a junior hire can.

This doesn't mean design is dying. It means the entry point is shifting. The industry hasn't figured out yet how to train the next generation of senior designers when the traditional "ground floor" work is disappearing. If you're a student, this is worth taking seriously. The designers who thrive won't be the ones who push pixels fastest — they'll be the ones who know why the pixels should go there at all.

"The designers who thrive won't be the fastest pixel-pushers. They'll be the ones who know why the pixels should go there at all."

Mode 2: AI-Curated — the AI ranks what already exists
Nothing new is created here. The AI is looking at a pile of existing content — products, articles, emails, notifications — and deciding what order to show it to you.

Your Spotify Discover Weekly. TikTok's For You page. Amazon's "you might also like." These are all curation. The underlying content is fixed; the AI is just figuring out what to put in front of you first.

This might sound simple, but it creates a sneaky design problem. Traditional interfaces are deterministic — click the "sort by price" button, always get results sorted by price. Curated interfaces are probabilistic — the AI makes its best guess, and that guess can change based on your history, the time of day, what other users are doing, and factors you can't see.

The transparency problem
When a traditional UI puts something at the top of a list, the user knows why — it's alphabetical, or newest, or most popular. When an AI puts something at the top, the user often has no idea why. That gap is where trust breaks down.

Your job as a designer is to make the reasoning visible. Not necessarily with a technical explanation — nobody wants to read about weighted ranking algorithms — but with clear, plain-language signals. "Because you watched this." "Trending in your area." "Based on your recent searches." These small cues are the difference between a system that feels intelligent and one that feels manipulative.

If you skip transparency, users start to feel like the interface has an agenda. And once that trust is gone, it's very hard to get back.

Mode 3: AI-Surfaced — the AI decides when to interrupt you
This is the most subtle mode. The content already exists, the AI already knows it's relevant — but it's also deciding this is the right moment to show it to you.

A navigation app rerouting you when it detects slow traffic ahead. A calendar assistant flagging that you should leave for your meeting now. A health app noticing you haven't logged water today and nudging you at 3pm. The information is timely, contextual, and — when it works well — feels almost like a thoughtful friend who noticed something you didn't.

When it doesn't work well, it feels like spam.

The thin line between helpful and annoying
The difference between a useful notification and an irritating one is often just a few seconds of timing and one bad read of context. Surface something too early and it's noise. Too late and it's useless. In the wrong situation — a meeting, a commute, a difficult conversation — and it's actively harmful to the experience.

Designing for this mode means thinking carefully about:

Timing — when is the user actually in a position to act on this?
Context — what is the user likely doing right now, and what device are they on?
Stakes — how wrong can the AI be before it breaks trust?
Design for when the AI gets it wrong
Because AI is probabilistic, it will sometimes be wrong about when to interrupt. The design has to account for that. When the system isn't confident, it should surface suggestions quietly — a small badge rather than a full-screen interruption, an optional prompt rather than a blocking modal. This is called graceful degradation, and it's a core skill for anyone designing AI interfaces.

The goal is that even when the AI misjudges, the user experience stays coherent. The interface shrugs rather than crashes.

Quick reference: the three modes side by side
Here's a plain-English summary of what each mode does, what you're responsible for as a designer, and what goes wrong when you ignore that responsibility.

Mode	What the AI does	Your design job	What breaks if you skip it
Generated	Creates new content from scratch	Build trust & match the right tone	Users can't verify outputs; voice feels wrong
Curated	Ranks and filters existing content	Make the reasoning transparent	Interface feels like a black box; users disengage
Surfaced	Chooses the right moment to show something	Nail timing and context; design for failure	Notifications feel like spam; users turn everything off
So where does this leave you as a student?
The short version: the craft of making things is being automated. The judgement about what to make — and why — is not.

AI is very good at execution. It can produce a decent wireframe, write passable copy, and generate a component in seconds. What it can't do is sit in the room when a user starts crying because an interface made them feel stupid. It wasn't in the meeting when the PM changed the product direction for the third time. It doesn't know that the engineering team has a six-year-old API that rules out half the ideas on the whiteboard.

That context — messy, human, situational — is where design actually lives. Your job as a student isn't to compete with AI on speed. It's to build the judgement that AI can't replicate: knowing which problem to solve, understanding why users behave the way they do, and advocating for experiences that are honest, clear, and worth people's time.

The pixels are increasingly the AI's problem. The system's integrity is yours.