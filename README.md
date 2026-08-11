# 🚀 AgentDock

**AgentDock** is a modular AI agent runtime built with **Bun and TypeScript** for running AI-powered workflows through multiple interaction modes.

It provides a unified environment for interacting with AI agents through the terminal and Telegram, with support for **planning, tool execution, approvals, web research, and multi-step agent workflows**.

---

## ✨ Features

### 🤖 Agent Mode

Run autonomous agent workflows capable of breaking down tasks, selecting tools, executing actions, and presenting results.

- Agent orchestration
- Tool execution
- Action tracking
- Approval workflow
- Diff-based changes
- Multi-step execution

### 💬 Ask Mode

Interact with AgentDock in a direct question-and-answer workflow for tasks that don't require a full autonomous agent execution loop.

### 🧠 Plan Mode

Create structured plans before executing complex tasks.

- Task planning
- Plan selection
- Plan orchestration
- Web research tools
- Structured execution workflow

### 📱 Telegram Mode

Interact with AgentDock remotely through a Telegram bot.

- Telegram authentication
- Agent execution
- Approval sessions
- Plan sessions
- Message handlers
- User authorization

### 🌐 Web Research

AgentDock integrates with **Firecrawl** to provide web-based research capabilities for agent workflows.

### 🔌 OpenRouter Support

AgentDock uses the AI SDK with the OpenRouter provider, allowing the configured model to be selected through environment variables.

---

## 🏗️ Architecture

At a high level, AgentDock is organized into four major layers:

```text
                    ┌─────────────────────┐
                    │      User           │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌───────────┐    ┌───────────┐   ┌────────────┐
        │    CLI    │    │   Agent   │   │  Telegram  │
        │    TUI    │    │   Mode    │   │    Mode    │
        └─────┬─────┘    └─────┬─────┘   └──────┬─────┘
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                     ┌──────────────────┐
                     │   Orchestrator   │
                     └────────┬─────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
          ┌──────────┐  ┌──────────┐  ┌──────────┐
          │   LLM    │  │  Tools   │  │ Approval │
          └──────────┘  └──────────┘  └──────────┘
                │             │
                ▼             ▼
          ┌──────────┐  ┌────────────┐
          │ OpenRouter│  │ Firecrawl │
          └──────────┘  └────────────┘
```

---

## 🧩 Project Structure

```text
AgentDock/
│
├── ai/
│   ├── ai.config.ts       # AI/provider configuration
│   └── index.ts            # AI layer exports
│
├── modes/
│   ├── agent/
│   │   ├── action-tacker.ts
│   │   ├── agent-tools.ts
│   │   ├── approval.ts
│   │   ├── diff-view.ts
│   │   ├── orchestrator.ts
│   │   ├── tool-executor.ts
│   │   └── types.ts
│   │
│   ├── ask/
│   │   └── orchestrator.ts
│   │
│   ├── plan/
│   │   ├── orchestrator.ts
│   │   ├── planner.ts
│   │   ├── selection.ts
│   │   ├── types.ts
│   │   └── web-tools.ts
│   │
│   ├── telegram/
│   │   ├── agent-run.ts
│   │   ├── approval-session.ts
│   │   ├── auth.ts
│   │   ├── constants.ts
│   │   ├── handlers.ts
│   │   ├── index.ts
│   │   ├── plan-session.ts
│   │   └── text.ts
│   │
│   └── cli.ts
│
├── tui/
│   ├── terminal-md.ts
│   └── wakeup.ts
│
├── index.ts               # Application entry point
├── package.json
├── bun.lock
├── tsconfig.json
├── .env.example
└── README.md
```

---

## 🛠️ Tech Stack

| Technology          | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| **Bun**             | JavaScript/TypeScript runtime and package management |
| **TypeScript**      | Application development                              |
| **Vercel AI SDK**   | AI model interaction                                 |
| **OpenRouter**      | LLM provider                                         |
| **Firecrawl**       | Web research and crawling                            |
| **Telegraf**        | Telegram bot integration                             |
| **Commander**       | CLI command handling                                 |
| **Clack**           | Interactive terminal prompts                         |
| **Marked**          | Markdown processing                                  |
| **Marked Terminal** | Terminal Markdown rendering                          |
| **Chalk**           | Terminal styling                                     |
| **Diff**            | Diff generation and handling                         |
| **Figlet**          | Terminal branding                                    |

---

## 📋 Prerequisites

Before running AgentDock, install:

- [Bun](https://bun.sh/)
- An **OpenRouter API key**
- A **Firecrawl API key** if using web research functionality
- A **Telegram Bot Token** if using Telegram mode

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/its-arunchauhan/AgentDock.git
cd AgentDock
```

Install dependencies:

```bash
bun install
```

---

## 🔐 Configuration

Create your environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Configure the required variables:

```env
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_DEFAULT_MODEL=openrouter/free

FIRECRAWL_API_KEY=your_firecrawl_api_key

TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_USER_ID=your_telegram_user_id
```

### Environment Variables

| Variable                   | Description                        |
| -------------------------- | ---------------------------------- |
| `OPENROUTER_API_KEY`       | API key used to access OpenRouter  |
| `OPENROUTER_DEFAULT_MODEL` | Default model used by AgentDock    |
| `FIRECRAWL_API_KEY`        | API key for Firecrawl web research |
| `TELEGRAM_BOT_TOKEN`       | Token for the Telegram bot         |
| `TELEGRAM_USER_ID`         | Authorized Telegram user ID        |

> Never commit `.env` or API keys to Git.

---

## 🚀 Running AgentDock

Start AgentDock using Bun:

```bash
bun run index.ts
```

Alternatively, because AgentDock exposes a CLI binary through `package.json`, you can use the project through its CLI interface after installation/configuration.

---

## 🎯 Interaction Modes

AgentDock currently contains four major modes:

```text
AgentDock
│
├── Agent
│   └── Autonomous task execution
│
├── Ask
│   └── Direct AI interaction
│
├── Plan
│   └── Structured task planning
│
└── Telegram
    └── Remote agent interaction
```

### Agent Mode

Agent mode is designed for tasks requiring multiple steps and tool interaction.

```text
User Request
     │
     ▼
Agent Orchestrator
     │
     ├── Understand task
     ├── Select tools
     ├── Execute actions
     ├── Request approval when required
     ├── Track actions
     └── Present result
```

### Plan Mode

Plan mode separates planning from execution:

```text
Task
 │
 ▼
Planner
 │
 ▼
Plan Selection
 │
 ▼
Plan Orchestrator
 │
 ▼
Tools / Web Research
 │
 ▼
Result
```

### Telegram Mode

Telegram provides a remote interface for interacting with AgentDock:

```text
Telegram User
      │
      ▼
Telegram Bot
      │
      ▼
Authentication
      │
      ▼
Telegram Handlers
      │
      ├── Agent Session
      ├── Plan Session
      └── Approval Session
      │
      ▼
AgentDock Runtime
```

---

## 🔎 Web Research

AgentDock integrates **Firecrawl** for web-based research.

The Firecrawl integration is currently located within the Plan mode:

```text
modes/
└── plan/
    └── web-tools.ts
```

This allows planning workflows to incorporate web research capabilities.

---

## 🔒 Approval System

AgentDock includes an approval mechanism for agent actions.

The approval system is particularly important for workflows where an agent may need permission before executing an action.

Relevant components include:

```text
modes/agent/approval.ts
modes/telegram/approval-session.ts
```

This allows the runtime to separate:

```text
Agent Decision
      │
      ▼
Approval Required?
   ┌──┴──┐
   │     │
  Yes    No
   │     │
   ▼     ▼
User    Execute
Approval
   │
   ▼
Execute
```

---

## 🖥️ Terminal Interface

AgentDock includes a terminal-oriented UI layer:

```text
tui/
├── terminal-md.ts
└── wakeup.ts
```

The project also uses libraries such as **Clack**, **Chalk**, **Marked**, and **Marked Terminal** to provide an interactive terminal experience.

---

## 🧪 Development

Install dependencies:

```bash
bun install
```

Run the application:

```bash
bun run index.ts
```

For development, modify the relevant mode under:

```text
modes/
```

AI/provider configuration can be found under:

```text
ai/
```

Terminal UI functionality can be found under:

```text
tui/
```

---

## 🗺️ Roadmap

AgentDock is actively evolving.

### Current

- [x] TypeScript/Bun foundation
- [x] CLI/TUI interface
- [x] Agent mode
- [x] Ask mode
- [x] Plan mode
- [x] Telegram mode
- [x] OpenRouter integration
- [x] Firecrawl integration
- [x] Agent tool execution
- [x] Approval workflows
- [x] Action tracking
- [x] Telegram authentication
- [x] Telegram agent/plan sessions

### Planned

- [ ] Expand agent tool ecosystem
- [ ] Improve agent memory
- [ ] Add more communication channels
- [ ] Improve observability and execution tracing
- [ ] Expand approval policies
- [ ] Add persistent agent state
- [ ] Improve configuration and provider management
- [ ] Add more built-in agent workflows
- [ ] Improve documentation and developer experience

---

## 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

```bash
git clone https://github.com/its-arunchauhan/AgentDock.git
cd AgentDock
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Install dependencies

```bash
bun install
```

### 4. Make your changes

Keep functionality organized according to the existing architecture.

For example:

```text
New agent functionality
        ↓
modes/agent/

New planning functionality
        ↓
modes/plan/

New Telegram functionality
        ↓
modes/telegram/

AI/provider changes
        ↓
ai/

Terminal UI changes
        ↓
tui/
```

### 5. Commit your changes

```bash
git add .
git commit -m "feat: add your feature"
```

### 6. Push your branch

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

---

## 🔐 Security

Never commit credentials or secrets.

Make sure the following remains ignored:

```text
.env
node_modules/
```

If you accidentally expose an API key, revoke it immediately and generate a new one.

---

## 📜 License

License information will be added as the project license is finalized.

---

## 👨‍💻 Author

**Arun Chauhan**

GitHub: [its-arunchauhan](https://github.com/its-arunchauhan)

---

## ⭐ Support

If you find AgentDock useful, consider starring the repository and contributing improvements.

**AgentDock — a modular home for AI agents.**
