import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

const AvatarDemo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 gap-[30px_0]">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Avatar Component
        </h1>

        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="2xl">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="3xl">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="2xl">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="3xl">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="2xl">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="3xl">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-[0_20px] items-start">
          <Avatar shape="square" size="xs">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar shape="square" size="sm">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar shape="square" size="md">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar shape="square" size="lg">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar shape="square" size="xl">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar shape="square" size="2xl">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar shape="square" size="3xl">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs" shape="square">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="sm" shape="square">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="md" shape="square">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="lg" shape="square">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="xl" shape="square">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="2xl" shape="square">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
          <Avatar size="3xl" shape="square">
            <AvatarImage src="" />
            <AvatarFallback>Mohan</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs" shape="square">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="sm" shape="square">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="md" shape="square">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="lg" shape="square">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="xl" shape="square">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="2xl" shape="square">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="3xl" shape="square">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs" shape="square" status="active">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="sm" shape="square" status="away">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="md" shape="square" status="sleep">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="lg" shape="square" status="pin">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="xl" shape="square" status="pinned">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="2xl" shape="square" status="checked">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="3xl" shape="square" status="close">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs" status="active">
            <AvatarImage src="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar size="sm" status="away">
            <AvatarImage src="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar size="md" status="sleep">
            <AvatarImage src="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar size="lg" status="pin">
            <AvatarImage src="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar size="xl" status="pinned">
            <AvatarImage src="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar size="2xl" status="checked">
            <AvatarImage src="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar size="3xl" status="close">
            <AvatarImage src="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-[0_20px] items-start">
          <Avatar size="xs" status="active">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="sm" status="away">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="md" status="sleep">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="lg" status="pin">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="xl" status="pinned">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="2xl" status="checked">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar size="3xl" status="close">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>

        <div className=" flex  gap-[0_30px]">
          <div className=" flex flex-col gap-[20px_0]">
            <AvatarGroup size="xs" max={3}>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="sm" max={3}>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="md" max={3}>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="lg" max={3}>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="xl" max={3}>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="2xl" max={3}>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="3xl" max={3}>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
          <div className=" flex flex-col gap-[20px_0]">
            <AvatarGroup size="xs" max={3}>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="sm" max={3}>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="md" max={3}>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="lg" max={3}>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="xl" max={3}>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="2xl" max={3}>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="3xl" max={3}>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
          <div className=" flex flex-col gap-[20px_0]">
            <AvatarGroup size="xs" max={3}>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="sm" max={3}>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="md" max={3}>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="lg" max={3}>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="xl" max={3}>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="2xl" max={3}>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="3xl" max={3}>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        </div>
        <div className=" flex  gap-[0_30px]">
          <div className=" flex flex-col gap-[20px_0]">
            <AvatarGroup size="xs" max={3} label={true}>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="sm" max={3} label={true}>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="md" max={3} label={true}>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="lg" max={3} label={true}>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="xl" max={3} label={true}>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="2xl" max={3} label={true}>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="3xl" max={3} label={true}>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/99.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
          <div className=" flex flex-col gap-[20px_0]">
            <AvatarGroup size="xs" max={3} label={true}>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="sm" max={3} label={true}>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="md" max={3} label={true}>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="lg" max={3} label={true}>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="xl" max={3} label={true}>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="2xl" max={3} label={true}>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="3xl" max={3} label={true}>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback>Mohan</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
          <div className=" flex flex-col gap-[20px_0]">
            <AvatarGroup size="xs" max={3} label={true}>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xs">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="sm" max={3} label={true}>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="md" max={3} label={true}>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="lg" max={3} label={true}>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="xl" max={3} label={true}>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="2xl" max={3} label={true}>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <AvatarGroup size="3xl" max={3} label={true}>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar size="3xl">
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarDemo;
