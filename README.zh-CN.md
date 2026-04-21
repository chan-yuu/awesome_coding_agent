# Awesome Coding Agents

[English](./README.md) | [简体中文](./README.zh-CN.md)

一份带立场、带调研、也带现实感的 Coding Agent 清单。

这不是一个把 AI 插件全塞进来的链接仓库，也不是一份“谁家补全更顺滑”的旧时代榜单。这里收录的是这个阶段真正定义软件开发新范式的工具: 终端代理、IDE 原生代理、云端异步写代码的代理工程师，以及那些让你依然保有控制权的开源栈。

如果你想看清这个赛道现在到底在打什么仗，哪些产品是真正能进团队工作流的，哪些产品值得 benchmark，哪些订阅计划看似便宜但实际很容易失控，这个仓库就是给你准备的。

## 为什么要做这份清单

软件开发的重心已经变了。

现在大家比较的，不再只是“谁补全得更像人”，而是：

- 谁能真正读懂一个仓库，而不是只会在上下文窗口里漂着
- 谁能规划、改代码、跑命令、执行测试、自己纠错
- 谁的定价模型适合长期使用，而不是第一周看起来很香
- 谁是真生产力，谁只是包装精美的演示产品

这份清单聚焦于两类真正有代表性的工具：

- 有足够社区势能和星标信号的开源项目
- 已经形成产品深度、工作流闭环和商业影响力的闭源产品

## 快照说明

- 默认语言: English
- 中文版本: [README.zh-CN.md](./README.zh-CN.md)
- GitHub Star 数量核验时间: 2026 年 4 月 22 日
- 定价信息核验时间: 2026 年 4 月 22 日
- 除特别说明外，价格均为美元
- 产品价格和权益更新很快，请把这份仓库当作高质量导航图，而不是最终合同文本
- 本仓库中的名称映射: `codex` 默认指 `Codex CLI`，`gemini` 默认指 `Gemini CLI`，`copilot cli` 则归入更大的 `GitHub Copilot` 产品体系，因为 GitHub 官方本身就是这样组织其产品面的

## 这份列表该怎么读

- `开源` 指的是工具本身以开源仓库形态存在，不代表底层模型一定开源，也不代表长期使用一定便宜
- `闭源` 指的是产品体验和核心服务是 proprietary，即使它支持 MCP 这类开放标准
- `定价姿势` 比月费本身更重要。Seat、Credit、BYOK，看起来都像“订阅”，实际财务表现完全不同
- `适合谁` 这列比“谁最强”更有价值。这个赛道没有万能王者，只有不同工作流下的更优解

## 一句话结论

如果你只想先记住最重要的：

- `最值得看的开源终端代理:` [Gemini CLI](https://github.com/google-gemini/gemini-cli)、[Codex CLI](https://github.com/openai/codex)、[Aider](https://github.com/Aider-AI/aider)
- `现在势能最猛的开源终端代理组合:` [OpenCode](https://github.com/anomalyco/opencode)、[Gemini CLI](https://github.com/google-gemini/gemini-cli)、[Codex CLI](https://github.com/openai/codex)
- `最值得看的开源 IDE 代理:` [Cline](https://github.com/cline/cline)、[Roo Code](https://github.com/RooCodeInc/Roo-Code)、[Continue](https://github.com/continuedev/continue)
- `最值得看的开放平台路线:` [OpenHands](https://github.com/OpenHands/OpenHands)
- `最值得重新审视的开源 AI 编辑器:` [Zed](https://zed.dev/pricing)
- `个人开发者最主流的高端闭源编辑器:` [Cursor](https://cursor.com/en-US/pricing)
- `GitHub 工作流里的原生强者:` [GitHub Copilot](https://github.com/features/copilot)
- `Claude 生态里最强的 coding specialist:` [Claude Code](https://claude.com/product/claude-code)
- `最典型的异步代理工程师产品:` [Devin](https://docs.devin.ai/zh/admin/billing)
- `从想法直接到应用上线最有代表性的产品:` [Replit Agent](https://replit.com/products/agent)

## 开源阵营

以下工具大致按当前 GitHub star 信号排序。

| 工具 | GitHub stars | 主要形态 | 为什么值得看 | 定价姿势 | 最适合 |
| --- | ---: | --- | --- | --- | --- |
| [OpenCode](https://github.com/anomalyco/opencode) | 147k | Terminal、桌面版 Beta | 现在开源阵营里最不能忽视的项目之一，甚至直接把自己定义为“the open source coding agent” | 没有强制订阅，核心是 provider-agnostic；可自带模型，也可选 OpenCode Zen | 想要 Claude Code 式体验，但不想被单一供应商绑住的终端开发者 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 102k | Terminal | 爆发式增长、终端优先、工具链完整，而且免费额度极具杀伤力 | 个人 Google 账号可用免费层，官方 README 写明 `60 请求/分钟` 与 `1,000 请求/天`；更高需求可走 Gemini API / Google Cloud | 想认真用 terminal agent，但又不想一开始就被 seat 费锁住的人 |
| [Zed](https://github.com/zed-industries/zed) | 79.5k | Code editor | 一个真正值得放进 agent 语境里讨论的开源编辑器：Agent Panel、外部代理、MCP、性能都很强 | Personal 永久免费；Pro 为 $10/月并含 $5 token credit；超出部分按模型官方价 +10% 计费；Enterprise 定制 | 想要“开放编辑器”而不只是“开源插件”的开发者 |
| [Codex CLI](https://github.com/openai/codex) | 76.7k | Terminal | OpenAI 官方终端代理，适合已经在 ChatGPT / OpenAI 生态中的用户 | 可通过 ChatGPT 订阅使用，也可走 API；Plus $20/月，Pro $200/月，团队/企业工作区另算 | 已经把 OpenAI 当主力模型栈的个人和团队 |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 71.6k | CLI、本地 GUI、Cloud | 这不是单纯插件，而是“开放式 coding agent 平台”路线 | 本地开源免费；Cloud Individual 免费，可自带 key 或按成本使用；Enterprise 定制报价 | 想要开放性、可部署性、平台化扩展能力的团队 |
| [Cline](https://github.com/cline/cline) | 60.5k | VS Code 扩展 | 很多人第一次真正感受到“代理能干活”就是从 Cline 开始 | 工具本身无强制订阅，主要成本来自你接入的模型提供商 | 想保留强控制感，同时又需要代理读写文件、跑命令、开浏览器的人 |
| [Aider](https://github.com/Aider-AI/aider) | 43.7k | Terminal | 终端工作流极强，Git 集成成熟，效率感非常硬核 | 无订阅，接云模型或本地模型都可以，成本跟着 provider 走 | 习惯 CLI、重视 repo surgery 和 Git 流程的工程师 |
| [Goose](https://github.com/aaif-goose/goose) | 42.9k | Desktop app、CLI、API | 不只是 coding assistant，而是一个更广义的本地开源 agent | 没有强制订阅；既可用 API key，也可通过 ACP 复用现有 Claude、ChatGPT、Gemini 订阅 | 想用一个开放代理同时覆盖代码、自动化、研究等场景的团队 |
| [Continue](https://github.com/continuedev/continue) | 32.7k | VS Code、JetBrains、CLI、Hub | 已经从开源助手延伸到 agents、checks、治理和团队控制面 | Starter 为 $3 / 百万 tokens，Team 为 $20/席位/月且含 $10 credits，Company 定制 | 关注团队治理、可控性、内部代理体系建设的组织 |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | 23.3k | VS Code 扩展 | “你的 AI 开发团队就在编辑器里”这个定位非常容易打中真实需求 | 无必须订阅，主要按你接入的模型供应商计费 | 想在 VS Code 里使用多模式、多角色代理工作流的人 |
| [Crush](https://github.com/charmbracelet/crush) | 23.3k | Terminal | Charm 出品，终端体验、LSP 上下文和 TUI 气质都非常强 | 无必须订阅，默认 BYOK；官方 README 也点名了可在 Crush 中使用的订阅方案，如 GLM Coding Plan、Kimi Code、MiniMax Coding Plan | 在意终端交互品质，同时又想要代理能力的开发者 |

### 开源阵营，逐个看

#### OpenCode

OpenCode 现在已经大到不能被忽略了。它不是一个可以轻描淡写带过的“新项目”，而是已经足以改变榜单结构的开源核心玩家。它在官方仓库里直接把自己定义成“the open source coding agent”，而且这不是一句空话。

它真正重要的地方有两个。第一，它内置了 `build` 与 `plan` 两个代理模式，还带通用子代理。第二，它在 FAQ 里明确强调自己是 `100% open source`，而且 `not coupled to any provider`。这意味着它不是在卖一个 UI，而是在卖一种更开放的 agent 基础设施观。

#### Gemini CLI

Gemini CLI 是现在开源 coding agent 里声量最大的项目之一，而且它最聪明的地方不是“功能多”，而是把试用门槛压得极低。Google 在官方 README 里直接写明，个人 Google 账号就能拿到 `60 请求/分钟` 和 `1,000 请求/天` 的免费额度，这个量级足以让很多开发者真正把它纳入日常工作，而不是只装上去玩两次。

它的重要性不只是免费，而是它把终端代理、长上下文、Web/文件/命令工具和 Google 自己的模型能力打包成了一个开源入口。这意味着它既是产品，也是分发渠道。

#### Codex CLI

Codex CLI 的价值在于它把 OpenAI 的 coding agent 体验做得非常直接。工具本身是开源的、轻量的、本地运行的，但它背后的商业路径明显属于 OpenAI 生态。你可以把它理解成“开放工具壳 + 强势商业模型层”的代表。

如果你的团队已经有 ChatGPT 订阅，或者本来就偏向 OpenAI 的模型路线，Codex CLI 很容易成为一条低阻力接入路径。它不是最便宜的选择，但通常是最顺手的选择之一。

#### Zed

Zed 最初被很多人理解成“高性能编辑器”，而不是“coding agent 产品”。也正因为如此，它现在的转变更值得看。开源编辑器内核、Agent Panel、工具权限、外部代理、MCP，这些元素叠起来之后，Zed 已经不只是编辑器了。

它很适合那些不想把整个开发体验都交给闭源 AI 编辑器的人。免费用户可以专心把它当成编辑器来用，也可以自带 key、接外部 agent；Pro 用户则直接获得托管模型能力和 token 计费。

#### OpenHands

OpenHands 是这个列表里最像“开放平台”的项目之一。它不是简单地想做一个编辑器助手，而是试图提供一套从本地到云端、从个人到企业、从 GUI 到 CLI 再到 API 的完整 coding agent 运行层。

这件事的战略意义很大。对很多团队来说，真正需要的不是一个会聊天的插件，而是一套可部署、可扩展、可纳管的代理执行系统。从这个角度看，OpenHands 的价值远大于“它能不能补一段代码”。

#### Cline

Cline 最大的历史地位在于，它让很多开发者第一次明确感受到: AI 不该只会回答问题，它应该动手。读文件、改代码、跑命令、打开浏览器、调用 MCP，这些后来变成行业标配的动作，很多人都是从 Cline 这里建立预期的。

它的优势也很清楚: 可见、可控、可审查。Cline 会展示过程，会统计成本，会把批准权交回给你。这一点非常重要，因为真正的高频工作流，不是“最自动”，而是“自动得足够多，同时又不让你害怕”。

#### Aider

Aider 是典型的“行家会长期留在手边”的工具。它没有那么多包装，没有特别重的产品秀肌肉姿态，但在终端里做真实代码工作这件事上，它依然非常锋利。代码库映射、Git 集成、模型兼容性、CLI 工作流，全部都打磨得很像给真正写代码的人准备的。

如果你喜欢直接、透明、少废话的体验，Aider 仍然是最值得长期观察的终端代理之一。

#### Goose

Goose 值得被更多人认真看待，因为它不是狭义的“写代码工具”。官方仓库明确把它描述为一个本地运行的开源 AI agent，覆盖 desktop app、CLI 和 API，而且强调自己“不只是 for code”。

这点很关键。如果一个团队想要的是统一的开放代理层，而不是很多割裂的小助手，Goose 的价值会比表面更大。它还能通过 ACP 复用已有的 Claude、ChatGPT、Gemini 订阅，这一点很务实。

#### Continue

Continue 已经不是“那个开源编辑器助手”这么简单了。现在更准确的理解方式是: 它正在向“开源客户端 + 团队治理 + agent control plane”这个方向演进。对很多组织来说，这条路线的含金量很高。

因为一旦团队进入 agent 时代，真正的难点就不再只是“能不能调一个更强模型”，而是“能不能统一规则、共享能力、审计行为、把 agent 纳入工程治理”。Continue 在这方面有明显野心。

#### Roo Code

Roo Code 的产品表达非常讨巧: 不是一个助手，而是一整个 AI 开发团队。这个说法之所以成立，不只是因为营销，而是因为它确实把工作模式拆得更像真实团队角色，比如 Code、Architect、Ask、Debug 和自定义模式。

这种模式化体验的好处是，用户不需要每次都自己重新塑形 prompt。对于很多团队来说，这比“无限自由”更容易落地。

#### Crush

Crush 是“终端体验也可以是产品壁垒”的典型案例。Charm 一贯擅长把命令行软件做得非常顺手，而 Crush 把这种设计能力带进了 coding agent 领域。LSP、MCP、多模型接入、跨平台终端支持，底层能力并不轻。

它的计费姿态也有一点微妙优势。虽然本质上仍然是 provider-driven，但官方 README 没有假装“免费就等于没有成本”，反而直接列出了适合配合 Crush 使用的订阅方案。这种诚实，反而让它更像一个成熟工具。

## 闭源阵营

这些产品定义了商业化 coding agent 市场的主流形态。

| 工具 | 产品类型 | 主要界面 | 为什么值得看 | 定价快照 | 最适合 |
| --- | --- | --- | --- | --- | --- |
| [GitHub Copilot](https://github.com/features/copilot) | 平台原生 coding agent | GitHub、VS Code、CLI、移动端、IDE 扩展 | 最大的优势不是模型，而是它直接长在 GitHub 工作流里 | Free；Pro $10/月；Pro+ $39/月；Business $19/用户/月；Enterprise $39/用户/月；额外 premium request 为 $0.04/次 | 已经深度绑定 GitHub 的团队和组织 |
| [Cursor](https://cursor.com/en-US/pricing) | AI-first 编辑器 | 桌面编辑器 | 最具代表性的 AI 原生编辑器之一，agent 体验成熟 | Hobby 免费；Pro $20/月；Ultra $200/月；Teams $40/用户/月；Enterprise 定制 | 个人高频开发者、小团队、追求顺滑体验的重度用户 |
| [Windsurf](https://windsurf.com/pricing?referrer=windsurf) | AI 原生编辑器 | 桌面编辑器 | Cascade 很有“代理感”，而且 credit 逻辑比很多产品更透明 | Free 含 25 credits；Pro $15/月含 500 credits；Teams $30/用户/月；Enterprise 定制；附加额度按 $10/250 或 $40/1000 | 想要强 agent 编辑器，同时希望成本机制更清楚的用户 |
| [Claude Code](https://claude.com/product/claude-code) | Anthropic 生态中的高端 coding agent | Terminal、IDE、Web | 以模型质量和复杂任务能力见长，明显偏高端路线 | Pro 月付 $20 或年付折算 $17；Max 从 $100/月起；提供 Team 方案；API 路径按量计费 | 已经深度依赖 Claude，且愿意为质量付费的个人与团队 |
| [Devin](https://docs.devin.ai/zh/admin/billing) | 异步代理工程师 | 云端 | 最典型的“把任务交出去，过一会儿回来验收”的产品 | Core 按 ACU 计费，$2.25/ACU；Teams $500/月含 250 ACU；Enterprise 定制 | 想把明确工单直接委托给代理去做的团队 |
| [Replit Agent](https://replit.com/products/agent) | 从想法到上线的应用代理 | 云端工作区 | 在“直接把产品做出来”这件事上极具代表性，不只是改 repo | Starter 免费日额度；Core 年付 $20/月含 $25 credits；Pro 年付 $95/月含 $100 credits；Enterprise 定制；Agent 还采用 effort-based pricing | 创始人、产品经理、独立开发者，以及想快速出全栈应用的团队 |
| [Qoder](https://qoder.com/ide) | Agentic IDE | 桌面 IDE、JetBrains 插件、CLI | 一个很值得观察的 agentic IDE，核心卖点是 Quest Mode 与 Repo Wiki，而不只是补全 | Free；Pro 当前促销 $10/月（原价 $20）含 2,000 credits；Pro+ 当前促销 $30/月（原价 $60）含 6,000 credits；Ultra 当前促销 $100/月（原价 $200）含 20,000 credits；附加 credit 当前 $0.01/个 | 想要更强长任务代理能力，但又不想一步跳到 Devin 那种委托式产品的人 |
| [Kiro](https://kiro.dev/pricing/) | Agentic IDE + CLI | IDE、CLI、ACP 兼容界面 | 很鲜明的“结构化开发”路线，spec、agent hook、credit 体系都比较完整 | Free 50 credits；Pro $20/月含 1,000；Pro+ $40/月含 2,000；Power $200/月含 10,000；超额为 $0.04/credit；新用户有 500 bonus credits | 希望更强调计划、规范和可审计自动化的团队 |
| [TRAE](https://www.trae.ai/) | AI IDE | 桌面 IDE、Web、相关 agent 组件 | 变化速度很快、agent 色彩很强，在亚洲市场尤其值得跟踪 | 当前公开 pricing 页面更像 FAQ；官方 2026-02-13 博文写明已切换为 token-based pricing，四档会员从 $3/月到 $100/月，并提供 7 天 Pro 试用 | 想跟踪一线高速迭代 AI IDE 产品的人 |

### 闭源阵营，逐个看

#### GitHub Copilot

Copilot 现在早就不只是补全工具了。GitHub 这一轮真正想做的，是把它变成一个完整的 agent 平台: 编辑器里的 agent mode、云端 coding agent、代码审查、MCP、从 issue 到 PR 的异步执行，全都开始串起来了。

它最强的地方不是“它会写代码”，而是“它写代码这件事正好发生在你本来就已经在用的系统里”。计划、review、分支保护、CI、PR 流程，这些不需要迁移，这才是它最大的护城河。如果你问的是 `copilot cli`，这里默认把它视为 GitHub Copilot 的 CLI 产品面，而不是一套完全独立的产品。

#### Cursor

Cursor 之所以站稳，不是因为它最早，而是因为它最像一个真正重新围绕 AI 设计过的编辑器。很多产品是“把 AI 加进编辑器”，Cursor 更像“先假设 AI 是核心，再决定编辑器该怎么长”。

对个人高频开发者来说，这种差别非常真实。长上下文、agent、background agents、bug bot、交互流畅度，这些东西叠起来之后，Cursor 不是一个功能表，而是一种生产习惯。

#### Windsurf

Windsurf 值得看的地方，在于它把“agentic editor”这件事说得很清楚，也做得比较完整。官方文档里对 Cascade 的描述就是一个带 Code/Chat 模式、工具调用、检查点、实时理解和 linter 集成的代理式助手，这种定位比“AI coding assistant”更接近真实体验。

它的另一个优点是计费相对透明。Windsurf 对 prompt credits 的说明很明确，很多人会低估这一点的价值。成本能被理解，本身就是产品竞争力。

#### Claude Code

Claude Code 很明显走的是高端路线。Anthropic 没把它包装成一个廉价的单点工具，而是把它放进整个 Claude 订阅体系中来卖。你买的不只是终端代理，而是一套以 Claude 为中心的工作方式。

这条路线的优点是模型质量和复杂任务表现往往足够强，尤其适合已经把 Claude 用于分析、规划、研究和写作的人。缺点也很直接: 价格不便宜，尤其是 Max 和团队高级席位。

#### Devin

Devin 的意义很大程度上在于它把“异步代理工程师”这件事讲透了。即使你不用 Devin，你也会用 Devin 的方式去理解这个赛道: 能不能直接把一个真实任务分配给代理，让它自己去做，再交一个结果回来。

它的定价也正好说明了定位。Devin 不是来做廉价副驾驶的，它卖的是可委托的软件劳动。ACU 本质上就是代理计算预算。如果你的需求是明确工单的异步执行，这个模型说得通。如果你只是想在编辑器里加速写代码，那通常就太重了。

#### Replit Agent

Replit Agent 的路线和很多 repo-first 工具不一样。它更像是在卖“从想法到上线”的一体化生成能力，而不是单点的代码修改能力。你提需求，它规划、构建、测试、部署，最好还能直接给你一个能访问的结果。

这让它对创始人、产品团队和独立开发者尤其有吸引力。因为这些人最关心的往往不是代码 diff 本身，而是能不能在今天把一个东西做出来、跑起来、给别人看。

#### Qoder

Qoder 值得看的地方，是它没有把自己包装成一个泛泛的“AI IDE”，而是把 Quest Mode 和 Repo Wiki 这种更偏代理化、仓库理解化的功能摆在核心位置。这说明它想竞争的不是普通补全，而是更高层级的软件工程代理体验。

它的价格结构也比很多后来者清楚。Credits 是正面写出来的，计划差异写得明白，用完 premium 额度之后会发生什么也写得比较直白。这种透明度本身就是竞争力。

#### Kiro

Kiro 现在已经是一个非常标准、非常明确的 credit 型产品了。官方 pricing 页把 Free、Pro、Pro+、Power、每档 credits、超额价格都写得很实在。这让它在预算层面比很多“看起来无限，实际上会限”的产品更容易管理。

更关键的是，它的工作流哲学很强。Kiro 明显在推动更结构化的开发方式，比如 spec task、agent hook、分层执行。对很多团队来说，这比“更会聊天”更重要。

#### TRAE

TRAE 仍然是这个赛道里变化最快的产品之一，而这既是优势，也是风险。它的产品动作非常快，功能词汇也更新得很快，导致公开 pricing 页面目前更像一个 FAQ 入口，而不是传统意义上的清晰价格表。

不过官方博客已经讲得很明确: 从 2026 年 2 月 24 日起，TRAE 已经转向 token-based pricing，并提供从 $3/月到 $100/月的四档会员，还有 7 天 Pro 试用。换句话说，这是个很有野心、但也仍然在高速演进中的产品。

## 真正该关注的，不是价格本身，而是计费逻辑

最贵的 coding agent，通常不是月费最高的那个，而是你在团队已经依赖它之后，才看懂它怎么收费的那个。

### 1. BYOK 看起来最便宜，但很容易把 API 账单拉爆

很多开源工具本身免费，这没有问题。问题在于，只要团队开始高频使用前沿模型，“免费工具”就会迅速变成“高额模型支出入口”。

### 2. Seat 计费适合预算管理，不适合自我安慰

Seat-based 的方案对采购和财务都友好，但很多产品已经不再是“交了月费就无限用”。Premium requests、credits、fair use、附加用量，这些都可能藏在后面。

### 3. Credit 模型不一定差，前提是它足够诚实

Windsurf、Devin、Replit、GitHub 这种更显式的用量模型，未必更糟。有时候反而更好，因为它把真实成本暴露了出来。

### 4. 平台原生是巨大护城河

Copilot 的优势不只在模型，而在 GitHub 原生工作流。Replit Agent 的优势不只在生成能力，而在构建和部署同处一地。工作流重力，本身就是护城河。

### 5. 开源价值仍然非常硬

开源 coding agent 的意义至少有三层：

- 可以灵活切换模型供应商，不被单一平台锁死
- 可以把产品 UI、执行层和工作流拆开来重构
- 更适合做企业内部的 agent 基建和深度定制

## 该怎么选

### 如果你是个人开发者

- 想要最成熟的高端 AI 原生编辑器，选 `Cursor`
- 想要开源编辑器内核 + 真正可用的 agent 能力，选 `Zed`
- 想在编辑器里保留更多控制权和 provider 自由，选 `Cline` 或 `Roo Code`
- 本来就习惯终端工作流，选 `Aider`、`Gemini CLI`、`Codex CLI` 或 `OpenCode`

### 如果你带一个小型工程团队

- 已经深度使用 GitHub，优先看 `GitHub Copilot`
- 想要更强治理能力和开源杠杆，优先看 `Continue`
- 想要更明确的 credit 机制和 agent 编辑器体验，优先看 `Windsurf`
- 想要更结构化、更显式的 agent 计费与任务流程，也可以优先看 `Kiro` 或 `Qoder`

### 如果你的目标是委托完整任务

- 想直接把工单交给代理，优先看 `Devin`
- 想要开放平台和部署自由度，优先看 `OpenHands`
- 想让工作留在 GitHub 的 issue 和 PR 闭环里，优先看 `GitHub Copilot`

### 如果你的目标是尽快做出并上线应用

- 优先看 `Replit Agent`
- 想要更开放、更可定制的执行层，也可以看 `OpenHands`

## 收录标准

这份列表不是随便堆产品，工具被收录通常至少满足以下几点中的多个：

- 具备真正的 coding agent 行为，不只是补全
- 有足够的社区势能或市场存在感
- 产品面足够厚，不是薄封装
- 当前价格足够公开，具备研究价值
- 对真实团队工作流变化有战略相关性

## 官方来源

### 开源

- Gemini CLI: [GitHub repo](https://github.com/google-gemini/gemini-cli)
- OpenCode: [GitHub repo](https://github.com/anomalyco/opencode)
- Zed: [GitHub repo](https://github.com/zed-industries/zed), [Pricing](https://zed.dev/pricing), [AI 计划与用量说明](https://zed.dev/docs/ai/plans-and-usage)
- Codex CLI: [GitHub repo](https://github.com/openai/codex), [OpenAI 定价](https://openai.com/pricing/), [Codex 帮助文档](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- OpenHands: [GitHub repo](https://github.com/OpenHands/OpenHands), [Pricing](https://openhands.dev/pricing)
- Cline: [GitHub repo](https://github.com/cline/cline)
- Aider: [GitHub repo](https://github.com/Aider-AI/aider)
- Goose: [GitHub repo](https://github.com/aaif-goose/goose)
- Continue: [GitHub repo](https://github.com/continuedev/continue), [Pricing](https://www.continue.dev/pricing)
- Roo Code: [GitHub repo](https://github.com/RooCodeInc/Roo-Code)
- Crush: [GitHub repo](https://github.com/charmbracelet/crush)

### 闭源

- GitHub Copilot: [产品页](https://github.com/features/copilot), [Plans](https://docs.github.com/en/copilot/get-started/plans), [Pricing](https://github.com/features/copilot/plans)
- Cursor: [Pricing](https://cursor.com/en-US/pricing), [Docs](https://cursor.com/docs)
- Windsurf: [Pricing](https://windsurf.com/pricing?referrer=windsurf), [套餐与额度说明](https://docs.windsurf.com/zh/windsurf/accounts/usage), [Cascade 文档](https://docs.windsurf.com/windsurf/cascade)
- Claude Code: [Claude Code](https://claude.com/product/claude-code), [Pricing](https://claude.com/pricing)
- Devin: [Billing docs](https://docs.devin.ai/zh/admin/billing)
- Replit Agent: [产品页](https://replit.com/products/agent), [Pricing](https://replit.com/pricing), [Plan Mode 文档](https://docs.replit.com/core-concepts/agent/plan-mode)
- Qoder: [Qoder IDE](https://qoder.com/ide), [Pricing](https://docs.qoder.com/account/pricing), [价格调整说明](https://docs.qoder.com/events/pricing-adjustment-notice)
- Kiro: [Pricing](https://kiro.dev/pricing/), [Billing docs](https://kiro.dev/docs/billing/)
- TRAE: [产品页](https://www.trae.ai/), [Pricing](https://www.trae.ai/pricing), [会员定价更新博客](https://www.trae.ai/blog/trae_membership_0213), [官方 GitHub](https://github.com/Trae-AI/Trae)

## Contributing

欢迎贡献，但最有价值的贡献不是随便加产品，而是：

- 用官方链接更新价格和权益
- 增加真正配得上“coding agent”这四个字的工具
- 基于真实使用经验改进对比，而不是转述发布会文案
- 当产品定位、计费方式或能力边界变化时，及时修正

欢迎提交 Pull Request。
