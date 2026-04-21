export type Locale = 'en' | 'zh-CN';

export type SurfaceGroup = 'terminal' | 'editor' | 'platform' | 'cloud';
export type PricingModel = 'BYOK' | 'Seat' | 'Credit' | 'Usage' | 'Hybrid';

export type Tool = {
	name: string;
	href: string;
	brandUrl: string;
	brandColor: string;
	stars?: string;
	category: 'open' | 'closed';
	surfaceGroup: SurfaceGroup;
	pricingModel: PricingModel;
	convenienceScore: number;
	delegationScore: number;
	type: Record<Locale, string>;
	highlight: Record<Locale, string>;
	pricing: Record<Locale, string>;
	bestFor: Record<Locale, string>;
};

export function getFaviconUrl(brandUrl: string) {
	return `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(brandUrl)}`;
}

export function surfaceLabel(surface: SurfaceGroup, locale: Locale) {
	const labels = {
		en: {
			terminal: 'Terminal',
			editor: 'Editor',
			platform: 'Platform',
			cloud: 'Cloud',
		},
		'zh-CN': {
			terminal: '终端',
			editor: '编辑器',
			platform: '平台',
			cloud: '云端',
		},
	};

	return labels[locale][surface];
}

export function pricingLabel(model: PricingModel, locale: Locale) {
	const labels = {
		en: {
			BYOK: 'BYOK',
			Seat: 'Seat',
			Credit: 'Credit',
			Usage: 'Usage',
			Hybrid: 'Hybrid',
		},
		'zh-CN': {
			BYOK: 'BYOK',
			Seat: 'Seat',
			Credit: 'Credit',
			Usage: '按量',
			Hybrid: '混合',
		},
	};

	return labels[locale][model];
}

export const tools: Tool[] = [
	{
		name: 'OpenCode',
		href: 'https://github.com/anomalyco/opencode',
		brandUrl: 'https://opencode.ai',
		brandColor: '#6d5efc',
		stars: '147k',
		category: 'open',
		surfaceGroup: 'terminal',
		pricingModel: 'BYOK',
		convenienceScore: 34,
		delegationScore: 56,
		type: {
			en: 'Terminal agent',
			'zh-CN': '终端代理',
		},
		highlight: {
			en: 'The most explosive open-source coding-agent repo right now, with built-in planning and subagents.',
			'zh-CN': '当前最强势的开源 coding agent 之一，内置规划与子代理能力。',
		},
		pricing: {
			en: 'BYOK by default; optional hosted path via OpenCode Zen.',
			'zh-CN': '默认 BYOK，也可走 OpenCode Zen 托管路径。',
		},
		bestFor: {
			en: 'Terminal-first developers who want openness without losing ambition.',
			'zh-CN': '想要开放性，同时又不想牺牲 agent 上限的终端开发者。',
		},
	},
	{
		name: 'Gemini CLI',
		href: 'https://github.com/google-gemini/gemini-cli',
		brandUrl: 'https://gemini.google.com',
		brandColor: '#2b7fff',
		stars: '102k',
		category: 'open',
		surfaceGroup: 'terminal',
		pricingModel: 'Hybrid',
		convenienceScore: 46,
		delegationScore: 50,
		type: {
			en: 'Terminal agent',
			'zh-CN': '终端代理',
		},
		highlight: {
			en: 'Huge adoption and one of the easiest open-source agents to start using seriously.',
			'zh-CN': '增长极快，而且是最容易真正投入日常使用的开源代理之一。',
		},
		pricing: {
			en: 'Free personal quota plus Gemini API / Google Cloud for heavier use.',
			'zh-CN': '有个人免费额度，重度使用可接 Gemini API / Google Cloud。',
		},
		bestFor: {
			en: 'Developers who want serious capability without day-one seat costs.',
			'zh-CN': '想要较强能力，但不想一开始就背 seat 成本的人。',
		},
	},
	{
		name: 'Zed',
		href: 'https://zed.dev/pricing',
		brandUrl: 'https://zed.dev',
		brandColor: '#1243ff',
		stars: '79.5k',
		category: 'open',
		surfaceGroup: 'editor',
		pricingModel: 'Hybrid',
		convenienceScore: 60,
		delegationScore: 44,
		type: {
			en: 'Open editor with agents',
			'zh-CN': '带代理能力的开源编辑器',
		},
		highlight: {
			en: 'An open editor that now deserves real attention in the agent conversation.',
			'zh-CN': '一个已经真正进入 agent 竞争区间的开源编辑器。',
		},
		pricing: {
			en: 'Free editor; Pro adds hosted AI with token-based billing.',
			'zh-CN': '编辑器免费；Pro 提供托管 AI 与 token 计费。',
		},
		bestFor: {
			en: 'People who want an editor platform, not just an extension.',
			'zh-CN': '想要“开放编辑器平台”而不只是“开源插件”的用户。',
		},
	},
	{
		name: 'Codex CLI',
		href: 'https://github.com/openai/codex',
		brandUrl: 'https://openai.com',
		brandColor: '#0f172a',
		stars: '76.7k',
		category: 'open',
		surfaceGroup: 'terminal',
		pricingModel: 'Hybrid',
		convenienceScore: 52,
		delegationScore: 55,
		type: {
			en: 'Terminal agent',
			'zh-CN': '终端代理',
		},
		highlight: {
			en: 'OpenAI’s clean local coding-agent surface for users already inside its model ecosystem.',
			'zh-CN': 'OpenAI 面向本地工作流的终端 coding agent 界面。',
		},
		pricing: {
			en: 'Available through ChatGPT plans or separate API usage.',
			'zh-CN': '可通过 ChatGPT 订阅或 API 独立使用。',
		},
		bestFor: {
			en: 'Developers already committed to the OpenAI stack.',
			'zh-CN': '已经深度使用 OpenAI 栈的开发者。',
		},
	},
	{
		name: 'OpenHands',
		href: 'https://github.com/OpenHands/OpenHands',
		brandUrl: 'https://openhands.dev',
		brandColor: '#7b61ff',
		stars: '71.6k',
		category: 'open',
		surfaceGroup: 'platform',
		pricingModel: 'Hybrid',
		convenienceScore: 40,
		delegationScore: 76,
		type: {
			en: 'Open agent platform',
			'zh-CN': '开放代理平台',
		},
		highlight: {
			en: 'One of the strongest open platform plays across local, hosted, and enterprise deployment.',
			'zh-CN': '少数同时覆盖本地、托管与企业部署的开放平台路线。',
		},
		pricing: {
			en: 'Local open-source usage is free; cloud and enterprise vary by deployment path.',
			'zh-CN': '本地开源使用免费；云端与企业路径按部署方式计费。',
		},
		bestFor: {
			en: 'Teams that want customization, APIs, and control-plane potential.',
			'zh-CN': '需要定制化、API 能力和控制平面的团队。',
		},
	},
	{
		name: 'Cline',
		href: 'https://github.com/cline/cline',
		brandUrl: 'https://cline.bot',
		brandColor: '#0f766e',
		stars: '60.5k',
		category: 'open',
		surfaceGroup: 'editor',
		pricingModel: 'BYOK',
		convenienceScore: 56,
		delegationScore: 42,
		type: {
			en: 'VS Code agent',
			'zh-CN': 'VS Code 代理',
		},
		highlight: {
			en: 'One of the products that taught the market what a tool-using coding agent should feel like.',
			'zh-CN': '很多人正是通过它理解了“会动手的代理”该是什么体验。',
		},
		pricing: {
			en: 'No mandatory subscription; you pay the model provider you connect.',
			'zh-CN': '没有强制订阅，成本主要来自接入的模型供应商。',
		},
		bestFor: {
			en: 'Developers who want visibility and tight human approval loops.',
			'zh-CN': '重视过程透明和人工审批闭环的开发者。',
		},
	},
	{
		name: 'Aider',
		href: 'https://github.com/Aider-AI/aider',
		brandUrl: 'https://aider.chat',
		brandColor: '#ea580c',
		stars: '43.7k',
		category: 'open',
		surfaceGroup: 'terminal',
		pricingModel: 'BYOK',
		convenienceScore: 30,
		delegationScore: 35,
		type: {
			en: 'Terminal coding assistant',
			'zh-CN': '终端编码助手',
		},
		highlight: {
			en: 'Still one of the sharpest Git-aware terminal workflows for real repo work.',
			'zh-CN': '依然是最锋利的 Git 感知型终端工作流之一。',
		},
		pricing: {
			en: 'No platform fee; bring your own cloud or local model.',
			'zh-CN': '无平台订阅费，自带云模型或本地模型即可。',
		},
		bestFor: {
			en: 'Experienced engineers who prefer minimalism over product theatrics.',
			'zh-CN': '偏爱极简高效、而非产品秀肌肉的资深工程师。',
		},
	},
	{
		name: 'Goose',
		href: 'https://github.com/aaif-goose/goose',
		brandUrl: 'https://block.github.io/goose/',
		brandColor: '#22c55e',
		stars: '42.9k',
		category: 'open',
		surfaceGroup: 'platform',
		pricingModel: 'Hybrid',
		convenienceScore: 48,
		delegationScore: 58,
		type: {
			en: 'Desktop + CLI agent',
			'zh-CN': '桌面 + CLI 代理',
		},
		highlight: {
			en: 'A broad open agent surface that goes beyond code into automation and research.',
			'zh-CN': '不是纯写代码工具，而是一个更广义的开放代理面。',
		},
		pricing: {
			en: 'Use API keys or reuse existing Claude, ChatGPT, or Gemini subscriptions.',
			'zh-CN': '可用 API key，也可复用已有 Claude、ChatGPT、Gemini 订阅。',
		},
		bestFor: {
			en: 'Teams that want one open agent layer for mixed workflows.',
			'zh-CN': '想用一个开放代理层覆盖混合工作流的团队。',
		},
	},
	{
		name: 'Continue',
		href: 'https://github.com/continuedev/continue',
		brandUrl: 'https://continue.dev',
		brandColor: '#7c3aed',
		stars: '32.7k',
		category: 'open',
		surfaceGroup: 'platform',
		pricingModel: 'Hybrid',
		convenienceScore: 52,
		delegationScore: 50,
		type: {
			en: 'Open agent stack',
			'zh-CN': '开放代理栈',
		},
		highlight: {
			en: 'Bridges open-source tooling with governance, checks, and team control.',
			'zh-CN': '把开源工具路线和治理、检查、团队控制结合起来。',
		},
		pricing: {
			en: 'Usage-based starter, then seat-based team plans.',
			'zh-CN': 'Starter 按量计费，团队版转为 seat 方案。',
		},
		bestFor: {
			en: 'Organizations that care about policy and internal agent infrastructure.',
			'zh-CN': '关注策略、治理和内部代理基建的组织。',
		},
	},
	{
		name: 'Roo Code',
		href: 'https://github.com/RooCodeInc/Roo-Code',
		brandUrl: 'https://roocode.com',
		brandColor: '#0ea5e9',
		stars: '23.3k',
		category: 'open',
		surfaceGroup: 'editor',
		pricingModel: 'BYOK',
		convenienceScore: 58,
		delegationScore: 46,
		type: {
			en: 'Role-based VS Code agent',
			'zh-CN': '角色化 VS Code 代理',
		},
		highlight: {
			en: 'A memorable multi-mode editor workflow that feels like a small AI dev team.',
			'zh-CN': '多模式体验很强，像把一个小型 AI 开发团队塞进编辑器。',
		},
		pricing: {
			en: 'Provider-driven; no required subscription to the tool itself.',
			'zh-CN': '主要按接入的 provider 计费，工具本身无强制订阅。',
		},
		bestFor: {
			en: 'VS Code users who want structured agent modes.',
			'zh-CN': '想在 VS Code 中使用更结构化代理模式的用户。',
		},
	},
	{
		name: 'Crush',
		href: 'https://github.com/charmbracelet/crush',
		brandUrl: 'https://charm.sh',
		brandColor: '#111827',
		stars: '23.3k',
		category: 'open',
		surfaceGroup: 'terminal',
		pricingModel: 'BYOK',
		convenienceScore: 36,
		delegationScore: 41,
		type: {
			en: 'TUI terminal agent',
			'zh-CN': 'TUI 终端代理',
		},
		highlight: {
			en: 'Charm brings strong terminal product taste to the coding-agent category.',
			'zh-CN': 'Charm 把非常成熟的终端产品品味带进了 coding agent 赛道。',
		},
		pricing: {
			en: 'BYOK, with the README also highlighting compatible subscription-style plans.',
			'zh-CN': '默认 BYOK，README 也给出了适配的订阅型 provider 方案。',
		},
		bestFor: {
			en: 'Terminal users who care about interaction design as much as raw capability.',
			'zh-CN': '既在乎终端交互质感，也在乎能力上限的用户。',
		},
	},
	{
		name: 'GitHub Copilot',
		href: 'https://github.com/features/copilot',
		brandUrl: 'https://github.com/features/copilot',
		brandColor: '#171515',
		category: 'closed',
		surfaceGroup: 'platform',
		pricingModel: 'Hybrid',
		convenienceScore: 78,
		delegationScore: 60,
		type: {
			en: 'Platform-native coding agent',
			'zh-CN': '平台原生 coding agent',
		},
		highlight: {
			en: 'The strongest native GitHub workflow agent, including the CLI surface.',
			'zh-CN': '最强的 GitHub 原生工作流代理，也覆盖 CLI 产品面。',
		},
		pricing: {
			en: 'Free, Pro, Pro+, Business, and Enterprise with premium request metering.',
			'zh-CN': '提供 Free、Pro、Pro+、Business、Enterprise，并带 premium request 计量。',
		},
		bestFor: {
			en: 'Teams that want agents to live inside their software delivery system.',
			'zh-CN': '希望让代理直接活在软件交付系统里的团队。',
		},
	},
	{
		name: 'Cursor',
		href: 'https://cursor.com/en-US/pricing',
		brandUrl: 'https://cursor.com',
		brandColor: '#111111',
		category: 'closed',
		surfaceGroup: 'editor',
		pricingModel: 'Seat',
		convenienceScore: 72,
		delegationScore: 52,
		type: {
			en: 'AI-first editor',
			'zh-CN': 'AI 原生编辑器',
		},
		highlight: {
			en: 'Still the most recognizable premium AI-native editor for heavy individual use.',
			'zh-CN': '依然是最有代表性的高端 AI 原生编辑器之一。',
		},
		pricing: {
			en: 'Free, Pro, Ultra, Teams, and Enterprise tiers.',
			'zh-CN': '提供 Free、Pro、Ultra、Teams、Enterprise 多档。',
		},
		bestFor: {
			en: 'Power users who want a polished editor built around AI from the ground up.',
			'zh-CN': '想要“从一开始就围绕 AI 构建”的顺滑编辑器体验的重度用户。',
		},
	},
	{
		name: 'Windsurf',
		href: 'https://windsurf.com/pricing?referrer=windsurf',
		brandUrl: 'https://windsurf.com',
		brandColor: '#4f46e5',
		category: 'closed',
		surfaceGroup: 'editor',
		pricingModel: 'Credit',
		convenienceScore: 74,
		delegationScore: 54,
		type: {
			en: 'Agentic editor',
			'zh-CN': '代理式编辑器',
		},
		highlight: {
			en: 'Cascade remains one of the clearest editor experiences built around agent behavior.',
			'zh-CN': 'Cascade 仍然是最有“代理感”的编辑器体验之一。',
		},
		pricing: {
			en: 'Seat-based plans plus visible credit accounting.',
			'zh-CN': 'seat 定价叠加明确的 credits 机制。',
		},
		bestFor: {
			en: 'Teams that want explicit cost controls inside an editor workflow.',
			'zh-CN': '想在编辑器工作流中获得更清晰成本控制的团队。',
		},
	},
	{
		name: 'Claude Code',
		href: 'https://claude.com/product/claude-code',
		brandUrl: 'https://claude.com',
		brandColor: '#9a3412',
		category: 'closed',
		surfaceGroup: 'terminal',
		pricingModel: 'Hybrid',
		convenienceScore: 58,
		delegationScore: 64,
		type: {
			en: 'Premium coding specialist',
			'zh-CN': '高端 coding specialist',
		},
		highlight: {
			en: 'A premium terminal and IDE coding experience for people already living in Claude workflows.',
			'zh-CN': '对于已经深度使用 Claude 的用户，它是非常强的终端 / IDE 编码体验。',
		},
		pricing: {
			en: 'Claude subscription tiers plus API usage, with a premium posture.',
			'zh-CN': '依托 Claude 订阅体系与 API，用明显的高端路线定价。',
		},
		bestFor: {
			en: 'Users willing to pay for model quality and reasoning depth.',
			'zh-CN': '愿意为模型质量和推理深度付费的人。',
		},
	},
	{
		name: 'Devin',
		href: 'https://docs.devin.ai/zh/admin/billing',
		brandUrl: 'https://devin.ai',
		brandColor: '#7c2d12',
		category: 'closed',
		surfaceGroup: 'cloud',
		pricingModel: 'Usage',
		convenienceScore: 66,
		delegationScore: 92,
		type: {
			en: 'Async software engineer',
			'zh-CN': '异步代理工程师',
		},
		highlight: {
			en: 'The clearest “delegate the task and come back later” product in the market.',
			'zh-CN': '市场上最典型的“把任务交出去，过后回来验收”产品。',
		},
		pricing: {
			en: 'Usage metered by ACUs, with team and enterprise layers.',
			'zh-CN': '按 ACU 计量，并提供团队与企业层级。',
		},
		bestFor: {
			en: 'Teams that want ticket-level delegation rather than just in-editor acceleration.',
			'zh-CN': '想要工单级委托，而不仅仅是编辑器加速的团队。',
		},
	},
	{
		name: 'Replit Agent',
		href: 'https://replit.com/products/agent',
		brandUrl: 'https://replit.com',
		brandColor: '#f97316',
		category: 'closed',
		surfaceGroup: 'cloud',
		pricingModel: 'Credit',
		convenienceScore: 84,
		delegationScore: 74,
		type: {
			en: 'Idea-to-app agent',
			'zh-CN': '从想法到应用的代理',
		},
		highlight: {
			en: 'The best-known product for compressing idea, build, and deploy into one flow.',
			'zh-CN': '最有代表性的“从想法直接到构建与部署”一体化产品。',
		},
		pricing: {
			en: 'Subscription tiers plus effort-based agent usage.',
			'zh-CN': '订阅层级叠加 effort-based 的 agent 使用计费。',
		},
		bestFor: {
			en: 'Founders and builders who care more about shipping apps than managing repos.',
			'zh-CN': '更在意把应用做出来，而不是管理 repo 细节的创始人和构建者。',
		},
	},
	{
		name: 'Qoder',
		href: 'https://qoder.com/ide',
		brandUrl: 'https://qoder.com',
		brandColor: '#7c3aed',
		category: 'closed',
		surfaceGroup: 'editor',
		pricingModel: 'Credit',
		convenienceScore: 70,
		delegationScore: 66,
		type: {
			en: 'Agentic IDE',
			'zh-CN': 'Agentic IDE',
		},
		highlight: {
			en: 'Quest Mode and Repo Wiki make it feel more like an autonomous IDE than a fancy autocomplete layer.',
			'zh-CN': 'Quest Mode 与 Repo Wiki 让它更像自治 IDE，而不是补全外壳。',
		},
		pricing: {
			en: 'Credit-heavy tiering with add-on purchases.',
			'zh-CN': '以 credits 为中心的层级定价，支持附加购买。',
		},
		bestFor: {
			en: 'Users who want stronger autonomous task flows with visible metering.',
			'zh-CN': '希望获得更强自治任务流、同时又想看清计费的人。',
		},
	},
	{
		name: 'Kiro',
		href: 'https://kiro.dev/pricing/',
		brandUrl: 'https://kiro.dev',
		brandColor: '#0f766e',
		category: 'closed',
		surfaceGroup: 'editor',
		pricingModel: 'Credit',
		convenienceScore: 68,
		delegationScore: 62,
		type: {
			en: 'Structured agent IDE',
			'zh-CN': '结构化代理 IDE',
		},
		highlight: {
			en: 'One of the clearest products for spec-driven, structured agent workflows.',
			'zh-CN': '最强调 spec 驱动和结构化代理工作流的产品之一。',
		},
		pricing: {
			en: 'Explicit credit tiers and explicit overage pricing.',
			'zh-CN': 'credits 分档和超额价格都写得很清楚。',
		},
		bestFor: {
			en: 'Teams that prefer visible planning, hooks, and auditable automation.',
			'zh-CN': '偏好可见规划、hook 与可审计自动化的团队。',
		},
	},
	{
		name: 'TRAE',
		href: 'https://www.trae.ai/',
		brandUrl: 'https://www.trae.ai',
		brandColor: '#2563eb',
		category: 'closed',
		surfaceGroup: 'editor',
		pricingModel: 'Credit',
		convenienceScore: 72,
		delegationScore: 60,
		type: {
			en: 'Fast-moving AI IDE',
			'zh-CN': '高速迭代 AI IDE',
		},
		highlight: {
			en: 'A fast-moving product to watch, especially in the Asia market.',
			'zh-CN': '一个值得持续追踪的高速演进产品，尤其在亚洲市场。',
		},
		pricing: {
			en: 'Official pricing points to four token-based tiers and trial access.',
			'zh-CN': '官方 pricing 指向四档 token 计费与试用方案。',
		},
		bestFor: {
			en: 'People tracking the next wave of AI IDE competition.',
			'zh-CN': '想追踪下一波 AI IDE 竞争格局的人。',
		},
	},
];

export const featuredToolNames = ['OpenCode', 'Cursor', 'GitHub Copilot', 'Claude Code', 'Devin', 'Zed'];

export const copy = {
	en: {
		langLabel: 'English',
		otherLangLabel: '简体中文',
		otherLangHref: '/awesome_coding_agent/zh-cn',
		title: 'The Coding Agent Landscape',
		subtitle:
			'An opinionated field guide to the tools defining this era of software creation: terminal agents, AI-first editors, async software engineers, and open stacks that still let you keep control.',
		ctaPrimary: 'Read the Research README',
		ctaPrimaryHref:
			'https://github.com/chan-yuu/awesome_coding_agent/blob/master/README.md',
		ctaSecondary: 'Browse the Repo',
		ctaSecondaryHref: 'https://github.com/chan-yuu/awesome_coding_agent',
		metaTitle: 'Awesome Coding Agents',
		metaDescription:
			'A bilingual, research-backed guide to the open-source and proprietary coding agents that matter.',
		eyebrow: 'Open-source and proprietary tools, mapped clearly',
		snapshotTitle: 'Why This Page Exists',
		snapshotText:
			'The market is no longer deciding who autocompletes best. It is deciding who can read a repo, plan work, run tools, recover from failure, and keep costs sane after the honeymoon period.',
		highlights: [
			{
				title: '15 tracked products',
				text: 'A deliberate mix of open-source leaders and commercial products with real workflow gravity.',
			},
			{
				title: 'Pricing-aware',
				text: 'Seat, credit, BYOK, and usage models are treated as first-class product signals.',
			},
			{
				title: 'Bilingual by design',
				text: 'The site mirrors the repo’s English-first, Chinese-supported positioning.',
			},
		],
		modeTitle: 'Map the field',
		modeText:
			'The category is splitting into recognizable shapes: terminal agents, AI-first editors, async workers, open platforms, and pricing models that now act like product strategy.',
		modes: ['Terminal', 'Editor', 'Async', 'Platform', 'Pricing'],
		signalTitle: 'Signal Strip',
		signalCards: [
			{
				title: 'Open stack energy',
				text: 'Open-source products are driving distribution and experimentation faster than the old assistant era ever did.',
			},
			{
				title: 'Workflow gravity',
				text: 'The winners are not just better models. They sit closer to repos, pull requests, CI, deploy, and day-two team processes.',
			},
			{
				title: 'Billing is strategy',
				text: 'Seat, credit, BYOK, and async-compute pricing now decide far more than procurement. They shape how teams work.',
			},
		],
		brandWallTitle: 'Brand Wall',
		brandWallText:
			'The market already has recognizable visual identities. The winners are turning into brands, not just utilities.',
		editorialTitle: 'Field Notes',
		editorialText:
			'This market no longer looks like a plugin shelf. It looks like a media ecosystem: terminal-first insurgents, AI-native editors, platform incumbents, and async workers competing for how software actually gets made.',
		editorialQuote:
			'The products that win now are not merely “smarter.” They are better aligned with where software work actually happens.',
		editorialCards: [
			{
				name: 'OpenCode',
				kicker: 'Open-source pressure',
				text: 'OpenCode represents the new wave of open tools that no longer apologize for ambition.',
			},
			{
				name: 'Cursor',
				kicker: 'Editor-native power',
				text: 'Cursor still defines what a premium AI-first editor feels like when the UX is not an afterthought.',
			},
			{
				name: 'GitHub Copilot',
				kicker: 'Workflow gravity',
				text: 'Copilot matters because it sits close to repositories, reviews, CI, and merge decisions.',
			},
			{
				name: 'Devin',
				kicker: 'Delegated labor',
				text: 'Devin keeps the async-software-engineer category legible even for people who never use it.',
			},
		],
		matrixTitle: 'Comparison Matrix',
		matrixText:
			'A quick scan of where the most important tools sit by openness, interface, pricing behavior, and autonomy style.',
		mapTitle: 'Landscape Map',
		mapText:
			'The current field can be read across two tensions: control versus convenience, and assistance versus delegation.',
		atlasTitle: 'Pricing Atlas',
		atlasText:
			'Pricing is now part of product design. The business model often predicts how the tool wants you to work.',
		filterTitle: 'Interactive Filters',
		filterText:
			'Filter the landscape by openness, surface, or pricing model to see how the market reorganizes itself.',
		axisXLow: 'More control',
		axisXHigh: 'More convenience',
		axisYLow: 'Assistive',
		axisYHigh: 'Delegative',
		axisXLabel: 'Control vs convenience',
		axisYLabel: 'Assistance vs delegation',
		openTitle: 'Open-Source Leaders',
		openText:
			'These projects matter because they do more than expose a chat box. They define the open end of the coding-agent stack: terminal autonomy, editor extensions, open platforms, and provider flexibility.',
		closedTitle: 'Closed-Source Leaders',
		closedText:
			'These products shape the commercial frontier. They win through workflow gravity, editor polish, async delegation, or clearer paths from prompt to deployed software.',
		pricingTitle: 'Pricing Models That Actually Matter',
		pricingText:
			'The most expensive tool is often not the one with the highest sticker price. It is the one whose billing model your team only understands after dependency has already formed.',
		pricingPoints: [
			'BYOK feels cheap until your team lives on frontier models all day.',
			'Seat pricing helps procurement, but often hides premium requests or fair-use limits.',
			'Credit systems can be healthier than fake-unlimited plans because they expose cost honestly.',
			'Platform-native products win not just on model quality, but on workflow gravity.',
		],
		picksTitle: 'Fast Recommendations',
		picks: [
			'Pick Cursor if you want the smoothest premium AI-first editor.',
			'Pick OpenCode, Gemini CLI, or Codex CLI if terminal-first is the center of your workflow.',
			'Pick Zed if you want an open editor with a real agent story, not just an extension.',
			'Pick GitHub Copilot if your team already lives inside GitHub.',
			'Pick Devin when the product you want is async delegation, not just assistance.',
		],
		sourceTitle: 'Source of Truth',
		sourceText:
			'The long-form research still lives in the README files, where each product is tracked with more pricing context and source links.',
		sourcePrimary: 'English README',
		sourcePrimaryHref:
			'https://github.com/chan-yuu/awesome_coding_agent/blob/master/README.md',
		sourceSecondary: 'Chinese README',
		sourceSecondaryHref:
			'https://github.com/chan-yuu/awesome_coding_agent/blob/master/README.zh-CN.md',
		footer:
			'Built from the repository’s curated research. Pricing and stars were verified on April 22, 2026 and should be re-checked over time.',
		cardLabels: {
			highlight: 'Why it matters',
			pricing: 'Pricing posture',
			bestFor: 'Best for',
		},
	},
	'zh-CN': {
		langLabel: '简体中文',
		otherLangLabel: 'English',
		otherLangHref: '/awesome_coding_agent/',
		title: 'Coding Agent 全景图',
		subtitle:
			'一份带立场、带现实感、也带定价意识的赛道地图：终端代理、AI 原生编辑器、异步代理工程师，以及那些依然允许你掌控工作流的开放栈。',
		ctaPrimary: '阅读英文主 README',
		ctaPrimaryHref:
			'https://github.com/chan-yuu/awesome_coding_agent/blob/master/README.md',
		ctaSecondary: '查看仓库',
		ctaSecondaryHref: 'https://github.com/chan-yuu/awesome_coding_agent',
		metaTitle: 'Awesome Coding Agents',
		metaDescription: '一份双语、研究驱动的 coding agent 工具全景图。',
		eyebrow: '用更清晰的方式看懂开源与闭源 coding agent',
		snapshotTitle: '为什么要做成页面',
		snapshotText:
			'因为这个赛道已经不是“谁补全更像人”的问题，而是谁能真正读仓库、规划任务、调用工具、控制成本、并进入真实团队工作流的问题。',
		highlights: [
			{
				title: '15 个重点产品',
				text: '覆盖真正有代表性的开源与商业产品，而不是简单堆链接。',
			},
			{
				title: '把定价当成核心信号',
				text: 'Seat、Credit、BYOK、按量计费，在这里都不是附属信息。',
			},
			{
				title: '双语组织',
				text: '页面层适合传播，README 层继续承担深度研究和持续维护。',
			},
		],
		modeTitle: '赛道结构',
		modeText:
			'这个市场正在快速分化成几种明确形态：终端代理、AI 原生编辑器、异步代理工程师、开放平台，以及已经上升为产品战略的定价模型。',
		modes: ['Terminal', 'Editor', 'Async', 'Platform', 'Pricing'],
		signalTitle: '关键信号',
		signalCards: [
			{
				title: '开源势能正在放大',
				text: '这轮分发和实验速度，明显已经超出了旧时代“AI 助手插件”的规模。',
			},
			{
				title: '工作流重力比单点能力更重要',
				text: '真正的赢家不只是模型更强，而是更靠近 repo、PR、CI、deploy 和团队日常流程。',
			},
			{
				title: '计费方式已经变成产品战略',
				text: 'Seat、Credit、BYOK、异步算力预算，不再只是价格信息，而是工作方式的一部分。',
			},
		],
		brandWallTitle: '品牌墙',
		brandWallText:
			'这个市场已经开始出现明显的品牌形态。真正的赢家，正在从工具进化成品牌。',
		editorialTitle: 'Field Notes',
		editorialText:
			'这个市场已经不像插件货架，更像一个真正的内容产业和软件产业交叉带：终端派、AI 原生编辑器、平台型巨头、异步代理工程师都在争夺“软件到底怎么被生产”。',
		editorialQuote:
			'这轮真正赢下来的产品，不只是“更聪明”，而是更贴近软件工作真正发生的位置。',
		editorialCards: [
			{
				name: 'OpenCode',
				kicker: '开源势能',
				text: 'OpenCode 代表的是这一轮开源工具不再保守，而是直接冲击上限。',
			},
			{
				name: 'Cursor',
				kicker: '编辑器权力中心',
				text: 'Cursor 仍然在定义当一个高端 AI 原生编辑器做对了，会是什么感觉。',
			},
			{
				name: 'GitHub Copilot',
				kicker: '工作流重力',
				text: 'Copilot 的真正优势，不是模型，而是它站在 repo、review、CI 和 merge 附近。',
			},
			{
				name: 'Devin',
				kicker: '委托式软件劳动',
				text: '即使很多人不用 Devin，也仍然会通过 Devin 来理解“异步代理工程师”这个品类。',
			},
		],
		matrixTitle: '对比矩阵',
		matrixText:
			'用一眼能扫懂的方式看关键工具分别站在什么位置：开放性、界面、定价方式、自治程度。',
		mapTitle: '赛道坐标图',
		mapText:
			'当前市场可以沿两组张力来理解：控制感和便利性之间，以及“辅助”与“委托”之间。',
		atlasTitle: '定价图谱',
		atlasText:
			'计费方式已经不只是商业模式，它往往直接决定产品希望你怎么工作。',
		filterTitle: '交互式筛选',
		filterText:
			'按开源/闭源、界面形态或定价方式筛选，看看市场结构会如何重新组织。',
		axisXLow: '更可控',
		axisXHigh: '更省事',
		axisYLow: '偏辅助',
		axisYHigh: '偏委托',
		axisXLabel: '控制感 vs 便利性',
		axisYLabel: '辅助性 vs 委托性',
		openTitle: '开源阵营',
		openText:
			'这些项目之所以重要，不是因为它们开源，而是因为它们真的定义了开放端的 coding-agent 体验：终端自治、编辑器代理、开放平台、provider 灵活切换。',
		closedTitle: '闭源阵营',
		closedText:
			'这些产品决定了商业市场的竞争方式。它们靠工作流重力、编辑器质感、异步委托能力，或者从 prompt 到上线的一体化能力取胜。',
		pricingTitle: '真正该关注的定价逻辑',
		pricingText:
			'最贵的工具通常不是标价最高的那个，而是团队已经依赖它之后，才终于看懂它怎么收费的那个。',
		pricingPoints: [
			'BYOK 看起来便宜，但团队一旦重度使用前沿模型，账单会很快失控。',
			'Seat 计费利于采购，但经常把 premium requests 和 fair-use 限制藏在后面。',
			'Credit 模型未必差，很多时候反而更诚实，因为真实成本暴露得更清楚。',
			'平台原生产品的竞争力，不只在模型，更在工作流重力。',
		],
		picksTitle: '快速选择建议',
		picks: [
			'想要最成熟的高端 AI 原生编辑器，选 Cursor。',
			'如果你的核心工作流在终端，优先看 OpenCode、Gemini CLI、Codex CLI。',
			'想要开源编辑器内核加真实代理能力，优先看 Zed。',
			'团队已经活在 GitHub 里，就优先看 GitHub Copilot。',
			'真正想把任务委托出去做，而不只是被辅助，优先看 Devin。',
		],
		sourceTitle: '研究原文',
		sourceText:
			'更完整的长文分析仍然在 README 中，包括更详细的定价语境、来源链接和产品定位判断。',
		sourcePrimary: 'English README',
		sourcePrimaryHref:
			'https://github.com/chan-yuu/awesome_coding_agent/blob/master/README.md',
		sourceSecondary: '中文 README',
		sourceSecondaryHref:
			'https://github.com/chan-yuu/awesome_coding_agent/blob/master/README.zh-CN.md',
		footer:
			'页面内容基于仓库内研究整理。GitHub Star 与定价信息核验时间为 2026 年 4 月 22 日，后续应持续更新。',
		cardLabels: {
			highlight: '为什么值得看',
			pricing: '定价姿势',
			bestFor: '最适合',
		},
	},
} as const;
