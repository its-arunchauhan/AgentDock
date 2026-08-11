# AgentDock Application

## Overview
AgentDock is a TypeScript-based application designed to streamline task management and automation workflows. This repository contains multiple related components and utilities for building and managing interactive command-line tools.

## Project Structure
```
AgentDock/
├── ai/              # AI integration components
├── index.ts         # Main application entry point
├── modus/           # Experimentation modules
├── modes/           # UI modes and configurations
├── package.json     # Project dependencies and scripts
├── tui/             # Terminal user interface components
├── todo-app/        # Primary task management application
├── todo-list-app/   # Alternative task management interface
└── tsconfig.json    # TypeScript configuration
```

## Getting Started
1. Install dependencies using `npm install`
2. Configure development environment via `tsconfig.json`
3. Run primary application with `npm run start:todo`
4. Access UI components through the terminal interface

## Features
- **Task Automation**: Built-in tools for managing task queues
- **UI Customization**: Multiple interface modes in `/modes` directory
- **Extensibility**: Modular architecture in `/ai` and `/tui` directories
- **Debugging Tools**: Experimental modules in `/modus` directory

## Development
For detailed information about specific components within the project structure, please refer to:
- Application logic: `/index.ts`
- Task management: `/todo-app` and `/todo-list-app`
- UI components: `/tui`
- Mode configurations: `/modes`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.