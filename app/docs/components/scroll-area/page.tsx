import { Metadata } from "next"

import { buttonMetaData } from "@/lib/metadata"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"
import {
  ScrollAreaDemo,
  ScrollAreaHorizontalDemo,
} from "./_demo/scrollarea-demo"

export const metadata: Metadata = {
  title: "8bit ScrollArea",
  description:
    "Displays a button or a component that looks like a 8-bit button.",
  openGraph: {
    images: buttonMetaData,
  },
}

export default function ScrollbarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Button</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-scroll-area.json`}
          command={"pnpm dlx shadcn@canary add 8bit-scroll-area"}
        />
      </div>

      <p className="text-muted-foreground">
        Augments native scroll functionality for custom, cross-browser styling.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit scroll area component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-scroll-area" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ScrollAreaDemo />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-scroll-area.json`}
      />

      <h3 className="text-lg font-bold mt-10">Horizontal Scrolling</h3>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit scroll area component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-scroll-area" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ScrollAreaHorizontalDemo />
        </div>
      </div>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { ScrollArea } from "@/components/ui/scroll-area"`}</CodeSnippet>

      <CodeSnippet>{`<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>`}</CodeSnippet>
    </div>
  )
}
