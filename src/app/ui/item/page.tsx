import React from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  BadgeCheckIcon,
  ChevronRightIcon,
  Plus,
  ShieldAlertIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import Image from "next/image";

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
];

const ItemDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
          Item Component
        </h1>
        <div className="flex flex-col gap-[30px_0] w-full max-w-[500px] mx-auto">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Basic Item</ItemTitle>
              <ItemDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline" size="sm" asChild>
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  A new update is available for the app. Update now to enjoy new
                  features and improvements.
                </ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
          <Item variant="outline" size="sm">
            <ItemHeader>Item Header</ItemHeader>
            <ItemMedia />
            <ItemContent>
              <ItemTitle>Item</ItemTitle>
              <ItemDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </ItemDescription>
            </ItemContent>
            <ItemActions />
            <ItemFooter>Item Footer</ItemFooter>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>
                Standard styling with subtle background and borders.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>
                Outlined style with clear borders and transparent background.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>
                Subdued appearance with muted colors for secondary content.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <ShieldAlertIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Security Alert</ItemTitle>
              <ItemDescription>
                New login detected from unknown device.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Review
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Evil Rabbit</ItemTitle>
              <ItemDescription>Last seen 5 months ago</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                variant="outline"
                className="rounded-full"
                aria-label="Invite"
              >
                <Plus className="size-4" />
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia>
              <AvatarGroup size="2xl">
                <Avatar size="lg">
                  <AvatarImage
                    src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarImage
                    src="https://mockmind-api.uifaces.co/content/human/81.jpg"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarImage
                    src="https://mockmind-api.uifaces.co/content/human/82.jpg"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>No Team Members</ItemTitle>
              <ItemDescription>
                Invite your team to collaborate on this project.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Invite
              </Button>
            </ItemActions>
          </Item>
          <ItemGroup className="gap-4">
            {music.map((song) => (
              <Item key={song.title} variant="outline" asChild role="listitem">
                <a href="#">
                  <ItemMedia variant="image">
                    <Image
                      src={`https://avatar.vercel.sh/${song.title}`}
                      alt={song.title}
                      width={32}
                      height={32}
                      className="object-cover grayscale"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="line-clamp-1">
                      {song.title} -{" "}
                      <span className="text-muted-foreground">
                        {song.album}
                      </span>
                    </ItemTitle>
                    <ItemDescription>{song.artist}</ItemDescription>
                  </ItemContent>
                  <ItemContent className="flex-none text-center">
                    <ItemDescription>{song.duration}</ItemDescription>
                  </ItemContent>
                </a>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </div>
    </div>
  );
};

export default ItemDemo;
