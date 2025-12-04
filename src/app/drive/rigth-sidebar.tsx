"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CircleAlert, Clock, MessageCircle } from "lucide-react";

const RightDriveTableSidebar = () => {
  return (
    <div className="px-2.5 py-3.5 border-l h-[calc(100vh-50px)]">
      <ButtonGroup orientation="vertical" destructive>
        <Button iconOnly variant="ghost">
          <CircleAlert />
        </Button>
        <Button iconOnly variant="ghost">
          <MessageCircle />
        </Button>
        <Button iconOnly variant="ghost">
          <Clock />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default RightDriveTableSidebar;
