# VisionBoard plugin for Claude, Codex and MCP clients

Connect an AI agent to your approved strategic direction, and get its work back
as changes a person reviews.

VisionBoard is a Vision Intelligence Hub: one current, approved, permissioned
source of direction — goals, decisions, constraints, brand and product truth —
that people and AI systems act from. This plugin gives a connected agent read
access to that approved direction and a governed way to propose changes, without
ever letting it approve its own work.

```bash
claude plugin marketplace add pyrabit-com/visionboard
claude plugin install visionboard@visionboard
```

Prefer a connector? Add `https://visionboard.si/api/mcp` as a custom MCP server in
Claude, ChatGPT or any MCP-capable tool. Same contract, same sign-in.

## What the plugin does

- **Reads approved direction.** Current goals, decisions, constraints, product and brand truth, approved assets and Board composition — scoped to the Visions a person granted.
- **Writes only Drafts.** New notes, goals, documents, brand kits, products, images and Boards come back attributed and in Review. The agent never approves, publishes or deletes.
- **Keeps a project connected to its Vision.** At the start of a task it resolves which Vision the project belongs to, and asks rather than guessing when the answer is ambiguous.
- **Continues long-running Goals.** A person activates a Goal Run; the agent performs one bounded cycle per wake-up, records evidence, and stops for a human decision.
- **Brings the working rules with it.** The bundled skill tells the agent when to consult direction and how to close a loop — a bare connector gets the tools without those rules.

## Who this is for

Founders, product and strategy teams, agencies and consultants who want the AI
they already use — Claude, Claude Code, Codex, ChatGPT — to work from one agreed
direction instead of from whatever was pasted into the last prompt.

## Questions

**Does installing give an AI access to my data?**
No. Installing grants nothing. The first real use opens VisionBoard's sign-in,
where a person chooses the exact Visions and capabilities. Access is revocable
at any time, and every write stays attributed.

**Can the AI approve its own changes?**
No. Approval, Vision creation and marking a Goal done are human decisions the
contract does not let an agent cross. Work returns as an attributed Draft for
review.

**Which AI tools work with this?**
Claude Code and Claude Desktop install it as a plugin. Claude, ChatGPT and any
MCP-capable client can add `https://visionboard.si/api/mcp` as a connector. Codex
uses the same server.

**Do I need an API key?**
No. Sign-in uses OAuth with dynamic client registration and PKCE, so the client
registers itself and the person consents in a browser. There is no key to paste.

**Is it free?**
VisionBoard has a free plan with one active Vision; paid plans lift that. The
plugin itself costs nothing.

## Links

- Product: https://visionboard.si
- MCP endpoint: https://visionboard.si/api/mcp
- Security: https://visionboard.si/security
- Privacy: https://visionboard.si/data-protection
- Terms: https://visionboard.si/terms-of-use

## About this repository

This repository is generated from VisionBoard's product source and contains the
plugin only — never the application. Changes made here are overwritten by the
next release, so please raise issues and requests at https://visionboard.si rather
than as pull requests.

Published by Pyrabit UG (haftungsbeschränkt), https://visionboard.si
