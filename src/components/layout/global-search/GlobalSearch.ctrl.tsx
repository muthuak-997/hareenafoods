import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button";

export function GlobalSearch() {
  return (
    <InputGroup className="w-full lg:w-xs  lg:order-1">
      <InputGroupInput placeholder="Search Products..." />
      <InputGroupAddon align="inline-end">
        <Button size="xs" >Search</Button>
      </InputGroupAddon>
    </InputGroup>
  )
}