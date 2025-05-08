"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const getV0Url = (path: "start" | "dashboard") => {
  const registryUrl = encodeURIComponent(
    `https://registry-demo-zendesk.vercel.app/r/${path}.json`,
  );
  const title = encodeURIComponent(
    `Zendesk Garden ${path.charAt(0).toUpperCase() + path.slice(1)}`,
  );

  const prompt = encodeURIComponent(
    `A ${path} implementation with Zendesk Garden preloaded.
  Use the Zendesk Garden with components imported from @zendeskgarden/react-* before using shadcn/ui. Use lucide-react for icons.`,
  );

  const v0Url = `https://v0.dev/chat/api/open?title=${title}&prompt=${prompt}&url=${registryUrl}`;
  return v0Url;
};

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-12">
        <section>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-[var(--zds-text-stronger)]">
                    Starting Kit
                  </CardTitle>
                  <CardDescription>
                    Opens a blank app with the Zendesk Garden theme
                    preconfigured.
                  </CardDescription>
                </div>
                <a href={getV0Url("start")} target="_blank" rel="noreferrer">
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              </div>
            </CardHeader>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-[var(--zds-text-stronger)]">
                    Dashboard
                  </CardTitle>
                  <CardDescription>
                    Opens a complete dashboard implementation with sidebar,
                    stats cards, charts, and tables.
                  </CardDescription>
                </div>
                <a
                  href={getV0Url("dashboard")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className={`h-[800px] w-full rounded-md border border-border overflow-hidden`}
              >
                <iframe
                  src="/dashboard"
                  className="w-full h-full"
                  title="Dashboard"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
