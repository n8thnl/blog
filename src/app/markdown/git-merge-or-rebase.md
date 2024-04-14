![article-title-image](/bad-merge-double-margin.gif)

###### Feb 1, 2024

# The Only Git Strategy

## Part 1: the merge

  

As the first post on this site, I wanted to keep this one a bit more light and less technical. This is a short anecdote from my own life that explores the best strategy to manage and contribute new code to a git repository - Merging!

  

_ok, now I know some of you are hooked._

  

#### What did I see?

Fresh out of my undergraduate degree in Computer Science, and I already had a solid 12 months of full stack development under my belt via an internship throughout my senior year. During 12 months I learned quite a bit; they never tend to teach you the _important_ stuff in school - how important finding a good library is, identifying bad design patterns in your code, and, a huge miss: version control.

  

The instructors and TAs did have us use git (and subversion ??) in our classes, but that was nothing more than checking your entire project in 12 minutes before the deadline after drinking countless red bulls to get you through a poorly designed homework problem. To be fair, they did _try_ to stress the importance and give explanations as to the benefits of using version control, but, if we're being honest, the TAs were also pulling the same stunts as the students.

  

It was in this internship that things got more serious about the concept of code ownership. First off, we had four engineers in total that were contributing to various parts of the codebase. To give ourselves a bit of credit, we did in fact have separate repositories for different components of our system. I can't remember if that was any sort of foresight or intuition, or it was just easier to create a new repo when one of us started working on something different.

  

Multiple inexperienced engineers contributing inevitably and immediately led to a few problems. We didn't truly understand the capabilities of the tools we were using, so all of us were just pushing to the main branch. I may have experimented a few times and created branches dedicated to holding test code, but the majority of commits were pushed directly onto the main branch.

  

Over the course of my career, I've identified two types of people when dealing with version control:

1. the person that is blocked by a merge conflict
2. whoever they call over to their desk to fix the merge for them. \*gigachad meme here\*

  

Let me tell you, there were a lot of merge conflicts. And some of them did not go well. The worst case had to be when a significant portion of important code was deleted when the "_lead_ _dev"_ (only 2 yoe, hence quotes AND italics) of our team determined late at night that his current changes (which was just old code - I'm really not sure how this happened) were more important than the recent changes pushed by the junior devs. Any morning when you see your code wiped from the repo is not a good morning.

  

After leaving that position, you can imagine my dismay when, at my next job, I was greeted by an entire department that had never even touched version control in their lives. I was working with a group of people with PhDs or specializing in data science, where most of the stuff they were doing was scripting at best. And rightfully so, you don't learn that when you're discovering a cure of a disease, or changing the field of physics. No shade at all.

  

So, with only 6 months of post-college experience under my belt, I jumped in and got to work.

  

#### Why did I want to improve it?

I think it's always important to retro-analyze these moments where you so clearly had the answer without even thinking. And that's what happened here. Why did I think that the establishment of some standardized version control practice was my responsibility?

  

Well, I guess it was a few things.

  

First, I was pretty fresh out of college, and a lot of these people I was working with had 10 yoe in various academic and industrial settings, so I needed to stand out somehow. The only thing I really brought to the table that they didn't have was the CS professors hounding in our ears this _wisdom_ during the lectures. Seriously, though, even if we didn't follow the advice of the professor when they said _use gdb and set breakpoints in your code_ and instead just used `console.error` statements, we were made aware of those things and ultimately, in a professional setting, we did know the _right_ thing to do.

  

Second was purely to make my own life easier. I honestly was tired of helping people resolve merge conflicts, or fix their repository when they ultimately lost the head of the main branch (it really is not that hard). Any time you spend fixing your version control is, in my opinion, wasted time and completely preventable.

  

I started writing a document. If you can imagine, coming fresh out of university not only on computer science degree, but also a mathematics degree, I'm sitting there in my cubicle writing a LaTex document on how to effectively implement and adhere to a merge-based git strategy that, in my mind, would be the new standard for version control at the company.

  

#### Why was branching useful here?

And I obviously picked branching. Let's be honest, a branching git structure is the most intuitive way to approach git when you're starting out. Visually, it shows that multiple people are working on multiple things at the same time. It produces a picture of what git is really supposed to be under the hood: several individual changes that are all independent from each other, but come together to form a single line at the root of the tree.

  

That's a good, presentable answer, but if we're being completely honest, branching offered a way to isolate some of the merging problems we saw when everyone was pushing straight to the main branch. My teammates were no longer blocking production with bad merges, but since they would commit and pull infrequently, they just weren't able to keep a main branch that contained recent updates, and they'd still be plagued with conflicts.

  

#### Aftermath

What became of this glorious doc instructing and guiding users through a branching git model that would reduce all their frustrations and ultimately increase their output? It went spectacularly! Teams were sharing more code and were able to integrate with each other better than ever before. Having clean repositories with various feature and environment branches enabled some teams to even set up automated build pipelines, further reducing the brain-dead workload of deploying the code.

  

  

## Part 2: the rebase

  

Except that was all a lie. Well, not completely. Our team did have a single automated pipeline, but any project that had a clean repository was a project where a single person was working on it.

  

There was just no hope. And I think that's true when a lot of younger people try and bring about change in companies where the median age is twice as much as a new grad. It can be exhausting standing behind something that you know works and just watch it be ignored.

  

It's important to understand that this likely will happen everywhere you go. A business itself is a collection of competing ideas on how to allocate resources or which projects to pursue or what to invest in. And _best practices_ or _tech debt_ are the last to be implemented or addressed, respectively due to their high upfront investment and long-term ROI.

  

But if this kind of thing is happening too often, that could be an indicator that you're just not in the right place. That's the conclusion I ultimately came to. It truly wasn't a good fit and I left after being there for less than 2 years (even though that could seem like an eternity to some).

  

I moved into a new role at an established tech company and one of the first things I asked to one of the more senior developers on the team was regarding the recommended branching structure for the various packages we owned.

  

"Well, we kind of all just push to the main branch. At least I don't use branches when I'm working", is what he said. I was definitely surprised, thinking how a company so big could work properly when everyone was just pushing to the main branch. I had seen this before, so I knew we were going to have problems in the future. Little did I know what I would find soon enough...

  

#### What changed?

So what exactly is a trunk-based (what we were now doing) strategy for managing a code repository? Well, it's exactly what it sounds like. There is one component to the repo, a trunk, a single branch. Yes, people can make branches, but you're not necessarily tracking work on any branches other than the main branch.

  

#### What were my thoughts?

For a while I kept thinking that this system was suboptimal. I mean, how is a team of 10 developers going to work together to manage a number (probably 15) of repositories? It just didn't compute in my head, but surprisingly, we weren't having many problems. Maybe the developers on the team were just more experienced? Who knows, but I tried to embrace the change and roll with it.

  

Until a new project came my way, and they seemed to have the ingredients for a perfect merge-based strategy for their repository. Here was the monorepo.

  

#### What would happen if people tried merging?

The monorepo was just one huge repository feeding a single system that was core to our sales business (you can probably connect the dots). We had customized it to the point that entire teams were dedicated to keeping everything running smoothly. It was truly an important part of the business (even if it was a big disagree moment for a lot of people).

  

I was introduced to this monorepo and all the documentation that came along with it. They had documents talking about the structure of the repository, how to manage the metadata inside, things you should take into consideration when making edits. There were even shared communication channels whose sole purpose was to sync developers on different teams to things happening in this shared system.

  

I learn the ropes and fast forward to when I have something I'm finally ready to merge into the development branch, so I check in the changes and merge them in. Simple enough. But the next step is where something wasn't right. Their documentation stated that I was responsible for moving my changes into the next branch. Ok... a little confusing and stressful. There were hundreds of developers working in this package and I'm supposed to merge my changes through the pipeline? So I try a merge from the development branch to an integration branch.

  

Failed merge. At least 30 files with conflicts. I'm really not sure what's happening, so I reach out to point of contact on the team owning the repo and they actually just _take care of it_ and merge our code through the environments for us. What a horrible experience that was because, when we're the same spot next week, we have no idea how to replicate what was done for us and we have to just study the git browser trying to figure out what he had done.

  

And I think we figured it out. You see, people weren't actually merging the development branches together like they were supposed to. We didn't dive deep into the logs and we certainly didn't ask for him to clarify, but we're certain most people were cherry picking their commits into the shared branches and moving them through the environments that way.

  

And even worse, some people would create and push a remote branch, only to cherry pick their changes into that remote branch so it looked like they were following the feature branch structure. It was honestly free-for-all survival where just one rogue change had the ability to start a chain reaction of teams having to fend for themselves.

  

Despite the pleas of people in the shared channels for others to work together and fix the conflicts between the various branches, there ultimately wasn't much that could be done. Time was being wasted, people were frustrated. It just wasn't working.

  

## Takeaway

  

This was the first time in my career that a _best practice_ I had once preached failed right in front of my eyes. It truly was a humbling experience that really put me in my place. Who was I, a new employee coming into an established tech company wanting to tell them they were approaching version control all wrong.

  

But, going back to the monorepo, why do I think that repository ultimately failed?

  

Well, first off, you're taking people that are used to trunk-based merging and throwing them into an environment where everything is carefully orchestrated and micromanaged.

  

In theory, merging works. It works pretty well, actually. But it breaks down right away when one person is impatient and doesn't want to follow the rules. Increasingly dangerous precedents are set when people keep pushing the boundary further and further.

  

And the opposite question, too, is still open. Why did a trunk-based merging structure work so well? My team had roughly 10 people pushing code several times per day as opposed to 3-4 people before using branches in my previous job.

  

One reason was that the codebase was definitely bigger. In a larger codebase, the probability two people will be touching the same file at the same time is actually pretty low. A lot of files are getting touched a few times per year, and with each at few hundred lines of code, even when that scenario does happen, you're avoiding conflicts by likely modifying different sections of the file.

  

Another reason - it might be more of a chicken or the egg situation, but a trunk-based structure encourages smaller chunks of code to be released. If you want something in production within a couple hours, you can merge a line of code right now, and, if your pipelines aren't blocked, that commit makes it to prod very quickly. All you have to do is push one button. You don't have to manage several branches within a single pipeline either. I can't imaging the amount of time it would take to properly monitor the several pipelines our single team owned if a merge happened at every environment.

  

This story does have a happy ending. For someone who said they'll never interactively rebase _ever,_ I now find myself doing just that every day. Through squashes, or reordering commits to push more urgent bug fixes out before larger features in review, rebasing over merging has actually increased my productivity.

  

But the fact that I still strongly felt that the right answer was the completely wrong in this case still leaves my uneasy. Uneasy because I know this isn't the last time I'll be absolutely wrong on a particular issue. And I don't even think it's pride, either. In my opinion, a significant part of being a good developer comes down to a good gut instinct. Most issues that come my way every day I don't have the luxury of spending 20, 30, or 40 minutes to think about. You _need_ to have an immediate direction, otherwise you're wasting time. So these concrete examples of my gut failing me serves as a reminder that nothing is ever certain in a field where so many people are claiming that things are.