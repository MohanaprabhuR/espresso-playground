import { Spacer } from "@/components/ui/spacer";

const SpacerDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Spacer Component
        </h1>
        <div className="flex flex-col justify-center items-center   mx-auto gap-[50px]">
          <div className="flex w-full flex-col gap-[30px]">
            <h3>Horizontal Spacer</h3>
            <div>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xs
              </div>
              <Spacer size="xs"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xs
              </div>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                sm
              </div>
              <Spacer size="sm"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                sm
              </div>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                md
              </div>
              <Spacer size="md"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                md
              </div>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                lg
              </div>
              <Spacer size="lg"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                lg
              </div>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xl
              </div>
              <Spacer size="xl"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xl
              </div>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                2xl
              </div>
              <Spacer size="2xl"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                2xl
              </div>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                3xl
              </div>
              <Spacer size="3xl"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                3xl
              </div>
            </div>
          </div>
          <div className="flex w-full  h-full  gap-x-[30px] items-center">
            <h3>Vertical Spacer</h3>
            <div className="flex">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xs
              </div>
              <Spacer orientation="vertical" size="xs"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xs
              </div>
            </div>
            <div className="flex">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                sm
              </div>
              <Spacer orientation="vertical" size="sm"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                sm
              </div>
            </div>
            <div className="flex">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                md
              </div>
              <Spacer orientation="vertical" size="md"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                md
              </div>
            </div>
            <div className="flex">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                lg
              </div>
              <Spacer orientation="vertical" size="lg"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                lg
              </div>
            </div>
            <div className="flex">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xl
              </div>
              <Spacer orientation="vertical" size="xl"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                xl
              </div>
            </div>
            <div className="flex">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                2xl
              </div>
              <Spacer orientation="vertical" size="2xl"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                2xl
              </div>
            </div>
            <div className="flex">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                3xl
              </div>
              <Spacer orientation="vertical" size="3xl"></Spacer>
              <div className="bg-primary text-primary-foreground p-4 rounded">
                3xl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacerDemo;
