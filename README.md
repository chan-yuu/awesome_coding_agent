# Awesome Coding Agents

[English](./README.md) | [简体中文](./README.zh-CN.md)

An opinionated, research-backed list of the coding agents that actually matter.

This is not a museum of autocomplete plugins. It is a map of the tools that define the current frontier of software creation: terminal agents, IDE-native copilots, cloud developers that open pull requests while you sleep, and open-source stacks that let you keep control of the steering wheel.

If you are trying to understand where the market is going, what to adopt, what to benchmark against, or what to put in front of a serious engineering team, start here.

## Why this list exists

The center of gravity has moved.

Developers are no longer comparing "which AI writes the best next line." They are comparing execution models:

- Which agent can read a repo without getting lost?
- Which one can plan, edit, run, test, and recover?
- Which pricing model stays sane after the honeymoon week?
- Which products are real leverage, and which are demos with good branding?

This repository focuses on tools that represent the current coding-agent era with enough market gravity to matter:

- high-signal open-source projects with real community pull
- major proprietary products with meaningful product depth
- pricing models worth understanding before you standardize on them

## Snapshot Notes

- Default language: English
- Chinese version: [README.zh-CN.md](./README.zh-CN.md)
- GitHub star counts were checked on April 22, 2026
- Pricing was verified against official product, documentation, or help-center pages on April 22, 2026
- Prices below are in USD unless noted otherwise
- Pricing changes fast. Treat this repo as a field guide, not a contract
- Name mapping in this repo: `codex` means `Codex CLI`, `gemini` means `Gemini CLI`, and `copilot cli` is covered under the broader `GitHub Copilot` product because GitHub treats CLI as one of its official surfaces

## How To Read This List

- `Open-source` means the tool itself is open-source or openly available at the repo level. It does not always mean the model behind it is open or cheap
- `Closed-source` means the product experience is proprietary, even if it integrates open standards like MCP
- `Pricing posture` is more important than sticker price. Seat-based, credit-based, and BYOK models create very different incentives
- `Best for` is deliberately practical. The goal is not to crown a universal winner. The goal is to show where each tool is strongest

## Fast Take

If you want the shortest version:

- `Best open terminal stack:` [Gemini CLI](https://github.com/google-gemini/gemini-cli), [Codex CLI](https://github.com/openai/codex), [Aider](https://github.com/Aider-AI/aider)
- `Best open terminal stack with the biggest current momentum:` [OpenCode](https://github.com/anomalyco/opencode), [Gemini CLI](https://github.com/google-gemini/gemini-cli), [Codex CLI](https://github.com/openai/codex)
- `Best open IDE-native agents:` [Cline](https://github.com/cline/cline), [Roo Code](https://github.com/RooCodeInc/Roo-Code), [Continue](https://github.com/continuedev/continue)
- `Best open platform for serious customization:` [OpenHands](https://github.com/OpenHands/OpenHands)
- `Best open editor that now deserves to be in the agent conversation:` [Zed](https://zed.dev/pricing)
- `Best mainstream closed-source editor for individual power users:` [Cursor](https://cursor.com/en-US/pricing)
- `Best native GitHub workflow agent:` [GitHub Copilot](https://github.com/features/copilot)
- `Best premium coding specialist around Claude workflows:` [Claude Code](https://claude.com/product/claude-code)
- `Best async "delegate the ticket" product:` [Devin](https://docs.devin.ai/zh/admin/billing)
- `Best for idea-to-app shipping, not just repo edits:` [Replit Agent](https://replit.com/products/agent)

## Open-Source Leaders

Sorted roughly by current GitHub star signal.

| Tool | GitHub stars | Interface | What makes it matter | Pricing posture | Best for |
| --- | ---: | --- | --- | --- | --- |
| [OpenCode](https://github.com/anomalyco/opencode) | 147k | Terminal, desktop beta | The biggest open-source star signal in the category, explicitly positioning itself as "the open source coding agent" | No mandatory subscription; provider-agnostic by design; optional hosted path via OpenCode Zen | Terminal-first developers who want Claude-Code-like behavior without vendor lock-in |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 102k | Terminal | Massive adoption, terminal-first workflow, built-in tools, very generous free tier | Free tier includes 60 requests/min and 1,000 requests/day with a personal Google account; paid usage can route through Gemini API / Google Cloud | Developers who want a serious terminal agent without immediate subscription pressure |
| [Zed](https://github.com/zed-industries/zed) | 79.5k | Code editor | Open-source editor with real agent ambitions: Agent Panel, external agents, MCP, and a serious performance story | Personal free forever; Pro is $10/mo with $5 monthly token credit; hosted usage beyond that is billed at API list price +10%; Enterprise is custom | Developers who want an open editor, not just an open extension |
| [Codex CLI](https://github.com/openai/codex) | 76.7k | Terminal | Clean local coding-agent workflow from OpenAI, strong fit for ChatGPT-native users | Included with ChatGPT plans such as Plus ($20/mo), Pro ($200/mo), and workspace plans; API-key path is separate | Teams and individuals already living inside the OpenAI ecosystem |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 71.6k | CLI, local GUI, cloud | The most important "open platform" play in the category, with local, self-hosted, and cloud paths | Open-source local usage is free; OpenHands Cloud Individual is free with BYOK or at-cost provider usage; Enterprise is custom | Builders who want openness, deployment flexibility, and serious customization headroom |
| [Cline](https://github.com/cline/cline) | 60.5k | VS Code extension | Human-in-the-loop agent that made tool-use coding mainstream for a lot of developers | No mandatory platform subscription; you pay whichever model provider you connect | Devs who want maximum control over file edits, commands, and browser actions |
| [Aider](https://github.com/Aider-AI/aider) | 43.7k | Terminal | Lean, fast, Git-aware, still one of the sharpest workflows for repo surgery | No subscription; connect cloud or local LLMs and pay your chosen provider | Experienced developers who prefer code-first, terminal-first work |
| [Goose](https://github.com/aaif-goose/goose) | 42.9k | Desktop app, CLI, API | A notably broad open agent that spans code, research, automation, and embeddable API use | No mandatory subscription; use API keys or existing Claude, ChatGPT, or Gemini subscriptions via ACP | Teams that want one open agent surface for more than just coding |
| [Continue](https://github.com/continuedev/continue) | 32.7k | VS Code, JetBrains, CLI, hub | Open-source assistant stack that now extends into agents, checks, governance, and CI-oriented workflows | Starter is $3 per million tokens pay-as-you-go; Team is $20/seat/mo including $10 credits; Company is custom | Teams that care about controllability, policy, and internal agent infrastructure |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | 23.3k | VS Code extension | Strong multi-mode editor agent with broad community usage and a "dev team in your editor" pitch that resonates | No required Roo subscription; cost depends on the model providers you connect | VS Code users who want agent workflows, specialized modes, and broad provider choice |
| [Crush](https://github.com/charmbracelet/crush) | 23.3k | Terminal | A polished terminal-native agent from Charm with strong TUI ergonomics, LSP awareness, and MCP support | No required Crush subscription; BYOK by default; the repo also lists compatible subscription plans such as GLM Coding Plan, Kimi Code, and MiniMax Coding Plan | Terminal users who care as much about interface quality as raw model access |

### Open-source, in plain English

#### OpenCode

OpenCode is too large to leave out. At this point, omitting it would distort the map. The repo explicitly calls itself "the open source coding agent," and the product design is not shy about the comparison point: it is deliberately entering the same terrain as Claude Code, but with a provider-agnostic, fully open posture.

Two details make OpenCode especially important. First, it ships built-in `build` and `plan` agents, plus a general subagent. Second, its FAQ is explicit that the product is "100% open source" and "not coupled to any provider." That combination of scale, ambition, and architectural clarity is why it now belongs near the top of any serious list.

#### Gemini CLI

Gemini CLI is the most explosive open-source entry in the category right now. The repo pitch is blunt and effective: an open-source AI agent that brings Gemini directly into your terminal. The free tier is the real attention grabber. Google's official README says a personal Google account gets you `60 requests/minute` and `1,000 requests/day`, which is enough to make experimentation feel almost frictionless.

What makes it strategically important is not just the free quota. It is the combination of terminal-native workflow, large context, built-in web and shell tooling, and Google's willingness to let the open-source surface carry the distribution. If you want a high-upside agent without paying a seat fee on day one, this is one of the strongest options on the board.

#### Codex CLI

Codex CLI matters because it collapses a lot of friction for developers who already trust the OpenAI stack. The tool itself is open-source, lightweight, and local. The monetization path is not. OpenAI positions the CLI as part of its broader Codex experience, which can run through your ChatGPT subscription or through API credentials.

That hybrid posture is important. Codex CLI is open as software, but premium as an ecosystem. If your team already pays for ChatGPT or prefers OpenAI's coding models, this is one of the cleanest ways to get a serious terminal agent without building a custom stack.

#### Zed

Zed started the conversation as a high-performance editor, not as a pure coding-agent brand. That is precisely why it matters now. Its open-source editor core has grown real agent surface area: an Agent Panel, tool permissions, external agents, MCP, and a pricing model that cleanly separates "editor" from "hosted AI."

This makes Zed unusually attractive for developers who like the idea of an AI-native editor but do not want to surrender the whole stack. Free users can keep the editor and bring their own keys or external agents; Pro users get hosted models with token-based billing.

#### OpenHands

OpenHands is the most ambitious open-source platform play in the category. It is not merely "an AI extension." It is a broader attempt to build an open standard for cloud coding agents across local usage, hosted usage, and self-hosted enterprise deployment.

That makes OpenHands unusually relevant for teams that think beyond solo coding assistance. If you want to standardize workflows, run agents in controlled environments, expose APIs, or build internal automation around agent execution, OpenHands deserves a close look. It is also one of the few projects here with a clear bridge between open-source local use and hosted commercial rollout.

#### Cline

Cline helped define the developer expectation that a coding assistant should do more than chat. Read files. Edit code. Run commands. Open a browser. Use MCP. Ask for permission at the right moments. That pattern became foundational.

Its biggest strength is trust through visibility. Cline is not trying to hide the machinery. It shows its work, tracks costs, and keeps the human in the approval loop. That makes it a favorite for developers who like agent power but do not want the product to feel like a black box.

#### Aider

Aider remains one of the best examples of a tool that feels built by and for real terminal users. It is less theatrical than many of the newer entrants, but its workflow is still first-rate: codebase mapping, strong Git integration, wide model support, and a bias toward getting real work done fast.

For experienced engineers, Aider is often the answer to a simple question: "What if I want the agent, but not the extra product?" If your taste runs toward directness, this tool still punches far above its UI weight.

#### Goose

Goose deserves more attention than it usually gets in mainstream AI editor comparisons because it is broader than a coding-only tool. The official repo describes it as a native open-source AI agent with a desktop app, CLI, and API, and explicitly says it is "not just for code."

That breadth is useful. If your team wants one open agent surface that can touch software tasks, automation, research, and internal workflows, Goose is one of the stronger candidates. The ACP compatibility story is also smart: it can use API keys, but it can also tap existing Claude, ChatGPT, or Gemini subscriptions.

#### Continue

Continue is no longer just "that open-source VS Code extension." It has become a broader agent and governance story. The open-source client surface still matters, but the real differentiator now is that Continue is building toward source-controlled agents, shared policies, checks, and enterprise control.

That makes its pricing structure worth watching. Unlike pure BYOK tools, Continue has a more explicit platform monetization layer. If you want open-source DNA with a stronger control plane story, Continue is one of the more interesting bridges between hacker-friendly and enterprise-friendly.

#### Roo Code

Roo Code turned the "agent in your editor" idea into a more explicit product identity. The message is memorable: your AI-powered dev team, right in your editor. That framing works because the tool ships multiple modes that match how developers actually work: code, architect, ask, debug, and custom variations.

Roo is especially attractive if you want a more opinionated, role-based workflow than generic chat. It is still flexible about model providers, but the user experience is more shaped, more theatrical, and for many teams, easier to operationalize.

#### Crush

Crush is one of the clearest examples of terminal UX becoming a differentiator instead of an afterthought. Charm's design instincts are all over it. The repo positions Crush as "your new coding bestie" in the terminal, but beneath the playful surface it is serious software: LSP-enhanced context, MCP support, multi-provider routing, and broad OS coverage.

The pricing posture is also slightly more interesting than generic BYOK. Crush is still provider-driven at its core, but the README explicitly recommends several subscription-style provider plans that work well inside the tool. That gives it a practical middle ground between raw API billing and tightly bundled closed ecosystems.

## Closed-Source Leaders

These are the proprietary products that currently define the commercial end of the market.

| Tool | Product type | Interface | What makes it matter | Pricing snapshot | Best for |
| --- | --- | --- | --- | --- | --- |
| [GitHub Copilot](https://github.com/features/copilot) | Platform-integrated coding agent | GitHub, VS Code, CLI, mobile, IDE extensions | Native GitHub workflow, async coding agent, broad model menu, enterprise controls | Free; Pro $10/mo; Pro+ $39/mo; Business $19/user/mo; Enterprise $39/user/mo; extra premium requests $0.04 each | Organizations that want coding agents to live inside the software delivery system they already use |
| [Cursor](https://cursor.com/en-US/pricing) | AI-first code editor | Desktop editor | Best-known AI-native editor, strong agent UX, background agents, bug bot, generous context posture | Hobby free; Pro $20/mo; Ultra $200/mo; Teams $40/user/mo; Enterprise custom | Individual power users and small teams that want an editor built around AI first |
| [Windsurf](https://windsurf.com/pricing?referrer=windsurf) | AI-native editor | Desktop editor | Cascade feels like one of the more "agentic" editor experiences, with clear credit mechanics and workflow tools | Free includes 25 prompt credits; Pro $15/mo with 500 credits; Teams $30/user/mo; Enterprise custom; extra credits $10/250 or $40/1000 depending on tier | Developers who want a strong editor agent with more explicit cost controls |
| [Claude Code](https://claude.com/product/claude-code) | Premium coding agent in Anthropic ecosystem | Terminal, IDE, web | One of the strongest coding specialists when you want deep reasoning plus serious implementation ability | Pro $20/mo monthly or $17/mo annual equivalent; Max starts at $100/mo; Team plans are available; API path is usage-based | Developers already committed to Claude workflows and teams that prize model quality over low seat cost |
| [Devin](https://docs.devin.ai/zh/admin/billing) | Async software engineer | Cloud agent | The flagship "delegate the task and come back later" product | Core is pay-as-you-go at $2.25 per ACU; Teams is $500/mo including 250 ACU; Enterprise custom | Teams that want ticket-level delegation, not just in-editor assistance |
| [Replit Agent](https://replit.com/products/agent) | Build-and-ship app agent | Cloud workspace | The strongest "idea to deployed app" proposition in the group, especially for product builders | Starter free daily credits; Core $20/mo billed annually with $25 monthly credits; Pro $95/mo billed annually with $100 monthly credits; Enterprise custom; Agent usage also follows effort-based pricing | Founders, PMs, indie builders, and teams shipping full-stack products from a hosted workspace |
| [Qoder](https://qoder.com/ide) | Agentic IDE | Desktop IDE, JetBrains plugin, CLI | A serious Asia-origin agentic IDE with Quest Mode, Repo Wiki, and explicit autonomous-task positioning | Free; Pro is currently $10/mo promo ($20 regular) with 2,000 monthly credits; Pro+ is $30 promo ($60 regular) with 6,000 credits; Ultra is $100 promo ($200 regular) with 20,000 credits; add-on credits are currently $0.01 each on promo | Users who want stronger long-running agent workflows without jumping all the way to Devin-style delegation |
| [Kiro](https://kiro.dev/pricing/) | Agentic IDE and CLI | IDE, CLI, ACP-compatible surfaces | One of the clearest "structured development" products, with spec-driven work and explicit credit accounting | Free has 50 credits; Pro $20/mo with 1,000 credits; Pro+ $40/mo with 2,000; Power $200/mo with 10,000; paid overage is $0.04/credit; new users get 500 bonus credits for 30 days | Teams that prefer explicit task structure and predictable credit-based scaling |
| [TRAE](https://www.trae.ai/) | AI IDE | Desktop IDE, web surfaces, agent components | Fast-moving product with strong agent branding, active product iteration, and an official open-source Trae Agent companion repo | The public pricing page is FAQ-style; TRAE's official February 13, 2026 blog post says pricing moved to four token-based tiers ranging from $3/mo to $100/mo, with a 7-day free Pro trial | Users who want to track one of the fastest-moving AI IDE products, especially in the Asia market |

### Closed-source, in plain English

#### GitHub Copilot

Copilot is no longer just "the autocomplete product." GitHub has spent the last cycle turning it into a broader agent platform: editor agent mode, cloud agent, code review, MCP integration, and asynchronous issue-to-PR workflows inside GitHub itself.

That native placement is the killer feature. If your engineering org already lives in GitHub, Copilot can meet developers where planning, review, branch protection, CI, and merge decisions already happen. The tradeoff is that pricing is no longer just a seat fee. Premium requests and GitHub Actions minutes now matter if you lean hard into agent execution. If you were specifically looking for `copilot cli`, this repository treats it as part of the same product family, not as a separate market entry.

#### Cursor

Cursor earned its position by making the AI-first editor feel natural instead of bolted on. The interface is fast, the UX is opinionated in the right places, and the product has consistently felt closer to how power users actually want to work: long context, agent execution, background work, and editor-native control.

Cursor is not the cheapest serious option once usage ramps. But for many developers, it is the product that most clearly answers the question, "What if the editor were rebuilt around AI from the start?" That remains a powerful wedge.

#### Windsurf

Windsurf's pitch is not just "smart editor," but agentic collaboration through Cascade. The docs describe Cascade as the agentic AI assistant with code/chat modes, tool calls, checkpoints, real-time understanding, and linter integration. That product language matches the feel: it is built to act, not merely suggest.

Its pricing is also easier to reason about than some competitors. Windsurf explicitly documents prompt credits and how they are consumed. That makes it attractive for users who want a more visible relationship between behavior and billing, especially compared with fuzzier "unlimited" promises that quietly throttle later.

#### Claude Code

Claude Code sits at the premium end of the market and leans into model quality as the headline. Anthropic positions it inside the broader Claude subscription universe rather than as a cheap standalone coding SKU. That matters. You are buying into a Claude workflow, not just a terminal tool.

For the right user, that is a feature, not a bug. If you already use Claude for analysis, writing, planning, and research, Claude Code can become the implementation arm of the same system. The downside is cost. Max plans and team premium seats are materially more expensive than mainstream editor subscriptions.

#### Devin

Devin still matters because it made the market legible. Even people who do not use Devin understand the idea because Devin made it vivid: assign real software work to an autonomous agent and come back to a result.

Its pricing makes the positioning clear. Devin is not trying to be a cheap sidekick. It is selling delegated software labor. The ACU model is best understood as agent compute budget. If your use case is async execution on well-scoped tickets, that framing can make sense. If you mostly want in-editor acceleration, it is likely overkill.

#### Replit Agent

Replit Agent is the standout choice when the outcome you want is not merely "code changed," but "app built, tested, hosted, and improving." Replit is playing a different game from repo-first tools. It is compressing ideation, implementation, infra, and deployment into one hosted surface.

That makes it disproportionately appealing to founders, product teams, and builders who care about speed to a working app more than fine-grained repo choreography. The caution is pricing literacy: Replit combines plan allowances with effort-based billing, so serious usage should be monitored, not guessed.

#### Qoder

Qoder is one of the more interesting proprietary entrants because it is not merely chasing the generic "AI IDE" framing. Its docs make Quest Mode and Repo Wiki core paid features, which tells you how it wants to win: not just completion, but agent delegation and repository understanding.

Its pricing is also more explicit than many newer products. Credits are front and center, plan differences are visible, and the docs spell out what happens when you exhaust premium usage. For buyers who want autonomy features without completely opaque metering, that matters.

#### Kiro

Kiro has matured into a distinctly credit-shaped product. The official pricing page is unusually concrete: Free, Pro, Pro+, and Power tiers; exact monthly credits; and exact overage cost. That transparency makes it easier to reason about than many AI IDE products that still hide behind vague fair-use language.

The more important product question is workflow philosophy. Kiro leans hard into structured execution, spec tasks, and agent hooks. If you want an IDE that nudges developers toward clearer planning and more auditable automation, Kiro is one of the stronger options.

#### TRAE

TRAE remains one of the fastest-moving products in the category, and that speed is part of both its appeal and its risk. Feature movement is rapid, product vocabulary changes quickly, and the official pricing page is currently more of a FAQ shell than a fully itemized comparison chart.

That said, the official TRAE blog is clear that the product moved to token-based pricing with four tiers ranging from $3 to $100 per month, plus a 7-day Pro trial. In other words: serious product, real market ambition, but still a surface you should monitor closely rather than treat as settled infrastructure.

## Pricing Patterns That Actually Matter

The most expensive coding agent is usually not the one with the highest monthly sticker price. It is the one whose billing model you do not understand until your team is already dependent on it.

### 1. BYOK looks cheap until you use frontier models heavily

This is the trap with many open-source agents. The tool is free. The intelligence is not. If your team defaults to premium Anthropic, OpenAI, or Google models all day, "free" quickly turns into a serious API bill.

### 2. Seat pricing is great for predictability and bad for denial

Seat-based subscriptions help procurement and budgeting. They also tempt teams to pretend heavy usage is "covered" when many products now layer credits, premium requests, or fair-use constraints on top.

### 3. Credit systems are good when they are honest

Windsurf, Devin, Replit, and GitHub all expose some form of usage accounting beyond the headline subscription. That is not necessarily worse. In some cases it is better, because it makes the economics visible.

### 4. Platform-native agents win on workflow gravity

GitHub Copilot wins deals not just because of model quality, but because it lives inside GitHub. Replit Agent wins mindshare because it does build-plus-deploy in one place. Workflow gravity is a moat.

### 5. Open-source still matters, especially for control

Open-source agents matter for at least three reasons:

- they let teams swap model providers without rewriting the workflow
- they reduce dependence on a single vendor's UI and roadmap
- they make internal agent infrastructure and customization much more realistic

## Which Tool Should You Choose?

### If you are an individual engineer

- Pick `Cursor` if you want the smoothest premium AI-first editor
- Pick `Zed` if you want an open editor core with a real agent story
- Pick `Cline` or `Roo Code` if you want editor agents with provider freedom
- Pick `Aider`, `Gemini CLI`, `Codex CLI`, or `OpenCode` if terminal-first is your natural habitat

### If you lead a small engineering team

- Pick `GitHub Copilot` if your team already runs on GitHub and wants native governance
- Pick `Continue` if you care about shared policies, internal agents, and open-source leverage
- Pick `Windsurf` if you want a more explicit credit model and a strong agentic editor experience
- Pick `Kiro` or `Qoder` if your team prefers overt credit accounting and more structured agent workflows

### If you want to delegate complete tickets

- Pick `Devin` if async execution is the actual product you want
- Pick `OpenHands` if you want an open platform and deployment flexibility
- Pick `GitHub Copilot` if the work should stay inside GitHub's issue and PR loop

### If you want to build and ship apps end-to-end

- Pick `Replit Agent` if the fastest path from idea to live product matters most
- Pick `OpenHands` if you need a more open and customizable execution layer

## Selection Criteria

Tools were included because they hit several of the following:

- clear coding-agent behavior beyond autocomplete
- meaningful market presence or community pull
- evidence of serious product surface, not just a thin wrapper
- current pricing that is public enough to evaluate
- strategic relevance to how software teams are actually changing their workflows

## Official Sources

### Open-source

- Gemini CLI: [GitHub repo](https://github.com/google-gemini/gemini-cli)
- OpenCode: [GitHub repo](https://github.com/anomalyco/opencode)
- Zed: [GitHub repo](https://github.com/zed-industries/zed), [Pricing](https://zed.dev/pricing), [AI plans and usage](https://zed.dev/docs/ai/plans-and-usage)
- Codex CLI: [GitHub repo](https://github.com/openai/codex), [OpenAI ChatGPT pricing](https://openai.com/pricing/), [Codex help article](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- OpenHands: [GitHub repo](https://github.com/OpenHands/OpenHands), [Pricing](https://openhands.dev/pricing)
- Cline: [GitHub repo](https://github.com/cline/cline)
- Aider: [GitHub repo](https://github.com/Aider-AI/aider)
- Goose: [GitHub repo](https://github.com/aaif-goose/goose)
- Continue: [GitHub repo](https://github.com/continuedev/continue), [Pricing](https://www.continue.dev/pricing)
- Roo Code: [GitHub repo](https://github.com/RooCodeInc/Roo-Code)
- Crush: [GitHub repo](https://github.com/charmbracelet/crush)

### Closed-source

- GitHub Copilot: [Product](https://github.com/features/copilot), [Plans](https://docs.github.com/en/copilot/get-started/plans), [Pricing](https://github.com/features/copilot/plans)
- Cursor: [Pricing](https://cursor.com/en-US/pricing), [Docs](https://cursor.com/docs)
- Windsurf: [Pricing](https://windsurf.com/pricing?referrer=windsurf), [Plans and credit usage](https://docs.windsurf.com/zh/windsurf/accounts/usage), [Cascade docs](https://docs.windsurf.com/windsurf/cascade)
- Claude Code: [Claude Code](https://claude.com/product/claude-code), [Pricing](https://claude.com/pricing)
- Devin: [Billing docs](https://docs.devin.ai/zh/admin/billing)
- Replit Agent: [Agent product page](https://replit.com/products/agent), [Pricing](https://replit.com/pricing), [Plan Mode docs](https://docs.replit.com/core-concepts/agent/plan-mode)
- Qoder: [Qoder IDE](https://qoder.com/ide), [Pricing](https://docs.qoder.com/account/pricing), [Pricing update notice](https://docs.qoder.com/events/pricing-adjustment-notice)
- Kiro: [Pricing](https://kiro.dev/pricing/), [Billing docs](https://kiro.dev/docs/billing/)
- TRAE: [Product](https://www.trae.ai/), [Pricing](https://www.trae.ai/pricing), [Pricing update blog](https://www.trae.ai/blog/trae_membership_0213), [Official GitHub](https://github.com/Trae-AI/Trae)

## Contributing

If you want to improve this list, the highest-value contributions are:

- official pricing updates with exact links
- additions that clearly meet the bar for "real coding agent"
- sharper comparisons based on real usage, not launch-day hype
- corrections when a product changes billing, scope, or positioning

Pull requests are welcome.
