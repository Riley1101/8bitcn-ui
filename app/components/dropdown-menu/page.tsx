import { OpenInV0Button } from "../open-in-v0-button";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";
import { Button } from "@/components/ui/8bit/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/8bit/dropdown-menu";

export default function DropdownMenuPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Dropdown Menu</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-button.json`}
          command={"pnpm dlx shadcn@canary add 8bit-button"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a menu to the user — such as a set of actions or functions —
        triggered by a button.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit dropdown menu component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-button" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-xs w-56 rounded-none overflow-clip">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-dropdown-menu.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Button } from "@/components/ui/8bit/dropdown-menu"`}</CodeSnippet>

      <CodeSnippet>{`<Button variant="outline">Button</Button>`}</CodeSnippet>
    </div>
  );
}
