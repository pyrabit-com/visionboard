# VisionBoard plugin

Connects Claude Code, Claude Desktop, Codex and other MCP clients to
[VisionBoard](https://visionboard.si)'s OAuth MCP server, so an AI agent can work from
approved direction and return changes for human review.

```bash
claude plugin marketplace add pyrabit-com/visionboard
claude plugin install visionboard@visionboard
```

Installing grants nothing. The first real use opens VisionBoard's sign-in, where
a person chooses the exact Vision access and capabilities. Approval, Vision
creation and Goal completion stay human decisions.

For a connector instead of a plugin, add `https://visionboard.si/api/mcp` as a custom
MCP server; VisionBoard handles sign-in and permissions.

## About this repository

This repository is generated from VisionBoard's product source and holds no
history of its own beyond the plugin. Please report issues and requests at
https://visionboard.si rather than as pull requests here, since changes made here
would be overwritten by the next release.

Published by Pyrabit UG (haftungsbeschränkt) — https://visionboard.si
