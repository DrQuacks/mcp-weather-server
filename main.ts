import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from "zod";

const server = new McpServer({
    name: "Weather Server",
    version: "1.0.0"
  });

server.tool(
    'get-weather',
    'Tool to get weather for a city',
    {
        city:z.string().describe("The name of a city to get weather for")
    },
    async ({city}) => {
        return {
            content: [
                {
                    type:"text",
                    text:`The weather in ${city} is sunny`
                }
            ]
        }
    }
)

const transport = new StdioServerTransport()
server.connect(transport)