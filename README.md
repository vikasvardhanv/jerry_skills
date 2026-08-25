# Comprehensive AI Agent Skills & Plugins Directory

This repository serves as an extensive, curated list of open-source AI agent skills, plugins, Model Context Protocol (MCP) servers, and framework-specific tools available across the internet. It is designed to help developers equip their autonomous AI agents with powerful "hands" to interact with the world.

---

## 1. Model Context Protocol (MCP) Servers
MCP is an open standard introduced by Anthropic that allows AI models to connect securely to local and remote external data sources and tools.

### Official & Core Reference Servers
*   **Brave Search:** Perform web searches and gather internet data.
*   **Filesystem:** Secure read/write access to local computer files.
*   **Git / GitHub:** Read repositories, create branches, and manage pull requests.
*   **Postgres / SQLite:** Execute raw SQL queries and analyze database schemas.
*   **Slack:** Read channel histories, send messages, and interact with workspaces.
*   **Google Drive:** Access and search files stored in Google Workspace.
*   **Puppeteer:** Headless browser automation for web scraping and interaction.

*Source:* [Model Context Protocol Server Registry](https://github.com/modelcontextprotocol/servers)

### Community MCP Servers
*   **Jira MCP:** Manage tickets, epics, and sprints.
*   **Linear MCP:** Interface with Linear issue tracking.
*   **Notion MCP:** Read and write to Notion databases and pages.
*   **Stripe MCP:** Access subscription, customer, and payment data.

*Source:* [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) / [Glama MCP Directory](https://glama.ai/mcp/servers)

---

## 2. General Agent Skill Libraries
These are standalone skill libraries and registries meant to be compatible with multiple agent frameworks (like Claude Code, Cursor, AutoGPT, etc.).

*   **Awesome Agent Skills:** A massive curated collection of over 1,000+ modular skills for AI coding agents. Includes integrations for DevOps, cloud management, and local system operations. ([GitHub](https://github.com/VoltAgent/awesome-agent-skills))
*   **Claude Skills:** A popular library featuring 180+ generic skills and 250+ Python-specific tools designed originally for Claude but adaptable to other LLMs. Includes file parsing, linting, and AST manipulation. ([GitHub](https://github.com/alirezarezvani/claude-skills))
*   **OpenAgentSkill:** An indexed, ranked registry that provides trust scores, security audit notes, and one-line installation commands for production-grade agent skills. ([Website](https://openagentskill.com/))
*   **AI-Research-SKILLs:** A specialized toolkit for AI researcher agents. Covers the entire academic lifecycle: PDF scraping, literature surveys, arXiv integrations, and experiment execution tracking. ([GitHub](https://github.com/Orchestra-Research/AI-Research-SKILLs))

---

## 3. LangChain Tools & Toolkits
LangChain defines "Tools" as functions that LLMs can call. Toolkits are logically grouped sets of tools.

### Built-in LangChain Toolkits
*   **SQLDatabaseToolkit:** Execute queries, check syntax, and describe tables.
*   **RequestsToolkit:** Make HTTP GET, POST, PATCH, PUT, and DELETE requests.
*   **OpenAPIToolkit:** Automatically consume OpenAPI/Swagger specifications and turn endpoints into callable tools.
*   **VectorStoreInfoTool:** Query vector databases for Retrieval-Augmented Generation (RAG).
*   **PlayWrightBrowserToolkit:** Navigate web pages, click elements, and extract text.
*   **GmailToolkit:** Read, search, draft, and send emails via Google APIs.

### Common Individual Tools
*   **Wikipedia / Wikidata:** Fetch summaries and factual data.
*   **ArXiv:** Search and download academic papers.
*   **Wolfram Alpha:** Perform complex mathematical and scientific calculations.
*   **DuckDuckGo Search:** Free, unauthenticated web search tool.
*   **ShellTool:** (Use with caution) Allows the agent to run arbitrary shell commands.
*   **PythonREPLTool:** Allows the agent to execute generated Python code in a safe sandbox.

*Source:* [LangChain Tools Integrations](https://python.langchain.com/docs/integrations/tools/)

---

## 4. CrewAI Tools
CrewAI focuses on multi-agent collaboration. Its tools are designed for agents assuming specific personas (e.g., "Senior Researcher", "QA Engineer"). CrewAI natively supports both its own tools and LangChain tools.

### Core CrewAI Tools
*   **SerperDevTool:** High-quality Google Search integration (requires API key).
*   **ScrapeWebsiteTool:** Extracts structured text from any given URL.
*   **DirectoryReadTool / FileReadTool:** Recursively read local directories and parse text/JSON/CSV/PDF files.
*   **MDXSearchTool:** Semantic search across Markdown/MDX documentation.
*   **PGSearchTool / MySQLSearchTool:** Semantic search over relational databases using vector embeddings.
*   **GithubSearchTool:** Search through PRs, issues, and code within a GitHub repository.
*   **YoutubeChannelSearchTool / YoutubeVideoSearchTool:** Transcribe and search through YouTube content.
*   **CodeDocsSearchTool:** Specifically optimized for indexing and querying software documentation.

*Source:* [CrewAI Tools GitHub Repository](https://github.com/crewAIInc/crewAI-tools)

---

## 5. Specialized Open-Source Plugin Ecosystems
*   **ChatGPT Retrieval Plugins:** Open-source implementations for connecting LLMs to personal or organizational data (e.g., Pinecone, Weaviate, Milvus).
*   **LlamaHub (LlamaIndex):** An extensive repository of data loaders (reading from Slack, Discord, Google Drive, Notion) and tools (agentic actions) specifically built for LlamaIndex architectures.
*   **Composio Skills:** A platform offering authenticated connections to 100+ APIs (Salesforce, Hubspot, GitHub) mapped as generic skills that agents can use out-of-the-box.

---

## Conclusion
The landscape of AI agent skills is rapidly standardizing around protocols like MCP and frameworks like LangChain/CrewAI. By leveraging these open-source tools, developers can significantly expand the autonomous capabilities of their AI agents without reinventing the wheel.
